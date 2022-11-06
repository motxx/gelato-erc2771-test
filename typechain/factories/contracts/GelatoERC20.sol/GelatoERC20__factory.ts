/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  GelatoERC20,
  GelatoERC20Interface,
} from "../../../contracts/GelatoERC20.sol/GelatoERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialHolder",
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
  "0x60806040523480156200001157600080fd5b506040516200164c3803806200164c8339810160408190526200003491620001a0565b60405180604001604052806009815260200168044656d6f45524332360bc1b8152506040518060400160405280600381526020016244544b60e81b815250816003908162000083919062000276565b50600462000092828262000276565b505050620000ac816402540be400620000b360201b60201c565b506200036a565b6001600160a01b0382166200010e5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b806002600082825462000122919062000342565b90915550506001600160a01b038216600090815260208190526040812080548392906200015190849062000342565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b505050565b600060208284031215620001b357600080fd5b81516001600160a01b0381168114620001cb57600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620001fd57607f821691505b6020821081036200021e57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200019b57600081815260208120601f850160051c810160208610156200024d5750805b601f850160051c820191505b818110156200026e5782815560010162000259565b505050505050565b81516001600160401b03811115620002925762000292620001d2565b620002aa81620002a38454620001e8565b8462000224565b602080601f831160018114620002e25760008415620002c95750858301515b600019600386901b1c1916600185901b1785556200026e565b600085815260208120601f198616915b828110156200031357888601518255948401946001909101908401620002f2565b5085821015620003325787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b808201808211156200036457634e487b7160e01b600052601160045260246000fd5b92915050565b6112d2806200037a6000396000f3fe608060405234801561001057600080fd5b50600436106100c95760003560e01c80633950935111610081578063a457c2d71161005b578063a457c2d714610194578063a9059cbb146101a7578063dd62ed3e146101ba57600080fd5b8063395093511461014357806370a082311461015657806395d89b411461018c57600080fd5b806318160ddd116100b257806318160ddd1461010f57806323b872dd14610121578063313ce5671461013457600080fd5b806306fdde03146100ce578063095ea7b3146100ec575b600080fd5b6100d6610200565b6040516100e3919061103a565b60405180910390f35b6100ff6100fa3660046110b0565b610292565b60405190151581526020016100e3565b6002545b6040519081526020016100e3565b6100ff61012f3660046110dc565b6102ac565b604051601281526020016100e3565b6100ff6101513660046110b0565b6102d2565b61011361016436600461111d565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6100d661031e565b6100ff6101a23660046110b0565b61032d565b6100ff6101b53660046110b0565b61040e565b6101136101c836600461113a565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b60606003805461020f90611173565b80601f016020809104026020016040519081016040528092919081815260200182805461023b90611173565b80156102885780601f1061025d57610100808354040283529160200191610288565b820191906000526020600020905b81548152906001019060200180831161026b57829003601f168201915b5050505050905090565b6000336102a081858561041c565b60019150505b92915050565b6000336102ba8582856105cf565b6102c58585856106a6565b60019150505b9392505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906102a090829086906103199087906111f5565b61041c565b60606004805461020f90611173565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168452909152812054909190838110156103f6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b610403828686840361041c565b506001949350505050565b6000336102a08185856106a6565b73ffffffffffffffffffffffffffffffffffffffff83166104be576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016103ed565b73ffffffffffffffffffffffffffffffffffffffff8216610561576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016103ed565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146106a05781811015610693576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103ed565b6106a0848484840361041c565b50505050565b73abcc9b596420a9e9172fd5938620e265a0f9df923314610749576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f47656c61746f52656c6179436f6e746578742e6f6e6c7947656c61746f52656c60448201527f617900000000000000000000000000000000000000000000000000000000000060648201526084016103ed565b610751610761565b61075c83838361079b565b505050565b61079961076c610a4e565b610774610a5d565b61077c610a84565b73ffffffffffffffffffffffffffffffffffffffff169190610aab565b565b73ffffffffffffffffffffffffffffffffffffffff831661083e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016103ed565b73ffffffffffffffffffffffffffffffffffffffff82166108e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016103ed565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610997576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016103ed565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152602081905260408082208585039055918516815290812080548492906109db9084906111f5565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a4191815260200190565b60405180910390a36106a0565b6000610a58610b14565b905090565b60008036610a6c602082611208565b610a7792829061121b565b810190610a589190611245565b60008036610a93604082611208565b610a9e92829061121b565b810190610a58919061111d565b80600003610ab857505050565b73ffffffffffffffffffffffffffffffffffffffff831673eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee14610b0a5761075c73ffffffffffffffffffffffffffffffffffffffff84168383610b23565b61075c8282610bb0565b60008036610a93606082611208565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905261075c908490610d0a565b80471015610c1a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e636500000060448201526064016103ed565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610c74576040519150601f19603f3d011682016040523d82523d6000602084013e610c79565b606091505b505090508061075c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d6179206861766520726576657274656400000000000060648201526084016103ed565b6000610d6c826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610e169092919063ffffffff16565b80519091501561075c5780806020019051810190610d8a919061125e565b61075c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016103ed565b6060610e258484600085610e2d565b949350505050565b606082471015610ebf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016103ed565b73ffffffffffffffffffffffffffffffffffffffff85163b610f3d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103ed565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051610f669190611280565b60006040518083038185875af1925050503d8060008114610fa3576040519150601f19603f3d011682016040523d82523d6000602084013e610fa8565b606091505b5091509150610fb8828286610fc3565b979650505050505050565b60608315610fd25750816102cb565b825115610fe25782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ed919061103a565b60005b83811015611031578181015183820152602001611019565b50506000910152565b6020815260008251806020840152611059816040850160208701611016565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b73ffffffffffffffffffffffffffffffffffffffff811681146110ad57600080fd5b50565b600080604083850312156110c357600080fd5b82356110ce8161108b565b946020939093013593505050565b6000806000606084860312156110f157600080fd5b83356110fc8161108b565b9250602084013561110c8161108b565b929592945050506040919091013590565b60006020828403121561112f57600080fd5b81356102cb8161108b565b6000806040838503121561114d57600080fd5b82356111588161108b565b915060208301356111688161108b565b809150509250929050565b600181811c9082168061118757607f821691505b6020821081036111c0577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808201808211156102a6576102a66111c6565b818103818111156102a6576102a66111c6565b6000808585111561122b57600080fd5b8386111561123857600080fd5b5050820193919092039150565b60006020828403121561125757600080fd5b5035919050565b60006020828403121561127057600080fd5b815180151581146102cb57600080fd5b60008251611292818460208701611016565b919091019291505056fea26469706673582212202a055911527e5039f2099cf38f9bca4da1e2c654869d9f37586984b20e181d3864736f6c63430008110033";

type GelatoERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GelatoERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GelatoERC20__factory extends ContractFactory {
  constructor(...args: GelatoERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialHolder: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GelatoERC20> {
    return super.deploy(initialHolder, overrides || {}) as Promise<GelatoERC20>;
  }
  override getDeployTransaction(
    initialHolder: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialHolder, overrides || {});
  }
  override attach(address: string): GelatoERC20 {
    return super.attach(address) as GelatoERC20;
  }
  override connect(signer: Signer): GelatoERC20__factory {
    return super.connect(signer) as GelatoERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GelatoERC20Interface {
    return new utils.Interface(_abi) as GelatoERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GelatoERC20 {
    return new Contract(address, _abi, signerOrProvider) as GelatoERC20;
  }
}