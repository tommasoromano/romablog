---
title: 'Fuzzy Sets'
excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.'
coverImage: '/assets/blog/distributed-systems/cover.png'
date: '2023-06-19T05:35:07.322Z'
author:
  name: JJ Kasper
  picture: '/assets/blog/authors/jj.jpeg'
ogImage:
  url: '/assets/blog/distributed-systems/cover.png'
---

L’idea alla base è evitare le separazioni nette degli “insieme convenzionali” in due valori: “completa appartenenza” o “non appartenenza”, gestendo così anche un “appartenenza parziale”. Nei Fuzzy Set abbiamo quindi da determinare in che grado un elemento è membro dell’insieme.

Un Fuzzy Set μ di un insieme X (dominio del discorso) è:
un mapping μ : X —> [0,1], che assegna ad ogni elemento x ∈ X un grado di appartenenza μ(x) al Fuzzy Sub(set) μ. F(X) denota denota l’insieme di tutti i Fuzzy Sub(set) di X

I Fuzzy Set sono quindi una funzione reale che prende valori in un certo intervallo (universo del discorso).

I Fuzzy Set sono usati di norma per modellare espressioni linguistiche,
per esempio “circa 3” o “di media altezza” o “molto alto” che descrivono un valore vago o un intervallo vago; dovrebbero crescere monotonicamente fino a un certo valore e da lì in poi decrescere monotonicamente —> convessi.

Fuzzy Numbers. Se voglio descrivere un numero nel fuzzy set, posso avere due casi.
- I numeri esatti hanno valore di appartenenza 1
- Termini come “all’incirca” sono modellati con forme diverse (triangoli, trapezi...)
Variabile Linguistica: “area del primo piano".
Valori Linguistici: “piccolo”, “medio", “largo", “grande”...

## Semantics
Ci sono 3 diverse semantiche che possiamo attribuire al grado di appartenenza:
- Somiglianza: μ(x) può essere visto come il grado di prossimità rispetto ad un elemento prototipale di μ. Il grado di appartenenza indica quanto sono vicini due elementi che hanno un valore simile di membership function. oglio vedere quanto sono simili elementi che appartengono allo stesso cluster.
- Preferenza: La funzione μ rappresenta sia l’insieme degli oggetti preferiti, sia il valore associato ad una decisione X e μ(u) rappresenta sia l’intensità della preferenza associata a u, sia la possibilità di scegliere u come valore di X. Se voglio avere un supporto durante il decision making, mi serve associare a ogni caratteristica che osservo una preferenza, in modo che possa fare una scelta tra la situazione a e la situazione b, seguendo le preferenze che ho associato a ciascuno di loro.
- Possibilità: Considera μ(u) come il grado di possibilità che il parametro X abbia valore u, data la sola informazione “X è μ“. Può essere usato per fare reasoning. Può misurare le possibilità che una quantità abbia un valore specifico, le possibilità che un evento avvenga.

## Representations
- Rappresentazione Verticale: la rappresentazione di un Fuzzy Set come funzione che dall’universo del discorso assegna un grado di appartenenza (reale, da 0 a 1) di ciascun elemento.
- Rappresentazione Orizzontale: La rappresentazione di un Fuzzy Set come un insieme di α-cut: Dato un Fuzzy Set μ ∈ F(X) sull’universo del discorso X e 0 ≤ α ≤ 1: [ μ ]α = { x∈X | μ(x)≥α } è chiamato α-cut del Fuzzy Set μ. Ovvero è l’insieme di tutti gli elementi x del dominio del discorso X che hanno grado di appartenenza al fuzzy set μ(x) di almeno α. Possiamo rappresentare un Fuzzy Set come un insieme di questi α-cut.
  - Il supporto S(μ) di un Fuzzy Set μ è l’insieme crisp che contiene tutti e soli gli elementi del dominio del discorso che hanno un grado di appartenenza non nullo rispetto a μ. S(μ) = [μ]0 = { x∈X | μ(x)>0 }
  - Il core C(μ) di un insieme fuzzy μ è l’insieme crisp che contiene tutti e soli gli elementi del dominio del discorso che hanno un grado di appartenenza uguale a 1 rispetto a μ. C(μ) = [μ]1 = { x∈X | μ(x)=1 }
  - L’altezza h(μ) di un insieme fuzzy μ è il più alto grado di appartenenza ottenibile da un elemento di μ. h(μ) = supx∈X { μ(x) }

## Fuzzy Logic
Esiste un importante isomorfismo tra la logica proposizionale e il teorema dagli insiemi finiti basato su un insieme finito di variabili da 2-valued logic alla sua generalizzazione con 3-valued logic di Lukasiewicz a n-valued logic che permette di definire operazioni insiemistiche usando clasici operatori logici di congiunzione, disgiunzione e negazione. Possizmo fare lo stesso con la logica fuzzy con valori tra [0,1] ridefinendo gli operatori logici a nuova semantica per costruire operazioni su insiemi fuzzy:
- Compemento/negazione: 
- Intersezione/and:
- Unione/or: ... . Diversi Modi per fare la negazione

Negli insiemi classici ho intersezione e unione rappresentati da congiunzione e disgiunzione logica e per la logica fuzzy:
- t-norme:
- t-conorme:

Implicazione Fuzzy. Sfruttando isomorfismo, tra gli operatori logici insiemistici posso definire implicitamente I(a,b) = !a v b, in fuzzy logic ..., ma a seconda semantica l'operazione logica fuzzy diverse classi di implicazioni:
- S-Implication:
- R-Implication
- Q-Implication: