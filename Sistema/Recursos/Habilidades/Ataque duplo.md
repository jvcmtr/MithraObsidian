---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Ataque duplo"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Nível"
action: "-"
passive: TRUE
requirements: "combate com duas armas"
requirements_ref: 
  - "[[Recursos/Habilidades/combate com duas armas#combate com duas armas|combate com duas armas]]" 

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
# Ataque duplo
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando você ataca pela segunda vez no seu turno, o seu segundo ataque recebe +2 de **acerto**


#
> Retirado do modulo: `=this.source`