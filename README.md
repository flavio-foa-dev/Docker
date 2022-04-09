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