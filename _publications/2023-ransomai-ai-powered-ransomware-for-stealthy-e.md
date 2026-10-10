---
title: "RansomAI: AI-Powered Ransomware for Stealthy Encryption"
collection: publications
category: conferences
permalink: /publication/2023-ransomai-ai-powered-ransomware-for-stealthy-e
excerpt: 'Cybersecurity solutions have shown promising performance when detecting ransomware samples that use fixed algorithms and encryption rates. However, due to the current explosion of Artificial Intelligence (AI), sooner…'
date: 2023-12-04
venue: 'GLOBECOM 2023 - 2023 IEEE Global Communications Conference, 2578-2583'
paperurl: 'https://doi.org/10.1109/GLOBECOM54140.2023.10437393'
authors: 'von der Assen, Jan and Huertas Celdrán, Alberto and Luechinger, Janik and Sánchez Sánchez, Pedro Miguel and Bovet, Gérôme and Martínez Pérez, Gregorio and Stiller, Burkhard'
topics: iot-security
citation: 'von der Assen, Jan, Celdrán, Alberto Huertas, Luechinger, Janik, Sánchez Sánchez, Pedro Miguel, Bovet, Gérôme, Martínez Pérez, Gregorio, & Stiller, Burkhard. (2023). "RansomAI: AI-Powered Ransomware for Stealthy Encryption." <i>GLOBECOM 2023 - 2023 IEEE Global Communications Conference</i>, 2578-2583.'
---

Cybersecurity solutions have shown promising performance when detecting ransomware samples that use fixed algorithms and encryption rates. However, due to the current explosion of Artificial Intelligence (AI), sooner than later, ransomware, and malware in general, will incorporate AI techniques to intelligently and dynamically adapt its behavior to be undetected. It might result in ineffective and obsolete cybersecurity solutions, but the literature lacks AI-powered ransomware samples to verify it. Thus, this work proposes RansomAI, a Reinforcement Learning-based framework that can be integrated into existing ransomware samples to adapt their encryption behavior and stay stealthy while encrypting files. RansomAI presents an agent that learns the best encryption algorithm, rate, and duration that minimizes its detection (using a reward mechanism and a fingerprinting intelligent detection system) while maximizing its damage. The proposed framework was validated with Ransomware-PoC, a ransomware that infected a Raspberry Pi 4 acting as a crowdsensor. A pool of experiments with Deep Q-Learning and Isolation Forest (deployed on the agent and detection system, respectively) has demonstrated that RansomAI evades the detection of Ransomware-PoC affecting the Raspberry Pi 4 in a few minutes with >90% accuracy.
