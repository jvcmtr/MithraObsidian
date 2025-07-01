---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Escudo confiável"
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
# Escudo confiável
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Enquanto segura um escudo, você não possui **desvantagem** em defender por estar [[Sistema/Recursos/Condições/Atarefado#Atarefado|Atarefado]] ou [[Sistema/Recursos/Condições/Derrubado#Derrubado|Derrubado]]. Além disso, você possui **vantagem** contra ser desarmado do seu escudo.


#
> Retirado do modulo: `=this.source`