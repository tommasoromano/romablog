---
title: 'Self-Organizing Maps'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/assets/blog/midj_1.jpg'
date: '2023-06-19T05:35:07.322Z'
author:
  name: JJ Kasper
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/midj_1.jpg'
---

È una neural network con struttura a 2-livelli, con metodo **free/unsupervised learning**.
È simile a una **Learning Vector Quantization Networks** ma: nell’output layer i nodi non sono tutti collegati tra loro, ci sono connessioni locali solo tra neuroni vicini: preso un neurone, solo alcuni neuroni vicini a lui sono collegati, ovvero è definita una **relazione di vicinato**. L’output è spesso discretizzato secondo il principio **winner takes all** ma solo tra neuroni vicini di ciascun neurone.

### Functions
- **Fnet**: La funzione di input è una **funzione distanza** tra input e vettore peso: Minkowski Family.
- **Fact**: La funzione di attivazione è una **funzione radiale**: **monotina decrescente**. Calcola l'area in cui un neurone si focalizza. E' definita da un **reference radius**. Alcuni esempi di funzioni sono Rectangle, Triangle, Cosine until zero, Gauss.
- **Fout**: La funzione di output è l’**identity**: utilizza il **winner takes all** ossia localmente il neurone con la massima attivazione forza a 0 l’output dei neuroni circostanti.

### Topology and Neighborhood
I neuroni di output sono definiti in uno spazio bidimensionale. Se guardiamo i neighborhood degli output neurons: i neuroni formano una griglia. La SOM quindi **preserva la topologia**, ovvero preserva la posizione relativa tra i punti del dominio. 

## Training
Il processo di apprendimento si basa sul **competitive training**: ogni pattern in input viene processato ed assegnato al neurone con **l’attivazione più alta**, poi, a differenza di LVQN, vengono **aggiornati anche i neuroni vicini in base al radius**. In questo modo si ottiene che i **reference vector** di neuroni vicini non si muovono arbitrariamente ma mantengono topologia dello spazio in input. Per trovare corretta funzione per preservare la topologia uso la regola di apprendimento (generalizzata dall'attraction rule del LVQN): (...) con Fnb = neighborhood function che è radial function, n(t) = **time-dependent learning rate**, p(t) = **time-dependent radius** decrescente


- Inizio selezionando random il vettore peso dei neuroni e i training samples
- Seleziono training sample
- Trovare il neurone vincitore attraverso distance function con reference vector più vicino
- calcolo time dependent learning rate e radius per adattare i vicini del neurone vincitore

Il risultato è di focalizzarsi su imparare simili pattern per creare una forte **partizione in più classi**. Se userò una funzione smooth avrò bordi smooth e qundi un punto può cadere in più classi.

