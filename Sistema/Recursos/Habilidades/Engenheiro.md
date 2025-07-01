---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Engenheiro"
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
# Engenheiro
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você aprende a ler **diagramas** e é capaz de prever o resultado de qualquer **diagrama** que consiga ver, além disso, você é capaz de identificar o ponto fraco de qualquer estrutura e prever a quantidade de força necessária para destruir qualquer construção, mecanismo ou objeto. 

A exatidão das informações que você consegue extrair está relacionada com a exatidão do que você consegue ver e medir em uma estrutura. Ou seja, dada a quantidade suficiente de tempo e recursos para se medir e avaliar uma estrutura ou objeto, você pode avaliá-la com qualquer exatidão. 

À Critério da mesa, esta quantidade de tempo e recursos pode ser substituída por um **teste** de lógica (**inteligência**) ou um **teste** de avaliação (**percepção**).  


#
> Retirado do modulo: `=this.source`