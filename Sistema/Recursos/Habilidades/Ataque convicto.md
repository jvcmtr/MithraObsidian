---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Ataque convicto"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Nível"
action: "Ação"
passive: FALSE
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
# Ataque convicto
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você realiza um [[Sistema/Sistema Base#Ataque Simples|Ataque Simples]] corpo a corpoe recebe **desvantagem** em **acerto**, quando faz isso, você pode somar o seu modificador de **convicção** para calcular o **impacto** do seu ataque. além disso, o seu **dano** aumenta em **2**.


#
> Retirado do modulo: `=this.source`