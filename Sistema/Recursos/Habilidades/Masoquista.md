---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Masoquista"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Nível"
action: "Reação - quando recebe um ataque"
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
# Masoquista
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando você tenta resistir a um ataque, você pode fazer um ataque básico contra o atacante. o atacante então possui **desvantagem** em qualquer **teste** ou **disputa** parase **defender** do seu ataque


#
> Retirado do modulo: `=this.source`