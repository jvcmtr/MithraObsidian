---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Ataque com duas armas"
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
# Ataque com duas armas
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando você segura uma arma em cada mão e nenhuma delas é um escudo você pode fazer um ataque com as duas armas ao mesmo tempo, quando faz isso, você pode somar os bônus de **impacto** e **dano** das duas armas, mas deve utilizar o menor bônus de **manuseio**.


#
> Retirado do modulo: `=this.source`