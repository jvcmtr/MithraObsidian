---
tags:
  - "#race"
  - "#Sistema_Base"
name: "Pigmeu"
source: "Sistema_Base"
image_ref: ""

habilities: "Irmão dos animais, Sensibilidade Astral"
habilities_ref: 
  - "[[Recursos/Habilidades/Irmão dos animais#Irmão dos animais|Irmão dos animais]]"
  - "[[Recursos/Habilidades/Sensibilidade Astral#Sensibilidade Astral|Sensibilidade Astral]]" 
description: "Pigmeus são uma cultura antiga que habitam escondidos nas matas, mantendo a sua conexão com a magia. Eles são caracterizados por seus olhos vibrantes, suas sardas, pele macia e lisa, estatura baixa e cabelos sedosos."

cssclasses:
  - paper
---
`$= this.image_ref && "![[" + this.image_ref +"| center 600]]"`

# Pigmeu

`=this.description`

---
#### Habilidades 
Quando você escolhe está classe, você ganha as seguintes habilidades no nível 1:
```dataviewjs
dv.current().habilities_ref.map(ref => {
    dv.paragraph(`!${ref}`)
})
```
