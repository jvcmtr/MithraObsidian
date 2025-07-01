---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Irmão dos animais"
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
# Irmão dos animais
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você sabe se comunicar com animais tão bem quanto consegue se comunicar com outras pessoas. Você consegue entender seus sentimentos e estado de espírito como consegue entender o de um humano e consegue transmitir ideias simples. 

A complexidade das ideias que você consegue transmitir está relacionada à **inteligência** do próprio animal e a vontade dele de entender o que você tem a dizer. Por exemplo, um lobo faminto provavelmente não dará ouvidos a uma possível refeição.


#
> Retirado do modulo: `=this.source`