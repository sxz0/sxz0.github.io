---
title: "Studying the Robustness of Anti-Adversarial Federated Learning Models Detecting Cyberattacks in IoT Spectrum Sensors"
collection: publications
category: manuscripts
permalink: /publication/2024-tdsc-robustness-fl-spectrum
excerpt: 'Dataset and experimental study on the robustness of federated learning models detecting SSDF attacks in IoT spectrum sensors under data and model poisoning.'
date: 2024-03-01
venue: 'IEEE Transactions on Dependable and Secure Computing, 21(2), 573–584'
paperurl: 'https://doi.org/10.1109/TDSC.2022.3204535'
citation: 'Sánchez Sánchez, Pedro Miguel et al. (2024). "Studying the Robustness of Anti-Adversarial Federated Learning Models Detecting Cyberattacks in IoT Spectrum Sensors." <i>IEEE Transactions on Dependable and Secure Computing</i>, 21(2), 573–584.'
---

Device fingerprinting combined with Machine and Deep Learning (ML/DL) report promising performance when detecting cyberattacks targeting data managed by resource-constrained spectrum sensors. However, the amount of data needed to train models and the privacy concerns of such scenarios limit the applicability of centralized ML/DL-based approaches. Federated learning (FL) addresses these limitations by creating federated and privacy-preserving models. However, FL is vulnerable to malicious participants, and the impact of adversarial attacks on federated models detecting spectrum sensing data falsification (SSDF) attacks on spectrum sensors has not been studied. To address this challenge, the first contribution of this work is the creation of a novel dataset suitable for FL and modeling the behavior (usage of CPU, memory, or file system, among others) of resource-constrained spectrum sensors affected by different SSDF attacks. The second contribution is a pool of experiments analyzing and comparing the robustness of federated models according to i) three families of spectrum sensors, ii) eight SSDF attacks, iii) four scenarios dealing with unsupervised (anomaly detection) and supervised (binary classification) federated models, iv) up to 33% of malicious participants implementing data and model poisoning attacks, and v) four aggregation functions acting as anti-adversarial mechanisms to increase the models robustness.
