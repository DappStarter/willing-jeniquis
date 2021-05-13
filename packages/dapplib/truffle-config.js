require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter brand spot toy note praise punch harvest merry fog tree'; 
let testAccounts = [
"0xab425592037048ff8487197f06a99eabc884949e026c41e19051d5b307d168e4",
"0xe5344a2453f37de6a3ca958d7dfb66db674dd659ee726ab430a6b2c44c56071d",
"0x31f6243bc52e468f87b50458bf9af13f4e6e38ec81122d57b0f62bde29e00496",
"0x9441e88e37b6ac7d2638ea79177d3ff6acae44ed0d30526531779f471208f812",
"0x951ef0ab374efebab7013d52471118eed80a9881bc070fe853fe665afca8c117",
"0xc0793df1250941e5a3a35dfb250072fa94a4507b6baeda7526ca829e14354201",
"0xc18f3a702892a4f80e5e1be0f168ad2614cbccf458e77fc6b849f445dcff7375",
"0x879a7c1f4771665829760d18eb107bc57a169c89454355dd330e4880c8eaabd9",
"0x0074da329ae13a1149d84e16a33ed0cd30ae6066208ca4611955ceb1223f55d5",
"0x9057f8c2849458dd73b3938ef2ddf11bbc9c3643b9cce4857d7a71c074d0191b"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
