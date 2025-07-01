---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Assassino"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Nível"
action: "-"
passive: TRUE
requirements: "assassinar"
requirements_ref: 
  - "[[Recursos/Habilidades/assassinar#assassinar|assassinar]]" 

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
# Assassino
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

O bônus de **dano** da sua habilidade [[habilities:40|assassino]] passa a ser +3


#
> Retirado do modulo: `=this.source`