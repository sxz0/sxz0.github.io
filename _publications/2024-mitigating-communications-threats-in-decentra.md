---
title: "Mitigating communications threats in decentralized federated learning through moving target defense"
collection: publications
category: manuscripts
permalink: /publication/2024-mitigating-communications-threats-in-decentra
excerpt: 'The rise of Decentralized Federated Learning (DFL) has enabled the training of machine learning models across federated participants, fostering decentralized model aggregation and reducing dependence on a server.…'
date: 2024-01-28
venue: 'Wireless Networks, 30(9), 7407-7421'
paperurl: 'https://doi.org/10.1007/s11276-024-03667-8'
authors: 'Martínez Beltrán, Enrique Tomás and Sánchez Sánchez, Pedro Miguel and López Bernal, Sergio and Bovet, Gérôme and Gil Pérez, Manuel and Martínez Pérez, Gregorio and Huertas Celdrán, Alberto'
topics: federated-learning, iot-security
citation: 'Martínez Beltrán, Enrique Tomás, Sánchez Sánchez, Pedro Miguel, López Bernal, Sergio, Bovet, Gérôme, Gil Pérez, Manuel, Martínez Pérez, Gregorio, & Huertas Celdrán, Alberto. (2024). "Mitigating communications threats in decentralized federated learning through moving target defense." <i>Wireless Networks</i>, 30(9), 7407-7421.'
---

The rise of Decentralized Federated Learning (DFL) has enabled the training of machine learning models across federated participants, fostering decentralized model aggregation and reducing dependence on a server. However, this approach introduces unique communication security challenges that have yet to be thoroughly addressed in the literature. These challenges primarily originate from the decentralized nature of the aggregation process, the varied roles and responsibilities of the participants, and the absence of a central authority to oversee and mitigate threats. Addressing these challenges, this paper first delineates a comprehensive threat model focused on DFL communications. In response to these identified risks, this work introduces a security module to counter communication-based attacks for DFL platforms. The module combines security techniques such as symmetric and asymmetric encryption with Moving Target Defense (MTD) techniques, including random neighbor selection and IP/port switching. The security module is implemented in a DFL platform, Fedstellar, allowing the deployment and monitoring of the federation. A DFL scenario with physical and virtual deployments have been executed, encompassing three security configurations: (i) a baseline without security, (ii) an encrypted configuration, and (iii) a configuration integrating both encryption and MTD techniques. The effectiveness of the security module is validated through experiments with the MNIST dataset and eclipse attacks.The results showed an average F1 score of 95%, with the most secure configuration resulting in CPU usage peaking at 68% (± 9%) in virtual deployments and network traffic reaching 480.8 MB (± 18 MB), effectively mitigating risks associated with eavesdropping or eclipse attacks.
