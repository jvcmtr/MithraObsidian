---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Ataque sorrateiro"
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
# Ataque sorrateiro
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você realiza um **teste** de **acerto** contra o modificador de postura(**agilidade**) do inimigo. se você for bem sucedido, o inimigo é [[Sistema/Recursos/Condições/Derrubado#Derrubado|Derrubado]] no chão e fica [[Sistema/Recursos/Condições/Surpreso#Surpreso|Surpreso]].


#
> Retirado do modulo: `=this.source`