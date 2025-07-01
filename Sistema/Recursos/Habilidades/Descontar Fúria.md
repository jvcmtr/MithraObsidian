---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Descontar Fúria"
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
# Descontar Fúria
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Uma vez que você utilize a sua habilidade [[Sistema/Recursos/Habilidades/Sequência furiosa|Sequência furiosa]], você pode realizar qualquer ataque corpo a corpo contra um inimigo. Os seus bônus se aplicam neste ataque, mas depois disso eles retornam a 0 novamente.


#
> Retirado do modulo: `=this.source`