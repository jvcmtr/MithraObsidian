---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Padrão de ataque"
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
# Padrão de ataque
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você pode utilizar o seu modificador de **inteligência** para se **esquivar** de um ataque feito por um inimigo que já te acertou durante este combate. além disso, você se torna imune à habilidade [[Sistema/Recursos/Habilidades/Finta|Finta]] de um inimigo se ele já usou ela contra você neste combate. à critério da mesa, você também pode ser imune a outras habilidades que já foram usadas contra você. você não pode usar esta habilidade se estiver [[Sistema/Recursos/Condições/Desorientado#Desorientado|Desorientado]].


#
> Retirado do modulo: `=this.source`