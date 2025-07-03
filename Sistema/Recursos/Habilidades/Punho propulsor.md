---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Punho propulsor"
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
# Punho propulsor
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Sempre que um de seus golpes com uma arma não letal é defendido ou acertado, você pode escolher fazer um **teste** para tentar [[Sistema_Base#Empurrão|empurrar]] ou [[Sistema/Recursos/Condições/Derrubado#Derrubado|derrubar]] o inimigo.


#
> Retirado do modulo: `=this.source`