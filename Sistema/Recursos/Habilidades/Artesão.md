---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Artesão"
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
# Artesão
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando escolhe esta habilidade, você escolhe um tipo de material para se especializar (metal, pedra, madeira, tecido, etc…) e se torna capaz de:
- Apontar uma falha estrutural ou ponto fraco em um objeto feito deste material.
- Consertar ou reproduzir qualquer objeto deste material que você já tenha analisado, se você possuir os equipamentos, recursos e tempo necessários.

Você pode escolher esta habilidade mais de uma vez, escolhendo um material diferente a cada vez.


#
> Retirado do modulo: `=this.source`