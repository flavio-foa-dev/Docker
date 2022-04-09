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