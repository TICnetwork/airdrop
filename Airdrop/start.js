
const airdrop = require('./function/airdrop');

function withdraw(){

    excelPath = './filemanger/xlsx/airdrop_list_thingschain.xlsx';
    //开始进行空投
        
    airdrop.startAirdrop(excelPath,0,1,false,function (status) {

        console.log('airdrop result => '+status);
        console.log('等待系统重置');
    });
}

withdraw()