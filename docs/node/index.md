---
title: Node
lang: en-US
---
![Astor Tiles](/tiles.png)

## Running an Astor Node
To use the Astor network, you need to download a node. For the initial implementation we chose to use Parity, an Ethereum client written in Rust. To install the node, complete the following steps:

1. `git clone https://github.com/antsankov/parity-ethereum.git`
1. `cd parity-ethereum && git checkout sha3`
1. `curl https://sh.rustup.rs -sSf | sh && source $HOME/.cargo/env`
1. (Linux) `sudo apt-get update && sudo apt-get install libudev-dev cmake clang`
1. `sh run.sh`

If you would like to modify the Parity configuration, specfically the `author` address you want to mine test ether to, change the `run.sh` file.
1. `./target/debug/parity --chain astor.json`

## Using a Miner with Parity

If you would like to mine on the network, you will need to install a miner to connect to Parity (see below). If not, you can skip the steps below Currently, we have only created a CPU miner in Python, however we will be working on an open source GPU version as well. Please consult [our resources](/mine/) if you are interested in mining.

1. `git clone https://github.com/antsankov/ethereum-cpu-miner.git && cd ethereum-cpu-miner`
1. (on Linux) `sudo apt-get update && sudo apt-get install python3.6-dev python3-pip libssl-dev`
1. `pip3 install -r requirements.txt`
1. `sh run.sh`

Make sure to change the `run.sh` to have the `-n` be the number of blocks you want to mine on the testnet. Screenshot below is succesful testnet mine to the author address.

1. Connect Metamask to `localhost:8545`

![](/success.png)

## Analytics Client API (Optional)

1. `cd .. && git clone https://github.com/snissn/eth-net-intelligence-api.git && cd eth-net-intelligence-api`
1. `npm install`
1. `WS_SECRET=asdf npm run start`

## Analytics Web Server (Optional)
1. `git clone https://github.com/antsankov/eth-netstats.git && cd eth-netstats`
1. `sudo apt install npm`
1. `npm install`
1. `npm install -g grunt-cli`
1. `grunt`
1. `WS_SECRET="asdf" npm start`


![Network](/network.gif)
