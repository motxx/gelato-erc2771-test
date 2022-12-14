/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { DemoERC20, DemoERC20Interface } from "../../contracts/DemoERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialHolder",
        type: "address",
      },
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "forwarder",
        type: "address",
      },
    ],
    name: "isTrustedForwarder",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200102b3803806200102b8339810160408190526200003491620001c5565b8060405180604001604052806009815260200168044656d6f45524332360bc1b8152506040518060400160405280600381526020016244544b60e81b8152508160039081620000849190620002a1565b506004620000938282620002a1565b5050506001600160a01b0316608052620000b3826402540be400620000bb565b505062000395565b6001600160a01b038216620001165760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200012a91906200036d565b90915550506001600160a01b03821660009081526020819052604081208054839290620001599084906200036d565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b505050565b80516001600160a01b0381168114620001c057600080fd5b919050565b60008060408385031215620001d957600080fd5b620001e483620001a8565b9150620001f460208401620001a8565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200022857607f821691505b6020821081036200024957634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001a357600081815260208120601f850160051c81016020861015620002785750805b601f850160051c820191505b81811015620002995782815560010162000284565b505050505050565b81516001600160401b03811115620002bd57620002bd620001fd565b620002d581620002ce845462000213565b846200024f565b602080601f8311600181146200030d5760008415620002f45750858301515b600019600386901b1c1916600185901b17855562000299565b600085815260208120601f198616915b828110156200033e578886015182559484019460019091019084016200031d565b50858210156200035d5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b808201808211156200038f57634e487b7160e01b600052601160045260246000fd5b92915050565b608051610c73620003b86000396000818161017101526109f50152610c736000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c8063572b6c0511610081578063a457c2d71161005b578063a457c2d7146101ec578063a9059cbb146101ff578063dd62ed3e1461021257600080fd5b8063572b6c051461016157806370a08231146101ae57806395d89b41146101e457600080fd5b806323b872dd116100b257806323b872dd1461012c578063313ce5671461013f578063395093511461014e57600080fd5b806306fdde03146100d9578063095ea7b3146100f757806318160ddd1461011a575b600080fd5b6100e1610258565b6040516100ee9190610a60565b60405180910390f35b61010a610105366004610af5565b6102ea565b60405190151581526020016100ee565b6002545b6040519081526020016100ee565b61010a61013a366004610b1f565b61030e565b604051601281526020016100ee565b61010a61015c366004610af5565b61033c565b61010a61016f366004610b5b565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff90811691161490565b61011e6101bc366004610b5b565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6100e161039b565b61010a6101fa366004610af5565b6103aa565b61010a61020d366004610af5565b61048d565b61011e610220366004610b7d565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b60606003805461026790610bb0565b80601f016020809104026020016040519081016040528092919081815260200182805461029390610bb0565b80156102e05780601f106102b5576101008083540402835291602001916102e0565b820191906000526020600020905b8154815290600101906020018083116102c357829003601f168201915b5050505050905090565b6000806102f56104a5565b90506103028185856104b4565b60019150505b92915050565b6000806103196104a5565b9050610326858285610667565b61033185858561073e565b506001949350505050565b6000806103476104a5565b905061030281858561038c858973ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b6103969190610c03565b6104b4565b60606004805461026790610bb0565b6000806103b56104a5565b73ffffffffffffffffffffffffffffffffffffffff81811660009081526001602090815260408083209389168352929052205490915083811015610480576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b61033182868684036104b4565b6000806104986104a5565b905061030281858561073e565b60006104af6109f1565b905090565b73ffffffffffffffffffffffffffffffffffffffff8316610556576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610477565b73ffffffffffffffffffffffffffffffffffffffff82166105f9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610477565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610738578181101561072b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610477565b61073884848484036104b4565b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166107e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610477565b73ffffffffffffffffffffffffffffffffffffffff8216610884576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610477565b73ffffffffffffffffffffffffffffffffffffffff83166000908152602081905260409020548181101561093a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610477565b73ffffffffffffffffffffffffffffffffffffffff80851660009081526020819052604080822085850390559185168152908120805484929061097e908490610c03565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516109e491815260200190565b60405180910390a3610738565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163303610a5b57507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec36013560601c90565b503390565b600060208083528351808285015260005b81811015610a8d57858101830151858201604001528201610a71565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610af057600080fd5b919050565b60008060408385031215610b0857600080fd5b610b1183610acc565b946020939093013593505050565b600080600060608486031215610b3457600080fd5b610b3d84610acc565b9250610b4b60208501610acc565b9150604084013590509250925092565b600060208284031215610b6d57600080fd5b610b7682610acc565b9392505050565b60008060408385031215610b9057600080fd5b610b9983610acc565b9150610ba760208401610acc565b90509250929050565b600181811c90821680610bc457607f821691505b602082108103610bfd577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b80820180821115610308577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fdfea264697066735822122065e2ec2b24eba801d8f166851f9fdf3f9ca6831e9b6d2b684a01e920cd390e4164736f6c63430008110033";

type DemoERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DemoERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DemoERC20__factory extends ContractFactory {
  constructor(...args: DemoERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialHolder: PromiseOrValue<string>,
    forwarder: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DemoERC20> {
    return super.deploy(
      initialHolder,
      forwarder,
      overrides || {}
    ) as Promise<DemoERC20>;
  }
  override getDeployTransaction(
    initialHolder: PromiseOrValue<string>,
    forwarder: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      initialHolder,
      forwarder,
      overrides || {}
    );
  }
  override attach(address: string): DemoERC20 {
    return super.attach(address) as DemoERC20;
  }
  override connect(signer: Signer): DemoERC20__factory {
    return super.connect(signer) as DemoERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DemoERC20Interface {
    return new utils.Interface(_abi) as DemoERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DemoERC20 {
    return new Contract(address, _abi, signerOrProvider) as DemoERC20;
  }
}
