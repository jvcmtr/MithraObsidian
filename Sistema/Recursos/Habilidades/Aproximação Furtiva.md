---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Aproximação Furtiva"
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
# Aproximação Furtiva
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

A não ser que uma criatura esteja ativamente te procurando ou interagindo diretamente com você quando um combate começa, você sempre começa o combate em furtividade. Além disso, você sempre consegue perceber a presença de uma criatura antes que ela perceba você, a não ser que ela esteja propositalmente se escondendo, te procurando ou que você esteja propositalmente fazendo barulho.


#
> Retirado do modulo: `=this.source`