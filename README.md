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

**um container, e como se fosse um contexto (ativo ou inativo) de uma aplicação, esse contexto, é baseado em uma imagem,**
exemplo:
  Um container que é baseado em Linux e que tem o NodeJS instalado e configurado (imagem node ) , para que minha aplicação em React funcione corretamente;

*lembre-se que, se rodarmos um container com `docker run <imagem>:<tag>. mas se não tivermos essa imagem*
*(vamos supor aqui o hello-world ) localmente , ele nos retorna a seguinte mensagem?*
```
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
```
Essa mensagem, indica que o Docker baixou e armazenou a imagem localmente. A parti dai, sempre que o Docker precisar de uma referencia daquela imagem, ele usara uma cópia local dela para trabalhar.

Hoje veremos onde encontrar essas imagens baixadas, como criar imagens Docker, além de como manipula-las e  removê-las.

# o que são imagens docker
Imagens docker são arquivos que funcionam como espécies de fotos de programas, bibliotecas, frameworks ou mesmo sistemas operacionais, a parti das quais construirmos containers e execultamos códigos dentro do Docker

Voltando ao exemplo de quando rodamos uma imagem do Docker Hub pela primeira vez e ela é baixada automagicamente para o nosso computador, você pode confirmar a existência daquela imagem executando o seguinte comando:
```
docker images
```
Esse comando serve para listar todas as imagens que foram baixadas em algum momento no seu pc. Dessa forma podemos verificar que a imagem esta devidamente instalada localmente como pode ser visto abaixo pelo exemplo.
```
REPOSITORY     TAG       IMAGE ID       CREATED        SIZE
hello-world    latest    bc11b176a293   6 weeks ago    9.14kB
```
Para saber se o cantainer para da imagem `hello-world` foi criado a parti da imagem, basta rodar o comando que ja conhecemos
```
docker ps -a
```
Como já vimos anteriormente, o comando acima deve nos retornar a lista de `containers` ativos e inativos (parâmetro `-a` ):
exemplo:
```
CONTAINER ID   IMAGE         COMMAND      CREATED             STATUS                         PORTS         NAMES
b3b610c87a9   hello-world   "/hello"     24 minutes ago      Exited (0) 24 minutes ago                    priceless_nightingale
```
O que é preciso entender nesse ponto é que **a parti de uma imagem, podemos ter varios** `containers` isso que dizer que se rodarmos novamente o seguinte comando:
```
docker run hello-world
```
Teremos mais um container local da imagem `hello-world`, como no exemplo a seguir:
```
CONTAINER ID   IMAGE        COMMAND     CREATED          STATUS                    PORTS      NAMES
c7112ffa7991   hello-world  "/hello"    10 seconds ago   Exited (0) 9 seconds ago             optimistic_fermat
b3b610c87a9   hello-world  "/hello"    44 minutes ago   Exited (0) 44 minutes ago            priceless_nightingale
```
Agora se executarmos o seguinte comando para listar as imagens:
```
docker images
```
Percebemos que a imagem hello-world continua unica:
```
REPOSITORY                     TAG       IMAGE ID       CREATED        SIZE
hello-world                    latest    bc11b176a293   6 weeks ago    9.14kB
```
o que aprendemos aqui é que **podemos ter varias containers reproduzindo uma mesma imagem do Docker**
Toda imagem possui sua `imagem ID` e todo container possiu seu `container ID` .Ambos são identificadores unicos desse elementos dentro do Docker e servem como referencia para outras possibilidades de comando.

Por exemplo, anteriormente, vimos que o comando `docker container rm -f <CONTAINER ID>`apaga o container, mesmo que ele esteja ativo(parãmetro `-f`).

Entretanto, se for necessario remover a imagem que gera os containers, primeiro é preciso obter o `IMAGE ID` por meio do seguinte comando:
```
docker images
```
Depois de obter o `image ID`, basta executar o comando `docker rmi -f <IMAGE ID>`, em que o `rmi` vem de 'R'e'M'over 'I'magem(remover imagem).
```
docker rmi -f <imagemid>
docker rmi -f bc11b176a293
```
Da mesma forma, o comando `-f` serve para forçar a remoção do recurso.
Sem a flag `-f` , o Docker irá nos alertar que já foram criados containers a partir da imagem que estamos tentando excluir, pois a remoção dessa imagem também removerá a fonte de referência dos containers criados a partir dela. Para excluir a imagem mesmo assim, é preciso acrescentar a flag `-f` .

A partir do momento que excluímos uma imagem que era referência para um container, precisaremos baixar uma nova imagem se quisermos rodar os containers criados novamente*.

  * É importante ressaltar que ao excluir uma imagem, os containers gerados a partir dela não serão excluídos, apenas ficaram órfãos das camadas da imagem que a utilizavam para executar suas funções.
  Portanto, para gerar novos containers precisaremos de uma nova imagem.

# Como funciona o sistema de camadas de uma imagem
Quando fazemos o download de uma imagem (por exemplo, com o comando `docker pull <imagem>` , que baixa a imagem, mas não cria nenhum container) , podemos perceber nesse processo, a existência de vários downloads e extrações acontecendo. **Cada um desses downloads representa uma camada :**
Mas para que servem essas camadas, O docker divide suas imagens em camadas para que elas possam ser reaproveitada por outros imagens e não precisem ser instaladas em duplicidade.

Toda imagem no docker pode ter  uma ou varias camadas e esse sistema e conhecido como `layered File System(sistema de arquivos em camadas).

como em praticamente toda  instancia dentro do Docker, cada camada também é reposnsavel por um um codigo único(uma hash). A finalidade dessas camadas *é que elas possam ser reaproveitadas por outras imagens*
**Cada camada corresponde a um conjunto de instruções que, em algum casos, são comuns a outras imagens.**

Exemplo: a *distribuição linux alpine* é muito utilizada em imagens docker por ser uma distribuição que possui somente o essencial para o seu funcionamento, o que torna ela uma opção leve, rápida, simples e segura.
Por isso, vários softwares a usam por padrão, ou pelo menos mantêm uma versão / tag utilizando essa distribuição como base, como é o caso do `node:alpine` .

Portanto, se dermos o comando `docker pull alpine:3.13` * baixando a versão `3.13` dessa distribuição e, logo após, dermos o comando `docker pull node:alpine3.13` (ou seja, baixando uma imagem do software `node` preparada a partir da mesma versão dessa distribuição) , veremos que a imagem do node, **deve reaproveitar uma camada que já foi baixada em outro momento** :
 * Lembrando aqui o formato `docker pull <imagem>:<tag>` , no qual a `<tag>` é opcional.

Aqui, hã o reaproveitamento das camadas da distro `Alpine` pela imagem do `node` e, sucessivamente pelas **imagens que sejam derivadas desre** Qualquer outras imagens que tenham etapas iguais a alguma das anteriores tambem vão aproveitar aquelas que ja estâo salvas no disco.
Dessa forma. o Docker consegue enconomizar espaço em disco nao precisando baixar camadas em duplicidade
Um ponto importante sobre as camadas é que aquelas que pertecem a imagem **são somente para leitura**, ou seja , você não consegue escrever nada nelas.

Porém, como vimos la acima, se acerssarmos um `container` de modo interativo(por exemplo, com `docker run it ubunto`). e fizermos atualização(com o `apt-get`)ou criarmos novos arquivos, estes serão persistentes mesmo se reiniciarmos o container.

  Faça esse experimento, rode no terminal o comando:
```
docker run --name meu_container -it ubuntu
```
  No terminal do container criado, rode o seguinte comando para criar um arquivo de texto, já com um conteúdo dentro:
```
echo "Teste container" > ola_mundo.txt
```
  Verifique se o arquivo foi criado, consultando seu conteúdo com o comando cat :
```
cat ola_mundo.txt
```
  Assim que o terminal imprimir a mensagem Teste container , encerre o terminal com o comando exit ;
  Esse comando deve inativar o container, que estava ativo por conta dessa interação;
  Até aqui, entendemos que houve escrita na área reservada para isso no container , portanto, se iniciarmos o container novamente:
docker start -ai meu_container
```
# Aqui passamos o parâmetro `-ai` ao comando `start`,
# para dizer que queremos acoplar ao container (`a`, de 'attach'),
# de modo interativo (`i`, de 'interactive').
```
  E rodarmos novamente o comando cat no terminal interativo para imprimir o conteúdo do nosso arquivo:
```
cat ola_mundo.txt
nl ola_mundo.txt
```
  Você verá que a mensagem Teste container apareceu novamente, logo, o arquivo ola_mundo.txt persistiu mesmo ao reiniciarmos o container.

Como isso foi possível? Como citado anteriormente, não é possível escrever nas camadas de uma imagem, mas todas as vezes que criamos um container, uma camada extra (chamada frequentemente de “container layer” - camada do container) é adicionada aquela imagem para que seja possível ler e escrever nela:

Desse modo, ao criar um `container` sobre uma imagem, é possível interagir (por meio de leitura e escrita) com essa camada extra do `container` e o restante das camadas permanece inalterada, apenas com permissão de leitura.

É dessa forma que conseguimos ter vários `containers` trabalhando em cima de uma mesma imagem , dado que cada "camada de container" possui seu próprio espaço para leitura/escrita, conforme o diagrama:

# Mapeamento de portas
Agora que ja entendemos um pouco mais sobre containers, imagens e suas respectivas diferenças, faremos o uso de containers e imagens de uma forma um pouco mais complexa.
Vamos criar um container para manter um **servidor HTTP apache**, para entedermos também como funciona a parte de reder em Docker.

  * Veremos melhor futuramente, mas um `Servidor HTTP` (Ou servidor web) é um aplicativo capaz de disponibilizar arquivos (como páginas de internet) através de requisições via protocolo de comunicação `HTTP` , que é o mais utilizado na navegação via internet.
  Existem vários servidores http no mercado. No nosso exemplo, utilizaremos o `Servidor HTTP Apache` , bastante popular entre pessoas desenvolvedoras da `linguagem PHP` .

### criando a imagem
```
docker run -d -P httpd:2.4
```
  Veremos mais adiante, mas aqui você já deve ter notado o uso do parâmetro -P , ele é utilizado para que o Docker faça um mapeamento de portas automático para acesso ao container.

A imagem será baixada e poderemos ver a instalação da imagem com suas respectivas camadas que citamos anteriormente:
```

Unable to find image 'httpd:2.4' locally
4: Pulling from library/httpd
ac1a72c06a: Pull complete
bfe7b4bf0: Pull complete
afd2f9c4a94: Pull complete
fc9247a27: Pull complete
a9b714c567d8: Pull complete
Digest: sha256:307e3a2f43cd2c58ac37a093dd9adfc2598d00ca4cc0dd978cb1a56ccad4a39f
Status: Downloaded newer image for httpd:2.4
f9f61da552b994f39fb4e363f6e0ca295c77f6944e923871671e2b11ab93f05a
```
### Se rodarmos o comando `docker ps` , podemos perceber o seguinte na coluna PORTS:
```
CONTAINER ID   IMAGE       COMMAND              CREATED         STATUS         PORTS                                     NAMES
f9f61da552b9   httpd:2.4   "httpd-foreground"   4 minutes ago   Up 4 minutes   0.0.0.0:55000->80/tcp, :::55000->80/tcp   brave_maxwell
```
Servidores http necessitam de uma porta de acesso . No nosso caso, é possível ver que ocorreu um mapeamento automático da porta padrão do container Apache (porta 80 ), para uma das portas do nosso sistema hospedeiro (aqui esse valor foi 55000 , mas no seu computador pode ser outro)*.

  * Aqui é interessante pensar em um exemplo com aplicações em React, já que quando estamos desenvolvendo, frequentemente testamos nosso App em um micro servidor web, cujo acesso se dá via protocolo http, na porta padrão 3000: http://localhost:3000

Desse modo, se quisermos acessar o site estático mantido pelo servidor `Apache` , podemos acessar o endereço `http://localhost:55000` (Ou a porta que seu Docker definir para a imagem) no navegador.
É importante ressaltar que a porta `80` é a porta interna que é enxergada somente dentro do container e a porta `55000` é a porta externa, ou seja, aquela que pode ser acessada em nossa máquina.

Uma analogia que podemos fazer sobre esse assunto é do filme Alice no País das Maravilhas . Existe um momento em que Alice se depara com as portas que dividem o mundo real do País das Maravilhas.
Dessa forma, podemos entender que a porta `55000` é a porta do mundo real (nossa máquina) e a porta `80` é do País das Maravilhas ( Docker ). A ligação entre essas portas conecta os dois mundos para que possamos transitar entre eles.

Depois de criado esse vínculo na rede entre o Docker e nossa máquina, qualquer coisa que esteja na nossa máquina e que seja preciso rodar no servidor dentro do container funcionará a partir de uma comunicação efetiva entre esses dois ambientes.
A forma que temos de identificar os `containers` é por meio do `CONTAINER ID` , porém, esses números complexos podem acabar nos confundindo na execução de algum comando.
Para resolver isso, existe a possibilidade de nomear seu container. Dessa forma, não precisamos depender de ids aleatórios que o Docker atribui e assim ficará mais fácil parar ou remover o container.
Para dar um nome ao container, basta utilizar a flag `--name` :
```
docker run -d -P --name site-name httpd:2.4
```
  Agora, o nome do container é site-name e para interromper seu funcionamento basta rodar o seguinte comando:

```
docker stop site-name
```
  Para colocar o container ativo basta rodar o seguinte comando:
```
docker start site-name
```
Uma outra possibilidade importante ao criar um container é a possibilidade de linkar uma porta interna com uma porta do nosso computador.
A atribuição aleatória das portas é feita pela flag -P e, para especificar a porta, utilizamos a flag -p . Desse modo, devemos seguir a sintaxe `-p <PORTA-SO-HOSPEDEIRO>:<PORTA-SO-CONVIDADO>` .
```
docker run -d -p 54321:80 httpd:2.4
```
  Nesse exemplo, mapeamos a porta 54321 do nosso computador à porta `80` do container. Agora podemos acessar o site estático mantido pelo servidor Apache acessando o endereço `http://localhost:54321` no navegador.

  Um detalhe importante é que a porta do container vai variar dependendo da aplicação que você está rodando . No caso do servidor http , a porta padrão de acesso para páginas web é a `80` .
  Em uma aplicação de React por outro lado, a imagem deveria expor a porta `3000` como padrão, então é importante saber qual porta sua aplicação vai usar antes de rodar o parâmetro `-p` .

# Dockerfile - Comandos básicos
Aprendemos até aqui, que para criarmos containers precisamos de uma imagem, que é uma base para a criação da nossa aplicação!

Então, para criarmos containers para nossas aplicações, precisamos iniciar criando a imagem deles! E temos a alternativa de fazê-los a partir dos arquivos `Dockerfile` *.

  * Não será abordado aqui, mas também podemos "commitar" (como no git ) alterações que fazemos em nossos containers, salvando eles em novas imagens.
  Para isso podemos usar o comando docker commit , que serve literalmente para pegarmos as alterações (que são etapas adicionais) que fizemos no nosso container e salvar elas em uma imagem (nova ou já existente).

  O Dockerfile nada mais é do que um arquivo de configuração usado pelo Docker com a descrição passo a passo do que você deseja que aconteça.
  A seguir, aprenderemos como utilizar os principais comandos do `Dockerfile` , permitindo assim que tenhamos todos os recursos necessários para que nossos apps funcionem corretamente dentro de containers .

  ⚠️ Atenção, essa seção do conteúdo possui exemplos com comandos de linguagens de programação que talvez você não conheça ainda. Não se preocupe! É importante ter em mente que são exemplos meramente didáticos, com a finalidade de explicar os comandos do `Dockerfile` .

## Criando e rodando uma aplicação `React` com `Dockerfile`
Para deixar as coisas mais interessantes, vamos dockerizar uma aplicação `React` . Não faremos incrementos na aplicação porque nosso intuito aqui é focar no processo de dockerização dela.

Para dar contexto, vamos utilizar aqui um pequeno template em `NodeJS` , mas você não precisa se preocupar em compreender profundamente isso agora*.

  * Veremos no futuro, mas o NodeJS é um software que possui a implementação do motor V8 do Google (O mesmo que usamos para codar javascript no navegador `Chrome` ) para utilização avançada em ambientes desktop.

A primeira coisa que vamos  fazer é criar um React App, aqui chamaremos de `react-dockerized` acessando ele posteriormente:
aqui nao abordaremos o React e sobre a linguagem Javascript, teremos o foco em `Docker`
```
npx create-react-app react-dockerized
cd react-dockerized
```
  possiveis erros de atualizações do react  e nodeJs
  npm install -g create-react-app
  sudo npm install -g n
  sudo n latest
  sudo n stable
Há um pacote chamado n, que nos ajuda a alterar a versão do Node
Podemos instalá-lo com o npm de form global, com a flag -g
Depois é possível alterar entre versão latest ou estável com simples comandos

Em seguida. crie um arquivo `Dockerfile` na raiz dessa pasta:
```
touch Dockerfile
```
A ideia do `Dockerfile` é que ele é autossuficiente, ou seja, é possivel criar e executar uma aplicação toda só por comandos dentro dele.
Mas Hoje, vamos utilizar um pequeno exemplo externo, simulando um cenario que sera bastante comum para você, que é o cenario de desenvolvimento local(em que você tera arquivos de projeto dentgro de uma pasta no seu computador, onde estara tambem seu `dockerfile`)

Com isso em mente , agora vamos começar a editar nosso Dockerfile !

### From
Ao criarmos uma nova imagem, sempre devemos basea-la em uma putra, para isso utilizamos `FROM`. por exemplo, para criar uma nova imagem que roda sob um `ubuntu`
```
FROM ubuntu:latest
```
  A partir do `FROM` , é possível usar qualquer comando em qualquer ordem, porém, dependendo do funcionamento do seu aplicativo, etapas bem posicionadas podem otimizar o processo de `build` (que é a construção da imagem) , `rebuild` (reconstrução da imagem) ou mesmo na distribuição. Isso porque quanto menos etapas para aplicação rodar, menos camadas a imagem vai gerar, diminuindo seu peso.
  Isso é importante, principalmente quando estamos trabalhando em uma imagem que recebe atualizações regulares.

È recomendado utilizar sempre uma versão especifica de nossa imagem base em nossas imagem de produção, por exemplo: `ubunto:8` ao envés de `ubunto:latest`, isso garante que estaremos utilizando sempre a mesma imagem base quando buildarmos nossa imagem, evitando quebra de compatibilidade caso a imagem **latest** seja atualizada para a versão `9`, por exemplo

Outra recomendação é, sempre que possivel, utilizar as versões minimas da imagem. por exemplo. imagens como a tag `slim` ou `alpine`, que são ,muito mais leves, pois utilizam versões minimas do SO (como é o caso do alpine) que possuem menos depedencias e ferramentas instaladas.

Consequentemente, pode ser necessário a instalação de alguma ferramenta específica (que normalmente já viria instalada no SO) para que nossa aplicação funcione corretamente, porém, isso pode ser feito de maneira simples em nosso `Dockerfile` . Essa prática vale a pena pelos benefícios de se ter uma imagem muito mais leve, que pode ser 10 vezes menor.

As especificações de imagens podem ser consultadas diretamente em [Docker Hub.](https://hub.docker.com/)

  No Dockerfile do nosso mini-projeto, vamos basear nossa imagem no node:14-alpine (NodeJS versão 14 que roda a partir da distro Alpine) e dar o alias "build" para ela :

```
FROM node:14-alpine AS build
```
### WORKDIR
Com o comando `WORKDIR` , podemos definir um "diretório de trabalho", que será utilizado como base para a execução dos comandos. Sua estrutura é a seguinte:

```
WORKDIR /diretorio/que/sera/utilizado
```
Na nossa aplicação, vamos definir o diretório /app como nosso `WORKDIR` no `Dockerfile` :

```
WORKDIR /app # Definimos o workdir
```
### COPY
Vimos que conseguimos preparar nossa imagem para executar por exemplo, uma aplicação dentro do container, porém, precisamos do código fonte para rodá-lo.
Para isso utilizamos o `COPY` (Copiar em português) , com ele conseguimos copiar diretórios e arquivos para dentro da nossa imagem:

```
COPY ["<ARQUIVO_1>","<ARQUIVO_2>",...,"<ARQUIVO_X>", "<PASTA-DESTINO>"]
```
Imagine que estamos em um diretório que possui uma pasta app com o código fonte de uma aplicação, para copiá-la para dentro da imagem e conseguirmos executá-la, basta aplicar:

```
COPY ["./app", "/usr/src/app"]
```
Com o comando `COPY` conseguimos montar nossa estrutura do código fonte dentro da imagem, porém, para executá-la precisaríamos apontar para o diretório que definimos anteriormente como nosso diretório de trabalho ( `WORKDIR` ).
Vale ressaltar que no `COPY` tanto a sintaxe na forma exec ( `COPY ["arquivo1", "arquivo2", "./destino"]` ) como na shell ( `COPY arquivo1 arquivo2 ./destino` ) são aceitas*.
  * O modo `shell` é como se você rodasse o comando em um terminal.

  No `Dockerfile` do nosso mini-projeto, vamos copiar todos os arquivos que começam com "package" ( `package.json` e `package-lock.json` ), para nosso diretório atual, a pasta `/app` , usando a forma exec :

```
# FROM node:14-alpine AS build
# WORKDIR /app
COPY package*.json ./
```
### RUN
O `RUN`(neste contexto, rodar, em portugues- com em -`rodar um comando`) irá executar uma lista de comandos **durante a criação** da imagem
```
RUN ["<COMANDO>", "<SUBCOMANDO>", "<PARAMETRO-1>", ... , "<PARAMETRO-N>"]
```

o `RUN` é comum para prepararmos a imagem para rodar nossos apps, intalando as dependencies de uma aplicação. Note que o `RUN` tambem aceita as formas shell e exec, assim como o `COPY`
  No `Dockerfile` do nosso mini-projeto, vamos rodar o comando de instalação da nossa aplicação, passando um parâmetro para suprimir mensagens de aviso e facilitar a visualização do processo, quando ele ocorrer :

```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
RUN npm install
```
  Aqui é importante frisar, que só é possível fazer esse comando de instalação pois a imagem Node , já possui esses aplicativos internamente.

### Passos intermediarios
Antes de passar para os proximos comandos, alguns passos intermediarios são necessários como por exemplo, fazer a cópia dos demais arquivos para dentro do container, porém, como ja rodamos um `npm install`, é interessante criarmos um arquivo chamdo `.dockerignore` para adicionarmos lá a node_modules, de modo que nao seja copiado. faz sentido pra você

```
touch .dockerignore
  node_modules
```
  Agora, no `Dockerfile` do nosso mini-projeto, podemos definir a cópia de todos os arquivos apenas com o comando:

```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
COPY . .
```
#### também devemos adicionar um comando para executaro o processo de build* da nossa aplicação, no `Dockerfile`
  * Esses comandos podem variar dependendo da aplicação que você for rodar.
  No nosso exemplo, uma aplicação em React possui um script para gerar uma versão otimizada da página criada, por faremos esse processo  aqui.

```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
RUN npm run build
```
Para entender esse comando, podemos ir no terminal e dentro do diretorio de nossa aplicação rodar o comando para gerar uma build
```
npm run build
```
Você pode notar  que na raiz do projeto, foi criada uma pasta chamada build. Esssa pasta contém uma versão otmizada da sua aplicação `REAcT`

Essa versão, geralmente, é  utilizada para disponibilização da sua aplicação em processos de `deploy`(processo automatizado de disponibilização) e publicação na internet.

Para o nosso exemplo, utilizaremos essa build em associação com um servidor `http`,

### NGINX
Aqui faremos um negócio chamado `multi-stage build` *, que nada mais é que dividir o script do `Dockerfile` e mais de uma parte.
  * Para saber mais sobre o multi-stage build , acesse o link oficial da [documentação](https://docs-docker-com.translate.goog/develop/develop-images/multistage-build/?_x_tr_sl=en&_x_tr_tl=pt&_x_tr_hl=pt-BR&_x_tr_pto=nui)

Então nessa segunda parte, passaremos a definir no `DockerFile` do nosso projeto os comandos do ambiente de produção, no qual utilizaremos um `servidor HTTP NGINX`.
  Como foi dito anteriormente, há uma diversidade de servidores http no mercado. Utilizamos o Apache no exemplo passado e agora utilizaremos o Servidor `Nginx` (pronunciado "engine-ex"). O Nginx é um software de código aberto para servidores web, originalmente utilizado para navegação HTTP, mas que atualmente também tem outras funcionalidades mais avançadas.

Agora, vamos definir a imagem de origemdo `Nginx`, com o alias "prod". Em seguida, eremos copiar as informações da imagem que apelidamos de "build" e sua respectiva pasta para o diretorio do servidor, c

```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
```
### EXPOSE
Outra característica que é necessária nos atentarmos, é a porta que será utilizada por nossa aplicação dentro do container .
Aqui não será diferente, o container possui toda uma rede interna para o container que veremos mais adiante.
Aqui é necessário sabermos que grande parte dos serviços (sobretudo os da web) disponibilizam uma porta de acesso externo, portanto, precisamos especificá-la com o comando `EXPOSE` :


```
EXPOSE <PORTA-DO-APP-NO-CONTAINER>
```
Por exemplo, se nossa aplicação executa na porta `3000`, precisamos evidenciar no nosso `Dockerfile`
```
EXPOSE 3000
```
Uma vez "exposta", configuramos nossa imagem para utilizar esta porta.
Por padão o `Ǹginx` usa a porta `80` para executar as aplicações, então, podemos expor esta porta no nosso `Dockerfile`
```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx:1.16.0-alpine AS prod
# COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
```
Aqui vale resaltar que quando formos rodar um `container` utilizando uma imagem que expõe uma porta, precisamos atribuir uma porta do nosso sistema hospedeiro (host) que direcionará para a porta do sistema convidado(guest).

Fazemos isto com o parametro `-p` Lembra-se ? ja falamos sobre, la em cima !
```
docker container run \
   -p <PORTA-HOST>:<PORTA-GUEST> \
   <IMAGEM>:<TAG>
```
Por exemplo, se temos uma aplicação que serve na porta `80` que esta exposta no `Dockerfile` e queremos acessa-la a parti da nossa porta `3000` do host, basta executarmos
```
docker container run \
   -p 3000:80 \
   --rm \
   -dit \
   yeasy/simple-web:latest
```
Após rodar o `container` , basta acessar `localhost:3000` para visualizar nosso <s>belíssimo</s> "Real Visit Results".
Ao listar os containers em execução com `docker container ps` , podemos ver as portas expostas e seus respectivos binds , através do campo `PORTS` .

### CMD
O comando `CMD` (Que vem de C o m man d Prompt, ou Prompt de comando em português) , sempre é executado quando o container é iniciado .
É interessante ressaltar que pode acontecer de mais de um `CMD` ser definido em um mesmo `Dockerfile` e, neste caso, apenas o último terá efeito.
O `CMD` possui 2 formas: a que vimos até aqui para a execução de comandos `shell` e as para executáveis. Vamos ver um exemplo:
```
CMD ["/bin/echo", "Hello World"]
```
Nesse forma, o primeiro argumento é o executável e os demais são seus parâmetros.
Normalmente utilizamos o `CMD` para executar o comando que irá rodar com o container, poderíamos usar como exemplo o start de um app , por exemplo:
```
CMD npm start
```
Aqui temos mais um ponto de atenção, caso o container seja executado passando um comando no `run`, o comando passado sobrescrevera o comando definido na porta `CMD`
  Podemos utilizar o `CMD` no `Dockerfile` do nosso projeto, da seguinte forma:
```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx:1.16.0-alpine AS prod
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```
### ENTRYPOINT
Vimos que podemos utilizar o `CMD` para iniciarmos um comando ao executarmos nossos containers , como por exemplo para iniciarmos um app .
Porém, para esse fim recomendamos utilizar `ENTRYPOINT` (Ponto de entrada em português) , pois, diferentemente do CMD , o comando não será sobrescrito pelo passado no `run` ao executarmos o container .
Por exemplo:
```
ENTRYPOINT ["/bin/echo", "Hello World"]
```
Um ponto de atenção é que ao definirmos um entrypoint , alteramos o comportamento do `CMD` , que ao ser utilizado irá rodar como base para o comando definido pelo entrypoint , apenas como "parâmetros adicionais" à ele, por exemplo:
```
ENTRYPOINT [ "/bin/echo" ]
CMD [ "Hello World" ]
```
Nesse exemplo, será executado no iniciar do container `echo Hello World` .
Para ilustrar melhor a diferença entre os dois comandos, vamos a um exemplo em que poderíamos explorar a diferença entre eles:
```
ENTRYPOINT ["/bin/echo", "Hello"]
CMD ["World"]
```

Nesse caso, ao executarmos o container , seria executado `echo Hello World` , porém poderíamos passar um parâmetro para o comando `docker container run` , de modo a substituir o `CMD` :
```
docker container run nossa-hello-world-image John
```
Neste caso, teriamos a seguinte saida no console `hello world`. Pois o CMD seria substituido pelo comando passadono `container run`

  No `Dockerfile` do nosso mini-projeto, vamos substituir a linha que estava com CMD, agora passando no nosso `ENTRYPOINT` :

```
# FROM node:14-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# FROM nginx:1.16.0-alpine AS prod
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
```
## Gerando uma imagem a partir do nosso dockerfile
ate aqui entendemos que o `Dockerfile` funciona como um manual de instruções pra nossa aplicação rodar, e o nosso ficou dessa formato da
```
FROM node:14-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.16.0-alpine AS prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
```
Mas para que a gente consiga de fato consolidar essas instruções em uma imagem, precisamos rodar o comando `ocker image build -t name:tag> <origem_docker_file>`!
```
docker image build -t react-dockerized:v1 .
```
  Aqui temos o comando `docker` , acompanhado da instância `image` , e do subcomando `build` . Isso deve retornar o `log` do processo de `build` , algo como:
```
Sending build context to Docker daemon  870.4kB
Step 1/10 : FROM node:14-alpine AS build
 ---> fe39f43f1d22
Step 2/10 : WORKDIR /app
 ---> Running in e42203ccae10
Removing intermediate container e42203ccae10
 ---> 890531fc8024
Step 3/10 : COPY package*.json ./
 ---> 7c756629dd86
Step 4/10 : RUN npm install
 ---> Running in 379b2754f2f6

# ... demais passos

Removing intermediate container 1be22b2c3906
 ---> 9392a56b85dc
Successfully built 9392a56b85dc
Successfully tagged react-dockerized:v1
```
Também utilizamos o parâmetro `-t` (de `tag` ) com o valor `react-dockerized:v1` (aqui já estamos puxando uma tag "v1" para nossa imagem) e o ponto . , que está dizendo que o `Dockerfile` se encontra na mesma pasta em que o comando está sendo executado.

Após a execução da `build` , podemos listar nossas imagens e verificar a presença da que acabamos de criar, com:
```
docker images
```
Para ver nossa aplicação funcionando, podemos rodar nosso mini-projeto no terminal interativo, definindo qual porta do nosso localhost será atribuida para qual porta do container :
```
docker run -dit -p 8000:80 --name reactdockerized react-dockerized:v1
```
Abra seu navegador na **URL http://localhost:8000/** e veja a página padrão do React funcionando.
 criamos nossa primeira imagem customizada e executamos um container a partir dessa imagem.

  Veremos mais adiante, mas notem aqui que cada comando gera uma camada ( `Layer` ), isso é importante já que essas camadas podem posteriormente ser usadas por imagens derivadas.


## Dockerfile comandos adicionais
### LABEL
Labels (Rótulos em português) são um mecanismo para atribuir "metadatas" (dados auxiliares) aos seus objetos Docker , como imagens e containers.
Com o parâmetro `LABEL` , é possível fazer essas definições em nosso Dockerfile .
A documentação oficial recomenda o uso de labels para organizar nossas imagens, registrar informações de licenças, anotar relacionamentos entre containers e outros componentes ou qualquer outras informações que façam sentido ao objetivo do container ou sua aplicação.
As informações são registradas seguindo o parâmetro de "chave e valor", e caso uma chave esteja repetida, a última sobrescreverá as anteriores:
```
LABEL <KEY>=<VALUE>
```
é comum registrarmos o maintener da imagem, para um possivel contato posterior para tirar duvidas ou seguir contribuições
```
LABEL maintener="John Doe <john.doe@google.com.br>"
```
Esse valor pode ser resgatado posteriormente através do comando `docker inspect <CONTAINER ID || NAMES>` , onde o valor estará no atributo `Labels` :
```
"Labels": {
   "maintener": "John Doe <john.doe@trybe.com.br>"
}
```

### ENV
Em ambientes de desenvolvimento de apps é muito importante o uso de Env ironment Variables (Variáveis de ambiente, em português)*, felizmente também podemos utilizá-las em nossos containers.
* Variáveis de ambiente são valores que são definidos dentro do escopo do sistema operacional, ou seja, são valores que estão disponíveis para todas as aplicações que estão instaladas dentro daquele SO .
No `Dockerfile` , podemos definir nossas variáveis durante a criação de nossa imagem utilizando o comando `ENV` :
```
ENV <ENV NAME> <ENV VALUE>
```
Podemos utilizá-la, por exemplo, para setar o ambiente onde vamos rodar o app .
```
ENV NODE_ENV production
```

Ao rodar nossos containers, também podemos passar variáveis, basta utilizar a tag `--env` ou `-e` :
```
docker container run \
   --env myCat=fluffy \
   --env myName=johnDoe \
   <IMAGE NAME>
```
Essas sobrescreverão as definidas no `Dockerfile` caso possuam o mesmo nome.

### USER
Com o comando `USER` , podemos definir qual o usuário que irá iniciar nosso app no container .
Caso não seja definido nenhum usuário, o Docker irá utilizar o usuário root como padrão, o que não é recomendado por motivos de segurança.
Abaixo temos um exemplo da criação de um usuário com apenas as permissões necessárias em uma imagem `ubuntu` :
```
FROM ubuntu:8
RUN mkdir /app
RUN groupadd -r node-user && useradd -r -s /bin/false -g node-user node-user
WORKDIR /app
COPY . /app
RUN chown -R node-user:node-user /app
USER node-user
CMD node index.js
```

Normalmente as imagens já possuem um usuário criado para a execução de nossos `apps` .
Por exemplo nas imagens `node` , já possuem um usuário genérico chamado "node" com os privilégios necessários, e para usá-lo, basta adicionarmos o usuário ao diretório de nosso projeto e utilizarmos a tag `user` :
```
FROM node:10-alpine
COPY . /app
RUN chown -R node:node /app
USER node
CMD [“node”, “index.js”]
```

### Layer e Cache
Como visto na seção `Gerando uma imagem a partir do nosso Dockerfile` , ao criarmos nossas imagens, cada comando é considerado uma "camada" (layer), podemos ver detalhadamente ao gerarmos uma build ( buildarmos ) de nossas imagens, por exemplo:

Importante entendermos essa arquitetura para explorarmos uma de suas principais funções, o uso de cache *.
  * Esse termo remete ao uso de uma "memória cache", que na prática é uma armazenamento rápido e temporário, que pode ser utilizado junto a algum recurso.
  Nesse o contexto, o nosso cache , mantém armazenados, camadas de uma imagens após seu processo de `build` .

Caso o Docker identifique que não houve mudança naquele `Step` (passo, em português) , ele irá utilizar o cache do último `build` . Observe o seguinte `Dockerfile` , como exemplo:
```
# Step 1
FROM node:10-alpine
# Step 2
WORKDIR /usr/src/app
# Step 3
COPY [".", "./"]
# Step 4
RUN ["npm", "install"]
# Step 5
ENTRYPOINT [ "npm", "start" ]
```

Uma vez que é realizado o build dessa imagem, ela não repetirá nenhum desses passos, a menos que haja alguma alteração.

Imagine que alteramos qualquer coisa em nosso código fonte, então a partir do `Step 3` que utiliza diretamente o arquivo modificado, todos os passos serão reexecutados.

Agora imagina que alteração foi em alguma parte do código e não teve nenhuma relação com as dependências, mesmo assim será executado o comando `npm install` novamente, mesmo que não tenhamos atualizado, adicionado ou removido nenhuma dependência.

Para tirarmos melhor proveito dessa estrutura, é recomendado dividirmos em partes cada etapa do processo e sempre deixando as etapas mais propensas a alterações para baixo do nosso "pipeline" (Nossa segmentação de instruções) .

Vamos à uma nova versão do nosso `Dockerfile` de exemplo:
```
# Step 1
FROM node:10-alpine
# Step 2
WORKDIR /usr/src/app
# Step 3
COPY ["./package.json", "./package-lock.json", "./"]
# Step 4
RUN ["npm", "install"]
# Step 5
COPY ["./src", "./"]
# Step 6
ENTRYPOINT [ "npm", "start" ]
```
Nessa nova versão temos mais "steps", porém, caso haja alteração somente em nosso código fonte (contido em `src` ), apenas os passos a partir do "Step 5" serão repetidos, evitando a reinstalação das dependências, por exemplo. Esse é um exemplo simples mas já podemos perceber grande ganho em nosso `Dockerfile` , em arquivos mais complexos esse ganho é ainda maior.



# Oruqestrando Container com DOcker Compose
### Vamos aprender
Dando continuidade sobre docker, estudaremos como gerenciar todos ambientes de containner utilizando a ferramenta Docker Compose. Além disso , aprederemos como e por que utilizar volumes e conheceremos o recurso de networks no docker.

## Vamos aprender
- Gerenciar redes Docker, utilizando-as para a comunicação e isolamento de containers:
- Persistir dados dos containers utilizando volumes
- Criar arquivos COMPOSE para gerenciar todo seu ambiente com Docker;
- Gerenciar Services, NetWork e volumes a parti do compose

Ja vimos anteriormente o que são imagens, contaners e comousar o `dockerfile` para passar todas as instruções para montar nosso sistema convidado

Hoje, aprenderemos sobre o Docker Compose, ARQUIVO PELO QUAL CONSEGUIMOS CONFIGURAR TODO UM AMBIENTE DE CONTAINERS de maneira muito mais simples;

Em um ecosistema de aplicação com  varias linguagens de programação e tecnologias distintas rodando em seus respectivos containers, o Docker Compose entra como uma solução que consegue organizar o funcionamento e a configuração de todas essas partes que compõeem um sistema.

Usando o Docker Compose, definimos em um arquivo de configuração `yaml` todos os detalhes para executar nosso ambiente de desenvolvimento local, aproveitando todas as vantagens do `Docker`, sem se preucupar em subir ca ium dos containers que envolvem um app com seus parametros especificos no `run`

Muitas vezes, ele é comparado a uma receita, pois indica tanto os componentes ques serão utilizados quanto em que ordem cada comando deve ser executado.

Além disso, nossos ambientes geralmente possuem vários serviços que precisam se comunicar entre si, por exemplo, um back-end com um front-end ou um serviço com um banco de dados. Nesse contexto, saber como trabalhar com networks pode ser muito vantajoso por nos permitir lidar com essa comunicação entre containers mais facilmente.

Outros recursos importantes que também precisamos entender são os Volumes . Eles são componentes do Docker responsáveis por prover a preservação de informações. Isso é muito útil, pois é comum precisarmos de soluções para que de dados ou arquivos, como banco de dados, persistam.

Esses componentes mais o Compose irão nos permitir criar todo nosso ambiente de maneira simples, utilizando todos os recursos e vantagens do Docker . Isso garantirá que mesmo que nosso ambiente tenha diversos serviços como APIs, front-ends, banco de dados, entre outros, conseguiremos integrá-los, permitindo que tudo isso rode em qualquer ambiente com Docker e sua publicação seja feita de forma descomplicada e eficiente.

# vamos la

## Networks - Redes no Docker

Anteriormente, vimos como "expor" as portas de nossos containers para acessá-los de fora, utilizando o parâmetro `EXPOSE` em nosso `Dockerfile` , e também como fazer a atribuição ( bind ) com as portas de nossa máquina host utilizando o parâmetro `-p` no `docker container run` . Chamamos de mapeamento de portas esses recursos que vinculam ou tornam visíveis portas do container para a nossa máquina localhost .

Já o Docker network , é uma espécie de rede virtualizada que permite que você conecte containers a uma determinada rede ou quantas redes Docker desejar, de forma que esses containers possam compartilhar informações através dessa rede.
Por padrão, o Docker possui 3 redes que são criadas junto com ele: `bridge` , `none` e `host` . Cada uma delas tem características específicas quanto a conectividade para seus containers . Podemos consultá-las executando:
```
docker network ls
```
Vamos entender o que é cada uma!
```
NETWORK ID     NAME      DRIVER    SCOPE
4c90d7a72df2   bridge    bridge    local
a8061ca73fa5   host      host      local
ef6d0c7c65e5   none      null      local
```
### Bridge
Ao ser iniciado, todo container é associado a uma rede e, caso uma rede não seja seja especificada explicitamente por nós, ele será associado a rede `Bridge` .
Todos os containers associados a essa rede poderão se comunicar via protocolo `TCP/IP` e, se soubermos o IP do container que queremos conectar, podemos enviar tráfego a ele. Porém, os IPs de um container são gerados automaticamente, por isso não é muito útil fazermos a conexão dessa forma, pois sempre que o container for reiniciado, o IP poderá mudar.

Uma maneira de fazermos a descoberta do IP automaticamente pelo nome, é utilizando a opção `--link` *.
  * No entanto, na documentação do Docker desencoraja seu uso e alerta que essa flag ( `--link` ) pode ser removida eventualmente.

Para fins didáticos, vamos ver como isso funciona, utilizando uma imagem `busybox` , mas mais adiante veremos a melhor alternativa para fazer isso.
Digite no terminal:
```
docker container run -ti --name container1 busybox
docker container run -ti --link container1 --name container2 busybox
```
Agora, o `container2` poderá se conectar no `container1` . Para fazermos um teste simples, podemos fazer um `ping` no `container1` , dentro do `container2` , apenas digitando no terminal interativo do `container2` :

```
ping container1
```
* É bom ressaltar que a opção --link não é necessária para permitir que os serviços se comuniquem, pois, por padrão, qualquer serviço pode alcançar qualquer outro serviço a partir de seu `IP` . Os links apenas permitem definir apelidos extras pelos quais um serviço pode ser acessado de outro serviço.
⚠️ Dica: Perceba que nos exemplos utilizamos uma imagem chamada `busybox` , ela é uma suite que possui vários utilitários Unix, dessa forma é muito útil quando queremos explorar comandos como o ping para testes.

## Host
Ao associarmos um container a essa rede, ela passa a compartilhar toda stack de rede do host , ou seja, da máquina que roda o ambiente Docker . O uso desta rede é recomendada apenas para alguns serviços específicos, normalmente de infra, em que o container precisa desse compartilhamento. Caso contrário, a recomendação é evitá-la.

## None
Essa é uma rede que não possui nenhum driver associado. Dessa maneira, ao atribuir um container a ela, o mesmo ficará isolado. Ela é útil quando temos containers que utilizam arquivos para a execução de comandos ou para se comunicar, por exemplo, um container de backup ou que rode apenas um script localmente.


# Criando Nossa Rede
A forma mais recomendada de comunicarmos nossos containers é criando nossa própria rede. Através dela conseguimos, por exemplo, referenciar um container a partir de outro, utilizando seu nome

