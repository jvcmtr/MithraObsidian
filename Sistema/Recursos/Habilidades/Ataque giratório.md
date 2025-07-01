---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Ataque giratório"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Nível"
action: "Ação"
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
# Ataque giratório
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você pode realizar um ataque básico corpo a corpo em área com qualquer arma corpo a corpo que possua **dano** cortante ou contundente.


#
> Retirado do modulo: `=this.source`