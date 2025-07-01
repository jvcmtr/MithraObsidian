---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Alquimista"
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
# Alquimista
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você aprende a criar e ler fórmulas químicas que te permitem purificar, diluir ou transformar um material em outro. Com a quantidade necessária de tempo e recursos, você é capaz de reproduzir qualquer fórmula que tenha anotada. 

Além disso, caso você não possua os ingredientes necessários para reproduzir uma formula, você pode deixar de usufruir de um descanso longo e ser bem sucedido em um **teste** de Inteligência para tentar descobrir uma fórmula que transforma algum material que você possua em algum outro material que você conheça, perdendo uma parte do material original no processo. 

Quais materiais podem ser transformados em que, assim como a dificuldade do **teste** para conseguir descobrir isso ficam a critério da mesa.


#
> Retirado do modulo: `=this.source`