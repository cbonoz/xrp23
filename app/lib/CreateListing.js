'use client'

import React, { useEffect, useState } from "react";
import { Button, Input, Row, Col, Steps, Result, Divider, Checkbox, Card, Image, Tooltip, Select, Switch } from "antd";
import { uploadUrl, ipfsUrl, getExplorerUrl, humanError, isEmpty, bytesToSize, } from "../util";
import { uploadFiles } from "../util/stor";
import TextArea from "antd/lib/input/TextArea";
import { EXAMPLE_ITEM, ACTIVE_CHAIN, APP_NAME, CHAIN_MAP, MAX_FILE_SIZE_BYTES } from "../constants";
import { FileDrop } from "./FileDrop";
import { deployContract } from "../util/appContract";
import { useAccount, useNetwork } from "wagmi";
import ConnectButton from "./ConnectButton";
import { useEthersSigner } from '../hooks/useEthersSigner'
import { InfoCircleOutlined } from '@ant-design/icons';

function CreateListing() {
  const { address } = useAccount()
  const { chain } = useNetwork()

  const signer = useEthersSigner({ chainId: chain?.id })
  const activeChain = CHAIN_MAP[chain?.id] || ACTIVE_CHAIN
  //   useEffect(() => {
  //     const networkId = network?.chain?.id
  //     console.log('network', network)
  //     if (networkId) {
  //       refetch()
  //     }
  //   }, [network, account])

  const [data, setData] = useState({})
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState();

  const setDemo = () => setData({ ...EXAMPLE_ITEM })

  const updateData = (key, value) => {
    setData({ ...data, [key]: value });
  };

  const getActiveError = (data) => {
    if (!data.name || !data.description) {
      return "Please provide a name and description for the upload.";
    }
    if (isEmpty(data.files)) {
      return "Please provide a data file to track";
    }
    if (!signer) {
      return `Please connect a valid ${activeChain.name} wallet`;
    }


    return undefined
  };

  const errMessage = getActiveError(data);

  const create = async () => {
    setError(undefined);

    if (errMessage) {
      setError(errMessage)
      return;
    }

    setLoading(true);
    const body = { ...data };
    if (!isEmpty(body.keywords)) {
      body['description'] = `${body.description}} | {${body.keywords}}}`
    }

    // Format files for upload.
    const files = (body.files || []).map((x) => {
      return x;
    });

    let res = { ...data };

    try {
      // 1) Create files/metadata to ipfs.
      let cid = data.cid ?? ''
      const file = files[0]
      res['fileName'] = file.name
      res['dataHash'] = file.dataHash
      if (data.shouldUpload) {
        cid = await uploadFiles(
          files,
          res,
        );
      }

      // 2) deploy contract with initial metadata
      let contract;

      // get hash of file bytes
      contract = await deployContract(signer, data.name, data.description, res.dataHash, cid, "");
      res["cid"] = cid;
      res["contract"] = contract.address;
      res["uploadUrl"] = uploadUrl(contract.address || cid);
      res["contractUrl"] = getExplorerUrl(activeChain, contract.address);

      // 3) create table entry
      const upload = { ...data } // TODO: set all fields.
      upload['address'] = contract.address;

      // tableland
      // try {
      //   const uploadResult = createUpload(provider.signer, upload)
      // } catch (e) {
      //   console.error('error creating db upload', e)
      // }

      // Result rendered after successful doc upload + contract creation.
      setResult(res);
    } catch (e) {
      console.error("error creating datatrace request", e);
      setError(humanError(e));
    } finally {
      setLoading(false)
    }
  };

  const openTab = (url) => {
    window.open(url, "_blank");
  };

  const getStep = () => {
    if (!!result) {
      return 2;
    } else if (!errMessage) {
      return 1;
    }
    return 0;
  };

  const resultOptions = [
    <Button type="primary" onClick={() => openTab(result?.contractUrl)} target="_blank">
      View created contract
    </Button>]

  if (result?.cid) {
    resultOptions.push(<Button type="dashed" onClick={() => openTab(ipfsUrl(result.cid))} target="_blank">
      View files
    </Button>)
  }


  return (
    <div>
      <Row>
        <Col span={24}>
          <div className="centered">
            <Image src="logo.png" alt="DataTrace Logo" width={180} height={37} />
            <h3>Create new data upload</h3>
            <br />
            <br />
          </div>
        </Col>
      </Row>

      <Row>

        <Col span={16}>

          <div className="create-form white boxed">
            {!result && <>
              <h2 className="vertical-margin">Upload Information</h2>
              <a href="#" onClick={e => {
                e.preventDefault()
                setDemo()
              }}>Set demo values</a>
              <Divider />


              <h4>Name</h4>
              <Input
                placeholder="Name of upload"
                value={data.name}
                onChange={(e) => updateData("name", e.target.value)}
              />
              <br />
              <br />
              <h4>Description</h4>
              <TextArea
                aria-label="Description"
                onChange={(e) => updateData("description", e.target.value)}
                placeholder="Add any additional description on the upload"
                prefix="Description"
                value={data.description}
              />
              <br />
              <br />
              <h4>Address</h4>
              <Input
                placeholder={'Your address'}
                value={address || data.createdBy}
                disabled
                onChange={(e) => updateData("createdBy", e.target.value)}
              />

              <br />
              <br />

              {/* Checkbox for shouldUpload */}
              <br />
              <br />
              <h4>Note: File must be under {bytesToSize(MAX_FILE_SIZE_BYTES)} for testnet.</h4>
              <br />
              <p className="bold">Also upload to IPFS?&nbsp;

                <Checkbox
                  type="checkbox"
                  checked={data.shouldUpload}
                  onChange={(e) => updateData("shouldUpload", e.target.checked)}
                />&nbsp;
                <Tooltip className='pointer' title="If unchecked, this data snapshot can be validated, but not accessed">
                  <InfoCircleOutlined />
                </Tooltip>
              </p>
                <br />
              <Card title="Upload data file">

                {/* <h3 className="vertical-margin">Upload dataset(s) for purchaseable collection</h3> */}
                <FileDrop
                  files={data.files || []}
                  setFiles={(files) => updateData("files", files)}
                />

              </Card>

              {/* TODO: add configurable amount of items */}

              <div>

                <Divider />
                {address && <Button
                  type="primary"
                  className="standard-button"
                  onClick={create}
                  disabled={loading || errMessage}
                  loading={loading}
                  size="large"
                >
                  Create Upload
                </Button>}

                {!address && <ConnectButton text="Connect wallet to continue" />}

                {!error && !result && loading && (
                  <span className="italic">&nbsp;Deploying a DataTraceContract. Confirmation may take a few moments.</span>
                )}

              </div>

              <br />
              <br />
            </>}
            {error && <div className="error-text">Error: {error}</div>}
            {result && (<div>
              <Result status="success"
                title="Upload created! 🎉"
                subTitle="Access your hosted encrypted data and shareable url below"
                extra={resultOptions}
              />
              <div>

                <br />
                <br />
                <div>
                  <h5>Use this page to audit your file's history:</h5>
                  <br />
                  <a href={result.uploadUrl} target="_blank">
                    View upload page
                  </a>
                </div>
              </div>
            </div>
            )}
          </div>
        </Col >
        <Col span={1}></Col>
        <Col span={7}>
          <div className="white boxed">
            <Steps
              className="standard-margin"
              direction="vertical"
              size="small"
              items={[{
                title: 'Fill in fields',
                description: 'Upload data and specify access conditions.'
              }, {
                title: `Create ${APP_NAME} upload`,
                description: <span>Deploys a <a href="https://github.com/cbonoz/xrp23/blob/main/contracts/contracts/DataTraceContract.sol" target="_blank">DataTraceContract</a> smart contract and creates an access page for the dataset</span>,
              }, {
                title: 'Share URL',
                description: 'Share the generated access url for your data',
              }]}
              current={getStep()}
            >
            </Steps>
          </div>
        </Col>
      </Row >
    </div >
  );
}

export default CreateListing;
