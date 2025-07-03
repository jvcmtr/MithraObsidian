---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Imobilizador"
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
# Imobilizador
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Enquanto você está [[Sistema_Base#Agarrão|Agarrando]] um inimigo, você pode escolher imobilizá-lo, quando faz isso, todos os seus ataques acertam automaticamente o alvo imobilizado, mas você é automaticamente acertado por todos os ataques, com exceção dos ataques feitos pela criatura imobilizada.


#
> Retirado do modulo: `=this.source`