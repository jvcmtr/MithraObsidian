---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Combate com duas armas"
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
# Combate com duas armas
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando você usa esta habilidade, você pode realizar um [[Sistema_Base#Ataque Simples|Ataque Simples]] adicional antes do final do seu turno com uma arma que ainda não usou neste turno.


#
> Retirado do modulo: `=this.source`