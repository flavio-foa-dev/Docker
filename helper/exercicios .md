# Exercicios 1

1. No Docker Hub(https://hub.docker.com/search?q=&type=image) , utilizando a caixa de busca ( `"Search for great content"` ) , busque pela imagem da Distribuição `Linux Debian` ;

2. Uma vez que encontrar a imagem oficial , acesse-a (clicando em seu card) e verifique na página de detalhes, se existe algum comando para baixarmos a imagem localmente sem ter que criar um `container` para isso ;

3. Baixe a imagem utilizando a `tag : stable-slim` , que é uma versão reduzida da distribuição;

4. Após baixar a imagem para seu computador local, crie e execute um `container` no modo interativo utilizando essa imagem como referência (não esqueça referenciar a `tag` ) ;

5. No terminal, você deve conseguir rodar o comando `cat /etc/*-release` , que vai retornar os dados da distribuição `Debian` que está sendo rodada dentro do `container` ;

6. Encerre o terminal ;

7. Verifique na sua lista de containers , qual o `container` é referente ao exercício que acabou de praticar;

8. Inicie o mesmo `container` novamente , sem criar outro. Valide se ele está ativo na lista de containers;

9. Retome o `container` que foi criado anteriormente nesse exercício ;

10. Rode o comando `cat /etc/debian_version` que deve retornar a versão atual do sistema do `container` ;

11. Encerre o terminal ;

12. Remova somente o `container` criado para esse exercício ;

13. (Bônus) Crie e rode de modo interativo em modo 'Cleanup' , a imagem `andrius/ascii-patrol` ;

14. (Bônus) Encerre o `container` utilizando os botões `[ ctrl ] + [ c ]`.



# Gabarito 1.

Exercício 1
No Docker Hub , utilizando a caixa de busca ( "Search for great content" ) , busque pela imagem da Distribuição Linux Debian .
Solução
No campo de busca do Docker Hub , você pode procurar por diversas imagens (incluindo softwares populares como o mysql , ou servidores da web, como o nginx ) , nesse caso, procuramos pela palavra chave debian .
Exercício 2
Uma vez que encontrar a imagem oficial , acesse-a (clicando em seu card) e verifique na página de detalhes, se existe algum comando para baixarmos a imagem localmente sem ter que criar um container para isso .
Solução
Ao acessar a página de detalhes, logo de cara, a página já indica o comando git pull <imagem> , esse comando faz apenas o download da imagem, sem o processo de criação e execução do container .
Exercício 3
Baixe a imagem utilizando a tag : stable-slim , que é uma versão reduzida da distribuição.
Solução
As tags também podem ser acessadas pela página de detalhes da imagem (onde também é fornecido o comando para executar) , o comando foi o docker pull debian:stable-slim (esse processo ocorre de forma automática, se utilizarmos docker run ) .
Ilustração dos itens 4 a 7

Resolução dos itens 4 a 7
Exercício 4
Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência (não esqueça referenciar a tag ) .
Solução
Para criar e executar nosso container , usamos o comando docker container run -it debian:stable-slim , lembrando que a imagem pode ser chamada no formato <imagem>:<tag> .
Outra solução também pode ser com o uso do comando create , que cria o contêiner mas não o inicia imediatamente.
Primeiro utilizamos o comando docker container create -it debian:stable-slim . Como esse comando gera um CONTAINER ID , podemos utiliza-lo como referência para o comando start , como em docker container start <CONTAINER ID> .
Exercício 5
No terminal, você deve conseguir rodar o comando cat /etc/*-release , que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container .
Solução
Ao rodar o comando cat /etc/*-release foram retornados os dados corretos da distribuição estável do Debian (versão 11, codinome bullseye ) .
Exercício 6
Encerre o terminal .
Solução
Para encerrar o terminal interno do container , o comando exit foi utilizado.
Exercício 7
Verifique na sua lista de containers , qual o container é referente ao exercício que acabou de praticar.
Solução
Para listar o container , podemos utilizar o comando abreviado docker ps -l (para mostrar qual foi o último container criado), assim como docker container ls -l ou ainda, passando o parâmetro -a para mostrar todos.
Ilustração dos itens 8 a 12

Resolução dos itens 8 a 12
Exercício 8
Inicie o mesmo container novamente , sem criar outro. Valide se ele está ativo na lista de containers.
Solução
Foi utilizado o comando abreviado docker start <CONTAINER ID || NAMES> onde <CONTAINER ID || NAMES> foi o início do identificador único 07c0a580d818 (mostrando que n é preciso passar o valor inteiro) , o container ficou ativo (campo STATUS ) após isso.
Exercício 9
Retome o container que foi criado anteriormente nesse exercício .
Solução
Foi utilizado o comando abreviado docker attach <CONTAINER ID || NAMES> . Já que o container foi inicializado anteriormente de modo interativo, pudemos retomar seu terminal.
Exercício 10
Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container .
Solução
O comando deve retornar o número da atual versão estável do Debian ( 11 ) .
Exercício 11
Encerre o terminal .
Solução
Para encerrar o terminal interno do container , o comando exit foi utilizado.
Exercício 12
Remova somente o container criado para esse exercício .
Solução
Foi utilizado o comando docker container rm <CONTAINER ID || NAMES> , validado em seguida.
Bônus
Ilustração dos itens 13 e 14

Surpresa nos itens 13 e 14
Exercício 13
Crie e rode de modo interativo em modo 'Cleanup' , a imagem andrius/ascii-patrol .
Solução
⚠️ Você descobriu o jogo ASCII-PATROL ! ⚠️ Para rodar o container e remove-lo logo em seguida, foi utilizado o comando docker run -it --rm andrius/ascii-patrol , onde o -it permite a interação com o jogo pelo terminal e o --rm garante que o container será removido ao terminar o jogo.
Exercício 14
Encerre o container utilizando os botões [ ctrl ] + [ c ].
Solução
Após fechar o jogo, utilize o comando clear para limpar a tela. Você pode constatar que, rodando um docker container ls -a , o container do jogo não estará presente.

# Exercicios 2

Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado!

Exercício :

Vamos usar uma imagem disponível no DockerHub conhecida como "cowsay" (Uma vaca falante no terminal 🐮!) !
A ideia é deixarmos a mensagem para o cowsay parametrizável, dessa forma, conseguiremos executar o comando:

docker container run cowsay Muuuuuuhhh

E ter a seguinte saída no terminal:

____________
< Muuuuuuhhh >
------------
         \   ^__^
         \  (oo)\_______
            (__)\       )\/\
               ||----w |
               ||     ||

Para isso:

Crie um Dockerfile utilizando a imagem chuanwen/cowsay .

Agora defina um ENTRYPOINT para a execução do comando.

Lembre-se que com ele, diferente do CMD o comando não poderá ser sobrescrito com o docker run , porém, conseguiremos passar parâmetros ao binário, exploraremos esse recurso para poder passar a mensagem.

Utilize o CMD para definir uma mensagem padrão.

Gere uma build e execute um container baseado em sua imagem sem passar nenhum comando.

Agora execute um novo container passando sua mensagem para testar, além da mensagem você pode utilizar a opção -l para listar outros personagens disponíveis e então executar algo como docker container run cowsay -f dragon-and-cow "VQM FOA" , para exibir um dragão junto com a vaquinha.

# Gabarito 2.

Exercício
Vamos usar uma imagem disponível no DockerHub conhecida como "cowsay" (Uma vaca falante no terminal 🐮!) !
A ideia é deixarmos a mensagem para o cowsay parametrizável, dessa forma, conseguiremos executar o comando:

docker container run cowsay Muuuuuuhhh

E ter a seguinte saída no terminal:

____________
< Muuuuuuhhh >
------------
         \   ^__^
         \  (oo)\_______
            (__)\       )\/\
               ||----w |
               ||     ||


Item 1
Crie um Dockerfile utilizando a imagem chuanwen/cowsay .

Solução
   FROM chuanwen/cowsay:latest

Item 2
Agora defina um ENTRYPOINT para a execução do comando, lembre-se que com ele, diferente do CMD o comando não poderá ser sobrescrito com o docker run , porém, conseguiremos passar parâmetros ao binário, exploraremos esse recurso para poder passar a mensagem.

Solução
ENTRYPOINT [ "/usr/games/cowsay" ]

Item 3
Utilize o CMD para definir uma mensagem padrão.

Solução
CMD [ "#VQV FOA" ]

Item 4
Builde e execute um container baseado em sua imagem sem passar nenhum comando.

Solução
docker image build ./ -t cowsay

Item 5
Agora execute um novo container passando sua mensagem para testar, além da mensagem você pode utilizar a opção -l para listar outros personagens disponíveis e então executar algo como docker container run cowsay -f dragon-and-cow "#VQV FOA" , para exibir um dragão junto com a vaquinha.

Solução
docker container run cowsay -f moofasa "#VQV TRYBE"


# Exercicios 3.
Exercício 1 :
Vamos aprimorar nossos conhecimentos sobre images e volumes , para isso:
Crie um arquivo HTML chamado missao_trybe.html que tenha a seguinte estrutura: 1.1. Tag <title> com o seguinte texto "Trybe"; 1.2. Tag <H1> com o seguinte texto "Missão da Trybe"; 1.3. Tag <p> com o seguinte texto "Gerar oportunidade para pessoas"; 1.4. Salve o arquivo em qualquer lugar da sua máquina com a extensão html
Crie um container para manter um servidor httpd:2.4 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.
Após criar o container acesse a página HTML que está rodando no servidor em seu browser.
Acesse o arquivo missao_trybe.html e acrescente a tag <p> com o seguinte texto "Nosso negócio é GENTE! #VQV";
Obtenha o id do container httpd:2.4 ;
Obtenha o Mounts através da propriedade Source que deve mostrar o volume desse container no Docker Host ;
Agora pare o container httpd:2.4 ;
Exclua o seu container;
Verifique se a pasta onde você salvo o arquivo html permanece no mesmo lugar;
Obtenha o IMAGE ID do servidor;
Depois de obter o IMAGE ID , exclua a imagem.
Exercício 2 :
Crie o arquivo Compose para subir um ghost blog , essa plataforma é similar com o Wordpress e é utilizada para criar sites de conteúdo. Você pode ler no site oficial como criar conteúdos nele e utilizá-lo. Para esse exercício, utilizaremos apenas sua página de exemplo:
Utilize a versão "3" no arquivo;
Crie um service para subir a plataforma, utilize a imagem ghost:1-alpine ;
Publique a porta 2368 , fazendo bind também para a 2368 ;
Suba a aplicação utilizando o docker-compose e então acesse a porta publicada para validar se deu tudo certo.
Exercício 3 :
Por padrão o ghost utiliza um sqlite interno para salvar as informações, porém, vamos alterar esse comportamento para exercitar nossos conhecimentos:
Crie um novo serviço para o nosso banco de dados, podemos utilizar um mysql, utilize a imagem mysql:5.7 ;
Precisamos definir uma senha root para o nosso bd , para isso utilize a variável MYSQL_ROOT_PASSWORD , lembre-se que é possível utilizar a sintaxe ${} para passar uma env do host , para a env do container ;
Agora precisamos configurar nosso service com o ghost para utilizar o MySQL, para isso defina a variável database__client para mysql ;
Defina o nome ghost para o nome do database utilizando a variável database__connection__database ;
E então, indique a conexão para o nosso MySQL na env database__connection__host ;
Para definir a pessoa usuária ( root ) e senha (a mesma que definimos no nosso MySQL), utilize respectivamente as envs database__connection__user e database__connection__password .
Utilize a opção depends_on para criar relações de dependências entre os serviços.
Suba o ambiente com o novo arquivo usando o docker-compose e então acesse a porta.
Exercício 4 :
Agora vamos praticar os conceitos de volumes e networks .
Configure o nosso serviço mysql para utilizar um volume, conforme vimos no conteúdo, utilize o caminho target /var/lib/mysql .
Ao invés de utilizar a rede padrão criada pelo Compose , defina uma rede chamada my-network para a comunicação dos dois serviços.
Suba o ambiente com o novo arquivo usando o docker-compose e então acesse-o.
Exercício 5 :
Agora vamos criar um novo arquivo Compose, para rodarmos uma aplicação React , conforme vimos alguns exemplos do conteúdo:
Inicie uma novo projeto ReactJS utilizando o create-react-app ;
Crie o Dockerfile , conforme vimos na aula passada;
Crie um novo arquivo Compose utilizando a versão 3 ;
Defina um serviço no arquivo para nosso app , para isso utilize a opção build para apontar para o Dockerfile ;
Publique a porta exposta no Dockerfile fazendo bind para a porta 8080 do localhost ;
Exercício 6 :
Para simularmos o processo de desenvolvimento, faça a alteração em alguma parte do código do app react , e então execute o comando para subir o serviço novamente, "rebuildando" a imagem para aplicar as alterações.
Bônus
Exercício 7 :
Crie um arquivo Compose para subir o Wordpress com MySQL :
Utilize a imagem wordpress:latest e mysql:5.7 ;
Faça bind da porta 80 do container do wordpress para 8080 do host ;
Defina as seguintes variáveis para o wordpress :
WORDPRESS_DB_HOST: db:3306
WORDPRESS_DB_USER: wordpress
WORDPRESS_DB_PASSWORD: wordpress
WORDPRESS_DB_NAME: wordpress
Defina as seguintes variáveis para o mysql :
MYSQL_ROOT_PASSWORD: somewordpress
MYSQL_DATABASE: wordpress
MYSQL_USER: wordpress
MYSQL_PASSWORD: wordpress
Defina o volume db_data para o mysql;
Utilize o parâmetro depends_on para criar dependência entre os serviços;
Adicione a política de restart com o valor always aos serviços;
Suba os serviços utilizando docker-compose e abra no terminal para validar o funcionamento.

# Gabarito 3.






