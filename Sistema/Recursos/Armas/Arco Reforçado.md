---
tags:
  - "#weapon"
  - "#Arsenal_Avançado"
name: "Arco Reforçado"
source: "[[Sistema/Arsenal_Avançado#Armas|Arsenal_Avançado]]"

size: "C"
damage: 3
damage_type: "Perfurante"
maneuver_mod: 0
weight_mod: 0
defense_mod: 0

shield: FALSE
ranged: TRUE
rarity: Advanced

habilities: "Ataque pesado"
habilities_ref: 
  - "[[Recursos/Habilidades/Ataque pesado#Ataque pesado|Ataque pesado]]"


cssclasses:
  - paper
---

###### Info
> [!infobox | right]
> ####   Arco Reforçado
> `$= this.image_ref || '![[default_weaponB.png | cover small]]' `
>
> ##### Propriedades 
> | | |
> | ---- |  --- |
> | **Tamanho** | `=this.size`|
> | **Tipo de dano** | `$= dv.current().damage_type.split("/").map( e => "=="+e.trim()+"==").join(" ")` |
> | **Raridade** | `=this.rarity` |
>
> ###### Modificadores
> | | |
> | ---- |  --- |
> |`$= dv.current().shield? "**Defesa**" :  dv.current().habilities.contains("Estabilidade")? "**Defesa**" : ""`| `$= dv.current().shield?  dv.current().defense_mod: ""`|
> | **Peso** | `=this.weight_mod`|
> | **Manuseio** | `=this.maneuver_mod` |
> | **Dano** | `=this.damage` |
> 
> ##### Habilidades
> | |
> | ---- | 
> | `$= dv.current().habilities_ref && dv.current().habilities_ref.map(h => "==" +h + "==").join(" ")` | 


# Arco Reforçado
```dataviewjs
let dt = dv.current()
let tags = []

let s = dt.size == "A"? ["pequena", "pequeno", " de meia-mão"]:
	dt.size == "B"? ["regular", "médio", " de uma mão"]:
	dt.size == "C"? ["média", "grande", " de mão-e-meia"]:
	dt.size == "D"? ["grande", "colossal", " de duas mãos"]: ""
	
let w = dt.weight_mod > dt.maneuver_mod? ["pesada","pesado"] :
		dt.weight_mod > dt.maneuver_mod? ["leve", "leve"]:
		["equilibrada", "equilibrado"]

let r = {
	Basic: "Qualidade comum",
	Advanced: "Qualidade refinada", 
}

let eq = dt.shield? "Escudo "+w[1] : "Arma "+w[0]
if(dt.ranged){ eq += " à distancia" }

tags.push(eq)
tags.push("Equipamento" + s[2])
tags.push(r[dt.rarity])
tags = tags.map(t => "=="+t.trim()+"==")
dv.el("span", tags.join(" "))
```

> ###### Bônus 
> **Acerto :** +`=this.maneuver_mod` 
> **Impacto :** +`=this.weight_mod`
> **Dano :** +`=this.damage`
>  `$= dv.current().shield || dv.current().habilities.contains("Aparagem") || dv.current().habilities.contains("Estabilidade")? "_" : ""` `$= dv.current().shield || dv.current().habilities.contains("Estabilidade")? "</br> **Defesa :** +" + dv.current().defense_mod : ""` `$= dv.current().shield || dv.current().habilities.contains("Aparagem")? "</br> **Aparo :** +" + dv.current().maneuver_mod : ""`
> ---
> ###### Propriedades
> **Alcance :** `$= dv.current().ranged? "Longo" : dv.current().size + dv.current().habilities.contains("Arma Longa")? "Corpo a Corpo +" : "Corpo a Corpo"`
> **[[Sistema Base#Classes de Tamanho|Tamanho]] :** `=this.size`
> 
> ```dataviewjs
> let h = dv.current().habilities
> 	.split(",")
> 	.filter(e => 
> 		e.contains("Arremesso") || e.contains("Estabilidade") ||
> 		e.contains("Aparagem")|| e.contains("Combate com duas armas") ||
> 		e.contains("Contra ataque")|| e.contains("Ataque em arco")||
> 		e.contains("Empunhadura confiável")|| e.contains("Defensivo")||
> 		e.contains("Disfarçada") || e.contains("Arma Longa") )
> 	.map(e => "=="+e.trim()+"==")
> 	.join(" ")
> dv.el("span", h)
> ```
> `$= false? "" : ""`
> `$= false? "" : ""`


### Habilidades

`$= dv.current().rarity == "Basic"? "> [!warning]\n> Atenção, está é uma arma **Comum**, o que significa que você só pode escolher **uma** das habilidades listadas a seguir :" : ""`

```dataviewjs
for (let ref of dv.current().habilities_ref) {
    dv.paragraph(`!${ref}`);
    dv.paragraph()
}
```

#
> Retirado do modulo: [[Sistema/Arsenal_Avançado#Armas|Arsenal_Avançado]]
