import { ethers } from "ethers";
import { WITNESS_CONTRACT } from "./metadata";

export async function deployContract(signer, uploadName, description, bytes, cid) {
    // Deploy contract with ethers
    const factory = new ethers.ContractFactory(
        WITNESS_CONTRACT.abi,
        WITNESS_CONTRACT.bytecode,
        signer
    );

    const options = {
        // gasLimit: 3000000,
        // gasPrice: 10000000000,
    }
    const contract = await factory.deploy(uploadName, description, bytes, cid ?? '')
    // log
    console.log("Deploying contract...", uploadName, description, bytes, cid);

    await contract.deployed();
    console.log("deployed contract...", contract.address);
    return contract;
}

export const getMetadata = async (signer, address) => {
    const contract = new ethers.Contract(
        address,
        WITNESS_CONTRACT.abi,
        signer
    );
    const result = await contract.getMetadata.call();
    console.log('result', result)
    return {
        name: result[0],
        description: result[1],
    };
}