import { Alchemy, Network } from 'alchemy-sdk';
import { ethers } from 'ethers';

const settings = {
    apiKey: import.meta.env.VITE_API_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

async function getLatestBlock() {
    let b = await alchemy.core.getBlockNumber();
    // console.log(b);
    return b;
}

async function getBlockByNumber(blockNumber) {
    const block = alchemy.core.getBlock(blockNumber);
    return block;
}

async function getTransactionsOfBlock(blockNumber) {
    console.log('Recahing fcn -> ', blockNumber)
    const transactions = await alchemy.core.getBlockWithTransactions(blockNumber);
    return transactions;
}

function hexToWei(hex) {
    const bigN = ethers.toBigInt(hex);
    const eth = ethers.formatUnits(bigN, "ether");
    // const res = ethers.formatEther(eth);
    // res = Math.round(res * 1e4) / 1e4;

    return eth;
}

async function getAddressData(address) {
    const res = await alchemy.core.getAssetTransfers({
        fromBlock: "0x0",
        toAddress: address,
        category: ["external", "internal", "erc20", "erc721", "erc1155"],
    });
    return res;
}

async function getTransactionData(txnHash) {
    const res = await alchemy.core.getTransaction(txnHash);
    return res;
}

export { getLatestBlock, getBlockByNumber, getTransactionsOfBlock, hexToWei, getAddressData, getTransactionData }