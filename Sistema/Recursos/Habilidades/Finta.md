---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Finta"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Nível"
action: "Ação"
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
# Finta
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você realiza um [[Sistema_Base#Ataque Simples|Ataque Simples]] corpo a corpo contra um inimigo que consiga te ver. quando o inimigo escolhe como irá reagir, você pode tentar ser vitorioso em um **teste** de **inteligência** contra o inimigo, se for bem sucedido, você pode obrigar o inimigo a mudar a ação defensiva ou habilidade defensiva que escolheu. você não pode utilizar esta habilidade em dois turnos consecutivos.


#
> Retirado do modulo: `=this.source`