---
tags:
  - "#hability"
  - "#Habilidades_Magicas"
name: "Círculos mágicos de segundo grau"
source: "[[Sistema/Habilidades_Magicas#Habilidades|Habilidades_Magicas]]"
image_ref: ""

type: "Habilidade de Nível"
action: "-"
passive: TRUE
requirements: "Círculos mágicos de primeiro grau"
requirements_ref: 
  - "[[Recursos/Habilidades/Círculos mágicos de primeiro grau#Círculos mágicos de primeiro grau|Círculos mágicos de primeiro grau]]" 

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
# Círculos mágicos de segundo grau
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Círculos mágicos de segundo grau são conhecidos como círculos avançados, isso porque eles se utilizam de um conjunto de técnicas que requerem um conhecimento avançado da magia, à estas técnicas damos o nome de [[Sistema/Habilidades Magicas#Fenomenos Arcanos|Fenomenos Arcanos]], já que elas correspondem a grandes descobertas e inovações que foram feitas nos estudos da magia. 

Quando você ganha esta habilidade, você passa a conhecer um número de fenômenos arcanos igual ao seu modificador de **inteligência**, e você pode aplicar estes fenômenos na construção dos seus padrões mágicos. O número máximo de fenómenos que você pode incluir no mesmo círculo é igual ao seu modificador de **inteligência**.


#
> Retirado do modulo: `=this.source`