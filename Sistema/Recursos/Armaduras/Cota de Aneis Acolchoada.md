---
tags:
  - "#armour"
  - "#Arsenal_Avançado"
name: "Cota de Aneis Acolchoada"
source: "Arsenal_Avançado"
size: "C"
type: "Média"
dodge_bonus: -2 
resistances:
  Cortante: 2 
  Perfurante: 1 
  Impacto: 2 
pockets: 2 
habilities: ""
habilities_ref: 
  - "[[Recursos/Habilidades/Barulhento#Barulhento|Barulhento]]"
  - "[[Recursos/Habilidades/Isolante#Isolante|Isolante]]" 
desc: ""
image_ref: ""
cssclasses:
  - paper
---
###### Info
> [!infobox | right]
> ####   Cota de Aneis Acolchoada
> `$= this.image_ref || '![[default_armour2.png | cover small]]' `
> 
> ###### Resistências
> | | |
> | ---- |  --- |
> | **Cortante** | `=this.resistances.Cortante`|
> | **Perfurante** | `=this.this.resistances.Perfurante` |
> | **Impacto** | `=this.this.resistances.Impacto` |
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


# Cota de Aneis Acolchoada

==[[Sistema Base#Classes de Tamanho|Equipamento classe]] `=this.size`== ==Armadura (`=this.type`)==
> **Bolsos :**   `=this.pockets` 
> **Bonus de esquiva :**  `=this.dodge_bonus`
> **Resistências :** `$= Object.entries(dv.current().resistances).map( i => i[1]!=0? "\n - "+i[0]+": "+i[1] : "" ).join("")`


### Habilidades

```dataviewjs
for (let ref of dv.current().habilities_ref) {
    dv.paragraph(`!${ref}`);
}
```

---

> Retirado do modulo: [[Sistema/Arsenal_Avançado#Armaduras|Arsenal_Avançado]]
