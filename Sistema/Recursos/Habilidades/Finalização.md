---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Finalização"
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
# Finalização
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando utiliza uma habilidade ofensiva você pode declarar que ela é uma **finalização**. Se o **dano causado** pelo seu ataque é maior do que os **pontos de vida restantes** do inimigo após receber o ataque, ele cai a **zero** pontos de vida automaticamente. 

Se o inimigo sobreviver a esta sua ação, ele pode realizar qualquer ação contra você. 

Você só pode realizar esta habilidade uma vez por combate.


#
> Retirado do modulo: `=this.source`