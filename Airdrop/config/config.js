/**
 * Created by Thingschain.
 */
require('web3');
require('ethereumjs-tx');
require('solc');
require('ethjs-account');
require('node-xlsx');
require('silly-datetime');
require('ws');

console.log('require librarys');

const userConfig_main = {
    userPrivateKey:'',
    userAddress:'',
    airdropContractAddress:''

};

//Ethereum Rinkeby 测试账户
const userConfig_rinkeby = {
    userPrivateKey:'',
    userAddress:'',
    airdropContractAddress:''
};

let userConfig = userConfig_rinkeby;
// let userConfig = userConfig_main;

//主网
mainnetConfig = {
    internetType:'main',
    userModule:{
        userPrivateKey:userConfig.userPrivateKey,
    },
    tokenholderStartBlock:userConfig.startBlock,
    transaction:{
        url:'https://mainnet.infura.io',
        gasPrice:20000000000,
        gasLimit:6000000
    },
    airdropModule: {
        ercAirDropAmount:'1',       //amount of normal airdrop
        airdropContractAddress:userConfig.airdropContractAddress,                             //
        tokenContractAddress:'',                               //erc20 token contract address
    },
    approveModule:{
        amount : '5000',             //The amount of contract transferable accounts
        approveAddress : userConfig.airdropContractAddress,                             //airdrop contract address
        tokenContractAddress : '',                       //erc20 token contract address
    },
};

//rinkeby网络
rinkebyConfig = {
    internetType:'rinkeby',
    userModule:{
        userPrivateKey:userConfig.userPrivateKey,
    },
    tokenholderStartBlock:userConfig.startBlock,
    transaction:{
        url:'https://rinkeby.infura.io/',
        gasPrice:50000000000,
        gasLimit:6000000
    },
    airdropModule: {
        ercAirDropAmount:'1',       //amount of normal airdrop
        airdropContractAddress:userConfig.contractAddress,                             //
        tokenContractAddress:'',                               //erc20 token contract address
    },
    approveModule:{
        amount : '5000',             //The amount of contract transferable accounts
        approveAddress : userConfig.contractAddress,                             //airdrop contract address
        tokenContractAddress : '',                       //erc20 token contract address
    },
};

module.exports = rinkebyConfig;
// module.exports = mainnetConfig;

