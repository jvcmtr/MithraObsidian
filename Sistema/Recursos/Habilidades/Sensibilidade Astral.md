---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Sensibilidade Astral"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Raça"
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
# Sensibilidade Astral
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você possui um sexto sentido capaz de perceber a presença de magia. À seu critério, você pode definir uma sinestesia com um de seus outros sentidos para representar sua sensíbilidade à magia.


#
> Retirado do modulo: `=this.source`