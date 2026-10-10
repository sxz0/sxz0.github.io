---
title: "Sentinel: An Aggregation Function to Secure Decentralized Federated Learning"
collection: publications
category: conferences
permalink: /publication/2024-sentinel-dfl
excerpt: 'Sentinel is a defense against poisoning attacks in decentralized federated learning, based on a three-step aggregation protocol of similarity filtering, bootstrap validation, and normalization.'
date: 2024-10-19
venue: 'European Conference on Artificial Intelligence (ECAI) 2024'
paperurl: 'https://doi.org/10.3233/FAIA240686'
topics: federated-learning, iot-security
citation: 'Feng, Chao, Huertas Celdrán, Alberto, Baltensperger, Janosch, Martínez Beltrán, Enrique Tomás, Sánchez Sánchez, Pedro Miguel, Bovet, Gérôme, & Stiller, Burkhard. (2024). "Sentinel: An Aggregation Function to Secure Decentralized Federated Learning." In <i>ECAI 2024</i>, Frontiers in Artificial Intelligence and Applications, 392, 1760–1767. IOS Press.'
---

Decentralized Federated Learning (DFL) emerges as an innovative paradigm to train collaborative models, addressing the single point of failure limitation. However, the security and trustworthiness of FL and DFL are compromised by poisoning attacks, negatively impacting its performance. Existing defense mechanisms have been designed for centralized FL and they do not adequately exploit the particularities of DFL. Thus, this work introduces Sentinel, a defense strategy to counteract poisoning attacks in DFL. Sentinel leverages the accessibility of local data and defines a three-step aggregation protocol consisting of similarity filtering, bootstrap validation, and normalization to safeguard against malicious model updates. Sentinel has been evaluated with diverse datasets and data distributions. Besides, various poisoning attack types and threat levels have been verified. The results improve the state-of-the-art performance against both untargeted and targeted poisoning attacks when data follows an IID (Independent and Identically Distributed) configuration. Besides, under non-IID configuration, it is analyzed how performance degrades both for Sentinel and other state-of-the-art robust aggregation methods.
