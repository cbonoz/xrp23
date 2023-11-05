// Compiled data contract ABI.
export const WITNESS_CONTRACT = {
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "dataHash",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "data",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "DataEntryCreated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_data",
          "type": "string"
        }
      ],
      "name": "createDataEntry",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "dataEntries",
      "outputs": [
        {
          "internalType": "address",
          "name": "creator",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "data",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "_dataHash",
          "type": "bytes32"
        }
      ],
      "name": "retrieveDataEntry",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": {
    "object": "0x608060405234801561001057600080fd5b50610697806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063361c36d5146100465780636e58d23514610071578063a9d13ef714610084575b600080fd5b61005961005436600461035d565b610099565b604051610068939291906103c6565b60405180910390f35b61005961007f36600461035d565b61014e565b610097610092366004610410565b610294565b005b600060208190529081526040902080546001820180546001600160a01b0390921692916100c5906104c1565b80601f01602080910402602001604051908101604052809291908181526020018280546100f1906104c1565b801561013e5780601f106101135761010080835404028352916020019161013e565b820191906000526020600020905b81548152906001019060200180831161012157829003601f168201915b5050505050908060020154905083565b6000818152602081815260408083208151606081810190935281546001600160a01b0316815260018201805493948694859492918401919061018f906104c1565b80601f01602080910402602001604051908101604052809291908181526020018280546101bb906104c1565b80156102085780601f106101dd57610100808354040283529160200191610208565b820191906000526020600020905b8154815290600101906020018083116101eb57829003601f168201915b50505091835250506002919091015460209091015280519091506001600160a01b031661027b5760405162461bcd60e51b815260206004820152601960248201527f4461746120656e74727920646f6573206e6f7420657869737400000000000000604482015260640160405180910390fd5b8051602082015160409092015190969195509350915050565b6000816040516020016102a791906104fb565b60408051808303601f190181528282528051602091820120606084018352338452818401868152428585015260008281529283905292909120835181546001600160a01b0319166001600160a01b03909116178155915190935060018201906103109082610566565b50604091820151600290910155517f0f516e6d685ea8fbc59ac796fa34eef591fc733a01db3a47d2ffcd5d565dee0190610351908390339086904290610626565b60405180910390a15050565b60006020828403121561036f57600080fd5b5035919050565b60005b83811015610391578181015183820152602001610379565b50506000910152565b600081518084526103b2816020860160208601610376565b601f01601f19169290920160200192915050565b6001600160a01b03841681526060602082018190526000906103ea9083018561039a565b9050826040830152949350505050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561042257600080fd5b813567ffffffffffffffff8082111561043a57600080fd5b818401915084601f83011261044e57600080fd5b813581811115610460576104606103fa565b604051601f8201601f19908116603f01168101908382118183101715610488576104886103fa565b816040528281528760208487010111156104a157600080fd5b826020860160208301376000928101602001929092525095945050505050565b600181811c908216806104d557607f821691505b6020821081036104f557634e487b7160e01b600052602260045260246000fd5b50919050565b6000825161050d818460208701610376565b9190910192915050565b601f82111561056157600081815260208120601f850160051c8101602086101561053e5750805b601f850160051c820191505b8181101561055d5782815560010161054a565b5050505b505050565b815167ffffffffffffffff811115610580576105806103fa565b6105948161058e84546104c1565b84610517565b602080601f8311600181146105c957600084156105b15750858301515b600019600386901b1c1916600185901b17855561055d565b600085815260208120601f198616915b828110156105f8578886015182559484019460019091019084016105d9565b50858210156106165787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b8481526001600160a01b03841660208201526080604082018190526000906106509083018561039a565b90508260608301529594505050505056fea26469706673582212204e20f649726854705f4247f15cf387c03c1444a960c883ae01193c7ff00e61c964736f6c63430008150033",
    "sourceMap": "58:2001:0:-:0;;;472:71;;;;;;;;;;58:2001;;;;;;",
    "linkReferences": {}
  },
  "deployedBytecode": {
    "object": "0x608060405234801561001057600080fd5b50600436106100415760003560e01c8063361c36d5146100465780636e58d23514610071578063a9d13ef714610084575b600080fd5b61005961005436600461035d565b610099565b604051610068939291906103c6565b60405180910390f35b61005961007f36600461035d565b61014e565b610097610092366004610410565b610294565b005b600060208190529081526040902080546001820180546001600160a01b0390921692916100c5906104c1565b80601f01602080910402602001604051908101604052809291908181526020018280546100f1906104c1565b801561013e5780601f106101135761010080835404028352916020019161013e565b820191906000526020600020905b81548152906001019060200180831161012157829003601f168201915b5050505050908060020154905083565b6000818152602081815260408083208151606081810190935281546001600160a01b0316815260018201805493948694859492918401919061018f906104c1565b80601f01602080910402602001604051908101604052809291908181526020018280546101bb906104c1565b80156102085780601f106101dd57610100808354040283529160200191610208565b820191906000526020600020905b8154815290600101906020018083116101eb57829003601f168201915b50505091835250506002919091015460209091015280519091506001600160a01b031661027b5760405162461bcd60e51b815260206004820152601960248201527f4461746120656e74727920646f6573206e6f7420657869737400000000000000604482015260640160405180910390fd5b8051602082015160409092015190969195509350915050565b6000816040516020016102a791906104fb565b60408051808303601f190181528282528051602091820120606084018352338452818401868152428585015260008281529283905292909120835181546001600160a01b0319166001600160a01b03909116178155915190935060018201906103109082610566565b50604091820151600290910155517f0f516e6d685ea8fbc59ac796fa34eef591fc733a01db3a47d2ffcd5d565dee0190610351908390339086904290610626565b60405180910390a15050565b60006020828403121561036f57600080fd5b5035919050565b60005b83811015610391578181015183820152602001610379565b50506000910152565b600081518084526103b2816020860160208601610376565b601f01601f19169290920160200192915050565b6001600160a01b03841681526060602082018190526000906103ea9083018561039a565b9050826040830152949350505050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561042257600080fd5b813567ffffffffffffffff8082111561043a57600080fd5b818401915084601f83011261044e57600080fd5b813581811115610460576104606103fa565b604051601f8201601f19908116603f01168101908382118183101715610488576104886103fa565b816040528281528760208487010111156104a157600080fd5b826020860160208301376000928101602001929092525095945050505050565b600181811c908216806104d557607f821691505b6020821081036104f557634e487b7160e01b600052602260045260246000fd5b50919050565b6000825161050d818460208701610376565b9190910192915050565b601f82111561056157600081815260208120601f850160051c8101602086101561053e5750805b601f850160051c820191505b8181101561055d5782815560010161054a565b5050505b505050565b815167ffffffffffffffff811115610580576105806103fa565b6105948161058e84546104c1565b84610517565b602080601f8311600181146105c957600084156105b15750858301515b600019600386901b1c1916600185901b17855561055d565b600085815260208120601f198616915b828110156105f8578886015182559484019460019091019084016105d9565b50858210156106165787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b8481526001600160a01b03841660208201526080604082018190526000906106509083018561039a565b90508260608301529594505050505056fea26469706673582212204e20f649726854705f4247f15cf387c03c1444a960c883ae01193c7ff00e61c964736f6c63430008150033",
    "sourceMap": "58:2001:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;284:48;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;:::i;:::-;;;;;;;;939:297;;;;;;:::i;:::-;;:::i;592:279::-;;;;;;:::i;:::-;;:::i;:::-;;284:48;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;284:48:0;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;939:297::-;1006:7;1071:22;;;;;;;;;;;1046:47;;1015:13;1046:47;;;;;;;;-1:-1:-1;;;;;1046:47:0;;;;;;;;1015:13;;1006:7;;;;1071:22;1046:47;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1046:47:0;;;-1:-1:-1;;1046:47:0;;;;;;;;;;;1111:13;;1046:47;;-1:-1:-1;;;;;;1111:27:0;1103:65;;;;-1:-1:-1;;;1103:65:0;;2769:2:1;1103:65:0;;;2751:21:1;2808:2;2788:18;;;2781:30;2847:27;2827:18;;;2820:55;2892:18;;1103:65:0;;;;;;;;1186:13;;1201:10;;;;1213:15;;;;;1186:13;;1201:10;;-1:-1:-1;1213:15:0;-1:-1:-1;939:297:0;-1:-1:-1;;939:297:0:o;592:279::-;655:16;701:5;684:23;;;;;;;;:::i;:::-;;;;;;;-1:-1:-1;;684:23:0;;;;;;674:34;;684:23;674:34;;;;742:45;;;;;752:10;742:45;;;;;;;;771:15;742:45;;;;-1:-1:-1;718:21:0;;;;;;;;;;;:69;;;;-1:-1:-1;;;;;;718:69:0;-1:-1:-1;;;;;718:69:0;;;;;;;;674:34;;-1:-1:-1;;718:69:0;;;;;;;:::i;:::-;-1:-1:-1;718:69:0;;;;;;;;;;802:62;;;;;819:8;;829:10;;841:5;;848:15;;802:62;:::i;:::-;;;;;;;;645:226;592:279;:::o;14:180:1:-;73:6;126:2;114:9;105:7;101:23;97:32;94:52;;;142:1;139;132:12;94:52;-1:-1:-1;165:23:1;;14:180;-1:-1:-1;14:180:1:o;199:250::-;284:1;294:113;308:6;305:1;302:13;294:113;;;384:11;;;378:18;365:11;;;358:39;330:2;323:10;294:113;;;-1:-1:-1;;441:1:1;423:16;;416:27;199:250::o;454:271::-;496:3;534:5;528:12;561:6;556:3;549:19;577:76;646:6;639:4;634:3;630:14;623:4;616:5;612:16;577:76;:::i;:::-;707:2;686:15;-1:-1:-1;;682:29:1;673:39;;;;714:4;669:50;;454:271;-1:-1:-1;;454:271:1:o;730:388::-;-1:-1:-1;;;;;935:32:1;;917:51;;1004:2;999;984:18;;977:30;;;-1:-1:-1;;1024:45:1;;1050:18;;1042:6;1024:45;:::i;:::-;1016:53;;1105:6;1100:2;1089:9;1085:18;1078:34;730:388;;;;;;:::o;1123:127::-;1184:10;1179:3;1175:20;1172:1;1165:31;1215:4;1212:1;1205:15;1239:4;1236:1;1229:15;1255:922;1324:6;1377:2;1365:9;1356:7;1352:23;1348:32;1345:52;;;1393:1;1390;1383:12;1345:52;1433:9;1420:23;1462:18;1503:2;1495:6;1492:14;1489:34;;;1519:1;1516;1509:12;1489:34;1557:6;1546:9;1542:22;1532:32;;1602:7;1595:4;1591:2;1587:13;1583:27;1573:55;;1624:1;1621;1614:12;1573:55;1660:2;1647:16;1682:2;1678;1675:10;1672:36;;;1688:18;;:::i;:::-;1763:2;1757:9;1731:2;1817:13;;-1:-1:-1;;1813:22:1;;;1837:2;1809:31;1805:40;1793:53;;;1861:18;;;1881:22;;;1858:46;1855:72;;;1907:18;;:::i;:::-;1947:10;1943:2;1936:22;1982:2;1974:6;1967:18;2022:7;2017:2;2012;2008;2004:11;2000:20;1997:33;1994:53;;;2043:1;2040;2033:12;1994:53;2099:2;2094;2090;2086:11;2081:2;2073:6;2069:15;2056:46;2144:1;2122:15;;;2139:2;2118:24;2111:35;;;;-1:-1:-1;2126:6:1;1255:922;-1:-1:-1;;;;;1255:922:1:o;2182:380::-;2261:1;2257:12;;;;2304;;;2325:61;;2379:4;2371:6;2367:17;2357:27;;2325:61;2432:2;2424:6;2421:14;2401:18;2398:38;2395:161;;2478:10;2473:3;2469:20;2466:1;2459:31;2513:4;2510:1;2503:15;2541:4;2538:1;2531:15;2395:161;;2182:380;;;:::o;2921:289::-;3052:3;3090:6;3084:13;3106:66;3165:6;3160:3;3153:4;3145:6;3141:17;3106:66;:::i;:::-;3188:16;;;;;2921:289;-1:-1:-1;;2921:289:1:o;3341:545::-;3443:2;3438:3;3435:11;3432:448;;;3479:1;3504:5;3500:2;3493:17;3549:4;3545:2;3535:19;3619:2;3607:10;3603:19;3600:1;3596:27;3590:4;3586:38;3655:4;3643:10;3640:20;3637:47;;;-1:-1:-1;3678:4:1;3637:47;3733:2;3728:3;3724:12;3721:1;3717:20;3711:4;3707:31;3697:41;;3788:82;3806:2;3799:5;3796:13;3788:82;;;3851:17;;;3832:1;3821:13;3788:82;;;3792:3;;;3432:448;3341:545;;;:::o;4062:1352::-;4188:3;4182:10;4215:18;4207:6;4204:30;4201:56;;;4237:18;;:::i;:::-;4266:97;4356:6;4316:38;4348:4;4342:11;4316:38;:::i;:::-;4310:4;4266:97;:::i;:::-;4418:4;;4482:2;4471:14;;4499:1;4494:663;;;;5201:1;5218:6;5215:89;;;-1:-1:-1;5270:19:1;;;5264:26;5215:89;-1:-1:-1;;4019:1:1;4015:11;;;4011:24;4007:29;3997:40;4043:1;4039:11;;;3994:57;5317:81;;4464:944;;4494:663;3288:1;3281:14;;;3325:4;3312:18;;-1:-1:-1;;4530:20:1;;;4648:236;4662:7;4659:1;4656:14;4648:236;;;4751:19;;;4745:26;4730:42;;4843:27;;;;4811:1;4799:14;;;;4678:19;;4648:236;;;4652:3;4912:6;4903:7;4900:19;4897:201;;;4973:19;;;4967:26;-1:-1:-1;;5056:1:1;5052:14;;;5068:3;5048:24;5044:37;5040:42;5025:58;5010:74;;4897:201;-1:-1:-1;;;;;5144:1:1;5128:14;;;5124:22;5111:36;;-1:-1:-1;4062:1352:1:o;5419:461::-;5634:25;;;-1:-1:-1;;;;;5695:32:1;;5690:2;5675:18;;5668:60;5764:3;5759:2;5744:18;;5737:31;;;-1:-1:-1;;5785:46:1;;5811:19;;5803:6;5785:46;:::i;:::-;5777:54;;5867:6;5862:2;5851:9;5847:18;5840:34;5419:461;;;;;;;:::o",
    "linkReferences": {}
  },
  "methodIdentifiers": {
    "createDataEntry(string)": "a9d13ef7",
    "dataEntries(bytes32)": "361c36d5",
    "retrieveDataEntry(bytes32)": "6e58d235"
  },
  "rawMetadata": "{\"compiler\":{\"version\":\"0.8.21+commit.d9974bed\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"dataHash\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"data\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"}],\"name\":\"DataEntryCreated\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_data\",\"type\":\"string\"}],\"name\":\"createDataEntry\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"dataEntries\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"creator\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"data\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"timestamp\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"_dataHash\",\"type\":\"bytes32\"}],\"name\":\"retrieveDataEntry\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/WitnessContract.sol\":\"WitnessContract\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@across-protocol/=node_modules/@across-protocol/\",\":@ensdomains/=node_modules/@ensdomains/\",\":@eth-optimism/=node_modules/@eth-optimism/\",\":@gnosis.pm/=node_modules/@gnosis.pm/\",\":@maticnetwork/=node_modules/@maticnetwork/\",\":@openzeppelin/=node_modules/@openzeppelin/\",\":@uma/=node_modules/@uma/\",\":@uniswap/=node_modules/@uniswap/\",\":base64-sol/=node_modules/base64-sol/\",\":eth-gas-reporter/=node_modules/eth-gas-reporter/\",\":hardhat-deploy/=node_modules/hardhat-deploy/\",\":hardhat/=node_modules/hardhat/\"]},\"sources\":{\"contracts/WitnessContract.sol\":{\"keccak256\":\"0xd7ce0cc09c7dc2f18ea4158d8284035473eb0caa1d60cd58dc48362448572a6e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b249e002c9ecc6498ce70b9f4115d1af3588c5583037df9037d340a1526f2a8d\",\"dweb:/ipfs/QmVim3H6qzA5U1U4uhPDwSNU46zsrxf8b1cdNUGv4kWa5b\"]}},\"version\":1}",
  "metadata": {
    "compiler": {
      "version": "0.8.21+commit.d9974bed"
    },
    "language": "Solidity",
    "output": {
      "abi": [
        {
          "inputs": [],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "dataHash",
              "type": "bytes32",
              "indexed": false
            },
            {
              "internalType": "address",
              "name": "creator",
              "type": "address",
              "indexed": false
            },
            {
              "internalType": "string",
              "name": "data",
              "type": "string",
              "indexed": false
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256",
              "indexed": false
            }
          ],
          "type": "event",
          "name": "DataEntryCreated",
          "anonymous": false
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_data",
              "type": "string"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function",
          "name": "createDataEntry"
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "dataEntries",
          "outputs": [
            {
              "internalType": "address",
              "name": "creator",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "data",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            }
          ]
        },
        {
          "inputs": [
            {
              "internalType": "bytes32",
              "name": "_dataHash",
              "type": "bytes32"
            }
          ],
          "stateMutability": "view",
          "type": "function",
          "name": "retrieveDataEntry",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ]
        }
      ],
      "devdoc": {
        "kind": "dev",
        "methods": {},
        "version": 1
      },
      "userdoc": {
        "kind": "user",
        "methods": {},
        "version": 1
      }
    },
    "settings": {
      "remappings": [
        "@across-protocol/=node_modules/@across-protocol/",
        "@ensdomains/=node_modules/@ensdomains/",
        "@eth-optimism/=node_modules/@eth-optimism/",
        "@gnosis.pm/=node_modules/@gnosis.pm/",
        "@maticnetwork/=node_modules/@maticnetwork/",
        "@openzeppelin/=node_modules/@openzeppelin/",
        "@uma/=node_modules/@uma/",
        "@uniswap/=node_modules/@uniswap/",
        "base64-sol/=node_modules/base64-sol/",
        "eth-gas-reporter/=node_modules/eth-gas-reporter/",
        "hardhat-deploy/=node_modules/hardhat-deploy/",
        "hardhat/=node_modules/hardhat/"
      ],
      "optimizer": {
        "enabled": true,
        "runs": 200
      },
      "metadata": {
        "bytecodeHash": "ipfs"
      },
      "compilationTarget": {
        "contracts/WitnessContract.sol": "WitnessContract"
      },
      "libraries": {}
    },
    "sources": {
      "contracts/WitnessContract.sol": {
        "keccak256": "0xd7ce0cc09c7dc2f18ea4158d8284035473eb0caa1d60cd58dc48362448572a6e",
        "urls": [
          "bzz-raw://b249e002c9ecc6498ce70b9f4115d1af3588c5583037df9037d340a1526f2a8d",
          "dweb:/ipfs/QmVim3H6qzA5U1U4uhPDwSNU46zsrxf8b1cdNUGv4kWa5b"
        ],
        "license": "MIT"
      }
    },
    "version": 1
  },
  "ast": {
    "absolutePath": "contracts/WitnessContract.sol",
    "id": 103,
    "exportedSymbols": {
      "WitnessContract": [
        102
      ]
    },
    "nodeType": "SourceUnit",
    "src": "32:2028:0",
    "nodes": [
      {
        "id": 1,
        "nodeType": "PragmaDirective",
        "src": "32:24:0",
        "nodes": [],
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".20"
        ]
      },
      {
        "id": 102,
        "nodeType": "ContractDefinition",
        "src": "58:2001:0",
        "nodes": [
          {
            "id": 8,
            "nodeType": "StructDefinition",
            "src": "129:94:0",
            "nodes": [],
            "canonicalName": "WitnessContract.DataEntry",
            "members": [
              {
                "constant": false,
                "id": 3,
                "mutability": "mutable",
                "name": "creator",
                "nameLocation": "164:7:0",
                "nodeType": "VariableDeclaration",
                "scope": 8,
                "src": "156:15:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                },
                "typeName": {
                  "id": 2,
                  "name": "address",
                  "nodeType": "ElementaryTypeName",
                  "src": "156:7:0",
                  "stateMutability": "nonpayable",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 5,
                "mutability": "mutable",
                "name": "data",
                "nameLocation": "188:4:0",
                "nodeType": "VariableDeclaration",
                "scope": 8,
                "src": "181:11:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 4,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "181:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7,
                "mutability": "mutable",
                "name": "timestamp",
                "nameLocation": "207:9:0",
                "nodeType": "VariableDeclaration",
                "scope": 8,
                "src": "202:14:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 6,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "202:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "DataEntry",
            "nameLocation": "136:9:0",
            "scope": 102,
            "visibility": "public"
          },
          {
            "id": 13,
            "nodeType": "VariableDeclaration",
            "src": "284:48:0",
            "nodes": [],
            "constant": false,
            "functionSelector": "361c36d5",
            "mutability": "mutable",
            "name": "dataEntries",
            "nameLocation": "321:11:0",
            "scope": 102,
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_DataEntry_$8_storage_$",
              "typeString": "mapping(bytes32 => struct WitnessContract.DataEntry)"
            },
            "typeName": {
              "id": 12,
              "keyName": "",
              "keyNameLocation": "-1:-1:-1",
              "keyType": {
                "id": 9,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "292:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "284:29:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_DataEntry_$8_storage_$",
                "typeString": "mapping(bytes32 => struct WitnessContract.DataEntry)"
              },
              "valueName": "",
              "valueNameLocation": "-1:-1:-1",
              "valueType": {
                "id": 11,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 10,
                  "name": "DataEntry",
                  "nameLocations": [
                    "303:9:0"
                  ],
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 8,
                  "src": "303:9:0"
                },
                "referencedDeclaration": 8,
                "src": "303:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_DataEntry_$8_storage_ptr",
                  "typeString": "struct WitnessContract.DataEntry"
                }
              }
            },
            "visibility": "public"
          },
          {
            "id": 23,
            "nodeType": "EventDefinition",
            "src": "379:87:0",
            "nodes": [],
            "anonymous": false,
            "eventSelector": "0f516e6d685ea8fbc59ac796fa34eef591fc733a01db3a47d2ffcd5d565dee01",
            "name": "DataEntryCreated",
            "nameLocation": "385:16:0",
            "parameters": {
              "id": 22,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 15,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "dataHash",
                  "nameLocation": "410:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 23,
                  "src": "402:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 14,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "402:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 17,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "creator",
                  "nameLocation": "428:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 23,
                  "src": "420:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "420:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "data",
                  "nameLocation": "444:4:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 23,
                  "src": "437:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "437:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 21,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "timestamp",
                  "nameLocation": "455:9:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 23,
                  "src": "450:14:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 20,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "450:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "401:64:0"
            }
          },
          {
            "id": 27,
            "nodeType": "FunctionDefinition",
            "src": "472:71:0",
            "nodes": [],
            "body": {
              "id": 26,
              "nodeType": "Block",
              "src": "486:57:0",
              "nodes": [],
              "statements": []
            },
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "parameters": {
              "id": 24,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "483:2:0"
            },
            "returnParameters": {
              "id": 25,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "486:0:0"
            },
            "scope": 102,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 63,
            "nodeType": "FunctionDefinition",
            "src": "592:279:0",
            "nodes": [],
            "body": {
              "id": 62,
              "nodeType": "Block",
              "src": "645:226:0",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    33
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 33,
                      "mutability": "mutable",
                      "name": "dataHash",
                      "nameLocation": "663:8:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 62,
                      "src": "655:16:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 32,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "655:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 40,
                  "initialValue": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "id": 37,
                            "name": "_data",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 29,
                            "src": "701:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          ],
                          "expression": {
                            "id": 35,
                            "name": "abi",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -1,
                            "src": "684:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_abi",
                              "typeString": "abi"
                            }
                          },
                          "id": 36,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberLocation": "688:12:0",
                          "memberName": "encodePacked",
                          "nodeType": "MemberAccess",
                          "src": "684:16:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                            "typeString": "function () pure returns (bytes memory)"
                          }
                        },
                        "id": 38,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "nameLocations": [],
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "684:23:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "id": 34,
                      "name": "keccak256",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": -8,
                      "src": "674:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                        "typeString": "function (bytes memory) pure returns (bytes32)"
                      }
                    },
                    "id": 39,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "674:34:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "655:53:0"
                },
                {
                  "expression": {
                    "id": 51,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "baseExpression": {
                        "id": 41,
                        "name": "dataEntries",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 13,
                        "src": "718:11:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_DataEntry_$8_storage_$",
                          "typeString": "mapping(bytes32 => struct WitnessContract.DataEntry storage ref)"
                        }
                      },
                      "id": 43,
                      "indexExpression": {
                        "id": 42,
                        "name": "dataHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33,
                        "src": "730:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "718:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DataEntry_$8_storage",
                        "typeString": "struct WitnessContract.DataEntry storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "arguments": [
                        {
                          "expression": {
                            "id": 45,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "752:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 46,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "756:6:0",
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "src": "752:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "id": 47,
                          "name": "_data",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 29,
                          "src": "764:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        {
                          "expression": {
                            "id": 48,
                            "name": "block",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -4,
                            "src": "771:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_block",
                              "typeString": "block"
                            }
                          },
                          "id": 49,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "777:9:0",
                          "memberName": "timestamp",
                          "nodeType": "MemberAccess",
                          "src": "771:15:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 44,
                        "name": "DataEntry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8,
                        "src": "742:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_struct$_DataEntry_$8_storage_ptr_$",
                          "typeString": "type(struct WitnessContract.DataEntry storage pointer)"
                        }
                      },
                      "id": 50,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "structConstructorCall",
                      "lValueRequested": false,
                      "nameLocations": [],
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "742:45:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DataEntry_$8_memory_ptr",
                        "typeString": "struct WitnessContract.DataEntry memory"
                      }
                    },
                    "src": "718:69:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_DataEntry_$8_storage",
                      "typeString": "struct WitnessContract.DataEntry storage ref"
                    }
                  },
                  "id": 52,
                  "nodeType": "ExpressionStatement",
                  "src": "718:69:0"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 54,
                        "name": "dataHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 33,
                        "src": "819:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "expression": {
                          "id": 55,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "829:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 56,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "833:6:0",
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "src": "829:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 57,
                        "name": "_data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 29,
                        "src": "841:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "expression": {
                          "id": 58,
                          "name": "block",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -4,
                          "src": "848:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_block",
                            "typeString": "block"
                          }
                        },
                        "id": 59,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "854:9:0",
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "src": "848:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 53,
                      "name": "DataEntryCreated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 23,
                      "src": "802:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                        "typeString": "function (bytes32,address,string memory,uint256)"
                      }
                    },
                    "id": 60,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "802:62:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 61,
                  "nodeType": "EmitStatement",
                  "src": "797:67:0"
                }
              ]
            },
            "functionSelector": "a9d13ef7",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "createDataEntry",
            "nameLocation": "601:15:0",
            "parameters": {
              "id": 30,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29,
                  "mutability": "mutable",
                  "name": "_data",
                  "nameLocation": "631:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 63,
                  "src": "617:19:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "617:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "616:21:0"
            },
            "returnParameters": {
              "id": 31,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "645:0:0"
            },
            "scope": 102,
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "id": 101,
            "nodeType": "FunctionDefinition",
            "src": "939:297:0",
            "nodes": [],
            "body": {
              "id": 100,
              "nodeType": "Block",
              "src": "1036:200:0",
              "nodes": [],
              "statements": [
                {
                  "assignments": [
                    76
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 76,
                      "mutability": "mutable",
                      "name": "entry",
                      "nameLocation": "1063:5:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 100,
                      "src": "1046:22:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_DataEntry_$8_memory_ptr",
                        "typeString": "struct WitnessContract.DataEntry"
                      },
                      "typeName": {
                        "id": 75,
                        "nodeType": "UserDefinedTypeName",
                        "pathNode": {
                          "id": 74,
                          "name": "DataEntry",
                          "nameLocations": [
                            "1046:9:0"
                          ],
                          "nodeType": "IdentifierPath",
                          "referencedDeclaration": 8,
                          "src": "1046:9:0"
                        },
                        "referencedDeclaration": 8,
                        "src": "1046:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_DataEntry_$8_storage_ptr",
                          "typeString": "struct WitnessContract.DataEntry"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 80,
                  "initialValue": {
                    "baseExpression": {
                      "id": 77,
                      "name": "dataEntries",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 13,
                      "src": "1071:11:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_struct$_DataEntry_$8_storage_$",
                        "typeString": "mapping(bytes32 => struct WitnessContract.DataEntry storage ref)"
                      }
                    },
                    "id": 79,
                    "indexExpression": {
                      "id": 78,
                      "name": "_dataHash",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 65,
                      "src": "1083:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1071:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_struct$_DataEntry_$8_storage",
                      "typeString": "struct WitnessContract.DataEntry storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1046:47:0"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 88,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "id": 82,
                            "name": "entry",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 76,
                            "src": "1111:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_DataEntry_$8_memory_ptr",
                              "typeString": "struct WitnessContract.DataEntry memory"
                            }
                          },
                          "id": 83,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberLocation": "1117:7:0",
                          "memberName": "creator",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 3,
                          "src": "1111:13:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "arguments": [
                            {
                              "hexValue": "30",
                              "id": 86,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1136:1:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 85,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1128:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 84,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1128:7:0",
                              "typeDescriptions": {}
                            }
                          },
                          "id": 87,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "nameLocations": [],
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1128:10:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1111:27:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "hexValue": "4461746120656e74727920646f6573206e6f74206578697374",
                        "id": 89,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1140:27:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_8bbfcb18a997b296482dbe636c332c9ff543cfb12f53d26acaa244466d10c52d",
                          "typeString": "literal_string \"Data entry does not exist\""
                        },
                        "value": "Data entry does not exist"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_8bbfcb18a997b296482dbe636c332c9ff543cfb12f53d26acaa244466d10c52d",
                          "typeString": "literal_string \"Data entry does not exist\""
                        }
                      ],
                      "id": 81,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1103:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 90,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "nameLocations": [],
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1103:65:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 91,
                  "nodeType": "ExpressionStatement",
                  "src": "1103:65:0"
                },
                {
                  "expression": {
                    "components": [
                      {
                        "expression": {
                          "id": 92,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 76,
                          "src": "1186:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DataEntry_$8_memory_ptr",
                            "typeString": "struct WitnessContract.DataEntry memory"
                          }
                        },
                        "id": 93,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1192:7:0",
                        "memberName": "creator",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3,
                        "src": "1186:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "expression": {
                          "id": 94,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 76,
                          "src": "1201:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DataEntry_$8_memory_ptr",
                            "typeString": "struct WitnessContract.DataEntry memory"
                          }
                        },
                        "id": 95,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1207:4:0",
                        "memberName": "data",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5,
                        "src": "1201:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "expression": {
                          "id": 96,
                          "name": "entry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 76,
                          "src": "1213:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_DataEntry_$8_memory_ptr",
                            "typeString": "struct WitnessContract.DataEntry memory"
                          }
                        },
                        "id": 97,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberLocation": "1219:9:0",
                        "memberName": "timestamp",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7,
                        "src": "1213:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 98,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "1185:44:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_address_$_t_string_memory_ptr_$_t_uint256_$",
                      "typeString": "tuple(address,string memory,uint256)"
                    }
                  },
                  "functionReturnParameters": 73,
                  "id": 99,
                  "nodeType": "Return",
                  "src": "1178:51:0"
                }
              ]
            },
            "functionSelector": "6e58d235",
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "retrieveDataEntry",
            "nameLocation": "948:17:0",
            "parameters": {
              "id": 66,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 65,
                  "mutability": "mutable",
                  "name": "_dataHash",
                  "nameLocation": "974:9:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 101,
                  "src": "966:17:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 64,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "966:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "965:19:0"
            },
            "returnParameters": {
              "id": 73,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 68,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 101,
                  "src": "1006:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 67,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1006:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 70,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 101,
                  "src": "1015:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 69,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1015:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 72,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 101,
                  "src": "1030:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 71,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1030:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1005:30:0"
            },
            "scope": 102,
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "WitnessContract",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "linearizedBaseContracts": [
          102
        ],
        "name": "WitnessContract",
        "nameLocation": "67:15:0",
        "scope": 103,
        "usedErrors": [],
        "usedEvents": [
          23
        ]
      }
    ],
    "license": "MIT"
  },
  "id": 0
}