---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Neutralizador"
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
# Neutralizador
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Enquanto você está [[Sistema/Sistema Base#Agarrão|Agarrando]] um inimigo, ele tem **desvantagem** em **testes** contra ser [[Sistema/Recursos/Condições/Derrubado#Derrubado|Derrubado]] ou desarmado.


#
> Retirado do modulo: `=this.source`