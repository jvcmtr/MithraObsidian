---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Um com o animal"
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
# Um com o animal
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você escolhe uma espécie de animais ou plantas e consegue se tornar um com eles. Você sabe adaptar o seu pensamento a linguagem deles podendo transmitir ideias de qualquer complexidade, apesar da capacidade de resposta deles ainda poder ser limitada a sua **inteligência**. 

Além disso, estes animais te reconhecem como um deles mesmo que você ainda não tenha se comunicado ou interagido com eles. Para animais que seguem algum tipo de estrutura social, como por exemplo uma alcateia, você pode fazer parte dela.


#
> Retirado do modulo: `=this.source`