---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Arremesso"
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
# Arremesso
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você arremessa sua arma corpo a corpo, realizando um [[Sistema_Base#Ataque Conduzido|Ataque Conduzido]] à distância contra aqueles em uma direção escolhida.


#
> Retirado do modulo: `=this.source`