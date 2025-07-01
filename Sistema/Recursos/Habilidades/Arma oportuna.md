---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Arma oportuna"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Equipamento"
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
# Arma oportuna
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando **espera** no seu turno, você pode realizar um ataque com esta arma contra uma criatura que acabou de receber um ataque de outra criatura. quando faz isso, o inimigo é obrigado a utilizar a mesma ação defensiva e recebe **desvantagem** em qualquer **teste** ou **disputa** relacionada a ela.


#
> Retirado do modulo: `=this.source`