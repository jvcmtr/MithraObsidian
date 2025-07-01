---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Inventor Especialista"
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
# Inventor Especialista
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando adquire essa habilidade, você pode escolher um tipo de dificuldade comumente encontrada na elaboração dos seus **diagramas** e se especializar nela. Você pode ignorar qualquer **teste** que tenha que fazer para superar a dificuldade da sua especialização. 

Você pode pegar esta habilidade quantas vezes quiser, escolhendo uma especialidade cada vez que escolhe.


#
> Retirado do modulo: `=this.source`