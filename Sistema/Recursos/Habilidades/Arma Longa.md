---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Arma Longa"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
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
# Arma Longa
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Esta arma conta como um tamanho maior para o propósito de se calcular o seu alcance. Além disso, você pode realizar um  [[Sistema/Sistema Base#Ataques de oportunidade|Ataque de oportunidade]] contra um inimigo que entra em seu alcance. Uma vez que faça isso, não pode fazê-lo novamente até o início do seu próximo turno.


#
> Retirado do modulo: `=this.source`