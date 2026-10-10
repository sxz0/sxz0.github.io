---
title: "Identification of IoT Devices Through Machine Learning and Hardware Fingerprints Based on Clock-Skew"
collection: publications
category: books
permalink: /publication/2024-identification-of-iot-devices-through-machine
excerpt: 'This chapter proposes a novel solution for identifying devices on a local network by analyzing differences in their internal clocks relative to a reference clock. The study consists of four stages: designing the…'
date: 2024-01-01
venue: 'Smart Sensors, Measurement and Instrumentation'
paperurl: 'https://doi.org/10.1007/978-3-031-68602-3_4'
authors: 'Sánchez Sánchez, Pedro Miguel and Huertas Celdrán, Alberto and Marín Sánchez, Sergio and Karmakar, Kallol Krishna and Bovet, Gérôme and Martínez Pérez, Gregorio'
topics: iot-security
citation: 'Sánchez Sánchez, Pedro Miguel, Celdrán, Alberto Huertas, Marín Sánchez, Sergio, Karmakar, Kallol Krishna, Bovet, Gérôme, & Pérez, Gregorio Martínez. (2024). "Identification of IoT Devices Through Machine Learning and Hardware Fingerprints Based on Clock-Skew." <i>Smart Sensors, Measurement and Instrumentation</i>.'
---

This chapter proposes a novel solution for identifying devices on a local network by analyzing differences in their internal clocks relative to a reference clock. The study consists of four stages: designing the solution architecture, obtaining data from five identical Raspberry Pi 4 Model B devices, conducting statistical analysis, and developing a machine learning model to automate device identification based on previously obtained statistical data. A client–server architecture was employed to control packet sending rates, and data captures were performed sequentially and in parallel. Deviations between timestamps and the reference device were analyzed, and only parallel data samples were used for further analysis due to their expected behavior. These samples were processed using a sliding window of 1 min, generating various statistical variables for machine learning. Various supervised classification and unsupervised anomaly detection algorithms were evaluated. Anomaly detection algorithms were trained individually for each device, and their performance was assessed separately. Tree-based models, specifically Decision Trees (95.92% Accuracy) and Random Forest (99.22% Accuracy), exhibited the best performance, while anomaly detection models showed lower results. Consequently, the Random Forest algorithm was selected and trained using all available data and previously utilized hyperparameters. The final model achieved 99.38% accuracy, 99.39% recall, and 99.38% f-score, suggesting the potential for automating the identification of identical devices remotely.
