---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<nav class="section-nav" aria-label="CV sections">
  <a href="#work-experience">Experience</a>
  <a href="#education">Education</a>
  <a href="#research">Research</a>
  <a href="#awards-and-achievements">Awards</a>
  <a href="#skills">Skills</a>
  <a href="#service-and-volunteering">Service</a>
  <a href="#publications">Publications</a>
  <a href="#conferences-and-talks">Talks</a>
</nav>

Data Scientist building production recommender systems at Roche, where I own personalisation for global Diagnostics sales teams. PhD Cum Laude (University of Murcia, armasuisse S&T collaboration) on ML-based detection of compromised and spoofed devices, including adversarial attacks and defences against detection models. I followed as a postdoc on distributed and trustworthy AI, spanning Federated Learning, security, and model explainability. National Young Researcher Award in Computer Science, 2024.

Work experience
======
* Sept 2025 – Now: **Data Scientist, Roche** (Madrid, Spain)
  * Designed and deployed an AI recommender system for global Roche Diagnostics sales teams, directly supporting new sales opportunities and revenue growth
  * Built the full modelling loop in production: candidate generation, ranking, feature pipelines over customer, product and sales data, plus versioning, monitoring and scheduled retraining

* Nov 2024 – Sept 2025: **Senior Researcher, Funditec** (Advantx Technology Foundation, Madrid, Spain)
  * Led ML/DL and cybersecurity research across European and National projects, contributing to proposal writing and technical execution from grant acquisition through delivery

* Feb 2024 – Nov 2024: **Postdoctoral Researcher, University of Murcia**
  * Developed novel Federated Learning methods and trustworthy AI frameworks in direct collaboration with armasuisse S&T (Switzerland), working on AI robustness, privacy, explainability and fairness
  * Drove research contributions to two funded EU projects: EU-GUARDIAN (European Defence Fund) and ROBUST-6G (Horizon Europe)

* Sept–Dec 2021 & 2022: **Visiting Researcher, Cyber-Defence Campus - armasuisse S&T** (Thun, Switzerland)
  * Two research residencies (6 months total), producing results that fed into PhD thesis publications and an ongoing armasuisse collaboration

* Sept 2019 – Feb 2024: **Predoctoral Researcher, University of Murcia**
  * armasuisse S&T-funded research on IoT device fingerprinting and adversarial attacks using ML/DL, culminating in a Cum Laude PhD, a national award, and 12+ peer-reviewed publications

<br>

Education
======
* **Ph.D. in Computer Science**, Cum Laude. University of Murcia, Sept 2019 – Feb 2024
  * Thesis: Identical IoT device identification via hardware performance fingerprinting and Machine Learning
  * Supported by armasuisse S&T, also involved in the EU-GUARDIAN EDF and 5GZORRO H2020 projects
* **M.Sc. in Computer Science**, 9.07/10. University of Murcia, Sept 2018 – June 2019
  * Thesis: Securing Smart Offices through an Intelligent and Multi-device Continuous Authentication System
* **B.Sc. in Computer Science**, 8.04/10. University of Murcia, Sept 2014 – June 2018
  * Graduated with honors. Networking Specialization
  * Thesis: Continuous authentication for mobile devices

<br>

Research
======
* **{{ site.h_index }} h-index** (+20 JCR journals, +10 confs, +4 chapters). Relevant research on Federated Learning, applied ML/DL in IoT behavior security, and AI Trustworthiness. Updated publication list in [Google Scholar](https://scholar.google.com/citations?user=RMS2xxkAAAAJ&hl=en)
* Contributor to [NEBULA](https://github.com/CyberDataLab/nebula), an open source platform for decentralized model training, and to the EU-GUARDIAN (EDF), ROBUST-6G and 5G-ZORRO (Horizon) projects

<br>

Awards and Achievements
======
* **National Young Researcher Award in Computer Science 2024** – Scientific Society of Computer Science of Spain (SCIE) and BBVA Foundation [Link](https://www.fbbva.es/galardonados/pedro-miguel-sanchez-sanchez/)
* **Outstanding PhD Thesis Award** 2024 – Best Computer Science PhD Thesis of 2024 at the University of Murcia
* Elsevier **Computer Networks Best Paper Award** 2024 – "Federated learning for malware detection in IoT devices", a collaboration with EPFL, UZH, and CYD Campus
* **Stanford/Elsevier World's Top 2% Scientists, Single Year** 2025
* Udacity Secure and Private AI Nanodegree Scholarship (Facebook), 2019

<br>

Skills
======
* Federated Learning
* Recommender Systems
* AI Trustworthiness
* Machine/Deep Learning
* Security
* IoT
* Programming and Frameworks:
  * Python, Bash, C/C++
  * Keras, PyTorch, scikit-learn
  * AWS SageMaker, Docker, Git
* Courses:
  * HuggingFace AI Agents
  * HuggingFace NLP
  * HuggingFace Computer Vision

<br>

Service and Volunteering
======
* Conference committee: ECAI'24 '25
* Conference volunteer/grant recipient: AAAI’23, ACM SIGCOMM’23, IEEE NOMS’22

<br>

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

<br>

Conferences and Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>

