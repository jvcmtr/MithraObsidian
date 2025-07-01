---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Combate técnico"
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
# Combate técnico
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você pode assumir uma postura calculista durante o combate. enquanto faz isso, você pode escolher utilizar o seu atributo de **inteligência** no lugar do seu atributo de **agilidade** para calcular o **acerto** de um ataque. Você não pode manter esta postura enquanto está [[Sistema/Recursos/Condições/Desorientado#Desorientado|Desorientado]].


#
> Retirado do modulo: `=this.source`