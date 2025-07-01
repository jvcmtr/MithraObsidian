---
tags:
  - "#hability"
  - "#Habilidades_Magicas"
name: "Pronúncia de Runas"
source: "[[Sistema/Habilidades_Magicas#Habilidades|Habilidades_Magicas]]"
image_ref: ""

type: "Habilidade de Nível"
action: "-"
passive: TRUE
requirements: "Runas"
requirements_ref: 
  - "[[Recursos/Habilidades/Runas#Runas|Runas]]" 

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
# Pronúncia de Runas
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você aprende a pronunciar as *runas* que você conhece, podendo manifestar o seu efeito natural somente com suas palavras. Quando decide fazer isso, você pode consumir uma quantidade de  *mana* igual ou menor que o seu modificador de **convicção** e manifestar o efeito de sua *runa* (ou sequência de *runas*) em um alvo que esteja no alcance do seu toque.

O alvo então é imbuído com o aspecto da sua *runa*, Encantamentos alteram permanentemente um objeto, e são capazes de afetar uma mesma criatura por décadas. Quanto mais  *mana* você gastar, maior é a alteração que o objeto encantado sofre.



#
> Retirado do modulo: `=this.source`