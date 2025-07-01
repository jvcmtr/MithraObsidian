---
tags:
  - "#hability"
  - "#Arsenal_Avançado"
name: "Arma curva"
source: "[[Sistema/Arsenal_Avançado#Habilidades|Arsenal_Avançado]]"
image_ref: ""

type: "Habilidade de Equipamento"
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
# Arma curva
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando você acerta um ataque contra uma criatura com essa arma, você pode escolher [[Sistema/Recursos/Condições/Derrubado#Derrubado|derruba-la]], [[Sistema/Sistema Base#Agarrão|prende-la]] ou desarma-la em vez de dar **dano**.


#
> Retirado do modulo: `=this.source`