---
layout: post
title:  "Primeira Semana usando Jekyll"
date:   2015-12-18 09:00:00 -0200
categories: analise
description: Em novembro fui apresentado ao mundo dos blogs estáticos por um colega de trabalho. A idéia é bem simples, um framework que consiga organizar seu site e blog com uma estrutura de cms usando apenas HTML e JavaScript. Será que vou abandonar o Wordpress?
---

Em novembro fui apresentado ao mundo dos blogs estáticos por um colega de trabalho. A idéia é bem simples, um framework que consiga organizar seu site e blog com uma estrutura de cms usando apenas HTML e JavaScript.<br />
Nada de banco de dados.<br />
Mas qual é o problema dos bancos de dados? Pra mim, sempre foi a lentidão de acesso de dados, e a dependência do conteúdo dentro de um banco e não diretamente no HTML. Pra mim que não sou programador back-end a idéia de um framework que me dê maior controle sobre o código e transforme tudo em simples arquivos .html bem organizados no final é ótima.<br />
Minha primeira escolha foi testar o Jekyll.<br />
Comunicação direta com o GitHub já foi um diferencial. Depois de um tempo fiquei sabendo que o Jekyll tem concorrentes "fortes" e mais pra frente vou trazer no blog o que acho deles.
Mas, independente de qual seja a melhor solução, decidi fazer o blog usando JeKyll e hospedando no GitHub.

Agora segue as minhas considerações:


###Instalação Fácil
Pra rodar o JeKyll eu usei o Ruby e o Sublime. A instalação é simples e intuitiva (a [documentação oficial](http://jekyllrb.com/docs/quickstart/) foi muito útil até o momento).
Eu já tinha meu repositório no GitHub devidamente instalado na máquina. [Veja como criar uma página no Git](https://pages.github.com/). No Sublime abri o projeto e comecei a mexer, sem dificuldades.


###Criação da Estrutura
Optei por desenvolver meu projeto do zero pra ter uma noção total de como funcionam as coisas e a curva de aprendizado foi agradável. Pra quem veio dos temas do Wordpress, foi fácil achar minhas "partial views" dentro da pasta '_includes'. Cabeçalhos e rodapés estavam lá aguardando meus comandos e a exibição deles no *tema* propriamente dito é bem simples. Basta um `include head.html` para inserir seu head no tema. Os templates ficam na página _layouts. E tudo que é transformado em HTML real vai pra pasta _site que é o site propriamente dito.
Entendo isso, passei a me concentrar na estrutura de HTML e CSS como é normal em qualquer projeto.


###Primeiras Firulas
A primeira interação com a estrutura do projeto foi fácil de implementar. Logo que comecei a me concentrar no conteúdo (2° dia de desenvolvimento) senti a necessidade de ter rascunhos de posts. A necessidade foi suprida [por esta documentação](http://jekyllrb.com/docs/drafts/). Simples assim, um diretório _draft e está tudo em casa.

O problema é que acostumado com Wordpress, resolvi transformar a minha sidebar em um sistema de Widgets que fosse customizado a nível de template e post. Não achei tutorial ou plugin que pudesse me auxiliar então acabei decidindo por criar templates personalizados. Mas se a minha necessidade de personalizar o sidebar aumentar muito terei que rever como fazer isso de uma maneira tão prática quanto eu tenho no Wordpress.

###Conclusão
