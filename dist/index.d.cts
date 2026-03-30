import { ClarityValue } from '@stacks/transactions';

type StacksNetwork = "mainnet" | "testnet" | "devnet" | "mocknet";
declare const CONTRACT_NAME = "process-audit-log";
type ContractIdentifier = {
    contractAddress: string;
    contractName?: string;
};
type LogStepArgs = {
    workflowId: string;
    stepName: string;
    details: string;
};
type LogApprovalArgs = {
    workflowId: string;
    approvalType: string;
    decision: string;
    note: string;
};
type LogStatusChangeArgs = {
    workflowId: string;
    fromStatus: string;
    toStatus: string;
};
type AttachReferenceArgs = {
    workflowId: string;
    refType: string;
    refId: string;
};
type ContractInfo = {
    contract: string;
    version: string;
    stateless: boolean;
};
declare function getContractId(contract: ContractIdentifier): string;
declare function buildLogStepArgs(args: LogStepArgs): ClarityValue[];
declare function buildLogApprovalArgs(args: LogApprovalArgs): ClarityValue[];
declare function buildLogStatusChangeArgs(args: LogStatusChangeArgs): ClarityValue[];
declare function buildAttachReferenceArgs(args: AttachReferenceArgs): ClarityValue[];
declare function fetchContractInfo(contract: ContractIdentifier, network: StacksNetwork, senderAddress: string): Promise<ContractInfo>;

export { type AttachReferenceArgs, CONTRACT_NAME, type ContractIdentifier, type ContractInfo, type LogApprovalArgs, type LogStatusChangeArgs, type LogStepArgs, type StacksNetwork, buildAttachReferenceArgs, buildLogApprovalArgs, buildLogStatusChangeArgs, buildLogStepArgs, fetchContractInfo, getContractId };
