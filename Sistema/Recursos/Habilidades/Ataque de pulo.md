---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Ataque de pulo"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Nível"
action: "Ação"
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
# Ataque de pulo
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você pula em direção a um inimigo para realizar um ataque devastador. quando faz isso, o **dano** e o **impacto** do seu ataque aumentam em **1**, contudo se você o inimigo for capaz de se proteger do ataque, você fica [[Sistema/Recursos/Condições/Derrubado#Derrubado|Derrubado]].


#
> Retirado do modulo: `=this.source`