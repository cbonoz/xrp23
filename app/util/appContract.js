import { ethers } from "ethers";
import { DATATRACE_CONTRACT } from "./metadata";
import { formatDate } from ".";

export async function deployContract(signer, uploadName, description, bytes, cid, notes) {
    // Deploy contract with ethers
    const factory = new ethers.ContractFactory(
        DATATRACE_CONTRACT.abi,
        DATATRACE_CONTRACT.bytecode,
        signer
    );

    const options = {
        // gasLimit: 3000000,
        // gasPrice: 10000000000,
    }
    const contract = await factory.deploy(uploadName, description, bytes, cid, notes);
    // log
    console.log("Deploying contract...", uploadName, description, bytes, cid, notes);

    await contract.deployed();
    console.log("deployed contract...", contract.address);
    return contract;
}

export const getMetadata = async (signer, address) => {
    const contract = new ethers.Contract(
        address,
        DATATRACE_CONTRACT.abi,
        signer
    );
    const result = await contract.getMetadata.call();
    console.log('result', result)
    return {
        name: result[0],
        description: result[1],
        versionCount: result[2].toNumber(),
        createdAt: formatDate(result[3].toNumber()* 1000),
        owner: result[4],
    };
}

export const createVersion = async (signer, address, dataHash, cid, notes) => {
    const contract = new ethers.Contract(
        address,
        DATATRACE_CONTRACT.abi,
        signer
    );
    console.log('creating version', dataHash, cid, notes)
    const result = await contract.createVersion(dataHash, cid, notes);
    console.log('result', result)
    return result;
}

export const validateVersion = async (signer, address, dataHash) => {
    const contract = new ethers.Contract(
        address,
        DATATRACE_CONTRACT.abi,
        signer
    );
    console.log('validating version', dataHash)
    const result = await contract.validateVersion(dataHash);
    console.log('result', result)
    return {
        creator: result[0],
        dataHash: result[1],
        timestamp: formatDate(result[2].toNumber() * 1000),
        version: result[3].toNumber(),
        cid: result[4],
        notes: result[5],
    };
}
