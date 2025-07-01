---
tags:
  - "#race"
  - "#Sistema_Base"
name: "Norteniano"
source: "Sistema_Base"
image_ref: ""

habilities: "Cultura Norteniana"
habilities_ref: 
  - "[[Recursos/Habilidades/Cultura Norteniana#Cultura Norteniana|Cultura Norteniana]]" 
description: "Nortenianos são humanos que vivem no continente de Northelm"

cssclasses:
  - paper
---
`$= this.image_ref && "![[" + this.image_ref +"| center 600]]"`

# Norteniano

`=this.description`

---
#### Habilidades 
Quando você escolhe está classe, você ganha as seguintes habilidades no nível 1:
```dataviewjs
dv.current().habilities_ref.map(ref => {
    dv.paragraph(`!${ref}`)
})
```
