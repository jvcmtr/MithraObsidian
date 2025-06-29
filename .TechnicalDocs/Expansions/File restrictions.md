## Segredos
Arquivos que se encaixam nos seguintes parametros não entram no repositório e são mantidos localmente. Sendo assim, se tornam privados para o usuario (player ou DM) que os cria:
- Arquivos que contem `.secrets.` em seu nome
- Arquivos cujo nome começam com '_'
- Todos os arquivos em pastas chamadas `secrets/`
- Todos os arquivos em pastas chamadas `_`
- Todos os arquivos em pastas que começam com `_`

## Infra
Alguns arquivos são importantes para manter a infraestrutura do projeto, contudo, estes arquivos podem atrapalhar a experiência dos players com informações desnescessárias na tela. 

Para definir Arquivos ou pastas de infraestrutura, podemos simplesmente fazer com que eles não sejam exibidos aos jogadores atravéz da interface do obsidian. para isso podemos seguir a seguinte solução:

**Proibindo Acesso :**
Arquivos e pastas que começam com `.` não são exibidos por default no obsidian, então basta usarmos esta nomeclatura.

**Permitindo acesso**
Em contra partida, podemos habilitar plugins como [Custom-file-extensions](https://github.com/MeepTech/obsidian-custom-file-extensions-plugin) [Show-hidden-files](https://github.com/polyipseity/obsidian-show-hidden-files) e - [File Explorer ++](https://github.com/kelszo/obsidian-file-explorer-plus)  que permitem que acessemos estes arquivos/pastas

**Acesso do DM :**
Podemos restringir o acesso dos players a estes plugins designando uma pasta de configuração exclusiva para o dm `.Obsidian.dev`, ou  adicionando estes plugins ao `.gitignore`
