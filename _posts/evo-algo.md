---
title: 'Evolutionary Algorithms'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/assets/blog/midj_1.jpg'
date: '2023-06-19T05:35:07.322Z'
author:
  name: JJ Kasper
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/midj_1.jpg'
---

Gli algoritmi evolutivi sono meta-euristiche basate sulla logica del modello evoluzionistico ed utilizzate per la ricerca della soluzione ottimale di un problema di ottimizzazione $$( \Omega, f, \succ)$$ con rispettivamente spazio di ricerca, funzione di evaluation f : $$\Omega$$ -> R che assegna qualità a tutti i candidati e comparison relation $$\succ$$; $$H \subseteq \Omega$$ degli ottimi globali; la soluzione è trovare $$x \in \Omega$$ che ottimizzi f e contenuto in H.

Differisce dalle solite soluzioni analitiche, brute force, random, ricerca guidata. Infatti, gli algoritmi evolutivi si inspirano alle teorie evolutive di biologia cui principi fondamentali sono:
- tratti vantaggiosi di mutazioni favoriscono la selezione naturale
- migliori chance di procreazione per i tratti migliori

Alcuni di questi principi sono: diversità, varianza, ereditarietà, adattabilità, randomness, irreversibilità, unpredicatability.

### Elements
- Codifica dei candidati
- Metodo per popolazione iniziale
- Fitness function per valutazione candidati
- Metodo di selezione per fitness function: metodo per selezionare individui che procreeranno la prossima generazione
- Operatori genetici per modificare i cromosomi (mutazione o crossover)
- Parametri (dimensione popolazione, probabilità di mutazione...)
- Criterio di terminazione

### Formal Definition
Formalmete per ogni problema di ottimizzazione separare lo spazio dei fenotipi (come l'individuo appare) dai genotipi (individui rappresentati da un a codifica). Quindi è una tupla $$(G,dec, Mut, Rek, IS\_genitori,IS\_ambiente,\mu,\lambda)$$ con:
- G: genome
- dec: deconding function
- Mut: mutation
- Rek: recombination
- $$IS\_genitori$$: selection function applicata ai genitori
- $$IS\_ambiente$$: selecrion function che deriva da fattori ambientali
- $$\mu$$: numero individui popolazione precedente
- $$\lambda$$: numero di figli per generazione
