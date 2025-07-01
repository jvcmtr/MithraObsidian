---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Guerreiro Genial"
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
# Guerreiro Genial
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Sempre que você possuir uma habilidade copiada com a sua habilidade 
[[Sistema/Recursos/Habilidades/Guerreiro Autodidata|Guerreiro Autodidata]], você pode deixar de usufruir de um descanso longo para treinar a habilidade. 

Quando faz isso, você deve realizar 5 **testes** contra o **desafio da habilidade**, se você for bem sucedido em pelo menos 3, a habilidade passa a contar como decorada para você. 

Você não precisa ser bem sucedido em um **teste** contra habilidades que você tem decorada para poder usá-la. Contudo, você só pode ter uma habilidade decorada por vez e ela não precisa ser a mesma que a sua habilidade copiada.


#
> Retirado do modulo: `=this.source`