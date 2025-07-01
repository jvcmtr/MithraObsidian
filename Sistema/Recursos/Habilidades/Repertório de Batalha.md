---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Repertório de Batalha"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Nível"
action: "-"
passive: TRUE
requirements: "Guerreiro Genial"
requirements_ref: 
  - "[[Recursos/Habilidades/Guerreiro Genial#Guerreiro Genial|Guerreiro Genial]]" 

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
# Repertório de Batalha
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você pode ter até 3 habilidades decoradas com a sua habilidade [[Sistema/Recursos/Habilidades/Guerreiro Genial|Guerreiro Genial]] em um determinado momento.


#
> Retirado do modulo: `=this.source`