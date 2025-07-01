---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Cultura Norteniana"
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
# Cultura Norteniana
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você ganha proficiência no conhecimento das facções de Northelm e da história do seu país. Ou seja, você tem **vantagem** em qualquer **teste** relacionado a reconhecer qualquer facção ou integrante importante de qualquer facção que opere no seu continente, além de **vantagem** em relembrar qualquer evento ou figura histórica do seu país


#
> Retirado do modulo: `=this.source`