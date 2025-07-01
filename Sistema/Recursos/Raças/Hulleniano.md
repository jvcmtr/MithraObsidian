---
tags:
  - "#race"
  - "#Sistema_Base"
name: "Hulleniano"
source: "Sistema_Base"
image_ref: ""

habilities: "Sangue de Hullen"
habilities_ref: 
  - "[[Recursos/Habilidades/Sangue de Hullen#Sangue de Hullen|Sangue de Hullen]]" 
description: "Hullenianos são os humanos que vivem nas matas de Hullenwud, eles diferem dos demais Northenianos pela seu grande porte e por serem menos interessados na política e comércio internacional do que os seus demais conterrâneos"

cssclasses:
  - paper
---
`$= this.image_ref && "![[" + this.image_ref +"| center 600]]"`

# Hulleniano

`=this.description`

---
#### Habilidades 
Quando você escolhe está classe, você ganha as seguintes habilidades no nível 1:
```dataviewjs
dv.current().habilities_ref.map(ref => {
    dv.paragraph(`!${ref}`)
})
```
