---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Empalar"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Equipamento"
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
# Empalar
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você pode realizar um [[Sistema/Sistema Base#Ataque Conduzido|Ataque Conduzido]] contra até **2** criaturas que estejam alinhadas dentro do seu alcance.


#
> Retirado do modulo: `=this.source`