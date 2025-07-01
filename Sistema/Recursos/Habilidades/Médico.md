---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Médico"
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
# Médico
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você possui um conhecimento profundo do corpo humano e das coisas que o fazem mal. Você é capaz de definir os cuidados apropriados para lidar com qualquer tipo de ferimento ou condição negativa e é automaticamente bem sucedido em procedimentos simples como estabilizar um indivíduo, instalar uma tala ou bandagem. 

Além disso, você possui **vantagem** em qualquer **teste** para executar um procedimento arriscado e, com os devidos materiais e tempo, você também é capaz de esterilizar decentemente um lugar, negando qualquer chance de infecção.


#
> Retirado do modulo: `=this.source`