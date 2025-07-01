---
tags:
  - "#race"
  - "#Sistema_Base"
name: "Meio Pigmeu"
source: "Sistema_Base"
image_ref: ""

habilities: "Sangue da mata"
habilities_ref: 
  - "[[Recursos/Habilidades/Sangue da mata#Sangue da mata|Sangue da mata]]" 
description: "Meio pigmeus são aqueles que se uniram ao império Mitriano na era da conquista ou na era do império. Eles são caracterizados por sua estatura baixa, suas sardas verdes e seus cabelos desgrenhados. Apesar de muitos terem se distanciado da floresta, a magia ainda é presente em seu sangue."

cssclasses:
  - paper
---
`$= this.image_ref && "![[" + this.image_ref +"| center 600]]"`

# Meio Pigmeu

`=this.description`

---
#### Habilidades 
Quando você escolhe está classe, você ganha as seguintes habilidades no nível 1:
```dataviewjs
dv.current().habilities_ref.map(ref => {
    dv.paragraph(`!${ref}`)
})
```
