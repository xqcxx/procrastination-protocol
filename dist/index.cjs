"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  CONTRACT_NAME: () => CONTRACT_NAME,
  buildAttachReferenceArgs: () => buildAttachReferenceArgs,
  buildLogApprovalArgs: () => buildLogApprovalArgs,
  buildLogStatusChangeArgs: () => buildLogStatusChangeArgs,
  buildLogStepArgs: () => buildLogStepArgs,
  fetchContractInfo: () => fetchContractInfo,
  getContractId: () => getContractId
});
module.exports = __toCommonJS(index_exports);
var import_transactions = require("@stacks/transactions");
var CONTRACT_NAME = "process-audit-log";
function getContractId(contract) {
  return `${contract.contractAddress}.${contract.contractName ?? CONTRACT_NAME}`;
}
function buildLogStepArgs(args) {
  return [
    import_transactions.Cl.stringAscii(args.workflowId),
    import_transactions.Cl.stringAscii(args.stepName),
    import_transactions.Cl.stringUtf8(args.details)
  ];
}
function buildLogApprovalArgs(args) {
  return [
    import_transactions.Cl.stringAscii(args.workflowId),
    import_transactions.Cl.stringAscii(args.approvalType),
    import_transactions.Cl.stringAscii(args.decision),
    import_transactions.Cl.stringUtf8(args.note)
  ];
}
function buildLogStatusChangeArgs(args) {
  return [
    import_transactions.Cl.stringAscii(args.workflowId),
    import_transactions.Cl.stringAscii(args.fromStatus),
    import_transactions.Cl.stringAscii(args.toStatus)
  ];
}
function buildAttachReferenceArgs(args) {
  return [
    import_transactions.Cl.stringAscii(args.workflowId),
    import_transactions.Cl.stringAscii(args.refType),
    import_transactions.Cl.stringUtf8(args.refId)
  ];
}
async function fetchContractInfo(contract, network, senderAddress) {
  const response = await (0, import_transactions.fetchCallReadOnlyFunction)({
    contractAddress: contract.contractAddress,
    contractName: contract.contractName ?? CONTRACT_NAME,
    functionName: "get-contract-info",
    functionArgs: [],
    network,
    senderAddress
  });
  return (0, import_transactions.cvToValue)(response);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CONTRACT_NAME,
  buildAttachReferenceArgs,
  buildLogApprovalArgs,
  buildLogStatusChangeArgs,
  buildLogStepArgs,
  fetchContractInfo,
  getContractId
});
