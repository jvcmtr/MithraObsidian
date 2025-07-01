---
tags:
  - "#hability"
  - "#Arsenal_Avançado"
name: "Isolante"
source: "[[Sistema/Arsenal_Avançado#Habilidades|Arsenal_Avançado]]"
image_ref: ""

type: "Habilidade de Equipamento"
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
# Isolante
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Este equipamento te isola das temperaturas externas. Você ganha **2** pontos de resistência a fogo e a frio e possui resistência às intempéries do ambiente.


#
> Retirado do modulo: `=this.source`