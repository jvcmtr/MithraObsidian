---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Sangue de Hullen"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Raça"
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
# Sangue de Hullen
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Uma vez por dia, você é automaticamente bem sucedido em um **teste** ou **disputa** que envolva **força** ou robustez. Além disso, uma vez por dia, se seus **pontos de vida** forem reduzidos a **zero**, você pode escolher reduzi-los a **1**.


#
> Retirado do modulo: `=this.source`