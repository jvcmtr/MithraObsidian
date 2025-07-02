---
tags:
  - "#armour"
  - "#Arsenal_Avançado"
name: "Armadura Completa"
source: "[[Sistema/Arsenal_Avançado#Armaduras|Arsenal_Avançado]]"
image_ref: ""

size: "E"
type: "Pesada"
dodge_bonus: -3 
resistances:
  Cortante: 4 
  Perfurante: 3 
  Impacto: 3 
pockets: 1 
habilities: "Pesado, Barulhento, Viseira, Volumoso, Isolante"
habilities_ref: 
  - "[[Recursos/Habilidades/Pesado#Pesado|Pesado]]"
  - "[[Recursos/Habilidades/Barulhento#Barulhento|Barulhento]]"
  - "[[Recursos/Habilidades/Viseira#Viseira|Viseira]]"
  - "[[Recursos/Habilidades/Volumoso#Volumoso|Volumoso]]"
  - "[[Recursos/Habilidades/Isolante#Isolante|Isolante]]" 
desc: ""

cssclasses:
  - paper
---
###### Info
> [!infobox | right]
> ####   Armadura Completa
> `$= dv.current().type == "vestes"? '![[vest.png | cover small]]' : dv.current().type == "Leve"? '![[light.png | cover small]]': dv.current().type == "Média"? '![[medium.png | cover small]]' : dv.current().type == "Pesada"? '![[heavy.png | cover small]]' : '![[default_armour.png | cover small]]' `
> 
> ###### Resistências
> | | |
> | ---- |  --- |
> | **Cortante** | `=this.resistances.Cortante`|
> | **Perfurante** | `=this.resistances.Perfurante` |
> | **Impacto** | `=this.resistances.Impacto` |
>
> 
> ##### Habilidades
> | |
> | ---- | 
> | `$= dv.current().habilities_ref && dv.current().habilities_ref.map(h => "==" +h + "==").join(" ")` | 
>
>
> ##### Propriedades 
> | | |
> | ---- |  --- |
> | **Tamanho** | `=this.size`|
> | **Bolsos** | `=this.pockets` |
> | **Bonus de esquiva** | `=this.dodge_bonus` |
> `$= dv.current().desc? " > " + dv.current().desc : ''`


# Armadura Completa

==[[Sistema Base#Classes de Tamanho|Tamanho]] `=this.size`== ==Armadura (`=this.type`)== ==Resistência `$=dv.current().resistances.Cortante + dv.current().resistances.Perfurante + dv.current().resistances.Impacto`==
> **Bolsos :**   `=this.pockets` 
> **Bonus de esquiva :**  `=this.dodge_bonus`
> **Resistências :** `$= Object.entries(dv.current().resistances).map( i => i[1]!=0? "\n - "+i[0]+": "+i[1] : "" ).join("")`


### Habilidades

```dataviewjs
for (let ref of dv.current().habilities_ref) {
    dv.paragraph(`!${ref}`);
}
```

#
> Retirado do modulo: [[Sistema/Arsenal_Avançado#Armaduras|Arsenal_Avançado]]
