---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Mestre do Contra Ataque"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Nível"
action: "-"
passive: TRUE
requirements: "Contra ataque"
requirements_ref: 
  - "[[Recursos/Habilidades/Contra ataque#Contra ataque|Contra ataque]]" 

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
# Mestre do Contra Ataque
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você pode utilizar a sua habilidade [[Sistema/Recursos/Habilidades/Contra ataque|Contra ataque]] quantas vezes quiser entre os seus turnos, mas somente uma vez contra cada inimigo.


#
> Retirado do modulo: `=this.source`