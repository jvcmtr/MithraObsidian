---
tags:
  - "#hability"
  - "#Habilidades_Magicas"
name: "Culto à Natureza"
source: "[[Sistema/Habilidades_Magicas#Habilidades|Habilidades_Magicas]]"
image_ref: ""

type: "Habilidade de Nível"
action: "-"
passive: TRUE
requirements: "Runas"
requirements_ref: 
  - "[[Recursos/Habilidades/Runas#Runas|Runas]]" 

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
# Culto à Natureza
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você aprende a receber as energias que o mundo tem para lhe dar, e absorvendo a  *mana* que existe em todas as coisas. Você pode ficar algumas horas cultivando alguma manifestação de uma *runa* que você conheça, por exemplo. Se você conhece a *runa* da palavra Fogo, você pode passar a noite meditando próximo à uma fogueira. Quando faz isso, você recebe 1 de  *mana* e pode adicionar à sua reserva. 

A quantidade máxima de *pontos de mana* que você pode ter em sua reserva é igual ao seu modificador de **Percepção + o seu nível**. 

Como parte de uma ação, você pode consumir um número de *pontos de mana* de sua reserva igual ou menor ao seu modificador de **Convicção**.



#
> Retirado do modulo: `=this.source`