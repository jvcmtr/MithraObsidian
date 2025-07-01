---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Acrobata"
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
# Acrobata
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você ganha **vantagem** em **testes** de acrobacia e pode reduzir o **dano** de queda pela metade, sempre que você é bem sucedido em uma ação, você automaticamente levanta. além disso, você pode se **esquivar** mesmo na condição em queda.


#
> Retirado do modulo: `=this.source`