---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Faz Tudo"
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
# Faz Tudo
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Com o tempo necessário, você é capaz de reproduzir uma imitação de qualquer mecanismo ou objeto simples que já tenha visto e qualquer fórmula alquímica simples que já tenha assistido alguém fazer. Contudo, os objetos e mecanismos que você produz são pequenos, frágeis e de uso único.

A definição de simples fica a critério da mesa, podendo ser substituída por um **teste** de **inteligência** quando necessário.


#
> Retirado do modulo: `=this.source`