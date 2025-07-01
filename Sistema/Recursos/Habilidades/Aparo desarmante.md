---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Aparo desarmante"
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
# Aparo desarmante
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você escolhe entre **aparar** ou **agarrar** (requer uma mão livre) um ataque corpo a corpo, se for bem sucedido você pode desarmar o oponente, fazendo-o largar a arma que ele utilizou para atacar.


#
> Retirado do modulo: `=this.source`