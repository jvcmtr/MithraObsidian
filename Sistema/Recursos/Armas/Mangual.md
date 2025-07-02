---
tags:
  - "#weapon"
  - "#Arsenal_Avançado"
name: "Mangual"
source: "[[Sistema/Arsenal_Avançado#Armas|Arsenal_Avançado]]"

size: "B"
damage: 3
damage_type: "Impacto"
maneuver_mod: 0
weight_mod: 2
defense_mod: 0

shield: FALSE
ranged: FALSE
rarity: Advanced

habilities: "Aceleração, Ataque pesado"
habilities_ref: 
  - "[[Recursos/Habilidades/Aceleração#Aceleração|Aceleração]]"
  - "[[Recursos/Habilidades/Ataque pesado#Ataque pesado|Ataque pesado]]"


cssclasses:
  - paper
---

###### Info
> [!infobox | right]
> ####   Mangual
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


# Mangual
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
else{ eq += s[2] }

tags.push(eq)
tags.push("Equipamento" + s[2])
tags.push(r[dt.rarity])
tags = tags.map(t => "=="+t+"==")
dv.el("span", tags.join(" "))
```

> ###### Bônus
> - **Acerto :** +`=this.maneuver_mod` 
> - **Impacto :** +`=this.weight_mod`
> - **Dano :** +`=this.damage`
`$= dv.current().shield || dv.current().habilities.contains("Estabilidade")? "> - **Defesa :** +" + dv.current().desense_mod : ""`
`$= dv.current().shield || dv.current().habilities.contains("Aparagem")? "> - **Aparo :** +" + dv.current().maneuver_mod : ""`
> ###### Propriedades
> - **Alcance :** `$= dv.current().ranged? "Longo" : "Corpo a Corpo" + dv.current().size + dv.current().habilities.contains("Arma Longa")? "+" : ""`
> - **[[Sistema Base#Classes de Tamanho|Tamanho]] :** `=this.size`
> ```dataviewjs
> let h = dv.current().habilities
> 	.split(",")
> 	.filter(e => 
> 		e.contains("Arremesso") || e.contains("Estabilidade") ||
> 		e.contains("Aparagem")|| e.contains("Combate com duas armas") ||
> 		e.contains("Contra ataque")|| e.contains("Ataque em arco")||
> 		e.contains("Empunhadura confiável")|| e.contains("Defensivo")||
> 		e.contains("Disfarçada") || e.contains("Arma Longa") )
> 	.map(e => "=="+e+"==")
> 	.join(" ")
> dv.el("span", h)
> ```


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
