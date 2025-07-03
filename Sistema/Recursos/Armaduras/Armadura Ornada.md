---
tags:
  - "#armour"
  - "#Arsenal_Avançado"
name: "Armadura Ornada"
source: "[[Sistema/Arsenal_Avançado#Armaduras|Arsenal_Avançado]]"
image_ref: ""

size: "D"
type: "Pesada"
dodge_bonus: -2 
resistances:
  Cortante: 3 
  Perfurante: 2 
  Impacto: 0 
pockets: 1 
habilities: "Barulhento, Status, Viseira, Volumoso"
habilities_ref: 
  - "[[Recursos/Habilidades/Barulhento#Barulhento|Barulhento]]"
  - "[[Recursos/Habilidades/Status#Status|Status]]"
  - "[[Recursos/Habilidades/Viseira#Viseira|Viseira]]"
  - "[[Recursos/Habilidades/Volumoso#Volumoso|Volumoso]]" 
desc: ""

cssclasses:
  - paper
---
###### Info
> [!infobox | right]
> ####   Armadura Ornada
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


# Armadura Ornada

==[[Sistema_Base#Classes de Tamanho|Tamanho]] `=this.size`== ==Armadura (`=this.type`)== ==Resistência `$=dv.current().resistances.Cortante + dv.current().resistances.Perfurante + dv.current().resistances.Impacto`==
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
