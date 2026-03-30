# @rednevsky/stacks-process-audit-log-sdk

TypeScript SDK for interacting with the `process-audit-log` Clarity contract.

## Install

```bash
npm install @rednevsky/stacks-process-audit-log-sdk @stacks/transactions
```

## Usage

```ts
import {
  CONTRACT_NAME,
  getContractId,
  buildLogStepArgs,
  fetchContractInfo,
} from "@rednevsky/stacks-process-audit-log-sdk";

const contract = {
  contractAddress: "ST000000000000000000002AMW42H",
  contractName: CONTRACT_NAME,
};

const contractId = getContractId(contract);
const functionArgs = buildLogStepArgs({
  workflowId: "wf-001",
  stepName: "review",
  details: "Security review started",
});

const info = await fetchContractInfo(contract, "testnet", "ST1...");
```

Use `functionArgs` with wallet request flows (`stx_callContract`) or `makeContractCall`.
