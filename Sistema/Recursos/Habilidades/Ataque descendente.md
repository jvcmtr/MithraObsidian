---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Ataque descendente"
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
# Ataque descendente
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você realiza um [[Sistema_Base#Ataque Simples|Ataque Simples]] corpo a corpo com esta arma e recebe **desvantagem** em **acerto**, se o inimigo for acertado, ele fica [[Sistema/Recursos/Condições/Derrubado#Derrubado|Derrubado]]. este ataque recebe mais **1** de **dano** se a criatura estiver caída.


#
> Retirado do modulo: `=this.source`