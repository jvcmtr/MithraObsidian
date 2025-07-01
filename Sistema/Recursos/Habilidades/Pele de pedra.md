---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Pele de pedra"
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
# Pele de pedra
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você utiliza a sua **robustês** no lugar da sua **convicção** para tentar resistir a um ataque, além disso, se você não estiver usando armadura, quando você é bem sucedido, o **dano** que você recebe é reduzido em um valor igual ao seu **nível**.


#
> Retirado do modulo: `=this.source`