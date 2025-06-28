## Dependencias
- [Dataview](https://github.com/blacksmithgu/obsidian-dataview): Permite consultar o repositorio com queries
- [Metabind](https://github.com/mProjectsCode/obsidian-meta-bind-plugin) : Permite rodar js para implementar funcionalidades
- [JSON/CSV Importer](https://github.com/farling42/obsidian-import-json) (opcional) :  Permite gerar files com base em um template e um arquivo csv. É vantojoso comparado com DB_Folder pois permite fazer a transformação de varios arquivos com um unico comando

- (não confirmado) [Commander](https://github.com/phibr0/obsidian-commander) permite configurar barras de ação no mobile
- (não confirmado) [Webpage HTML Export](https://github.com/KosmosisDire/obsidian-webpage-export) :  vai permitir gerar paginas web com base no repositorio

- [Github Gitless Sync](https://github.com/silvanocerza/github-gitless-sync) : Permite sincronizar arquivos com o github (**compativel com mobile**). O problema é que não é aconselhado compartilhar as configurações (==Não permite compartilhamento de plugins==)
- [DB_Folder](https://github.com/RafaelGB/obsidian-db-folder) : Permite manejar dados estruturados (==OUTDATED==)
#### A analizar:
- Estilização default (pacote de tema)
- Calendario para TTRPG

## Organização Básica
##### Wiki 
md padrão do obsidian. Recursos sobre o mundo
##### Modulos
Documentos de regra, incluindo queries que consomem os recursos para popular
##### Infra
É a estruturação (dados brutos em CSV) do recurso. Contém também arquivos de scripts utilitarios, templates e assets
##### Recursos
São as Views (details) de recursos estruturados. Ex. Armas, habilidades, monstros
##### UI
Menus para acessar e organizar os recursos sem ter que procurar os modulos. Pode também incluir views mais complexas dos detalhes de um recurso (ex, ficha de personagem)
##### Players *(fora de escopo)* 
UI para os jogadores. Permite alterar uma ficha de personagem (requer sincronização pronta)

