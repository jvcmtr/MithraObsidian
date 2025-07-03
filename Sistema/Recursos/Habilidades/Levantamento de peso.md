---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Levantamento de peso"
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
# Levantamento de peso
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você pode carregar itens cuja soma dos modificadores de carga não superem 6 sem ficar [[Sistema/Recursos/Condições/Sobrecarregado#Sobrecarregado|Sobrecarregado]]. Isto é, até dois itens de [[Sistema_Base#Classes de Tamanho|Classe]] **C** ou um item de [[Sistema_Base#Classes de Tamanho|Classe]] **E**


#
> Retirado do modulo: `=this.source`