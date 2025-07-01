---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Irmão da natureza"
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
# Irmão da natureza
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você consegue aprender com a natureza e ouvir o que ela tem a te dizer. Você consegue entender o estado de espírito e as necessidades básicas de qualquer planta. Você também consegue adquirir conhecimentos sobre as estações e características de qualquer bioma, contanto que tenha acesso a pelo menos um espécime vegetal nativo daquele lugar. 

Além disso, você consegue identificar quaisquer propriedades do espécime que possui, incluindo se ele é venenoso ou não, se possui propriedades curativas ou bom valor nutricional.


#
> Retirado do modulo: `=this.source`