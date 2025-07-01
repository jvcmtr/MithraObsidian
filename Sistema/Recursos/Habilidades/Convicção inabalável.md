---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Convicção inabalável"
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
# Convicção inabalável
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você pode usar a sua **convicção** no lugar da sua **força** para calcular o seu modificador de defesa. para fazer isso, você não pode estar [[Sistema/Recursos/Condições/Desorientado#Desorientado|Desorientado]].


#
> Retirado do modulo: `=this.source`