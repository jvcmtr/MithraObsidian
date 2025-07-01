---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Guerreiro Autodidata"
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
# Guerreiro Autodidata
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando você vê alguém usando uma habilidade ofensiva ou defensiva, você pode escolher torna-la a sua habilidade copiada. Quando fizer isso, anote a habilidade, seus Requisitos e um número igual à **15 +** o **modificador** do inimigo para usar aquela habilidade, Este número corresponde ao **desafio da habilidade**. 

Uma vez que a habilidade esteja copiada, você pode tentar usar ela no seu turno, sempre que tentar fazer isso, você deve ser bem sucedido em um **teste** de **inteligência** contra a habilidade copiada. Você só pode possuir uma habilidade copiada em um determinado momento.


#
> Retirado do modulo: `=this.source`