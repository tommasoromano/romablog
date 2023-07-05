---
title: 'Multi-Layer Perceptons (MLP)'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/assets/blog/midj_1.jpg'
date: '2023-06-19T05:35:07.322Z'
author:
  name: JJ Kasper
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/midj_1.jpg'
---

Un **r-layer perceptron** è una **Feed-Forward Network** con una **struttura strettamente a livelli**. Ogni livello riceve input solo da neuroni che appartengono al livello precedente e manda input solo a neuroni del livello seguente, l’ultimo livello manda output al mondo esterno. Questo evita il problema delle ri-computazioni. La struttura a layer di una MLP si può descrivere con una **matrice di pesi**: 

### Functions
- **Fnet**: La funzione di input di ogni neurone nascosto e ogni neurone di output è la **weighted sum** dei suoi input. (function)
- **Fact**: La funzione di attivazione di ogni neurone nascosto è la **sigmoid function** che è una funzione monotona non-decrescente.
- **Fout**: La funzione di attivazione di ogni neurone output è una funzione sigmoide o una funzione lineare

(img step, semi-linear, sine until saturat, logistic, bipolar func)

### Universal Approximator
Funzione a valori reali di learning e representing f:Rn—>R
Possiamo approssimare una data funzione con una funzione a gradino.
Costruiamo una rete neurale che ne calcoli la step function.
Qualunque funzione **Riemann-integrabile** può essere approssimata con una certa accuratezza da un perceptron a quattro livelli.
Non è la forma della funzione di attivazione, ma la struttura a livelli della feedforward neural network che rende il multi-layer perceptron un **universal approximator**.
Il numero di neuroni è arbitrario (in base ai gradini/accuratezza).

## Training Multi-Layer Perceptron
Seguiamo il principio della linear regression, cerchiamo di trovare il **minimo di una funzione di errore** per trovare l’insieme di pesi migliore
- **Logistic regression** funziona solo per perceptron a due livelli
- Approccio generale: **gradient descent**

