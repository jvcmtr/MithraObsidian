---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Mártir"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Nível"
action: "Reação - quando recebe um ataque"
passive: FALSE
requirements: "Trocar Golpes"
requirements_ref: 
  - "[[Recursos/Habilidades/Trocar Golpes#Trocar Golpes|Trocar Golpes]]" 

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
# Mártir
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando você tenta resistir a um ataque, você pode escolher falhar propositalmente no **teste** e perder qualquer **resistência** que tenha contra o dano recebido. quando faz isso, você pode realizar uma **ação de ataque** contra o inimigo, ele é acertado automaticamente e perde qualquer resistência que tenha ao **dano** do seu ataque.


#
> Retirado do modulo: `=this.source`