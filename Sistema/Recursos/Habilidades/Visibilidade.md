---
tags:
  - "#hability"
  - "#Arsenal_Avançado"
name: "Visibilidade"
source: "[[Sistema/Arsenal_Avançado#Habilidades|Arsenal_Avançado]]"
image_ref: ""

type: "Habilidade de Equipamento"
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
# Visibilidade
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Enquanto você está com este item equipado, qualquer criatura possui **vantagem** em **testes** para te perceber e você possui **vantagem** em **testes** para ser percebido.


#
> Retirado do modulo: `=this.source`