---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Olhar atento"
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
# Olhar atento
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você pode realizar [[Sistema/Sistema Base#Ataques de oportunidade|Ataques de oportunidade]] com armas a distância. Quando faz isso, o seu medidor de atenção diminui em **1**.


#
> Retirado do modulo: `=this.source`