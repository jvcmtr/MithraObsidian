---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Status"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
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
# Status
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Este equipamento pode ser usado para representar um status social, que pode ser um econômico, político ou ideológico. Mesmo que um indivíduo não te conheça, ele consegue reconhecer em você o status social que esta arma representa.


#
> Retirado do modulo: `=this.source`