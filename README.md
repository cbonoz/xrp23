<br/>
<p align='center'>
    <img src='https://i.ibb.co/QbbynxP/logo.png' width=400 />
</p>
<br/>


DataTrace
---

Validate any piece of data against the XRP EVM with proof of ownership.

DataTrace is a high throughput data validation platform built on Ripple EVM, where every piece of data gets a unique smart contract, Filecoin URL, and verifiable audit history.

---

Demo video: https://youtu.be/pE6V5XOm5Vc

You must ensure you have the XRP Ledger Devnet added to your metamask config, otherwise, metamask may not be able to connect. Follow the guide here: https://opensource.ripple.com/docs/evm-sidechain/connect-metamask-to-xrpl-evm-sidechain/

Built for the <a href="https://newhorizon.devpost.com/" target="_blank">New Horizon hackathon</a> 2023.

Live demo url: https://xrp23.vercel.app/ (must be connected to XRPL EVM testnet)

<!-- Demo video:  -->

Example data upload url: https://xrp23.vercel.app/upload/0xF7Ad17209303D81D442313982128e050A9CB6053

## Inspiration

In today's digital age, data is a crucial asset, but its integrity and validation remain challenging. DataTrace was inspired by the need for a high-throughput validation platform for data that leverages the power of Ripple EVM. We were driven by the vision of creating a secure, transparent, and accessible system where every piece of data is accompanied by a unique URL and an evolution pattern, ensuring trust and accountability in the data-driven world.

## Key Features of DataTrace:

DataTrace assigns a unique smart contract for each initial piece of data. This ensures that the validation process is decentralized and transparent, as the smart contract acts as a tamper-proof record of the data's origin and modifications.

Filecoin Integration:

Every data entry on DataTrace is associated with a Filecoin URL. This integration not only facilitates secure and decentralized storage but also ensures that the data's existence and integrity can be independently verified through the Filecoin network.
Verifiable Audit History:

DataTrace maintains a comprehensive audit trail for each data entry. This verifiable history, stored on the Ripple EVM, allows users to trace the evolution of the data, providing a transparent and immutable record of any changes or validations performed.
Proof of Ownership:

The platform introduces a novel concept of proof of ownership, enabling users to validate their ownership rights over specific pieces of data. This feature adds a layer of security and trust to the entire data validation process.

### Weaknesses in Existing Platforms Addressed by DataTrace:

Centralization Risks:

Many existing data validation platforms rely on centralized servers, making them vulnerable to single points of failure and potential manipulation. DataTrace, built on Ripple EVM, embraces decentralization through smart contracts, reducing the risk of data tampering and unauthorized access.
Limited Transparency:

Traditional platforms often lack transparency in data validation processes. DataTrace's integration with Ripple EVM and Filecoin ensures a transparent and auditable record of each data entry, promoting accountability and trust.
Inadequate Proof of Ownership:

Current platforms may need more robust mechanisms for users to establish and validate their ownership rights over specific data. DataTrace's innovative proof of ownership feature enhances data ownership security, reducing the chances of disputes and unauthorized usage.
Scalability Issues:

High throughput is critical for data validation platforms, especially in today's data-driven landscape. DataTrace, leveraging the Ripple EVM, addresses scalability concerns by providing a platform capable of handling large volumes of data transactions without compromising performance.


## How we built it

We designed and implemented smart contracts to record and verify data, ensuring it remains immutable. Additionally, we developed a user-friendly web interface that allows users to interact with DataTrace effortlessly. The project leverages decentralized storage solutions to securely store data and maintain its unique URLs and evolution patterns.

## Challenges we ran into

Creating DataTrace came with its fair share of challenges. Integrating Ripple EVM into the project required extensive research and development to ensure seamless compatibility. Additionally, designing a system that maintains data integrity without compromising on performance was a complex task. We also had to address various security concerns and optimize the platform for high throughput, presenting its own challenges.

## Accomplishments that we're proud of

We successfully integrated Ripple EVM into the platform, allowing it to benefit from Ripple's high throughput capabilities. We also designed a user-friendly interface that simplifies data validation for users of all backgrounds. Furthermore, the system's ability to generate unique URLs and evolution patterns for each data point significantly enhances data trust.

App users can take as many snapshots as they want of uploaded data.

## What we learned

Working on DataTrace was a learning experience. We gained valuable insights into the intricacies of Ripple EVM and blockchain technology. We also deepened our understanding of data validation and its importance in today's digital ecosystem. This project has taught us the significance of innovation and adaptability when addressing complex blockchain and data validation challenges.

### Recompiling the DataTrace smart contract for deployment on XRP EVM

This contract project uses forge foundry for builds https://book.getfoundry.sh/reference/forge/forge-build

Compiling contracts:
`yarn build`

Copy contents of `.json` contract output to `metadata.js` in the app project.


## Running the project (from scratch)

1. Copy `.env.sample` -> `.env`

2. Define variables in `.env` with your unique values.

3. `yarn; yarn dev`. The app should now be running on port 3000.

Any repeated starts can be done with `yarn dev` once all environment variables are set.

## Production build

You can deploy your own version of DataTrace on the web for internal or public use.

1. Follow config steps above in 'Running the project'

2. `yarn; yarn build`

3. Copy the contents of `build` to the CDN of your choosing.

### Screenshots

#### Home

![Alt text](img/home.png)

#### Creating a new DataTrace upload

![Alt text](img/create.png)

![Alt text](img/confirm.png)

#### Each first upload deploys a unique smart contract which tracks the evolution of a piece of data

![Alt text](img/complete.png)

#### Smart contract with one additional version (indicated by transaction)

![Alt text](img/contract.png)

#### Example version uploaded on IPFS

![Alt text](img/ipfs.png)


#### Managing an existing upload (available to original uploader)


![Alt text](img/manage.png)

#### Anyone can verify a held piece of data against one of the versions to check tampering or authenticity.

![Alt text](img/verify.png)

---

![Alt text](img/logo_3_2.png)


## Potential future work
1. Mainnet deployment and support: DataTrace is currently deployable on Ripple EVM testnet and is free to use - mainnet deployments would offer more long-term guarantees and stability.
2. Security audit and review: Ensure the highest level of data security, privacy, and resistance to potential attacks. Repeated testing ensures that encrypted data can only be accessed when all the conditions are met.
3. Integration with additional blockchains: Cross-chain interactions on the app require configuring source and destination addresses in the DataTrace app - more sources could be added and maintained


### Useful links
* Contest: https://newhorizon.devpost.com/
* Faucet (getting sidechain XRP): https://witness-evm-sidechain.peersyst.tech/
