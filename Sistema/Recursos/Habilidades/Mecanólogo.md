---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Mecanólogo"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Nível"
action: "-"
passive: TRUE
requirements: "Inventor"
requirements_ref: 
  - "[[Recursos/Habilidades/Inventor#Inventor|Inventor]]" 

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
# Mecanólogo
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você consegue conceber **diagramas** ainda mais complexos. Mecanismos que você concebe com a sua habilidade [[Sistema/Recursos/Habilidades/Inventor|Inventor]] são capazes de aumentar a força do movimento inicial, este aumento é proporcional ao tamanho do mecanismo. Além disso, você pode dividir esta **força** em vários movimentos diferentes e especificar a ordem em que acontecem, te permitindo fazer movimentos mais fortes ou mais refinados.


#
> Retirado do modulo: `=this.source`