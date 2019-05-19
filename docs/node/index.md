---
title: Node
lang: en-US
---

# Running a Node

To use the Astor network, you need to download a node. For the initial implementation we chose to use Parity, an Ethereum client written in Rust. To install the node, do the following step:

1. `$ git clone https://github.com/snissn/parity-ethereum.git`
2. `$ cd parity-ethereum && git checkout progpow_guts_hack`
3. (if on Mac) `$ brew install rust` (if on Linux) `$ sudo apt-get install rust`
4. `$ cargo build`
5. `$ ./target/debug/parity --chain mtihani.json`

If you would like to mine on the network, you will need to install a miner to connect to Parity (see below). If not, you can skip the steps below Currently, we have only created a CPU miner in Python, however we will be working on an open source GPU version as well.

6. `$ git clone https://github.com/snissn/ethereum-cpu-miner.git`
7. `$ pip3 install -r requirements.txt`
8. `$ sh run.sh`

To go even further and track the stats of your node you can follow the steps below:

9. TODO

![Network](/network.gif)
