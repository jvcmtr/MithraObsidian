---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Convicção cativante"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Nível"
action: "-"
passive: TRUE
requirements: "Convicção inabalável"
requirements_ref: 
  - "[[Recursos/Habilidades/Convicção inabalável#Convicção inabalável|Convicção inabalável]]" 

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
# Convicção cativante
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando você usa a sua habilidade **convicção** Inabalável e é bem sucedido em se **defender** do ataque, o atacante fica admirado com a sua obstinação e fica[[Sistema/Recursos/Condições/Surpreso#Surpreso|Surpreso]] até o início do próximo turno dele. Uma vez que o inimigo fique saia deste estado, ele se torna imune a esta habilidade até o final do combate.


#
> Retirado do modulo: `=this.source`