---
tags:
  - "#hability"
  - "#Arsenal_Avançado"
name: "Combate Aquático"
source: "[[Sistema/Arsenal_Avançado#Habilidades|Arsenal_Avançado]]"
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
# Combate Aquático
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você possui **vantagem** em **testes** de **acerto** contra criaturas que estão debaixo da água.


#
> Retirado do modulo: `=this.source`