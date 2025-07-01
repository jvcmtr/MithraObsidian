---
tags:
  - "#hability"
  - "#Arsenal_Avançado"
name: "Aceleração"
source: "[[Sistema/Arsenal_Avançado#Habilidades|Arsenal_Avançado]]"
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
# Aceleração
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Esta arma deve ser mantida em movimento, se você receber **dano** no seu turno ou se um inimigo defender o seu ataque, ela sai de movimento e o bônus de **impacto** e **dano** são reduzidos em **1** até o final do seu próximo turno.


#
> Retirado do modulo: `=this.source`