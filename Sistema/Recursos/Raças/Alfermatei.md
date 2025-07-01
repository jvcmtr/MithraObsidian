---
tags:
  - "#race"
  - "#Sistema_Base"
name: "Alfermatei"
source: "Sistema_Base"
image_ref: ""

habilities: "Corpo Opaco, Físico Mundano"
habilities_ref: 
  - "[[Recursos/Habilidades/Corpo Opaco#Corpo Opaco|Corpo Opaco]]"
  - "[[Recursos/Habilidades/Físico Mundano#Físico Mundano|Físico Mundano]]" 
description: "Alfermatei são uma linhagem desafortunada dos Askaei. Eles são caracterizados por seus olhos negros e sua pele palida, sendo que muitos também possuem o cabelo branco"

cssclasses:
  - paper
---
`$= this.image_ref && "![[" + this.image_ref +"| center 600]]"`

# Alfermatei

`=this.description`

---
#### Habilidades 
Quando você escolhe está classe, você ganha as seguintes habilidades no nível 1:
```dataviewjs
dv.current().habilities_ref.map(ref => {
    dv.paragraph(`!${ref}`)
})
```
