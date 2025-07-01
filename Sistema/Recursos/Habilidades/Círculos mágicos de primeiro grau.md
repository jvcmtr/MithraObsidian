---
tags:
  - "#hability"
  - "#Habilidades_Magicas"
name: "Círculos mágicos de primeiro grau"
source: "[[Sistema/Habilidades_Magicas#Habilidades|Habilidades_Magicas]]"
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
# Círculos mágicos de primeiro grau
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando ganha esta habilidade, você é capaz de desenhar e arquitetar [[Sistema/Habilidades Magicas#Círculos mágicos de primeiro grau|Círculos mágicos de primeiro grau]]. Círculos mágicos são a primeira forma de padrões mágicos, estes são um conjunto de regras e teorias que permitem a manipulação precisa e replicável para o estudo e a execução da magia.

Padrões mágicos são formados de **Círculos**, **Glifos** e **Icones**, eles são alimentados por *mana* e podem sofrer *sobrecarga* caso recebam mais  *mana* do que podem aguentar.


#
> Retirado do modulo: `=this.source`