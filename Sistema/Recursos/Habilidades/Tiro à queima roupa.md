---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Tiro à queima roupa"
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
# Tiro à queima roupa
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você consegue usar uma arma a longa distância como uma arma corpo a corpo sem receber nenhuma **desvantagem**. Quando faz isso, o alcance da sua arma é limitado e você deve utilizar **agilidade** para acertar o inimigo, no lugar de **percepção**.


#
> Retirado do modulo: `=this.source`