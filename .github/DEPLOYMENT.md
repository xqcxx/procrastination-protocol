# Environment Configuration Guide

This project supports multiple deployment environments.

## Available Environments

### Testnet
- Network: Stacks Testnet
- Purpose: Testing and development
- Contract deployment: Manual via Clarinet
- Frontend: Deploy to Vercel/Netlify with testnet configuration

### Mainnet
- Network: Stacks Mainnet
- Purpose: Production deployment
- Contract deployment: Manual via Clarinet (requires STX for fees)
- Frontend: Deploy to Vercel/Netlify with mainnet configuration

## Environment Variables

### Frontend (web/.env)

```bash
# Required
NEXT_PUBLIC_STACKS_NETWORK=testnet  # or mainnet
NEXT_PUBLIC_CONTRACT_ADDRESS=ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM

# Optional
NEXT_PUBLIC_ENABLE_ANALYTICS=false
```

## GitHub Secrets

Configure these secrets in your GitHub repository settings:

- `CONTRACT_ADDRESS`: Deployed contract address for the environment
- Additional secrets can be added as needed

## Deployment Process

### Testnet Deployment

1. Run tests: `npm test`
2. Deploy contracts: `clarinet deployments apply -p deployments/testnet.yaml`
3. Note contract addresses
4. Update `NEXT_PUBLIC_CONTRACT_ADDRESS` in frontend
5. Deploy frontend to hosting platform

### Mainnet Deployment

1. Ensure all tests pass
2. Audit contracts for security
3. Deploy to testnet first for verification
4. Deploy contracts: `clarinet deployments apply -p deployments/mainnet.yaml`
5. Update production environment variables
6. Deploy frontend to production

## Manual Deployment Trigger

Use GitHub Actions workflow dispatch to trigger deployments:

```bash
gh workflow run deploy.yml -f environment=testnet
```

Or via GitHub UI: Actions → Deploy to Testnet → Run workflow
