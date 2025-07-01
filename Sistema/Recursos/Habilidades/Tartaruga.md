---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Tartaruga"
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
# Tartaruga
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você usa a sua ação para atacar com o escudo e recebe **vantagem** em seus **testes** de**defesa**contra o inimigo que você atacou até o início do seu próximo turno.


#
> Retirado do modulo: `=this.source`