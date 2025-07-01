---
tags:
  - "#hability"
  - "#Arsenal_Avançado"
name: "Volumoso"
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
# Volumoso
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Enquanto este item está equipado, você possui **desvantagem** em qualquer **teste** que envolva se mover. como por exemplo para nadar, correr, pular ou escalar. Além disso, se você cair no chão, você deve gastar a sua ação para se levantar.


#
> Retirado do modulo: `=this.source`