# Docker

Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres. Os contêineres são isolados uns dos outros e agrupam seus próprios softwares, bibliotecas e arquivos de configuração.

### Criando um novo Projeto em Doker
Hoje vamos aprender sobre uma ferramenra encrivel:  o Docker 🐋 !!! Vamos entender como e paea que utilizamos esta ferramenta, como como fazemos esta estalação. o conceito de imagens e containers, alem de rodar seu primeiro container Docker.

### Vamos aprender:
 - Entender o conceito de empacotamento de aplicações, assim como o conceito de escalonamento;
 - Entender o que é Docker e qual problema ele resolve
 - Entender o que é um processo Docker/ `container`;
 - Entender quais são os principais comandos para utilização deo Docker na interface de linha de comando (CLI);
 - Rodar imagens de DockerHub (repositoriooficial do doker;
 -
## Isso é importante para:
    Vimos que para desenvolvimento de aplicações )utilizamos diversas ferramnentas e tecnologias, vimos  tambem que durante o ciclo de desenvolvimento é normal lidarmos com  uma quantidade gigante de ambientes distintos, principalmente em ambientes de desenvolvimento dinamicos, onde ora seu aplicativo roda em um sistema, ora em outro.

    Esse cénario exige que, ao  desenvolver um aplicação, seja necessario preparar e configurar todo o ambiente com as  tecnologias necessarias, assim como integra-las.

    Fazer isso nem sempre é uma tarefa simples e o processo se torna ainda mais complexo quando há múltiplos ambientes, distintos entre si, e também a necessidade de rodar em diversas máquinas (desde sua máquina pessoal local, a servidores externos pagos, ou mesmo uma máquina virtual ) que, muitas vezes, possuem

    configurações e utilizam sistemas operacionais diferentes .
    Dessa forma, além de nos preocuparmos com o código, temos que prover as dependências necessárias para rodá-lo em diferentes configurações. Daí surge a famosa frase: "na minha maquina roda"

    Boa parte da popularidade desta frase é causada por lidarmos com esses diferentes cenários que mencionamos anteriormente .

Por exemplo, se uma pessoa desenvolve utilizando uma distribuição 'A' de Linux , outra utiliza Windows, outra utiliza Mac e no servidor roda uma distribuição 'B' de Linux, todas elas estão trabalhando no mesmo projeto, e da mesma forma, estão disponibilizando-o para o ambiente de produção, em um servidor remoto comum (Ao que damos o nome de **processo de deploy ou implantação* ).
* Distribuições de Linux são 'versões' que, apesar de terem uma base/núcleo comum (serem frutos do mesmo projeto), podem se diferenciar em muitos aspectos , seja na disponibilidade de recursos e bibliotecas, seja na maneira como fazemos a operação desses sistemas.
Exemplos de "distros" Linux bem populares são o Ubuntu e seus derivados. Saiba mais sobre distribuições Linux em seu artigo no Wikipédia .

Além dos diferentes Sistemas Operacionais - S.O.s (Ou somente 'SO') , é muito comum que existam softwares, ferramentas e dependências distintas ou com versões diferentes em cada máquina.
Dessa maneira, é muito difícil garantir que o que funciona na máquina de uma pessoa funcionará na máquina de outra sem a necessidade de fazer novas configurações.
Inclusive, não conseguimos garantir também que funcionará nos servidores durante o processo de deploy .
Para resolver tais complexidades de compatibilidades, bem como economizar o tempo no processo de preparação de uma máquina para rodar um programa específico, foi criado o Docker .

"Isso funciona em todas as máquinas"

Com ele, também conseguimos simular e testar facilmente um ambiente completo, de maneira leve e inteligente, em questão de minutos, podendo replicar tais configurações para outra máquina com facilidade, além de conseguir trabalhar com nossas aplicações em escala* de forma simples!
  * É bem provável que uma aplicação popular demande muitos recursos de uma máquina só, é por isso que existem técnicas que buscam aumentar esses recursos (por demanda), para que seja possível lidar com o processamento adicional.
  É o que chamamos de escalabilidade vertical ou horizontal ! Falaremos disso mais adiante.

Portanto, por meio de Docker, resolvemos o problema de incompatibilidades com outros sistemas, dado que ele funciona como uma especie de "empacotador" de todas essas depedencias e requesitos para que sua aplicação  funcione sem problemas! isso torna simples sua disponibilização".

Devido essas  diversas vantagens. o Docker ganhou grande espaço e seu uso cada vez mais comum!

As maiores  empresas de tecnologias hoje o utilizam paea menter grandes espaços arquiteturas, assim como as pequenas utilizam de suas facilidades para manter no ar aplicações de  forma simples e com menos custos.

Se olharmos o Google Trends https://trends.google.com.br/trends/explore?date=2013-01-01%202019-01-01&geo=BR&q=%2Fm%2F0wkcjgj    (dados sobre pesquisas no Google) , começando pelo ano de lançamento do Docker (2013), até o fim da década (2019) , conseguimos ter um bom indicador dessa popularidade por meio do número de pesquisas pelo software "Docker" nesse período. Muito disso se deve ao conceito de conteinerização* de aplicações, que é adotado por muitas tecnologias atualmente.

  * No contexto de tecnologia informática, um container é uma espécie de "pacote" com tudo aquilo que seu software precisa para ser executado em um determinado ambiente.


Dessa forma, é essencial saber Docker , tanto para se adequar ao mercado como para aproveitar seus benefícios durante o ciclo de vida de nossas aplicações.

## Conteudo

# começo da instalação do Docker Engine

O primeiro passo para utilizar o Docker é realizar a instalação de seu motor , o que nos dará acesso a sua interface de linha de comando (CLI) *.

  * No Linux, o Docker não possui uma interface gráfica de utilização (GUI) oficial, contudo, existem várias opções não-oficiais disponíveis, bem como uma extensão oficial da Microsoft para a plataforma no VSCode , que pode ajudar muito no gerenciamento de seus containers .

Vamos fazê-la através do apt-get considerando uma máquina com Ubuntu LTS
(Suporte de longo prazo / Long-term support) 64-bit (amd64) *.

  * Caso você queira ver as demais opções de instalações ou esteja utilizando outro SO , veja a documentação de instalação completa .
  https://docs.docker.com/engine/install/


### Desinstalando versões anteriores

Caso você já possua alguma versão instalada na sua máquina e queira refazer o processo de instalação desde o princípio por qualquer motivo, seja pra atualizar ou para corrigir algum problema, primeiro você deve remover os pacotes da versão que está na sua máquina. Para isso, utilize o seguinte comando no terminal:

```
sudo apt-get remove docker* containerd runc
```
Caso nenhum dos pacotes esteja instalado, esse comando retornará um erro E: Impossível encontrar o <nome-do-pacote> , nesse caso, é só prosseguir com a instalação.
  Detalhe, o Docker preserva informações sobre imagens, containers , volumes e redes na pasta /var/lib/docker/ . Nesse processo, esses arquivos não são apagados.
  Para remoção completa do motor do Docker no seu sistema, consulte a seção Desinstalando o Docker Engine ao final desse tópico.

## Atualizando os indices dos pacotes do apt

Na documentação de instalação do Docker no Ubuntu, é comentado que existem três formas de instalar o Docker : via repositórios, via pacotes .deb e via scripts específicos.
No nosso contexto, faremos a instalação via configuração de repositórios, pois isso facilita posteriormente a atualização desses mesmos pacotes.

No terminal, utilize o comando update para atualizar os índices dos pacotes do apt :
```
sudo apt-get update
sudo apt-get upgrade

```
## Habilitando HTTPS para o apt
nstale os seguintes pacotes, eles são recomendados pela documentação oficial para habilitar a utilização dos repositórios via HTTPS pelo apt-get , precisaremos disso para prosseguir a instalação:
```
sudo apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```
## Adicionando uma chave de acesso ao repositório remoto
  * Para adicionar uma camada de segurança nas transferências de dados entre computadores remotos no Linux, é possível que eles se comuniquem utilizando um sistema de chaves pública e privada, como o GPG (GnuPG) .

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```
Se tudo correr bem, você não deve receber nenhum retorno visual.

## Adicionando o repositório
Para adicionar o repositório oficial, execute o seguinte comando*:

```
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
  | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```
Perceba que adicionamos o repositório stable (em $(lsb_release -cs) stable ), isso significa que teremos somente o repositório com as versões estáveis do Docker .
* Em distribuições baseadas no Ubuntu (como o Linux Mint ), talvez você precise alterar o comando $(lsb_release -cs) para uma versão do ubuntu que seja compatível com aquele sistema. Exemplo: Caso você utilize o Linux Mint Tessa , você deve alterar o valor para bionic .
Atenção: O Docker não garante o funcionamento em sistemas fora do requisito de sistema operacional .

## Instalando Docker Engine

Primeiro, vamos garantir que os índices dos pacotes do apt estão atualizados, já que adicionamos um novo repositório:
```
sudo apt-get update
```
Iremos instalar a última versão estável do Docker Engine - Commmunity , que é uma versão mantida pela própria comunidade, já que o Docker é Open-source . Faremos isso com a interface de linha de comando (CLI) e o containerd *.
* O containerd é um serviço que funciona em segundo plano ( daemon ) e é utilizado no funcionamento dos containers .
Para isso, execute no terminal:
```
sudo apt-get install docker-ce docker-ce-cli containerd.io
```
## Adicionando um usuário ao grupo de usuários docker
⚠️ Atenção ⚠️: Esse procedimento faz com que seu usuário tenha os mesmos privilégios do usuário root (o superusuário no linux) na execução dos comandos Docker *, então use-o com moderação, apenas em ambiente de desenvolvimento.
* Por padrão, o Docker faz a vinculação (bind) entre o sistema operacional hospedeiro e o cliente via socket Unix (um tipo de conexão que possui mais performance) e não via porta TCP (que possui menos performance) .
Sockets Unix são de uso exclusivo do usuário root . Sendo assim, qualquer comando do Docker que executarmos irá exigir ser iniciado como root , ou com sudo por qualquer usuário.
Para mais informações consulte a documentação oficial no site do Docker Docs .
Para evitar o uso de sudo em todos os comandos Docker que formos executar, vamos dar as devidas permissões ao nosso usuário. Primeiro crie um grupo chamado docker :
```
sudo groupadd docker
```
  Caso ocorra uma mensagem: groupadd: grupo 'docker' já existe , é só prosseguir.
E então, adicione seu usuário a ele:
```
sudo usermod -aG docker $USER
```

Para ativar as alterações realizadas aos grupos, você pode realizar logout e login de sua sessão, ou executar no terminal:
```
newgrp docker
```
## Iniciando o Daemon do Docker
Para consultar o status do daemon do Docker, execute:
```
sudo systemctl status docker
```
Esse comando deve retornar algo como um pequeno relatório sobre o serviço, onde consta seu status de funcionamento:

  ● docker.service - Docker Application Container Engine
     Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
     Active: inactive (dead) since Thu 2021-09-23 11:55:11 -03; 2s ago
TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com
    Process: 2034 ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock (code=exited, status=0>
   Main PID: 2034 (code=exited, status=0/SUCCESS

Caso o parâmetro Active esteja como stop/waiting ou como inactive , rode o comando start para iniciá-lo:
```
sudo systemctl start docker
```

Ao consultar o status novamente, o processo deverá estar como start/ running/ active .
Habilite o daemon do Docker para iniciar durante o boot :
```
sudo systemctl enable docker
```

## Validando a instalação
Para validar se tudo ocorreu como deveria na instalação, vamos executar um hello world * do Docker:
```
docker run hello-world
```
recebera uma resposta assim:

  Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/


 * Quando damos o comando docker run hello-world , estamos pedindo para que ele busque em seu repositório oficial, uma imagem chamada hello-world que é um exemplo simples de um container , esse que ao final, nos retorna uma mensagem de texto.

se tudo ocorreu bem temos o docker prontinho

# caso você queiraa desinstalar p Docker Engine.
Caso você queira ou precise remover completamente o motor do Docker do seu computador, utilize o seguinte comando no terminal:

```
sudo apt-get purge docker-ce docker-ce-cli containerd.io
```

Para remover containers , volumes  e configurações personalizadas que não são removidas automaticamente pelo apt-get , utilize os seguintes comandos:

```
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```


# o que são e como rodar containers.
Como dito anteriormente, `containers` são como "pacotes", porém eles funcionam numa dinâmica um pouco diferente.
E aqui precisamos distinguir o que é um `container` e o que é uma `imagem` :

- o  container é um processo Docker que, internamente, possui tudo aquilo que é necessário para seu funcionamento: Sistema Operacional (Binários e Bibliotecas) e recursos necessários para sua aplicação;
- A imagem é uma espécie de "fotografia" de um container , nós resgatamos uma imagem, quando queremos iniciar um novo container a partir de uma estrutura já conhecida.

### Containers

Containers lembram muito - mas não são - máquinas virtuais*, já que podemos rodar uma aplicação Linux em qualquer ambiente (Windows, Mac ou no próprio Linux) através dele.
  * Máquinas virtuais são softwares que simulam (virtualizam) computadores completos (desde o hardware até o software), leia mais sobre isso nesse artigo .

Um `container` não é uma máquina virtual , pois embora compartilhem de mesmas características, o `container` é uma instância isolada (tem apenas uma finalidade) e compartilha dos mesmos recursos do sistema operacional hospedeiro, o que damos o nome de Virtualização a nível de Sistema Operacional (OS-level virtualization) .

Um `container` não deve ser utilizado para abrigar várias aplicações, e é justamente por isso que ele ocupa muito menos espaço que uma VM. Sua tendência é de manter somente o essencial no seu conteúdo.

### Imagens
`Imagens` podem se referir a praticamente qualquer tipo de `container` . Um exemplo disso é pensar o próprio sistema operacional Ubuntu, que possui uma imagem oficial no Docker Hub .

O **Docker Hub** é o principal repositório de imagens Docker atualmente. Nele, possuímos o que é chamado de Registro (Registry) *, onde requisitamos essas imagens.
* O `Registry` é um sistema de armazenamento e entrega, no qual podemos ter um usuário com nossas próprias imagens. Algo que lembra muito o GitHub, já que podemos dar pull nessas imagens para uso posterior. Veremos isso mais adiante.

### Fluxo padrão
Para explicar melhor a dinâmica entre `containers` e imagens, falaremos um pouco de como funciona o fluxo padrão do Docker :

- Tudo começa em um arquivo chamado `Dockerfile` . Este arquivo possui as instruções* necessárias para que possamos gerar uma imagem;
  * Aqui vão instruções de qual sistema operacional usar, tal como quais comandos devem ser executados quando a imagem for rodada em    um container .

- Após isso, podemos dar `push` ou `pull` (como em um repositório do GitHub) em uma imagem no `Registry` *;
  * Você pode dar pull na sua própria imagem (caso tenha dado push nela) ou em outra a sua escolha, como foi o caso do hello-world ).
  O Registro mais comum é o Docker Hub , mas temos outros exemplos, como mostrado na imagem.

- Por último, rodamos a imagem em um `container` , utilizando o comando `run` , que veremos mais adiante *.
  * Após isso, temos que dizer pro `container` o que deve acontecer, se ele deve se manter ativo ou não, caso o contrário, o `container` é encerrado. O que faz parte de seu ciclo de vida.

### Rodando o sistema operacional Ubuntu em um container

Um ponto importante antes de começarmos, é entender que os comandos do Docker funcionam no seguinte formato:
```
docker <comando> <sub-comando> <parâmetros>
```
  Sendo que podemos abreviar alguns comandos, como foi o caso do `docker run hello-world` , que também poderia ser escrito como `docker container run hello-world` . Utilizaremos esta última forma aqui por ser mais atual e verbosa

Como comentamos anteriormente, o comando `run` serve para rodar uma imagem em um `container` , vamos testar isso com a imagem oficial do **Ubuntu** ?
O formato do comando para rodar um container é o seguinte:
```
docker container run <nome-da-imagem>:<tag>
```
  Em que <tag> representa a versão daquela imagem, caso nenhuma seja passada, ele assumira que é a última versão disponível (`latest ).
  Para isso, no terminal, rode o comando:

```
docker container run ubuntu
```

### Aqui você deve ter notado duas coisas:
  1. Uma vez que sua máquina local não possua a imagem do registro ( `Unable to find image 'ubuntu:latest' locally` ) , o Docker deve se encarregar de baixar essa imagem, fazendo o `pull` automaticamente ( `latest: Pulling from library/ubuntu` ) ;
  2. Uma vez que o `Docker` baixou a imagem e rodou o `container` , nada aconteceu! 🤔
**Na verdade, esse é o comportamento normal!** Lembram que comentamos que, se não dissermos para o `container` o que ele deve fazer a seguir, o `container` é simplesmente encerrado?
Pois foi isso mesmo que aconteceu! Um `container` foi criado e iniciado e, uma vez que não demos nenhuma outra instrução pra esse `container` , ele foi encerrado.

### Listando containers
No Docker, é possivel saber quais `containers` **estao ativos** com o seguinte comando:
```
docker container ls
```
Mas no nosso caso, o `container` iniciou e parou logo em seguida, então só é possível enxergar ele se passarmos o parâmetro `-a` para mostrar todos os `containers` incluindo os inativos.

```
docker container ls -a
```

Se você rodou o comando `docker run <imagem>` mais de uma vez, para cada uma dessas vezes foi criado um `container` .
Nesse caso o retorno deve ter sido semelhante a esse:
CONTAINER ID   IMAGE           COMMAND    CREATED          STATUS                      PORTS     NAMES
67ac9f221b02   ubuntu:latest   "bash"     9 minutes ago    Exited (0) 9 minutes ago              dazzling_wilbur
0513e707c839   hello-world     "/hello"   36 minutes ago   Exited (0) 36 minutes ago             quizzical_taussig
c951e5227e03   hello-world     "/hello"   45 minutes ago   Exited (0) 45 minutes ago             focused_beaver

Isso significa que o comando `run` também cria um novo `container` **para aquela imagem toda vez que é executado** , mas não se preocupe! É possível remover esses containers que não estão sendo mais utilizados,
E caso você queira saber somente sobre o último `container` criado (independente do status dele), você pode usar o parâmetro `-l`

```
docker container ls -l
```
### vamos aprender o que significa cada colula;

- CONTAINER ID: Identificador único*;
- IMAGE: O nome da imagem utilizada para a criação do container ;
- COMMAND: O comando executado/ em execução dentro do container ;
- CREATED: Quando foi criado o container ;
- STATUS: O status atual do mesmo, no nosso caso, encerrado;
- PORT: A porta que estamos utilizando para nos comunicar com o container**;
- NAMES: O apelido do container , como não definimos nenhum, foi criado um aleatório.

  * Quando executamos algum comando relacionado ao `container` , podemos nos referenciar tanto pelo campo ID (inteiro ou parte dele), quanto pelo campo `NAMES` .
  *
  ** Veremos isso mais adiante, mas o docker pode disponibilizar uma porta de acesso para aplicação.

  Para isso, conseguimos fazer uma atribuição de uma porta do sistema hospedeiro, apontando para uma outra porta, no sistema cliente, no formato <porta-do-host>:<porta-do-cliente> .
  Exemplo 8080:3000 , em que a porta 8080 do meu sistema representa a porta 3000 do container .
  `minha porta / porta do container`

### Rodando um comando adicional antes de terminar o container
No Docker é possível executar comandos de terminal no `container` antes que ele seja encerrado (sobretudo se quisermos manter ele ativo por mais tempo que o normal) .
Para executar comandos no terminal do `container` é só adiciona-los no final da execução do `run` , conforme o modelo:
```
docker container run <nome-da-imagem>:<tag> <comando> <argumentos-do-comando>
```
exemplo: Vamos aqui imprimir na tela um " Uma frase qualquer" no terminal do Ubuntu, usando o comando `echo` do `shell` :

```
docker container run ubuntu echo 'tem que ser aspas simples'
```
## Rodando o container de forma interativa
E se quisermos, por exemplo, utilizar um terminal dentro do `container` (á la inception) ? È só passar o parametro `-ti` * ao comando `run` que da acesso a esse terminal:

* O comando `-ti` são dois comandos juntos:
1. -t que indica pro docker que estamos requisitando um terminal no container que consiga imprimir o retorno dos nossos comandos;
2. -i que estabelece uma interface de comunicação física com esse terminal, no caso, por meio do teclado.

```
docker container run -ti ubuntu
```
Dessa forma é possível ter acesso a ao terminal de forma interativa dentro do container , esse terminal já vem por padrão em modo `root` ( # ):

com este comando podemos verificar relese do ubunto:
```
cat /etc/lsb-release
```

Aqui podemos notar que:
* O domínio do usuario `root` no terminal do `container` é o `container id` do mesmo, nesse caso "xxxxxxx"(ZZZZZZZZZ);
* O comando `cat /etc/lsb-release` retorna os dados da distribuição, no caso , o Ubunto;
* Para sair ddesse terminal interno do `ontainer` e retornar ao seu terminal, é so utilizar o comando `exit`.

Até  aqui, você aprendeu os princinpios basicos sobre o funcionamento de `container`. A seguir, vamos listar os principais comandos para manipulação  deles!


## Principais comandos do CLI

Passemos um resumo do que foi visto, complemtando com os **comandos adicionais que podem ser utilizados para manipulação de containers** no CLI do Docker.

## Pontos importantes:

* `docker <comando> <subcomando> <parâmetros> ` é o farmato padão para comandos não-abreviados no CLI;
* Utilize o parametro `--help` no `<comando> ` ou ` <subcomando> ` para ter relação completa do que pode ser executado a parti deles;

  Exemplo `Docker container --helpe` , ou `docker container run --help `.

* Os <parâmetros> são opcionais na execução dos comandos;
* O conteúdo faz referência a **documentação oficial dos comandos no Docker Docs**

## criar e rodar um container

### Deve criar um novo  `container` e roda-lo em seguida:
```
docker container run <parâmetros> <imagem>:<tag>
```

### O parâmetro `--name` define um `<nome-da-sua-escolha>` para aquele `container` (ao invés de um nome aleatório)
```
docker container run --name <nome-da-sua-escolha> <imagem>:<tag>
```

### **Modo 'Cleanup'** : O parâmetro `--rm` deve garantir que o `container` seja removido ao final da execução (útil para testar imagens sem ficar acumulando `containers` novos) :
```
docker container run --rm <imagem>:<tag>
```
### O parâmetro `-d` (de `--detach` , desacoplado em português) rodará esse `container` em segundo plano*:
```
docker container run -d <imagem>:<tag>
```
* Trabalhar em segundo plano significa que a aplicação está rodando, porém de forma assíncrona ao comando, ou seja, embora não esteja visível, o processo está lá, funcionando por de trás dos panos. É possível validar isso com o comando `docker ps -a` .
O comando `-d` em outros aplicativos e serviços também pode estar associado ao conceito de `daemon` , que também é uma forma de se referenciar aplicativos que estão funcionando em segundo plano.
No exemplo da imagem ubuntu, faz sentido passar o parâmetro `-d` associado ao `-it` como em: `docker` `container run -dit ubuntu` , o que manterá o `container ativo` em segundo plano, já com um terminal disponível para acesso;


### (Comando antigo) * Abreviação do comando `docker container run` :
```
docker run <parâmetros> <imagem>:<tag>
```
* Nas versões mais novas, o Docker vem adotando comandos mais verbosos, nos quais identificamos a entidade ( `container , image` , etc) que estamos trabalhando, antes de realizar o comando (o que o torna mais semântico).
Isso não significa, contudo, que os comandos das primeiras versões estejam depreciados (caíram em desuso) , mas pode ser um alerta para futuras versões.

## Criar um `container` sem executá-lo
### Cria um `container` com a imagem de referência, mas não o executa imediatamente:
```
docker container create <parâmetros> <imagem>:<tag>
```
### O parâmetro `-it` nesse contexto, deve garantir que ao iniciar o `container` , ele se mantenha ativo e disponha de um terminal de acesso:
```
docker container create -it <imagem>:<tag>
```

### (Comando antigo) Abreviação do comando `docker container create` :
```
docker create <parâmetros> <imagem>:<tag>
```
## Listar containers
### lista (`ls`, list em ingles)todos os **containers ativos**
```
docker container ls
```
### Lista todos os containers ativos e inativos :
```
docker container ls -a
```
### Lista o último container criado (independente do seu estado) :
```
docker container ls -l
```
### (Comando antigo) Abreviação do comando `docker container ls` (que também pode ser chamado como `docker container ps` ):
```
docker ps <parâmetro>
```
## Iniciar, reiniciar, pausar, resumir e parar um container;

Iniciar* um `container` usando referencias de sua identificação unica (campo `CONTAINER ID`, parcialmente ou inteiro),ou pelo nome (campo `NAMES`) que foi definado:
```
docker container start <CONTAINER ID || NAMES>
```
  * Note que o comando start difere do comando run . O start apenas inicia o container que já havia sido criado (mas estava inativo), enquanto o run cria e executa um novo container!

### Reinicia um `container` usando as referencias citadas anteriormente:
```
docker container restart <CONTAINER ID || NAMES>
```
### Pausar um `container` usando as referencias citadas anteriormente
```
docker container pause <CONTAINER ID || NAMES>
```
### Tira um `container` do modo de pausa usando as referências citadas anteriormente:
```
docker container unpause <CONTAINER ID || NAMES>
```
### Encerra um `container` usando as referências citadas anteriormente:
```
docker container stop <CONTAINER ID || NAMES>
```
### (Comando antigo) São abreviações para os comandos anteriores:
```
docker <start || restart || pause || unpause || stop> <CONTAINER ID || NAMES>
```
  Dica: É possível realizar essas operações passando mais de uma referência de container por vez, como no exemplo abaixo:
```
docker start 6a01 22b4
docker stop 6a01 22b4
```
## Retomando o acesso a um `container` interativo rodando em segundo plano

Caso voĉe tenha iniciado um `container` em segundo plano utilizando `-dit`, voce pode acessar esse `container` rodando o comando `attach`:
```
docker container attach <CONTAINER ID || NAMES>
```
### Abreviação do comando `docker container attach <CONTAINER ID || NAMES>`
```
docker attach <CONTAINER ID || NAMES>
```

## Excluindo `containers` especificos
### Se o `container` não estiver ativo, esse comando deve remover o mesmo:
```
docker container rm <CONTAINER ID || NAMES>
```
### Se o `container` estiver ativo, você deve passar o parâmetro `-f` (forçar) para parar sua execução e depois efetuar a remoção:
```
docker container rm -f <CONTAINER ID || NAMES>
```
### (Comando antigo) Abreviação do comando `docker container rm` :
```
docker rm <CONTAINER ID || NAMES>
```
## Limpando `containers` que nao estao sendo utilizados
  ⚠️ Use com moderação ⚠️: Esse comando deve remover todos os containers inativos do seu computador. O comando pede confirmação:
```
docker container prune
```
## Monitorando os procesos dentro de um container
  O comando `top` , assim como nos terminais linux, traz as informações sobre os processos que estão sendo rodados, **mas dentro daquele** `container` , o que não inclui, por exemplo, serviços que são compartilhados com o sistema hospedeiro. Ele é útil para quando estamos os rodando em segundo plano:


Aqui o `container` é rodado com um comando `dd if=/dev/zero of=/dev/null` (que no nosso caso, serve para estressar o `container` ) que gerou um processo, esse que é mostrado na lista de processos.


# Manipulação e criação de Imagens no Docker
### proximos passos
- no conteudo acima  vimos o conceito de empacotamento de aplicações, qual o tipo de problemas que o **Docker** se propõe a resolver, aspectos da arquitetura do Docker, os principais comandos para utilização do Docker e como rodar imagens do Docker Hub(Repositorio oficial de imagens do Docker).

## Vamoas estudar
- criar imagens com o Docker
- Entender a arquitetura de camadas(layers) das imagens Docker:
- Aplicar boas praticas e padões na criação de imagen;
- "Dockerizar"/Gerar contêineres para suas aplicações;

### Isso é importante para
Como falamos acima , é importante distinguir uma imagem (image) de um contêiner (container)
**São coisas diferentes, porém complementares.**

**Uma imagem** *é um arquivo imutável e a partir dele um ou mais containers podem ser gerados. Uma imagem do Docker é criada a partir do processo de* `build` * de um arquivo chamado `Dockerfile` **.
  * Frequentemente no contexto de programação, o termo build ('construir' em português) se refere ao trabalho de pegar aquele conjunto de instruções que definimos antes (o nosso "script", "código fonte"), e a partir dele, construir um produto que seja executável de maneira mais simples - que por tanto, é melhor para distribuir.
  ** Veremos mais adiante, mas o Dockerfile é um arquivo que contém as instruções necessárias (como um "script") para que rodemos uma aplicação: Sistema Operacional (SO) utilizado, bibliotecas que devem ser instaladas, arquivos que devem ser inicializados, etc.


















