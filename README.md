**Windows CLI**

npm init -y

-create package.json

install @solana/web3

-installs web3 node packages

node index.js

-run index.js

https://github.com/LearnWithArjun/solana-env-setup/blob/main/windows_setup.md

-install ubuntu CLI & solana


**Ubuntu CLI**

sudo apt-get install bzip2

-run above command before trying solana-test-validator

anchor init myepicproject --javascript

-start a boilerplate Solana project

solana-keygen new

-generate a local Solana wallet to work with

solana address

-return the generated public key

anchor test

-Compile and deploy the program to our local Solana network w/ our wallet. Call functions on our deployed program


**Solana library**

To be used via Ubuntu CLI (unsupported in Windows)

solana airdrop 2 H5tHsk6wemnYoPxRAQF7kZo23qy5WkN8maVMZGjPZeWb --url devnet

-airdrop 2 SOL

spl-doken create-token --url devnet

-create token instance. Returns token address and decimals

spl-token balance 6hRhjZEQi3jUCKp43yFsk5rNsM8bhJ6zwGpHV6KMaXrg --url devnet

-get token balance

spl-token mint 6hRhjZEQi3jUCKp43yFsk5rNsM8bhJ6zwGpHV6KMaXrg 1000 --url devnet

-mint tokens

spl-token supply 6hRhjZEQi3jUCKp43yFsk5rNsM8bhJ6zwGpHV6KMaXrg --url devnet

-get token supply

spl-token authorize 6hRhjZEQi3jUCKp43yFsk5rNsM8bhJ6zwGpHV6KMaXrg mint --disable --url devnet

-revoke token minting authority (can't be reverted!)

spl-token burn 6Fe3KkLgpechKHyKDPw7hyPtsj12XimezvL3hq9yGQye 100 --url devnet

-burn 100 tokens *use Token Account address, not Token address

spl-token transfer 6hRhjZEQi3jUCKp43yFsk5rNsM8bhJ6zwGpHV6KMaXrg 50 5sFrdxWHhht7TPdm95uLcEj3RuHimiy31Ziv9uUCG42G --url devnet

-transfer tokens to recipient

anchor build

-build project
