"use strict"
// 1. Creare la lista della spesa
// 2. Creare un elemento "li" per ogni oggetto nella lista
// 3. Inserire gli elementi "li" nell'ul list
const shoppingList=[
    "pane",
    "acqua",
    "vino",
    "guanciale",
    "pecorino",
    "uova",
    "sale",
    "pepe",
    "farina"
]
let i=0;
const listContainer=document.getElementById("list");
while(i<shoppingList.length){
    const item=document.createElement("li");
    item.innerHTML=shoppingList[i];
    listContainer.append(item);
    i++
}