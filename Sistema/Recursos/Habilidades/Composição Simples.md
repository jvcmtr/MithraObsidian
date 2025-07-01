---
tags:
  - "#hability"
  - "#Arsenal_Avançado"
name: "Composição Simples"
source: "[[Sistema/Arsenal_Avançado#Habilidades|Arsenal_Avançado]]"
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
# Composição Simples
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

 Você não precisa de conhecimentos específicos para consertar esta armadura.


#
> Retirado do modulo: `=this.source`