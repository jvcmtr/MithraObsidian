---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Previsão"
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
# Previsão
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando você é alvo de qualquer ataque, você pode escolher fazer um **teste** de **percepção** contra a **inteligência** do inimigo, se você for bem sucedido, você ganha **vantagem** em se **esquivar**, **aparar** ou **agarrar** o ataque.


#
> Retirado do modulo: `=this.source`