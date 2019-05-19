---
title: Node
lang: en-US
---
## Running an Astor Node
To use the Astor network, you need to download a node. For the initial implementation we chose to use Parity, an Ethereum client written in Rust. To install the node, complete the following steps:

1. `$ git clone https://github.com/snissn/parity-ethereum.git`
1. `$ cd parity-ethereum && git checkout progpow_guts_hack`
1. (if on Mac) `$ brew install rust` 
1. (if on Linux) `$ sudo apt-get install rust`
1. `$ sh run.sh`

If you would like to modify the Parity configuration, specfically the `author` address you want to mine test ether to, change the `run.sh` file.

6. `$ ./target/debug/parity --chain mtihani.json`

## Using a Miner with Parity

If you would like to mine on the network, you will need to install a miner to connect to Parity (see below). If not, you can skip the steps below Currently, we have only created a CPU miner in Python, however we will be working on an open source GPU version as well. Please consult [our resources](/mine/) if you are interested in mining.

7. `$ git clone https://github.com/snissn/ethereum-cpu-miner.git`
8. `$ pip3 install -r requirements.txt`
9. `$ sh run.sh`

Make sure to change the `run.sh` to have the `-n` be the number of blocks you want to mine on the testnet. Screenshot below is succesful testnet mine to the author address.

10. Connect Metamask to `localhost:8545`

![](/success.png)
## Gathering System Analytics

To go even further and track the stats of your node you can follow the steps below:

10. TODO

![Network](/network.gif)
