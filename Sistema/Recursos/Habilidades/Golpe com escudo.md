---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Golpe com escudo"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Nível"
action: "Reação - quando recebe um ataque"
passive: FALSE
requirements: ""
requirements_ref:  

cssclasses:
  - paper
---
`$= dv.current().image_ref && "![[" + dv.current().image_ref +"| center 600]]"`


`$= dv.current().requirements_ref? dv.current().requirements_ref.map(ref => "==Requer " + ref+ "==").join(" ") : ""`

```dataviewjs
if(dv.current().type != "Habilidade de Nível"){
	dv.paragraph(">[!warning]\n>Esta é uma **" + dv.current().type + " ** e não pode ser aprendida por Level Up ")
}
```


`$= dv.current().type == "Habilidade de Nível"? "" : ""`
# Golpe com escudo
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você **defende** um ataque inimigo com um **escudo**, caso seja bem sucedido, você pode fazer um [[Sistema_Base#Ataque Simples|Ataque Simples]] contra o inimigo usando este escudo. Caso acerte, você pode escolher [[Sistema/Recursos/Condições/Derrubado#Derrubado|Derruba-lo]] ou 
[[Sistema/Recursos/Condições/Desorientado#Desorientado|Desorienta-lo]].


#
> Retirado do modulo: `=this.source`