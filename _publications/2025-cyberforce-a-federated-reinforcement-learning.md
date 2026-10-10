---
title: "CyberForce: A Federated Reinforcement Learning Framework for Malware Mitigation"
collection: publications
category: manuscripts
permalink: /publication/2025-cyberforce-a-federated-reinforcement-learning
excerpt: 'Recent research has shown that the integration of Reinforcement Learning (RL) with Moving Target Defense (MTD) can enhance cybersecurity in Internet-of-Things (IoT) devices. Nevertheless, the practicality of existing…'
date: 2025-07-01
venue: 'IEEE Transactions on Dependable and Secure Computing, 22(4), 4398-4411'
paperurl: 'https://doi.org/10.1109/TDSC.2025.3547005'
authors: 'Feng, Chao and Huertas Celdrán, Alberto and Sánchez Sánchez, Pedro Miguel and Kreischer, Jan and von der Assen, Jan and Bovet, Gérôme and Martínez Pérez, Gregorio and Stiller, Burkhard'
topics: federated-learning, iot-security
citation: 'Feng, Chao, Celdrán, Alberto Huertas, Sánchez Sánchez, Pedro Miguel, Kreischer, Jan, von der Assen, Jan, Bovet, Gérôme, Martínez Pérez, Gregorio, & Stiller, Burkhard. (2025). "CyberForce: A Federated Reinforcement Learning Framework for Malware Mitigation." <i>IEEE Transactions on Dependable and Secure Computing</i>, 22(4), 4398-4411.'
---

Recent research has shown that the integration of Reinforcement Learning (RL) with Moving Target Defense (MTD) can enhance cybersecurity in Internet-of-Things (IoT) devices. Nevertheless, the practicality of existing work is hindered by data privacy concerns associated with centralized data processing in RL, and the unsatisfactory time needed to learn right MTD techniques that are effective against a rising number of heterogeneous zero-day attacks. Thus, this work presents CyberForce, a framework that combines Federated and Reinforcement Learning (FRL) to collaboratively and privately learn suitable MTD techniques for mitigating zero-day attacks. CyberForce integrates device fingerprinting and anomaly detection to reward or penalize MTD mechanisms chosen by an FRL-based agent. The framework has been deployed and evaluated in a scenario consisting of ten physical devices of a real IoT platform affected by heterogeneous malware samples. A pool of experiments has demonstrated that CyberForce learns the MTD technique mitigating each attack faster than existing RL-based centralized approaches. In addition, when various devices are exposed to different attacks, CyberForce benefits from knowledge transfer, leading to enhanced performance and reduced learning time in comparison to recent works. Finally, different aggregation algorithms used during the agent learning process provide CyberForce with notable robustness to malicious attacks.
