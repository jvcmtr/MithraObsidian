---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Contra ataque"
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
# Contra ataque
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando você é bem sucedido em se **esquivar**, **defender** ou **aparar** um ataque, você pode realizar um [[Sistema_Base#Ataque Simples|Ataque Simples]] básico contra o inimigo e ele não pode se **defender** usando a mesma arma que usou para atacar. uma vez que você use esta habilidade, você não pode mais usá-la até o início de seu próximo turno.


#
> Retirado do modulo: `=this.source`