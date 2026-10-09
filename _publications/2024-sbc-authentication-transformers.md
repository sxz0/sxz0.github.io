---
title: "Single-board device individual authentication based on hardware performance and autoencoder transformer models"
collection: publications
category: manuscripts
permalink: /publication/2024-sbc-authentication-transformers
excerpt: 'Individual authentication of identical IoT devices using hardware performance fingerprints and per-device Transformer autoencoders.'
date: 2024-02-01
venue: 'Computers & Security, 137, 103596'
paperurl: 'https://doi.org/10.1016/j.cose.2023.103596'
citation: 'Sánchez Sánchez, Pedro Miguel et al. (2024). "Single-board device individual authentication based on hardware performance and autoencoder transformer models." <i>Computers & Security</i>, 137, 103596.'
---

The proliferation of the Internet of Things (IoT) has led to the emergence of crowdsensing applications, where a multitude of interconnected devices collaboratively collect and analyze data. Ensuring the authenticity and integrity of the data collected by these devices is crucial for reliable decision-making and maintaining trust in the system. Traditional authentication methods are often vulnerable to attacks or can be easily duplicated, posing challenges to securing crowdsensing applications. Besides, current solutions leveraging device behavior are mostly focused on device identification, which is a simpler task than authentication. To address these issues, an individual IoT device authentication framework based on hardware behavior fingerprinting and Transformer autoencoders is proposed in this work. This solution leverages the inherent imperfections and variations in IoT device hardware to differentiate between devices with identical specifications. By monitoring and analyzing the behavior of key hardware components, such as the CPU, GPU, RAM, and Storage on devices, unique fingerprints for each device are created. The performance samples are considered as time series data and used to train outlier detection transformer models, one per device and aiming to model its normal data distribution. Then, the framework is validated within a spectrum crowdsensing system leveraging Raspberry Pi devices. After a pool of experiments, the model from each device is able to individually authenticate it between the 45 devices employed for validation. An average True Positive Rate (TPR) of 0.74+-0.13 and an average maximum False Positive Rate (FPR) of 0.06+-0.09 demonstrate the effectiveness of this approach in enhancing authentication, security, and trust in crowdsensing applications.
