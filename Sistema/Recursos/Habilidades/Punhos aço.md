---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Punhos aço"
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
# Punhos aço
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Enquanto você possui uma mão livre, você pode **aparar** qualquer ataque que possua **dano** contundente. quando faz isso, você utiliza o seu modificador de **força** no lugar de sua **agilidade**.


#
> Retirado do modulo: `=this.source`