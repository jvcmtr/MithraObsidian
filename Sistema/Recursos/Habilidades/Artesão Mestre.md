---
tags:
  - "#hability"
  - "#Sistema_Base"
name: "Artesão Mestre"
source: "[[Sistema/Sistema_Base#Habilidades|Sistema_Base]]"
image_ref: ""

type: "Habilidade de Nível"
action: "-"
passive: TRUE
requirements: "Artesão"
requirements_ref: 
  - "[[Recursos/Habilidades/Artesão#Artesão|Artesão]]" 

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
# Artesão Mestre
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você escolhe um dos materiais em que você se especializou com sua habilidade de [[Sistema/Recursos/Habilidades/Artesão|Artesão]] e se torna mestre dele, ganhando os seguintes benefícios: 
- Você tem **vantagem** em qualquer **teste** relacionado ao conhecimento daquele material, podendo deduzir povos  ou artesãos específicos que podem tê-lo feito. 
- Objetos que você constroi usando este material possuem maior resistência.
- Você pode adicionar metade do seu modificador de **inteligência** ao **dano** de ataques feitos contra objetos deste material.
- Você aprende a ler e reproduzir qualquer diagrama, e pode traduzi-lo para artesões não mestres.


#
> Retirado do modulo: `=this.source`