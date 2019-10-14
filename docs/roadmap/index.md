---
title: Roadmap
lang: en-US
---

# Astor Roadmap


![](/roadmap.png)

![](/spec.png)

This standard uses the following Keccak256 control hash - if a device can produce this hash it will work for ECIP1049: 

`keccak256("ETC")= 49b019f3320b92b2244c14d064de7e7b09dbc4c649e8650e7aa17e5ce7253294`

![](/control.png)

<div class="featured">Astor Place is a local station on the Lexington Avenue Line of the New York City Subway. Completed in 1904, it is one of the original twenty-eight stations in the system.</div>

**Achievements so far:**
- [ECIP-1049 Moved to Accepted](https://github.com/ethereumclassic/ECIPs/issues/13)
*January 2019*
- [Create Astor Full Node Implementation](https://github.com/antsankov/parity-ethereum/tree/sha3) *May 2019*
- [First CPU SHA3 Miner in Python](https://github.com/antsankov/ethereum-cpu-miner) *May 2019*
- [Offical Astor Site Launch](http://astor.host)
*May 2019*

## Near Term Goals (2019 - 2020)
**What we are trying to achieve right now:**
- [Create P2P Mineable Astor Testnet](https://stats.astor.host) *May 2019*
- Integrate in more than one Ethereum client (Geth, Mantis)
- [Connect Astor to a block explorer](https://explore.astor.host) *May 2019*
- Create an open-source GPU Miner.
- Flyclient compatibility.
- Security audit of Parity implementation.
- Joule Token merge mining.

## Long Term Goals (2020 and Beyond)
**What we hope to achieve in the future:**
- Launch on Ethereum Classic (ETC) mainnet.
- Open source FPGA design for SHA3 mining.
- SHA3 Mining Pool software.
- Built in SHA3 instruction on mobile phones.  

## Joule Token Concept
Because Keccak is compute and not memory bound, the hash rate  of a network is proportional to the number of watts being used to secure the network. Over time this can be tallied to determine the proportional number of Joules that went into securing the network. We will be deploying an ERC-20 token that will be distributed to miners if they call a method to generate tokens. These Joule tokens will be inflationary and be proportionally distributed to the hash rate applied to secure the network. These tokens will be stable coins of their own kind, stable relative to the price of creating hash power.

![](/joule.png)