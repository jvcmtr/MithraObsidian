---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Agarrão"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Nível"
action: "Reação - quando recebe um ataque"
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
# Agarrão
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você escolhe entre se **esquivar** ou **agarrar** um ataque corpo a corpo. quando é bem sucedido, o inimigo não pode mais atacar neste turno e fica [[Sistema/Recursos/Condições/Agarrado#Agarrado|Agarrado]] por você. você deve ter uma mão livre para fazer isso.


#
> Retirado do modulo: `=this.source`