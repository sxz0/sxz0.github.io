---
title: "Robust Federated Learning for execution time-based device model identification under label-flipping attack"
collection: publications
category: manuscripts
permalink: /publication/2023-robust-federated-learning-for-execution-time
excerpt: 'The computing device deployment explosion experienced in recent years, motivated by the advances of technologies such as Internet-of-Things (IoT) and 5G, has led to a global scenario with increasing cybersecurity risks…'
date: 2023-01-02
venue: 'Cluster Computing, 27(1), 313-324'
paperurl: 'https://doi.org/10.1007/s10586-022-03949-w'
authors: 'Sánchez Sánchez, Pedro Miguel and Huertas Celdrán, Alberto and Buendía Rubio, José Rafael and Bovet, Gérôme and Martínez Pérez, Gregorio'
topics: federated-learning, iot-security
citation: 'Sánchez Sánchez, Pedro Miguel, Huertas Celdrán, Alberto, Buendía Rubio, José Rafael, Bovet, Gérôme, & Martínez Pérez, Gregorio. (2023). "Robust Federated Learning for execution time-based device model identification under label-flipping attack." <i>Cluster Computing</i>, 27(1), 313-324.'
---

The computing device deployment explosion experienced in recent years, motivated by the advances of technologies such as Internet-of-Things (IoT) and 5G, has led to a global scenario with increasing cybersecurity risks and threats. Among them, device spoofing and impersonation cyberattacks stand out due to their impact and, usually, low complexity required to be launched. To solve this issue, several solutions have emerged to identify device models and types based on the combination of behavioral fingerprinting and Machine/Deep Learning (ML/DL) techniques. However, these solutions are not appropriate for scenarios where data privacy and protection are a must, as they require data centralization for processing. In this context, newer approaches such as Federated Learning (FL) have not been fully explored yet, especially when malicious clients are present in the scenario setup. The present work analyzes and compares the device model identification performance of a centralized DL model with an FL one while using execution time-based events. For experimental purposes, a dataset containing execution-time features of 55 Raspberry Pis belonging to four different models has been collected and published. Using this dataset, the proposed solution achieved 0.9999 accuracy in both setups, centralized and federated, showing no performance decrease while preserving data privacy. Later, the impact of a label-flipping attack during the federated model training is evaluated using several aggregation mechanisms as countermeasures. Zeno and coordinate-wise median aggregation show the best performance, although their performance greatly degrades when the percentage of fully malicious clients (all training samples poisoned) grows over 50%.
