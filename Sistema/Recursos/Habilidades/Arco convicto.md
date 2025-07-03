---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Arco convicto"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Nível"
action: "Ação"
passive: FALSE
requirements: "ataque convicto"
requirements_ref: 
  - "[[Recursos/Habilidades/ataque convicto#ataque convicto|ataque convicto]]" 

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
# Arco convicto
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você realiza um [[Sistema_Base#Ataque Conduzido|Ataque Conduzido]] corpo a corpo contra qualquer criatura dentro do alcance e recebe **desvantagem** em **acerto**, quando faz isso, você pode somar o seu modificador de **convicção** para calcular o **impacto** do seu ataque. além disso, o seu **dano** aumenta em **2**.


#
> Retirado do modulo: `=this.source`