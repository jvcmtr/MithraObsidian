---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Inventor"
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
# Inventor
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você é capaz de conceber estruturas complexas utilizando cordas, engrenagens, esteiras, e materiais flexiveis. Com a quantidade suficiente de tempo, você consegue criar um **diagrama** que representa qualquer mecanismo capaz de, dado um movimento inicial, transformá–lo em outro movimento de aproximadamente a mesma força. 

Diferentes **diagramas** podem possuir diferentes dificuldades em serem concebidos, podendo ser necessário que você seja bem sucedido em um **teste** de lógica (**inteligência**). Algumas coisas que podem representar dificuldades: 
- Precisar que o mecanismo seja compacto ou discreto;
- Limitar os tipos de materiais utilizados; 
- Precisar que o mecanismo funcione em um ambiente incomum como na neve ou abaixo do oceano;
- Precisar que o mecanismo funcione várias vezes sem precisar ser “resetado”.


#
> Retirado do modulo: `=this.source`