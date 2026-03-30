import {
  Cl,
  cvToValue,
  fetchCallReadOnlyFunction,
  type ClarityValue,
} from "@stacks/transactions";

export type StacksNetwork = "mainnet" | "testnet" | "devnet" | "mocknet";

export const CONTRACT_NAME = "process-audit-log";

export type ContractIdentifier = {
  contractAddress: string;
  contractName?: string;
};

export type LogStepArgs = {
  workflowId: string;
  stepName: string;
  details: string;
};

export type LogApprovalArgs = {
  workflowId: string;
  approvalType: string;
  decision: string;
  note: string;
};

export type LogStatusChangeArgs = {
  workflowId: string;
  fromStatus: string;
  toStatus: string;
};

export type AttachReferenceArgs = {
  workflowId: string;
  refType: string;
  refId: string;
};

export type ContractInfo = {
  contract: string;
  version: string;
  stateless: boolean;
};

export function getContractId(contract: ContractIdentifier): string {
  return `${contract.contractAddress}.${contract.contractName ?? CONTRACT_NAME}`;
}

export function buildLogStepArgs(args: LogStepArgs): ClarityValue[] {
  return [
    Cl.stringAscii(args.workflowId),
    Cl.stringAscii(args.stepName),
    Cl.stringUtf8(args.details),
  ];
}

export function buildLogApprovalArgs(args: LogApprovalArgs): ClarityValue[] {
  return [
    Cl.stringAscii(args.workflowId),
    Cl.stringAscii(args.approvalType),
    Cl.stringAscii(args.decision),
    Cl.stringUtf8(args.note),
  ];
}

export function buildLogStatusChangeArgs(
  args: LogStatusChangeArgs
): ClarityValue[] {
  return [
    Cl.stringAscii(args.workflowId),
    Cl.stringAscii(args.fromStatus),
    Cl.stringAscii(args.toStatus),
  ];
}

export function buildAttachReferenceArgs(args: AttachReferenceArgs): ClarityValue[] {
  return [
    Cl.stringAscii(args.workflowId),
    Cl.stringAscii(args.refType),
    Cl.stringUtf8(args.refId),
  ];
}

export async function fetchContractInfo(
  contract: ContractIdentifier,
  network: StacksNetwork,
  senderAddress: string
): Promise<ContractInfo> {
  const response = await fetchCallReadOnlyFunction({
    contractAddress: contract.contractAddress,
    contractName: contract.contractName ?? CONTRACT_NAME,
    functionName: "get-contract-info",
    functionArgs: [],
    network,
    senderAddress,
  });

  return cvToValue(response) as ContractInfo;
}
