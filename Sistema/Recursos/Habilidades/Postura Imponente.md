---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Postura Imponente"
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
# Postura Imponente
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando você acerta um ataque, Qualquer inimigo que tenha visto você deve fazer um **teste** de **convicção** contra **10 +** o seu modificador de **convicção**, se falharem, eles ficam  [[Sistema/Recursos/Condições/Intimidado#Intimidado|Intimidados]].


#
> Retirado do modulo: `=this.source`