# Gelato ERC2771 Test

## Commands

### Compile contract

```
yarn compile
```

### Deploy contract

```
yarn deploy:arbitrum
```

### Verify contract on Arbiscan

```
yarn verify:arbitrum
```

## Environment

* `DEPLOYER_PK`: Deployer private key.
* `ALCHEMY_ID`: Alchemy API key.
* `ARBISCAN_API_KEY`: Arbiscan API key.
* `INITIAL_HOLDER_ADDR`: DemoERC20 initial holder.
* `FORWARDER_ADDR`: Gelato networks official trusted forwarder. See https://docs.gelato.network/developer-products/gelato-relay/quick-start/relaywithsponsoreduserauthcall/erc-2771
