---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Espirito Empoderado"
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
# Espirito Empoderado
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando ganha esta habilidade, você deve escolher um atributo dentre **Inteligência**, **Percepção** ou **Convicção**. Uma vez por dia, você pode ser automaticamente bem sucedido em qualquer **teste** ou **disputa** envolvendo o atributo escolhido


#
> Retirado do modulo: `=this.source`