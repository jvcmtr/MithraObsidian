---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Ataque em equipe"
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
# Ataque em equipe
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Se escolher **esperar** no seu turno, você pode realizar uma ação de ataque contra um inimigo que acabou de ser atacado, quando faz isso, o inimigo é obrigado a utilizar a mesma **defesa** e recebe **desvantagem** em qualquer **teste** ou **disputa** relacionada a ela.


#
> Retirado do modulo: `=this.source`