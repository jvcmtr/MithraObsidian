---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Grande Porte"
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
# Grande Porte
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você pode ignorar a propriedade [[Sistema/Recursos/Habilidades/Pesado|Pesada]] de armaduras. Além disso, você possui **vantagem** em **testes** de **força** para evitar ser [[Sistema/Recursos/Condições/Derrubado#Derrubado|Derrubado]], [[Sistema_Base#Empurrão|Empurrado]] ou ficar [[Sistema/Recursos/Condições/Sobrecarregado#Sobrecarregado|Sobrecarregado]].


#
> Retirado do modulo: `=this.source`