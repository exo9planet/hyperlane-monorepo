/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockCore, MockCoreInterface } from "../MockCore";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "leafIndex",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "destinationAndNonce",
        type: "uint64",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "leaf",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "Dispatch",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "_destination",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "_recipient",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_body",
        type: "bytes",
      },
    ],
    name: "Enqueue",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_MESSAGE_BODY_BYTES",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "count",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_destination",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_recipient",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_body",
        type: "bytes",
      },
    ],
    name: "dispatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "home",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isReplica",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_item",
        type: "bytes32",
      },
    ],
    name: "queueContains",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "queueEnd",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "queueLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "root",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tree",
    outputs: [
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ef4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c8063ab91c7b011610081578063f6d161021161005b578063f6d16102146101e4578063fa31de01146101ec578063fd54b22814610270576100d4565b8063ab91c7b0146101b1578063b95a2001146101b9578063ebf0c717146101dc576100d4565b8063522ae002116100b2578063522ae002146101575780638d3638f41461015f5780639fa92f9d14610180576100d4565b806306661abd146100d95780632bef2892146100f35780635190bc5314610124575b600080fd5b6100e1610278565b60408051918252519081900360200190f35b6101106004803603602081101561010957600080fd5b503561027e565b604080519115158252519081900360200190f35b6101106004803603602081101561013a57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610291565b6100e1610297565b61016761029d565b6040805163ffffffff9092168252519081900360200190f35b6101886102a2565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100e16102a6565b610167600480360360208110156101cf57600080fd5b503563ffffffff166102b7565b6100e16102cf565b6100e16102db565b61026e6004803603606081101561020257600080fd5b63ffffffff8235169160208101359181019060608101604082013564010000000081111561022f57600080fd5b82018360208201111561024157600080fd5b8035906020019184600183028401116401000000008311171561026357600080fd5b5090925090506102e7565b005b6100e161058d565b60205490565b600061028b605383610593565b92915050565b50600190565b61080081565b600590565b3090565b60006102b2605361060d565b905090565b60866020526000908152604090205463ffffffff1681565b60006102b2600061064d565b60006102b26053610660565b61080081111561035857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f21746f6f20626967000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b63ffffffff808516600090815260866020526040812054909116906103d761037e61029d565b3373ffffffffffffffffffffffffffffffffffffffff1660001b84898989898080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061069d92505050565b805160208201209091506103ec600082610773565b6103ff6103f76102cf565b60539061087f565b508061040b88856108ec565b67ffffffffffffffff16600161041f610278565b037f1a2a870182b13cdb4a0ec2e16f96df5a0e20b1327d43564f7f0e62992a55bd6c856040518080602001828103825283818151815260200191508051906020019080838360005b8381101561047f578181015183820152602001610467565b50505050905090810190601f1680156104ac5780820380516001836020036101000a031916815260200191505b509250505060405180910390a4858763ffffffff167f75792710cca0c980daac207dc69865f88b53833bd172dcac111b2b42758202d6878760405180806020018281038252848482818152602001925080828437600083820152604051601f9091017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169092018290039550909350505050a3505063ffffffff948516600090815260866020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001660019290920190951617909355505050565b60205481565b81546000906fffffffffffffffffffffffffffffffff165b835470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1681116106035760008181526001850160205260409020548314156105fb57600191505061028b565b6001016105ab565b5060009392505050565b80546000906fffffffffffffffffffffffffffffffff7001000000000000000000000000000000008204811691166106458282610906565b949350505050565b600061028b8261065b610920565b610de1565b805470010000000000000000000000000000000090046fffffffffffffffffffffffffffffffff1660009081526001909101602052604090205490565b6060868686868686604051602001808763ffffffff1660e01b81526004018681526020018563ffffffff1660e01b81526004018463ffffffff1660e01b815260040183815260200182805190602001908083835b6020831061072e57805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016106f1565b6001836020036101000a038019825116818451168082178552505050505050905001965050505050505060405160208183030381529060405290509695505050505050565b602082015463ffffffff116107e957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6d65726b6c6520747265652066756c6c00000000000000000000000000000000604482015290519081900360640190fd5b6020820180546001019081905560005b6020811015610878578160011660011415610825578284826020811061081b57fe5b01555061087b9050565b83816020811061083157fe5b01548360405160200180838152602001828152602001925050506040516020818303038152906040528051906020012092506002828161086d57fe5b0491506001016107f9565b50fe5b5050565b81546fffffffffffffffffffffffffffffffff808216700100000000000000000000000000000000928390048216600101918216909202919091178355811561028b576fffffffffffffffffffffffffffffffff8116600090815260019390930160205260409092205590565b63ffffffff1660209190911b67ffffffff00000000161790565b60019103016fffffffffffffffffffffffffffffffff1690565b610928610e9f565b600081527fad3228b676f7d3cd4284a5443f17f1962b36e491b30a40b2405849e597ba5fb560208201527fb4c11951957c6f8f642c4af61cd6b24640fec6dc7fc607ee8206a99e92410d3060408201527f21ddb9a356815c3fac1026b6dec5df3124afbadb485c9ba5a3e3398a04b7ba8560608201527fe58769b32a1beaf1ea27375a44095a0d1fb664ce2dd358e7fcbfb78c26a1934460808201527f0eb01ebfc9ed27500cd4dfc979272d1f0913cc9f66540d7e8005811109e1cf2d60a08201527f887c22bd8750d34016ac3c66b5ff102dacdd73f6b014e710b51e8022af9a196860c08201527fffd70157e48063fc33c97a050f7f640233bf646cc98d9524c6b92bcf3ab56f8360e08201527f9867cc5f7f196b93bae1e27e6320742445d290f2263827498b54fec539f756af6101008201527fcefad4e508c098b9a7e1d8feb19955fb02ba9675585078710969d3440f5054e06101208201527ff9dc3e7fe016e050eff260334f18a5d4fe391d82092319f5964f2e2eb7c1c3a56101408201527ff8b13a49e282f609c317a833fb8d976d11517c571d1221a265d25af778ecf8926101608201527f3490c6ceeb450aecdc82e28293031d10c7d73bf85e57bf041a97360aa2c5d99c6101808201527fc1df82d9c4b87413eae2ef048f94b4d3554cea73d92b0f7af96e0271c691e2bb6101a08201527f5c67add7c6caf302256adedf7ab114da0acfe870d449a3a489f781d659e8becc6101c08201527fda7bce9f4e8618b6bd2f4132ce798cdc7a60e7e1460a7299e3c6342a579626d26101e08201527f2733e50f526ec2fa19a22b31e8ed50f23cd1fdf94c9154ed3a7609a2f1ff981f6102008201527fe1d3b5c807b281e4683cc6d6315cf95b9ade8641defcb32372f1c126e398ef7a6102208201527f5a2dce0a8a7f68bb74560f8f71837c2c2ebbcbf7fffb42ae1896f13f7c7479a06102408201527fb46a28b6f55540f89444f63de0378e3d121be09e06cc9ded1c20e65876d36aa06102608201527fc65e9645644786b620e2dd2ad648ddfcbf4a7e5b1a3a4ecfe7f64667a3f0b7e26102808201527ff4418588ed35a2458cffeb39b93d26f18d2ab13bdce6aee58e7b99359ec2dfd96102a08201527f5a9c16dc00d6ef18b7933a6f8dc65ccb55667138776f7dea101070dc8796e3776102c08201527f4df84f40ae0c8229d0d6069e5c8f39a7c299677a09d367fc7b05e3bc380ee6526102e08201527fcdc72595f74c7b1043d0e1ffbab734648c838dfb0527d971b602bc216c9619ef6103008201527f0abf5ac974a1ed57f4050aa510dd9c74f508277b39d7973bb2dfccc5eeb0618d6103208201527fb8cd74046ff337f0a7bf2c8e03e10f642c1886798d71806ab1e888d9e5ee87d06103408201527f838c5655cb21c6cb83313b5a631175dff4963772cce9108188b34ac87c81c41e6103608201527f662ee4dd2dd7b2bc707961b1e646c4047669dcb6584f0d8d770daf5d7e7deb2e6103808201527f388ab20e2573d171a88108e79d820e98f26c0b84aa8b2f4aa4968dbb818ea3226103a08201527f93237c50ba75ee485f4c22adf2f741400bdf8d6a9cc7df7ecae576221665d7356103c08201527f8448818bb4ae4562849e949e17ac16e0be16688e156b5cf15e098c627c0056a96103e082015290565b6020820154600090815b6020811015610e9757600182821c166000868360208110610e0857fe5b015490508160011415610e4b5780856040516020018083815260200182815260200192505050604051602081830303815290604052805190602001209450610e8d565b84868460208110610e5857fe5b602002015160405160200180838152602001828152602001925050506040516020818303038152906040528051906020012094505b5050600101610deb565b505092915050565b604051806104000160405280602090602082028036833750919291505056fea2646970667358221220f9f52be3545ad923b4da2f29b29eb582060deba8413083e28889d2f3592b7a7764736f6c63430007060033";

export class MockCore__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockCore> {
    return super.deploy(overrides || {}) as Promise<MockCore>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockCore {
    return super.attach(address) as MockCore;
  }
  connect(signer: Signer): MockCore__factory {
    return super.connect(signer) as MockCore__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockCoreInterface {
    return new utils.Interface(_abi) as MockCoreInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockCore {
    return new Contract(address, _abi, signerOrProvider) as MockCore;
  }
}
