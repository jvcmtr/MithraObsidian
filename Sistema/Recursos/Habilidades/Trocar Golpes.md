---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Trocar Golpes"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Nível"
action: "Reação - quando recebe um ataque"
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
# Trocar Golpes
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando você tenta **resistir** a um ataque, você pode escolher falhar propositalmente no **teste**. Quando faz isso, você pode realizar um [[Sistema_Base#Ataque Basico|Ataque Basico]] contra o inimigo, ele possui **desvantagem** em defender, **aparar** ou **esquivar** do seu ataque.


#
> Retirado do modulo: `=this.source`