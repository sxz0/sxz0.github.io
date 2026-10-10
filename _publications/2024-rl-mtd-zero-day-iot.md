---
title: "RL and Fingerprinting to Select Moving Target Defense Mechanisms for Zero-Day Attacks in IoT"
collection: publications
category: manuscripts
permalink: /publication/2024-rl-mtd-zero-day-iot
excerpt: 'An online reinforcement learning framework that uses behavioral fingerprinting to select Moving Target Defense techniques mitigating zero-day attacks on single-board computers.'
date: 2024-05-15
venue: 'IEEE Transactions on Information Forensics and Security, 19, 5520–5529'
paperurl: 'https://doi.org/10.1109/TIFS.2024.3402055'
topics: iot-security
citation: 'Huertas Celdrán, Alberto, Sánchez Sánchez, Pedro Miguel, et al. (2024). "RL and Fingerprinting to Select Moving Target Defense Mechanisms for Zero-Day Attacks in IoT." <i>IEEE Transactions on Information Forensics and Security</i>, 19, 5520–5529.'
---

Cybercriminals are moving towards zero-day attacks affecting resource-constrained devices such as single-board computers (SBC). Assuming that perfect security is unrealistic, Moving Target Defense (MTD) is a promising approach to mitigate attacks by dynamically altering target attack surfaces. Still, selecting suitable MTD techniques for zero-day attacks is an open challenge. Reinforcement Learning (RL) could be an effective approach to optimize the MTD selection through trial and error, but the literature fails when i) evaluating the performance of RL and MTD solutions in real-world scenarios, ii) studying whether behavioral fingerprinting is suitable for representing SBC's states, and iii) calculating the consumption of resources in SBC. To improve these limitations, the work at hand proposes an online RL-based framework to learn the correct MTD mechanisms mitigating heterogeneous zero-day attacks in SBC. The framework considers behavioral fingerprinting to represent SBCs' states and RL to learn MTD techniques that mitigate each malicious state. It has been deployed on a real IoT crowdsensing scenario with a Raspberry Pi acting as a spectrum sensor. More in detail, the Raspberry Pi has been infected with different samples of command and control malware, rootkits, and ransomware to later select between four existing MTD techniques. A set of experiments demonstrated the suitability of the framework to learn proper MTD techniques mitigating all attacks (except a harmfulness rootkit) while consuming <1 MB of storage and utilizing <55% CPU and <80% RAM.
