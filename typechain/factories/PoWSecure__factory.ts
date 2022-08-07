/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PoWSecure, PoWSecureInterface } from "../PoWSecure";

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "payee",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Payed",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "getBalance",
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
        internalType: "address payable",
        name: "receiver",
        type: "address",
      },
    ],
    name: "pay",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040526102ad806100136000396000f3fe60806040526004361061002d5760003560e01c80630c11dedd1461003657806312065fe01461005257610034565b3661003457005b005b610050600480360381019061004b919061016e565b61007d565b005b34801561005e57600080fd5b50610067610151565b60405161007491906101a6565b60405180910390f35b60008173ffffffffffffffffffffffffffffffffffffffff163190506611c37937e0800081101561014d576000816611c37937e080006100bd91906101c1565b90508273ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610105573d6000803e3d6000fd5b5042818473ffffffffffffffffffffffffffffffffffffffff167fc4afcd8d38f903c1c3c8ab41a84f6df29cb7fb88e0d7121bc9633c15eb94af8660405160405180910390a4505b5050565b600047905090565b60008135905061016881610260565b92915050565b60006020828403121561018057600080fd5b600061018e84828501610159565b91505092915050565b6101a081610227565b82525050565b60006020820190506101bb6000830184610197565b92915050565b60006101cc82610227565b91506101d783610227565b9250828210156101ea576101e9610231565b5b828203905092915050565b600061020082610207565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b610269816101f5565b811461027457600080fd5b5056fea264697066735822122014e47775c7a44827bac0730ce054cca6babdec2388959a085c58e132f400171364736f6c63430008040033";

export class PoWSecure__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<PoWSecure> {
    return super.deploy(overrides || {}) as Promise<PoWSecure>;
  }
  getDeployTransaction(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PoWSecure {
    return super.attach(address) as PoWSecure;
  }
  connect(signer: Signer): PoWSecure__factory {
    return super.connect(signer) as PoWSecure__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoWSecureInterface {
    return new utils.Interface(_abi) as PoWSecureInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoWSecure {
    return new Contract(address, _abi, signerOrProvider) as PoWSecure;
  }
}