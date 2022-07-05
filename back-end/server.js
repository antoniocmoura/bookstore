const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var corsOptions = {
    orgim: '/',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(44382, () => {
    console.log('Server started on port 44382...');
});

app.route('/api/books').get((request, response) => {
    response.send(BOOKS);
});


app.route('/api/books/:id').get((request, response) => {
    const bookId = +request.params['id'];
    response.status(200).send(BOOKS.find(bookIterator => bookIterator.id === bookId));
});

const BOOKS = [
    {
        id: 1,
        title: 'A psicologia das cores',
        subtitle: 'Como as cores afetam a emoção e a razão',
        author: 'Eva Heller',
        description: 'Este livro aborda a relação das cores com os nossos sentimentos e mostra como as duas coisas não se combinam por acaso, já que as relações entre ambas não são apenas questões de gosto, mas sim experiências universais profundamente enraizadas na nossa linguagem e no nosso pensamento. Organizada em treze capítulos, correspondentes a treze cores diferentes, a obra oferece um rico painel de informações sobre as cores: de ditados e saberes populares até sua utilização na área de design de produto, os diversos testes baseados em cores, as terapias cromáticas, a manipulação de pessoas, os nomes e sobrenomes relacionados com as cores etc. A diversidade desta abordagem faz do trabalho de Eva Heller uma ferramenta indispensável para todos os que trabalham com cores: artistas, terapeutas, designers gráficos e industriais, decoradores, arquitetos, designers de moda, publicitários, entre outros.',
        price: 169.00,
        quantity: 10,
        category: 'Desenvolvimento web',
        imageUrl: '/assets/images/book1.jpg',
    },
    {
        id: 2,
        title: 'Angular 11 e Firebase',
        subtitle: 'Construindo uma aplicação integrada com a plataforma do Google',
        author: 'Kheronn Khennedy Machado',
        description: 'Neste livro, Kheronn Machado apresenta as principais características do Angular 11, através da implementação prática de uma aplicação. Você vai explorar tópicos como componentes, serviços, roteamentos e validação de formulários, dentro dos requisitos do projeto. Por fim, o autor mostra como integrar a aplicação ao Firebase, do Google, utilizando diversos recursos como banco de dados, autenticação, armazenamento de arquivos, execução de funções no lado do servidor e hospedagem do sistema.',
        price: 49.90,
        quantity: 15,
        category: 'Desenvolvimento web',
        imageUrl: '/assets/images/book2.jpg',
    },
    {
        id: 3,
        title: 'Programação web com Node e Express',
        subtitle: 'Beneficiando-se da Stack JavaScript',
        author: 'Ethan Brown',
        description: 'Construa aplicações web dinâmicas com o Express, um componente-chave da stack de desenvolvimento Node/JavaScript. Nesta edição atualizada, o autor Ethan Brown ensina os fundamentos do Express 5 percorrendo o desenvolvimento de uma aplicação. Este guia prático aborda de tudo, da renderização no lado do servidor ao desenvolvimento de uma API adequada para uso em aplicativos de página única (SPAs).',
        price: 99.00,
        quantity: 5,
        category: 'Desenvolvimento web',
        imageUrl: '/assets/images/book3.jpg',
    },
    {
        id: 4,
        title: 'Introdução ao Desenvolvimento Moderno Para a Web',
        subtitle: 'Do Front-End ao Back-End. Uma Visão Global',
        author: 'Ricardo Queirós',
        description: 'Este livro foca o desenvolvimento moderno de aplicações Web, sendo apresentados os princípios básicos associados à programação para a Web, divididos em duas partes: front-end e back-end. Na parte do front-end, são introduzidos os conceitos de estruturação, estilização e interação, através das suas principais linguagens HTML, CSS e JavaScript. Na parte do back-end, é feita uma introdução aos servidores Web e respetivas linguagem (Node.js) e framework (Express), às bases de dados (SQL) e aos serviços na Web (REST).',
        price: 190.80,
        quantity: 5,
        category: 'Desenvolvimento web',
        imageUrl: '/assets/images/book4.jpg',
    },
    {
        id: 5,
        title: 'Código limpo',
        subtitle: 'Habilidades práticas do Agile Software',
        author: 'Ethan Brown',
        description: 'Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento. Perdem-se a cada ano horas incontáveis e recursos importantes devido a um código mal escrito. Mas não precisa ser assim.O renomado especialista em software, Robert C. Martin, apresenta um paradigma revolucionário com Código limpo: Habilidades Práticas do Agile Software. Martin se reuniu com seus colegas do Mentor Object para destilar suas melhores e mais ágeis práticas de limpar códigos “dinamicamente” em um livro que introduzirá gradualmente dentro de você os valores da habilidade de um profissional de softwares e lhe tornar um programador melhor –mas só se você praticar.',
        price: 71.99,
        quantity: 5,
        category: 'Desenvolvimento web',
        imageUrl: '/assets/images/book5.jpg',
    },
    {
        id: 6,
        title: 'JavaScript',
        subtitle: 'O Guia Definitivo',
        author: 'David Flanagan',
        description: 'Referência completa para programadores, JavaScript: O guia definitivo fornece uma ampla descrição da linguagem JavaScript básica e das APIs JavaScript do lado do cliente definidas pelos navegadores Web. Em sua 6ª edição, cuidadosamente reescrita para estar de acordo com as melhores práticas de desenvolvimento Web atuais, abrange ECMAScript 5 e HTML5 e traz novos capítulos que documentam jQuery e JavaScript do lado do servidor. Recomendado para programadores experientes que desejam aprender a linguagem de programação da Web e para programadores JavaScript que desejam ampliar seus conhecimentos e dominar a linguagem, este é o guia do programador e manual de referência de JavaScript completo e definitivo.',
        price: 121.60,
        quantity: 25,
        category: 'Desenvolvimento web',
        imageUrl: '/assets/images/book6.jpg',
    },
    {
        id: 7,
        title: 'Aprendendo SQL',
        subtitle: 'Dominando os Fundamentos de SQL',
        author: 'Alan Beaulieu',
        description: 'Conhecimento em SQL é obrigatório para quem interage com dados. Com Aprendendo SQL, você aprenderá rapidamente como colocar todo o poder e flexibilidade dessa linguagem a seu serviço.',
        price: 61.11,
        quantity: 3,
        category: 'Banco de dados',
        imageUrl: '/assets/images/book7.jpg',
    },
    {
        id: 8,
        title: 'PostgreSQL',
        subtitle: 'Guia do Programador',
        author: 'André Milani',
        description: 'Este livro traz ao leitor todos os passos necessários para conhecer e utilizar esta ferramenta da melhor maneira possível, partindo do básico, para quem não teve ainda nenhum contato com o PostgreSQL, até o nível avançado, servindo como um guia de referência para administradores, por meio de explicações claras e objetivas, complementadas com exemplos práticos para cada situação de uso.',
        price: 37.80,
        quantity: 12,
        category: 'Banco de dados',
        imageUrl: '/assets/images/book8.jpg',
    },
    {
        id: 9,
        title: 'MongoDB',
        subtitle: 'Construa novas aplicações com novas tecnologias',
        author: 'Fernando Boaglio',
        description: 'Nesse livro, Fernando Boaglio vai ensiná-lo como trabalhar com o MongoDB, principal banco de dados orientado a documentos do mercado. Com ele é possível desenvolver aplicações que atingem alta escalabilidade e de forma tão simples quanto trabalhar com os tradicionais banco de dados relacionais.',
        price: 59.90,
        quantity: 12,
        category: 'Banco de dados',
        imageUrl: '/assets/images/book9.jpg',
    },
    {
        id: 10,
        title: 'Manual de DevOps',
        subtitle: 'Como obter agilidade, confiabilidade e segurança em organizações tecnológicas',
        author: 'Gene Kim',
        description: 'No Manual de Devops você verá que as organizações que adotam os princípios e práticas Lean melhoram significativamente a produtividade da fábrica, os tempos de execução para o cliente, a qualidade do produto e a satisfação do cliente, permitindo que vençam no mercado.Entenda melhor o potencial da revolução DevOps e como as organizações de alto desempenho ampliam as chances de exceder metas de lucratividade, participação de mercado e produtividade.',
        price: 75.20,
        quantity: 18,
        category: 'DevOps',
        imageUrl: '/assets/images/book10.jpg',
    },
]