---
tags:
  - "#race"
  - "#Sistema_Base"
name: "Descendente Askaei"
source: "Sistema_Base"
image_ref: ""

habilities: "Sensibilidade Astral, Espirito Empoderado"
habilities_ref: 
  - "[[Recursos/Habilidades/Sensibilidade Astral#Sensibilidade Astral|Sensibilidade Astral]]"
  - "[[Recursos/Habilidades/Espirito Empoderado#Espirito Empoderado|Espirito Empoderado]]" 
description: "Os descendentes Askaei são aqueles que não desapareceram no final do império. Ao longo dos anos, a sua linhagem foi se difundindo e se misturando com a dos humanos. Eles podem ser caracterizados por sua pele clara e seus olhos vibrantes, mas a sua miscigenação com os humanos podem muitas vezes mascarar estas características."

cssclasses:
  - paper
---
`$= this.image_ref && "![[" + this.image_ref +"| center 600]]"`

# Descendente Askaei

`=this.description`

---
#### Habilidades 
Quando você escolhe está classe, você ganha as seguintes habilidades no nível 1:
```dataviewjs
dv.current().habilities_ref.map(ref => {
    dv.paragraph(`!${ref}`)
})
```
