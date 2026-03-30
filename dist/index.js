// src/index.ts
import {
  Cl,
  cvToValue,
  fetchCallReadOnlyFunction
} from "@stacks/transactions";
var CONTRACT_NAME = "process-audit-log";
function getContractId(contract) {
  return `${contract.contractAddress}.${contract.contractName ?? CONTRACT_NAME}`;
}
function buildLogStepArgs(args) {
  return [
    Cl.stringAscii(args.workflowId),
    Cl.stringAscii(args.stepName),
    Cl.stringUtf8(args.details)
  ];
}
function buildLogApprovalArgs(args) {
  return [
    Cl.stringAscii(args.workflowId),
    Cl.stringAscii(args.approvalType),
    Cl.stringAscii(args.decision),
    Cl.stringUtf8(args.note)
  ];
}
function buildLogStatusChangeArgs(args) {
  return [
    Cl.stringAscii(args.workflowId),
    Cl.stringAscii(args.fromStatus),
    Cl.stringAscii(args.toStatus)
  ];
}
function buildAttachReferenceArgs(args) {
  return [
    Cl.stringAscii(args.workflowId),
    Cl.stringAscii(args.refType),
    Cl.stringUtf8(args.refId)
  ];
}
async function fetchContractInfo(contract, network, senderAddress) {
  const response = await fetchCallReadOnlyFunction({
    contractAddress: contract.contractAddress,
    contractName: contract.contractName ?? CONTRACT_NAME,
    functionName: "get-contract-info",
    functionArgs: [],
    network,
    senderAddress
  });
  return cvToValue(response);
}
export {
  CONTRACT_NAME,
  buildAttachReferenceArgs,
  buildLogApprovalArgs,
  buildLogStatusChangeArgs,
  buildLogStepArgs,
  fetchContractInfo,
  getContractId
};
