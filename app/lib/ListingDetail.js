'use client';

import React, { useState, useEffect, Suspense, useMemo } from 'react';
import {
    Card,
    Breadcrumb,
    Row,
    Col,
    Button,
    Divider,
    Spin,
    Input,
    Tabs,
    Checkbox,
    Tooltip,
} from 'antd';
import {
    bytesToSize,
    getExplorerUrl,
    humanError,
    ipfsUrl,
    isEmpty,
} from '../util';
import { ACTIVE_CHAIN, CHAIN_MAP, MAX_FILE_SIZE_BYTES } from '../constants';
import RenderObject from '../lib/RenderObject';

import {
    assertTruth,
    getMetadata,
    requestAccess,
    updateVersion,
    validateVersion,
} from '../util/appContract';
import { useAccount, useNetwork } from 'wagmi';
import { useEthersSigner } from '../hooks/useEthersSigner';
import ConnectButton from './ConnectButton';
import { FileDrop } from './FileDrop';
import TextArea from 'antd/es/input/TextArea';
import { InfoCircleOutlined } from '@ant-design/icons';
import { uploadFiles } from '@/util/stor';

const ListingDetail = ({ uploadId }) => {
    const [loading, setLoading] = useState(false);
    const [rpcLoading, setRpcLoading] = useState(false);
    const [result, setResult] = useState();
    const [files, setFiles] = useState([]);
    const [validateFiles, setValidateFiles] = useState([]);
    const [activeTab, setActiveTab] = useState('1');
    const [shouldUpload, setShouldUpload] = useState(true);
    const [notes, setNotes] = useState('');
    const [error, setError] = useState();
    const [data, setData] = useState();
    console.log('upload', uploadId);

    const { address } = useAccount();
    const { chain } = useNetwork();
    const signer = useEthersSigner({ chainId: chain?.id || ACTIVE_CHAIN.id });

    const isOwner = data?.owner === address;

    const breadcrumbs = [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: data?.name,
            href: `/upload/${uploadId}`,
        },
    ];

    function setRpcPending() {
        setError();
        setRpcLoading(true);
        setResult();
    }

    async function newVersion() {
        setRpcPending();
        try {
            let cid = ''; // TODO: add cid.
            if (shouldUpload) {
                cid = await uploadFiles(files);
            }
            const dataHash = files[0].dataHash;
            const res = await updateVersion(
                signer,
                uploadId,
                dataHash,
                cid,
                notes || ''
            );
            console.log('update version', res);
            setResult({
                uploaded: true,
                cid,
                notes,
            });
        } catch (e) {
            console.log('error updating version', e);
            // alert('Error requesting access: ' + humanError(e));
            setError(humanError(e));
        } finally {
            try {
                await getMetadata(signer, uploadId);
            } catch {
                // ignore
            }
            setRpcLoading(false);
        }
    }

    async function validate() {
        setRpcPending();
        try {
            const dataHash = validateFiles[0].dataHash;
            const res = await validateVersion(signer, uploadId, dataHash);
            console.log('assert', res);
            setResult(res);
        } catch (e) {
            setError(humanError(e));
        } finally {
            setRpcLoading(false);
        }
    }

    async function getData() {
        setLoading(true);

        try {
            const d = await getMetadata(signer, uploadId);
            d['contract'] = uploadId;
            console.log('got data', d);
            setData(d);
        } catch (e) {
            console.error('error getting data', e);
            alert('Error getting data: ' + humanError(e));
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const checkData = uploadId && signer;
        // console.log("checkData", checkData, uploadId, signer);
        if (checkData) {
            getData();
        }
    }, [uploadId, signer]);

    const cardTitle = useMemo(() => {
        if (data) {
            return 'Found upload: ' + data.name;
        } else if (error) {
            return 'Error: ' + humanError(error);
        } else {
            return 'Loading...';
        }
    }, [error, data]);

    if (!signer) {
        return (
            <Card title="Listing details">
                <p className="bold">Connect your wallet to view upload page.</p>
                <br />
                <ConnectButton connectOnMount />
            </Card>
        );
    }

    const tabItems = [
        {
            key: '1',
            label: 'Validate',
            children: (
                <div>
                    <FileDrop
                        files={validateFiles}
                        setFiles={(files) => setValidateFiles(files)}
                    />
                    <Button
                        type="dashed"
                        onClick={validate}
                        loading={rpcLoading}
                        disabled={rpcLoading || isEmpty(validateFiles)}
                    >
                        Check existence
                    </Button>
                </div>
            ),
        },
    ];

    if (isOwner) {
        tabItems.push({
            key: '2',
            label: 'Upload new version (Owner)',
            children: (
                <div>
                    <h4>
                        Note: File must be under{' '}
                        {bytesToSize(MAX_FILE_SIZE_BYTES)} for testnet.
                    </h4>
                    <br />
                    <p className="bold">
                        Also upload to IPFS?&nbsp;
                        <Checkbox
                            type="checkbox"
                            checked={shouldUpload}
                            onChange={(e) => setShouldUpload(e.target.checked)}
                        />
                        &nbsp;
                        <Tooltip
                            className="pointer"
                            title="If unchecked, this data snapshot can be validated, but not accessed"
                        >
                            <InfoCircleOutlined />
                        </Tooltip>
                    </p>
                    <br />
                    <FileDrop
                        files={files}
                        setFiles={(files) => setFiles(files)}
                    />

                    <TextArea
                        rows={4}
                        placeholder="Add notes about this version"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />

                    <Button
                        type="primary"
                        onClick={newVersion}
                        loading={rpcLoading}
                        disabled={!isOwner || rpcLoading || isEmpty(files)}
                    >
                        Update version
                    </Button>
                </div>
            ),
        });
    }

    return (
        <div className="upload-detail-page">
            <Breadcrumb items={breadcrumbs} />
            <br />
            <Card
                title={
                    <span
                        style={{
                            color:
                                cardTitle.indexOf('Found') !== -1
                                    ? 'green'
                                    : 'error-text',
                        }}
                    >
                        {cardTitle}
                    </span>
                }
            >
                {loading && <p>Loading...</p>}

                <Row
                    gutter={{
                        xs: 8,
                        sm: 16,
                        md: 24,
                        lg: 32,
                    }}
                >
                    <Col span={12}>
                        {/* <p>Contract Address: {uploadId}</p> */}
                        <RenderObject json={data} />
                        <p>
                            <a
                                href={getExplorerUrl(ACTIVE_CHAIN, uploadId)}
                                target="_blank"
                            >
                                View contract
                            </a>
                        </p>
                        {/* {JSON.stringify(data, null, 2)} */}
                    </Col>
                    <Col span={12}>
                        <div>
                            <Tabs
                                activeKey={activeTab}
                                tabPosition="top"
                                size="large"
                                onChange={(key) => {
                                    console.log('key', key);
                                    setError(undefined);
                                    setActiveTab(key);
                                }}
                                items={tabItems}
                                style={{ height: 'auto' }}
                            />
                        </div>

                        {rpcLoading && (
                            <div>
                                <br />
                                <Spin size="large" />
                            </div>
                        )}
                        <br />
                        {result && (
                            <div>
                                <RenderObject title="Result" json={result} />
                            </div>
                        )}

                        {error && <p className="error-text">Error: {error}</p>}
                    </Col>
                </Row>
                {/* {JSON.stringify(data)} */}
            </Card>
        </div>
    );
};

export default ListingDetail;
