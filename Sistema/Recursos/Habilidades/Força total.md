---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Força total"
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
# Força total
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando você realiza um [[Sistema/Sistema Base#Ataque Simples|Ataque Simples]] depois de se mover em direção a um inimigo, você ganha **vantagem** nas jogadas de **impacto** do seu ataque e inimigos acertados por ele ficam 
[[Sistema/Recursos/Condições/Derrubado#Derrubado|Derrubados]].


#
> Retirado do modulo: `=this.source`