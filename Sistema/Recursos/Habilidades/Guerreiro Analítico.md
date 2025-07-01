---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Guerreiro Analítico"
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
# Guerreiro Analítico
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Sempre que você for capaz de ver uma criatura realizando um teste ou disputa, você pode descobrir o valor de um dos atributos dela envolvendo aquela ação. Uma vez que você faça isso, você não pode utilizar esta habilidade novamente até o início de seu próximo turno.


#
> Retirado do modulo: `=this.source`