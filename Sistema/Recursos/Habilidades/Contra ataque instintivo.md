---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Contra ataque instintivo"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Nível"
action: "Reação - quando recebe um ataque"
passive: FALSE
requirements: "contra ataque, previsão"
requirements_ref: 
  - "[[Recursos/Habilidades/contra ataque#contra ataque|contra ataque]]"
  - "[[Recursos/Habilidades/previsão#previsão|previsão]]" 

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
# Contra ataque instintivo
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando você é bem sucedido em **esquivar** utilizando a sua habilidade previsão. você pode realizar um [[Sistema_Base#Ataque Simples|Ataque Simples]] contra o inimigo como se estivesse usando a sua habilidade [[Sistema/Recursos/Habilidades/Contra ataque|Contra ataque]]


#
> Retirado do modulo: `=this.source`