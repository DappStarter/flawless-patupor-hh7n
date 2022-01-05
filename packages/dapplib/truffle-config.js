require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glide fruit sugar fire ridge remind around inner process bridge tornado'; 
let testAccounts = [
"0xa9f71a4f3268a8c7565db794292780db67056fb5680315dc6eb80aac64e1c0c8",
"0x38f87b8ed67350c23668205e3373d76cda1c319209c82a3f0b01b572480e978a",
"0xc83ab62964f22d1ebb17b1127de6dd907681e9c3fa2291efd1bf2127dc328871",
"0x8b6649cd2d4a8e48153f388eb2126771bdc958470a879593ac20e94e2ae9a088",
"0xe915d227634cbed43827a706b6e08d1eabb9838e167e27f0cc27e75b17e225eb",
"0x78e495e6289bf2f4833cab4ad30977c444f574f82eb51b6c418ac05209e2e598",
"0xa868d09de03b9d55f30655da053a93070307928028e0904f915375fcff0468ff",
"0x0bdb8e45e60689daf1b7da722ef0e673202bed0ca09fbc4c282865819845faa8",
"0xe9365973e1f740ccec6c9790c5816bc814d9b95c5a343a60092657c61d4825bd",
"0x083a81f73fdfdeb42a2659bbd54605bf58a4be963c81e14357866bea47660506"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


