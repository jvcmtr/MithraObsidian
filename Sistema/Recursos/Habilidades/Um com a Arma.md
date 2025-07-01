---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Um com a Arma"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Nível"
action: "-"
passive: TRUE
requirements: "Empunhadura confiavel"
requirements_ref: 
  - "[[Recursos/Habilidades/Empunhadura confiavel#Empunhadura confiavel|Empunhadura confiavel]]" 

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
# Um com a Arma
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Quando você ganha esta habilidade você deve escolher um tipo de arma dentre as que você é habituado com a sua habilidade 
[[Sistema/Recursos/Habilidades/Empunhadura confiável|Empunhadura confiável]], enquanto segura ela você possui a mesma destreza que possui com as suas mãos. Você é capaz de desatar nós e fazer movimentos precisos e suaves. A sua arma pode contar como não letal e você pode se considerar com “uma mão livre”. Além disso, você pode usar a sua arma para se **defender** ou **aparar** um contra-ataque, mesmo que já tenha usado ela para atacar.


#
> Retirado do modulo: `=this.source`