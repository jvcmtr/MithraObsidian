---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Protetor"
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
# Protetor
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Requer estar segurando um escudo
Quando uma criatura é atacada dentro de seu alcance corpo a corpo, você pode usar o seu bônus de**defesa**para tentar protegê-la, se falhar, você recebe o **dano** no lugar da criatura


#
> Retirado do modulo: `=this.source`