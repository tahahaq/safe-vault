import web3 from './web3';

let abi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "key",
        "type": "uint256"
      },
      {
        "name": "_fileHash",
        "type": "string"
      }
    ],
    "name": "addData",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "fileHash",
        "type": "string"
      }
    ],
    "name": "DataAdded",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "dataSet",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

const contractAddress = '0x6a6ce4380bb9346e58c4891d697c779eb175beb2';

export default new web3.eth.Contract(abi, contractAddress);
