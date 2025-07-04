---
name: Timotio Junior
race: "[[Sistema/Recursos/Raças/Hulleniano.md|Hulleniano]]"
origin: "Ancião "
str: 5
agi: 5
tou: 9
int: 1
per: 9
con: 9
lvl: 5
hp: 47
mana: 999
mana_max: 999
runes: 
spells: 
expertise:
  - Barganha
knolege:
  - "[[Wiki/Eras/1. Era dos Demonios.md|1. Era dos Demonios]]"
equipment_prof: 
armour: "[[Sistema/Recursos/Armaduras/Veste de Seda.md|Veste de Seda]]"
weapon1: "[[Sistema/Recursos/Armas/Tocha.md|Tocha]]"
weapon2: "[[Sistema/Recursos/Armas/Soco Inglês.md|Soco Inglês]]"
equipments: 
items: 
gold: 0
hab_selected: "[[Sistema/Recursos/Habilidades/Um com o animal.md|Um com o animal]]"
habilities: 
tags:
  - "#player_char"
image: Imagens/Portraits/Timot.jpg
---

# `$= dv.current().name` 

> [!infobox | clean]
> # `=this.name` 
> `INPUT[imageSuggester(optionQuery("Imagens/Portraits")):image]`
>### **Atributos** :
> | | |
> | - | - |
> || **Informações** |
> |**Nome** | `INPUT[text:name]` |
> |**Nível** | `INPUT[number:lvl]` |
> |**Raça** | `INPUT[suggester(optionQuery("Sistema/Recursos/Raças"), useLinks(true)):race]`
> |**Origem**|`INPUT[text:origin]` |


| | |
| - | - |
|| **Atributos** |
|**Força** | `INPUT[number:str]`| 
|**Agilidade** | `INPUT[number:agi]`| 
|**Robustês** | `INPUT[number:tou]`| 
|**Inteligencia** | `INPUT[number:int]`| 
|**Percepção** | `INPUT[number:per]`|
|**Convicção** | `INPUT[number:con]`| 



```dataviewjs
let cur = dv.current()
let n = [   (cur.str ||0) , (cur.agi ||0) ,
			(cur.tou ||0) , (cur.int ||0) ,
			(cur.per ||0) , (cur.con ||0) 
		]
let max = cur.lvl + 4
if(n.some(i=> i > max)){
	dv.paragraph("> [!warning] Um dos seus atributos é maior que " + max + " que é o limite para o seu nível, como explicado em  ==[[Sistema_Base#Limite de atributo|Limite de Atributo]]==")
}
```



| | |
| - | - |
|| **Magia** |
|**Mana** | `INPUT[number(class(mana)):mana]` / `INPUT[number(class(my-column-small)):mana_max]`| 
|**Runas Conhecidas** | `INPUT[inlineList:runes]`| 

| | |
| - | - |
| |**Proficiências** 
|**Perícias**|`INPUT[inlineListSuggester(option(Acrobacia,Acrobacia),  option(Atletismo,Atletismo),  option(Avaliação,Avaliação),  option(Barganha,Barganha),  option(Carga,Carga),  option(Comunicar com animais,Comunicar com animais),  option(Intelecto,Intelecto),  option(Construir,Construir),  option(Desconfiança,Desconfiança),  option(Destreza com dedos,Destreza com dedos),  option(Firmeza na mão,Firmeza na mão),  option(Fôlego,Fôlego),  option(Furtividade,Furtividade),  option(Imunidade,Imunidade),  option(Interpretação,Interpretação),  option(Intimidação,Intimidação),  option(Liderança,Liderança),  option(Lógica,Lógica),  option(Navegar,Navegar),  option(Persuasão,Persuasão),  option(Postura,Postura),  option(Memória,Memória)):expertise]`|
|**Conhecimento**|`INPUT[inlineListSuggester(optionQuery("Wiki")):knolege]`|
|**Equipamento**|`INPUT[inlineListSuggester(option(Armas Pequenas ,Armas Pequenas : todas as armas corpo a corpo de classe A),  option(Uma mão ,Uma mão : todas as armas corpo a corpo de classe B),  option(Duas Mãos ,Duas Mãos : todas as armas corpo a corpo de classe C),  option(Armas Grandes ,Armas Grandes : todas as armas corpo a corpo de classe D),  option(Machados ,Machados : todas as armas que podem ser caracterizadas como Machados),  option(Lâminas ,Lâminas : todas as armas que podem ser caracterizadas como espadas de corte.),  option(Rapieiras,Rapieiras: todas as armas que podem ser caracterizadas como espadas perfurantes.),  option(Armas pesadas ,Armas pesadas : todas as armas que possuem algo pesado no final de sua empunhadura como martelos e maça),  option(Arcos ,Arcos : todas as armas que podem ser caracterizadas como arcos),  option(Bestas ,Bestas : todas as armas que podem ser caracterizadas como bestas),  option(Escudos ,Escudos : todas as armas que podem ser caracterizadas como escudos)):equipment_prof]`|

```dataviewjs
let cur = dv.current()
let n = (cur.equipment_prof?.length ||0) +
		(cur.expertise?.length ||0) +
		(cur.knolege?.length ||0)
let max = 2 + (2 * cur.lvl) + cur.int
if(n > max){
	dv.paragraph("> [!warning] Você só pode ter no máximo " + max+ " proficiências, como descrito em ==[[Sistema_Base#Habilidades e proficiências|Habilidades e Proficiencias (lvl1)]]== e ==[[Sistema_Base#Subindo de Nível]]==")
}
```

| | |
| - | - |
|| **Itens Equipados** |
|**Armadura** | `INPUT[suggester(optionQuery(#armour), optionQuery("Sistema/Recursos/Armaduras"), useLinks(true)):armour]`|
|**Mão Direita** | `INPUT[suggester(optionQuery(#weapon), optionQuery("Sistema/Recursos/armas"), useLinks(true)):weapon1]`|
|**Mão Esquerda** | `INPUT[suggester(optionQuery(#weapon), optionQuery("Sistema/Recursos/armas"), useLinks(true)):weapon2]`|

# Combate

**Hp :** `INPUT[number(class('hp')):hp]` / `$= 2 + (dv.current().tou * dv.current().lvl )`
**Resistencias :** `$= dv.current().armour?Object.entries(dv.page(dv.current().armour).resistances).map( i => i[1]!=0? "\n - "+i[0]+": "+i[1] : "" ).join("") : ""`


#### Ataque
```dataviewjs
let cur = dv.current()

let w1 = cur.weapon1? dv.page(cur.weapon1) : null
let w2 = cur.weapon2? dv.page(cur.weapon2) : null
let dt = [ cur.weapon1, cur.weapon2 ]

const colunas = [
	["Arma", (e, id) => e? e : "*mãos vazias*"],
	["Acerto", (e, id) => (e? dv.page(e).maneuver_mod :0) + cur.agi ],
	["Impacto", (e, id) => (e? dv.page(e).weight_mod :0) + cur.str ],
	["Dano", (e, id) => (e? dv.page(e).damage : 0) + cur.lvl ],
]

 dv.table(
 	colunas.map(c => c[0]),
 	dt.map( (p,i) => colunas.map(c => c[1](p, i) ))
 )
```

#### defesa
``` dataviewjs
let cur = dv.current()
let rows = [] 
let w1 = cur.weapon1? dv.page(cur.weapon1) : null
let w2 = cur.weapon2? dv.page(cur.weapon2) : null 

// DODGE __________________
let mod = cur.agi + 2 + (cur.armour? dv.page(cur.armour).dodge_bonus : 0)
rows.push( ["**Esquiva**", mod ])

// DEFENSE _________________
let can_defend = (e) => e? (e.shield || e.habilities.contains("Estabilidade")) : false;

let w = [ w1, w2]
w = w.filter((e) => can_defend(e))

if(w.length > 1){
	let defender = w[0] > w[1]? w[0] : w[1]
	rows.push(["**Defesa**", (defender.defense_mod + cur.str)+ " _ _ _ (" + defender.name + ")"])
}

// PARY _________________
let can_parry = (e) => e? (e.shield || e.habilities.contains("Aparagem")) : false

w = [ w1, w2]
w = w.filter(can_parry)

if(w.length > 0){
	let defender = w[0] > w[1]? w[0] : w[1]
	rows.push(["**Aparar**", (defender.maneuver_mod + cur.agi) + " _ _ _ (" + w1.name + ")"])
}

// GRAB _________________
let size_to_mod = (e) => e? {"A":1,"B":2,"C":3,"D":4 }[e.size] : 0
let total = size_to_mod(w1) + size_to_mod(w2)

if(total < 4){
	rows.push(["**Agarrar**", cur.str])
}

// PRINT__________________________
rows.push(["**Resistir**", "+"+cur.con+" _ _ _ *(d20)*" ])
dv.table(["", "**Defesas**"], rows)

```


#### habilidades
```dataviewjs
let cur = dv.current()
let hab = [
	...(cur.habilities || []), 
	...(cur.weapon1? dv.page(cur.weapon1).habilities_ref : []) ,
	...(cur.weapon2? dv.page(cur.weapon2).habilities_ref: []), 
	...(cur.armour? dv.page(cur.armour).habilities_ref : []),
	...(cur.race? dv.page(cur.race).habilities_ref : []),
]
.filter( h => dv.page(h).passive )
.map( h => dv.page(h))

hab = [...new Set(hab)]; // remove duplicatas

for (let ref of hab ) {
    dv.paragraph(`> ![[${ref.file.path}#${ref.name}| wm-sm no-title collapse clean]]`);
}
```

# Inventário
**Moedas de Ouro** `INPUT[number:gold]`
```meta-bind-button
label: "+ Adicionar item" 
id: add_inventario_fim
style: default
actions:
  - type: updateMetadata
    bindTarget: items
    evaluate: true
    value: "[...( getMetadata('items') || []) , {name: '', qtd:1, desc: ''} ]"
    after: app.workspace.activeLeaf.view.reload()
```

``` dataviewjs
let prop = "items"
let dt = dv.current()[prop]
let emptyItem = {name: '', qtd:0, desc: ''}

if(!dt){ dt = [] }
while(dt.length < 5){ 
	dt.push(empty)
}

function getRemoveBtn(idx){
	let newdt = [...dt]; // copy array
	newdt[idx] = emptyItem
	return window.createBtn(dv, "Delete", 
		()=> window.updateProp(prop, newdt) )
}

const colunas = [
	["Quantidade", (e, id)=> "x`INPUT[number(class('my-column-small'), placeholder('1')) :"+prop+"["+id+"].qtd]`" ],
	["Nome", (e, id) => "`INPUT[text(placeholder('nome')):"
		+prop+"["+id+"].name]` "+" `INPUT[textArea(placeholder('descrição')):"
		+prop+"["+id+"].name]`"]
	//,["Remover", (e, id) => getRemoveBtn(id) ]
]

 dv.table(
 	colunas.map(c => c[0]),
 	dt.map( (p,i) => colunas.map(c => c[1](p, i) ))
 )
```


# Habilidades
**Adicionar Habilidade :** `INPUT[suggester( optionQuery("Sistema/Recursos/Habilidades"), useLinks(true)):hab_selected]` `BUTTON[add_hab]`


```meta-bind-button
label: "+ Adicionar" 
id: add_hab
style: default
hidden: true
actions:
  - type: updateMetadata
    bindTarget: habilities
    evaluate: true
    value: "[...( getMetadata('habilities')? getMetadata('habilities') : []) , getMetadata('hab_selected') ]"
    after: app.workspace.activeLeaf.view.reload()
```

``` dataviewjs
let prop = "habilities"
let cur = dv.current
let dt = [
	...(cur.habilities ||[]), 
	...(cur.race? dv.page(cur.race).habilities_ref : [])
]


if(!dt){ dt = [] }

function getRemoveBtn(idx){
	let newdt = [...dt]; // copy array
	newdt = newdt.splice(idx, 1) 
	return window.createBtn(dv, "Remover", 
		()=> window.updateProp(prop, newdt) )
}

const colunas = [
	["Habilidade", (e, id) => e],
	[" _ ", (e, id) => getRemoveBtn(id) ]
]

 dv.table(
 	colunas.map(c => c[0]),
 	dt.map( (p,i) => colunas.map(c => c[1](p, i) ))
 )
```