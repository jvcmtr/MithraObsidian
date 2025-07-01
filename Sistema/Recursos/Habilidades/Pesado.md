---
tags:
  - "#hability"
  - "#Arsenal_Avançado"
name: "Pesado"
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
# Pesado
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você fica ganha a condição [[Sistema/Recursos/Condições/Sobrecarregado#Sobrecarregado|Sobrecarregado]] quando veste esta armadura e se torna incapaz de nadar.


#
> Retirado do modulo: `=this.source`