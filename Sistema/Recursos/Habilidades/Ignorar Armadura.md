---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Ignorar Armadura"
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
# Ignorar Armadura
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando uma criatura possui **desvantagem** em se **defender** contra você, você pode ignorar qualquer **resistência** oriunda da armadura do inimigo.


#
> Retirado do modulo: `=this.source`