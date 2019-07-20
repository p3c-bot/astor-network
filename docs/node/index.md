---
title: Node
lang: en-US
---
![Astor Tiles](/tiles.png)

## Running an Astor Node (~30 Minutes)
To use the Astor network, you need to download a node. To install the node, complete the following steps:

1. `git clone https://github.com/antsankov/parity-ethereum.git`
1. `cd parity-ethereum && git checkout sha3`
1. `curl https://sh.rustup.rs -sSf | sh && source $HOME/.cargo/env`
1. (Linux) `sudo apt-get update && sudo apt-get install -y libudev-dev cmake clang`
1. `cargo build`
1. `./target/debug/parity --chain astor.json --author 0x061feb73A68127AE3772d322f4F54a5c691F5876 --jsonrpc-hosts all --jsonrpc-interface all --jsonrpc-cors '*'`

If you plan on mining, change the `--author` flag to the address you want to receive the ether to. For **Windows**, we recommend either installing a Ubuntu virtual machine or using the [Windows Linux Subsystem](https://docs.microsoft.com/en-us/windows/wsl/install-win10). Astor .exe coming soon.

To confirm you are fully synced see screenshot below:

![Network](/network.png)

## Analytics Websocket (~5 Minutes) 

This is an optional service that will share your node statistics [stats.astor.host](https://stats.astor.host). Make sure node is running first before starting the websocket.

1. `git clone https://github.com/antsankov/eth-net-intelligence-api.git && cd eth-net-intelligence-api`
1. (Linux) `sudo apt-get install -y nodejs npm && ln -s /usr/bin/nodejs /usr/bin/node`
1. `npm install`
1. `WS_SECRET=asdf WS_SERVER=https://rpc.astor.host/ INSTANCE_NAME="**MY_NAME**" npm run start`

## Running a SHA3 Miner (~5 Minutes) 

To mine on the network, you will need to install a miner. A miner connects directly to the node. We have created a CPU toy miner in Python. In the future, we will be working on an open source GPU version as well. Please consult [our resources](/mine/) if you are interested in optimizing SHA3 miners.

1. `git clone https://github.com/antsankov/ethereum-cpu-miner.git && cd ethereum-cpu-miner`
1. (on Linux) `sudo apt-get update && sudo apt-get install -y python3.6 python3-pip libssl-dev`
1. `pip3 install -r requirements.txt`
1. `python3.6 miner.py http://127.0.0.1:8545 -n 1000000000000000000000000000000`

The `-n` be the number of blocks you want to mine on the testnet.


## Transacting on the Astor Network

1. Install [Nifty Wallet](https://chrome.google.com/webstore/detail/nifty-wallet/jbdaocneiiinmjbjlgalhcelgbejmnid?hl=en) 
1. Setup the wallet and Connect Nifty Wallet to `http://localhost:8545`
![Nifty](/nifty.png)
1. If you are unable to run a local node, you can also select as a network `https://rpc.astor.host/node`
1. With Nifty wallet you can send or recieve aETC, and deploy contracts via [Remix](https://remix.ethereum.org)
1. There is also an [Astor Block explorer](https://explore.astor.host/) which you can use to analyze transactions.

## Analytics Web Server (Unnecessary - Only run if you need your own network stats page)

Only necessary if you would like to run your own network status webpage. This allows you to run your own [stats.astor.host](https://stats.astor.host).

1. `git clone https://github.com/antsankov/eth-netstats.git && cd eth-netstats`
1. `sudo apt install npm`
1. `npm install`
1. `npm install -g grunt-cli`
1. `grunt`
1. `WS_SECRET="asdf" npm start`