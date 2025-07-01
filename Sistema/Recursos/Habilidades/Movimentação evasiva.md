---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Movimentação evasiva"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Nível"
action: "Reação - quando recebe um ataque"
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
# Movimentação evasiva
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando você tenta se **esquivar** de um ataque e não há inimigos ou objetos impedindo a sua movimentação, você pode escolher se mover para fora do alcance do ataque e receber **vantagem** em sua **disputa** de esquiva


#
> Retirado do modulo: `=this.source`