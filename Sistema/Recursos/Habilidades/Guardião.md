---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Guardião"
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
# Guardião
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você pode escolher defender uma passagem. Enquanto você defende ela, você não pode ser [[Sistema/Recursos/Condições/Derrubado#Derrubado|Derrubado]], [[Sistema_Base#Empurrão|Empurrado]] ou [[Sistema_Base#Reposicionamento|Reposicionado]] e não pode sofrer da condição [[Sistema/Recursos/Condições/Atarefado#Atarefado|Atarefado]]. Além disso, seus  [[Sistema_Base#Ataques de oportunidade|Ataques de oportunidade]] passam a dar **dano**.


#
> Retirado do modulo: `=this.source`