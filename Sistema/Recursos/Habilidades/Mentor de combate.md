---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Mentor de combate"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Nível"
action: "-"
passive: TRUE
requirements: "Guerreiro Autodidata"
requirements_ref: 
  - "[[Recursos/Habilidades/Guerreiro Autodidata#Guerreiro Autodidata|Guerreiro Autodidata]]" 

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
# Mentor de combate
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você pode deixar de usufruir de um descanso longo para treinar com um mentor que esteja disposto a te ensinar, quando faz isso, você pode escolher [[Sistema/Recursos/Habilidades/Guerreiro Autodidata|copiar]] até 3 habilidades do seu mentor. Se você usar a sua habilidade [[Sistema/Recursos/Habilidades/Guerreiro Autodidata|Guerreiro Autodidata]] para copiar uma habilidade de uma criatura que não seja o seu mentor, você volta a só poder ter uma habilidade copiada.


#
> Retirado do modulo: `=this.source`