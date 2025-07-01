---
tags:
  - "#hability"
  - "#Habilidades_Magicas"
name: "Runas"
source: "[[Sistema/Habilidades_Magicas#Habilidades|Habilidades_Magicas]]"
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
# Runas
*`=this.type` - `$=dv.current().passive? "Passiva" : dv.current().action`*

Você passa a conhecer um número de *runas* igual ao seu **modificador de percepção**. cada *runa* é uma palavra que representa um *aspecto*. Com as devidas ferramentas, você pode escrever uma *runa* em sua forma aberta ou fechada em qualquer superfície e o efeito da *runa* perdura até que a forma da *runa* seja desfeita ou rompida. 

- **Runas Naturais :** Uma *runa* fechada manifesta o seu *efeito* momentaneamente quando alimentada com *mana*. Por exemplo: uma *runa* de fogo cria uma labareda se você quebra um cristal de  *mana* dentro dela

- **Runas Invertidas :** Nem todas as *runas* podem ser invertidas, mas quando você faz isso, ela gera uma pequena quantidade de *mana* ao longo do tempo, absorvendo essa energia do ambiente lentamente. De um modo geral, uma *runa* invertida gera 1 de *mana* por semana, mas tanto a quantidade de  *mana* que é gerada, assim como o tempo que ela demora para recarregar, depende da especificidade da sua *runa* e proximidade dela com uma manifestação do seu aspecto. Por exemplo: uma *runa* invertida de fogo pode gerar 1 de  *mana* por dia, se desenhada dentro de uma fogueira.

Conforme você sobe de nível e você aumenta o seu modificador de percepção, você pode escolher mais *runas*.



#
> Retirado do modulo: `=this.source`