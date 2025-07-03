---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Manter distância"
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
# Manter distância
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você pode realizar um  [[Sistema_Base#Ataques de oportunidade|Ataque de oportunidade]] contra um inimigo que entra em seu alcance. Você não pode usar esta habilidade se estiver [[Sistema/Recursos/Condições/Desorientado#Desorientado|Desorientado]].


#
> Retirado do modulo: `=this.source`