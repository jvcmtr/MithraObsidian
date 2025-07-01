---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Mestre de muitas armas"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Nível"
action: "-"
passive: TRUE
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
# Mestre de muitas armas
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você não precisa gastar uma ação para trocar de arma no meio de um combate, você pode fazê-lo livremente no final de cada um dos seus turnos


#
> Retirado do modulo: `=this.source`