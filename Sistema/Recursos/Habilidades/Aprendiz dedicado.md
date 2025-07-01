---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Aprendiz dedicado"
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
# Aprendiz dedicado
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Sempre que for necessário um **teste** de **inteligência** para aprender ou executar uma habilidade, você pode tentar conseguir isso com tempo, dedicação e força de vontade. Para isso você deve deixar de usufruir de um descanso longo estudando e treinando e, ao final do descanso, você pode substituir seu modificador de **convicção** pelo seu modificador de **inteligência** para aquele **teste** em específico.


#
> Retirado do modulo: `=this.source`