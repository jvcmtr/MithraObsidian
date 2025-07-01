---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Alquimista Pesquisador"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Nível"
action: "-"
passive: TRUE
requirements: "Alquimista"
requirements_ref: 
  - "[[Recursos/Habilidades/Alquimista#Alquimista|Alquimista]]" 

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
# Alquimista Pesquisador
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você é capaz de identificar ingredientes comuns (como pólvora, veneno ou ácido) pelo cheiro, cor e textura. Além disso, você é capaz de experimentar com qualquer ingrediente em um dia de trabalho. Ao final deste tempo, uma quantidade a critério da mesa é perdida. 

Cada vez que você experimenta com um ingrediente, você é capaz de descobrir uma das seguintes informações:
- Se você conhece ele, se sim, qual é.
- Uma propriedade que ele tem em comum com outro ingrediente.
- Uma fórmula ou possibilidade de como poderia ser utilizado.
Alternativamente, você pode fazer uma pergunta de SIM ou NÃO para o DM para descobrir algo sobre este ingrediente.


#
> Retirado do modulo: `=this.source`