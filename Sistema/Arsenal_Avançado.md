---
tags:
  - "#module"
---

### Sobre

##### O que é este documento

Este documento é um módulo de expansão para o sistema de RPG no mundo de Mithra. A intenção de um módulo de expansão é agregar às regras e/ou itens descritos no documento original a fim de alcançar uma experiência específica de jogo, o que pode promover uma mudança no balanceamento. Por isso, Todas as regras incluídas aqui são consideradas opcionais e a possibilidade de serem ou não usadas é determinada pelo mestre, enquanto qualquer alteração no material original do sistema cabe à mesa.

  
##### O Arsenal

Este documento em específico tem a intenção de expandir a variedade de armas e armaduras que o jogador pode usar, com o intuito de habilitar o jogador com um controle mais fino sobre o seu personagem. Essa maior quantidade de equipamentos, no entanto, promove um aumento na versatilidade (e por consequência força) dos jogadores no quesito de combate, especialmente nos primeiros níveis. Além disso, nem todas as armas aqui podem condizer com o cenário em que o jogo está ocorrendo. Por isso, fica a critério do mestre definir a disponibilidade de cada arma. 

> [!infobox | sban clean]
>> ##### Raridade:
>> Faça com que este item seja um objeto raro, como por exemplo, algo que só pode ser produzido por artesãos habilidosos ou de uma cultura específica. Ele pode muito bem ser também uma velharia que poucos ainda se interessam por ou que seu modo de produção foi perdido no tempo.

> [!infobox | sban clean]
>> ##### Preço: 
Torne o preço deste item o dobro do de outros, por conta da sua raridade. Ou faça ele ser tão diferente que nenhum mercador compraria, afinal de contas, para quem ele conseguiria revender?

> [!infobox | sban clean]
>> ##### Banalidade: 
>> Torne o item algo tão comum que qualquer um possa ter acesso a ele, tanto aliados quanto inimigos. Altere a ficha de inimigos para incluir estes equipamentos e encontrar um novo balanço.

> [!infobox | sban clean]
>> ##### Recompensa:
>>  Faça este item ser o objetivo ou recompensa por cumprir algum grande feito.**


##### O Módulo de Armas
As armas descritas na secção de armas, diferentemente das armas descritas no sistema original, recebem todas as habilidades descritas na sua coluna de habilidade. Todas as habilidades (as exclusivas deste módulo e originais do sistema) podem ser encontradas logo abaixo da tabela, na seção Habilidades de arma.

##### O Módulo de Armaduras
As armaduras descritas na secção de armaduras, diferentemente das armaduras descritas do sistema original, recebem todas as propriedades descritas na sua coluna de propriedades. Todas as propriedades (as exclusivas deste módulo e originais do sistema) podem ser encontradas logo abaixo da tabela, na seção Propriedades de armadura.**

# Armas Avançadas
>  ######  Armas corpo a corpo : 
``` dataviewjs
const folder = '"Sistema/Recursos/Armas"';  
const tag_filter = ["#Arsenal_Avançado", "#weapon"];

const colunas = [
	["Classe de Tamanho", (p) => p["size"] ],
	["Bonus de dano", (p) => p["damage_mod"] ],
	["Nome", (p) => p.file.link ],
	["Tipo de dano", (p)=> p["damage_type"]],
	["Bonus de Manuseio", (p)=> p["maneuver_mod"]],
	["Bonus de Peso", (p)=> p["weight_mod"]],
	["Bonus de Defesa", (p)=> p["defense_mod"]],
	["Habilidades", (p)=> p["habilities_ref"].map(r => "=="+r+"==").join(" ")]
]
 
 const pages = dv.pages(folder)
     .where(p => p.tags 
	    && !p["shield"] 
	    && !p["ranged"]
	    && tag_filter.every( t => p.tags.includes(t) )) 
    .sort(p => p["size"], "asc")

 dv.table(
 	colunas.map(c => c[0]),
 	pages.map(p => colunas.map(c => c[1](p)))
 );
 
 ```

>  ######  Escudos : 
``` dataviewjs
const folder = '"Sistema/Recursos/Armas"';  
const tag_filter = ["#Arsenal_Avançado", "#weapon"];

const colunas = [
	["Classe de Tamanho", (p) => p["size"] ],
	["Bonus de dano", (p) => p["damage_mod"] ],
	["Nome", (p) => p.file.link ],
	["Tipo de dano", (p)=> p["damage_type"]],
	["Bonus de Manuseio", (p)=> p["maneuver_mod"]],
	["Bonus de Peso", (p)=> p["weight_mod"]],
	["Bonus de Defesa", (p)=> p["defense_mod"]],
	["Habilidades", (p)=> p["habilities_ref"].map(r => "=="+r+"==").join(" ")]
]
 
 const pages = dv.pages(folder)
     .where(p => p.tags 
	    && p["shield"] 
	    && !p["ranged"]
	    && tag_filter.every( t => p.tags.includes(t) )) 
    .sort(p => p["size"], "asc")

 dv.table(
 	colunas.map(c => c[0]),
 	pages.map(p => colunas.map(c => c[1](p)))
 );
 
 ```

>  ######  Armas à distância : 
``` dataviewjs
const folder = '"Sistema/Recursos/Armas"';  
const tag_filter = ["#Arsenal_Avançado", "#weapon"];

const colunas = [
	["Classe de Tamanho", (p) => p["size"] ],
	["Bonus de dano", (p) => p["damage_mod"] ],
	["Nome", (p) => p.file.link ],
	["Tipo de dano", (p)=> p["damage_type"]],
	["Bonus de Manuseio", (p)=> p["maneuver_mod"]],
	["Bonus de Peso", (p)=> p["weight_mod"]],
	["Bonus de Defesa", (p)=> p["defense_mod"]],
	["Habilidades", (p)=> p["habilities_ref"].map(r => "=="+r+"==").join(" ")]
]
 
 const pages = dv.pages(folder)
     .where(p => p.tags 
	    && !p["shield"] 
	    && p["ranged"]
	    && tag_filter.every( t => p.tags.includes(t) ))  
    .sort(p => p["size"], "asc")

 dv.table(
 	colunas.map(c => c[0]),
 	pages.map(p => colunas.map(c => c[1](p)))
 );
 
 ```


# Armaduras Avançadas

``` dataviewjs
const folder = '"Sistema/Recursos/Armaduras"';  
const tag_filter = ["#Arsenal_Avançado", "#armour"];

const colunas = [
	["Tipo", (p) => p["type"] ],
	["Classe de Tamanho", (p) => p["size"] ],
	["Nome", (p) => p.file.link ],
	["Resistências", (p)=> ["Cortante", "Impacto", "Perfurante"]
		.map(t => p["resistances"][t] != 0? 
			"=="+t+" " + p["resistances"][t]+"==" : "" )
		.join(" ")],
	["Bonus de Esquiva", (p)=> p["dodge_mod"]],
	["Bolsos", (p)=> p["pockets"]],
	["Habilidades", (p)=> p["habilities_ref"]? p["habilities_ref"].map(r => "=="+r+"==").join(" ") : "" ]
]
 
 const pages = dv.pages(folder)
     .where(p => p.tags
	    && tag_filter.every( t => p.tags.includes(t) ))  
    .sort(p => p["size"], "asc")

 dv.table(
 	colunas.map(c => c[0]),
 	pages.map(p => colunas.map(c => c[1](p)))
 );
 
 ```

# Habilidades de Equipamento
```dataviewjs
const folder = 'Sistema/Recursos/Habilidades';  
const tag_filter = ["#Arsenal_Avançado", "#hability"];

 const pages = dv.pages(`"${folder}"`)
     .where(p => p.tags 
	    && p["type"] == "Habilidade de Equipamento"
	    && tag_filter.every( t => p.tags.includes(t) ))  
    .sort(p => p["name"], "asc")


for (let ref of pages) {
	let nm = ref.file.name
    dv.paragraph(`![[${folder}/${nm}#${nm}|${nm}]]`);
    dv.paragraph()
}
```