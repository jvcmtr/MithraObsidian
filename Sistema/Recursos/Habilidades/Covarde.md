---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Covarde"
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
# Covarde
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

O **dano** do seu ataque aumenta em **+1** quando você acerta um [[Sistema_Base#Ataque Simples|Ataque Simples]] contra um inimigo que possui **desvantagem** em se proteger do seu ataque. 


#
> Retirado do modulo: `=this.source`