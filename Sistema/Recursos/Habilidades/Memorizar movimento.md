---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Memorizar movimento"
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
# Memorizar movimento
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Uma vez que um inimigo te acertar, você pode memorizar os movimentos dele. uma vez que tenha feito isso, ele possui **desvantagem** nas **disputas** de **acerto** e **impacto** para te acertar com o mesmo movimento de novo. você só pode ter um movimento memorizado por vez.


#
> Retirado do modulo: `=this.source`