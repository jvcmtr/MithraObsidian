---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Dança Improvisada"
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
# Dança Improvisada
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Uma vez que você utilize a sua habilidade  [[Sistema/Recursos/Habilidades/Dança de combate|Dança de combate]], qualquer outro ataque corpo a corpo contra o mesmo inimigo serve para o propósito de aumentar o seu bônus.


#
> Retirado do modulo: `=this.source`