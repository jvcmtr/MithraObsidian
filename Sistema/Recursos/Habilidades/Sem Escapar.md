---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Sem Escapar"
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
# Sem Escapar
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando um inimigo é bem sucedido em se **esquivar** de um ataque seu, você pode realizar um segundo [[Sistema/Sistema Base#Ataque Simples|Ataque Simples]], o inimigo possui **desvantagem** em se **esquivar** deste segundo ataque. Além disso, você pode atacar um inimigo sempre que ele tentar se afastar de você.


#
> Retirado do modulo: `=this.source`