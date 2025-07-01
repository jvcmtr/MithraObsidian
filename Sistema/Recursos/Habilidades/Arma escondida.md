---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Arma escondida"
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
# Arma escondida
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Sempre que você troca de arma durante um combate você possui **vantagem** na primeira **disputa** de **acerto** que fizer com a nova arma.


#
> Retirado do modulo: `=this.source`