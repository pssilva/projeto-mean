# Projeto MEAN (MongoDB, Express, AngularJS e NodeJS)
Projeto conceito para implementar uma aplicação Web usando o Framework MEAN que utiliza as tecnologias: MongoDB, Express, AngularJS e NodeJS.

## Objetivos Principais [Conceitos](http://stackoverflow.com/questions/28608015/continuous-integration-vs-continuous-delivery-vs-continuous-deployment):
- Criar uma sistema usando as tecnologias: MongoDB, Express, AngularJS, and Node.js;
- Usar um ambiente Plataform as a Service - PaaS;
- [Jenkins](https://jenkins.io/) - Integração Contínua; 
- Projetar Sistemas usando Arquiterura Microservices;
- Implantação Contínua (Continuous Deployment);

Para construir a imagem usei as orientações discutidas em [Oskar Hane: 2015].

### Adquirir Proficiências em Habilidades


1. Experiência em sistemas de banco de dados NoSQL (Cassandra, [MongoDB](https://www.mongodb.com/), etc.);
	<p><img src="https://github.com/pssilva/projeto-mean/blob/master/doc-repo/mongoDB.png" alt="Experiência em sistemas de banco de dados NoSQL" height="50" width="195"/></p>
2. Experiência em sistemas usando tecnologia não bloqueante [Node.js](https://nodejs.org/en/);
	<p><img src="https://github.com/pssilva/projeto-mean/blob/master/doc-repo/nodeJS.png" alt="Node.js" height="50" width="195"></p>
3. Experiência em sistemas usando [Express](http://expressjs.com/pt-br/);
	<p><img src="https://github.com/pssilva/projeto-mean/blob/master/doc-repo/expressjs.png" alt="Experiência em sistemas usando ExpressJs" height="50" width="195"></p>
4. Experiência em sistemas usando [AngularJS](https://angularjs.org/);
	<p><img src="https://angularjs.org/img/AngularJS-large.png" alt="Experiência em sistemas usando AngularJs" height="50" width="195"></p>
5. Experiência em sistemas de containerização (e.g. [Docker](https://hub.docker.com/r/pss1suporte/paas-docker/));
	<p><img src="https://github.com/pssilva/projeto-mean/blob/master/doc-repo/docker.png" alt="Experiência em sistemas de containerização Docker" height="50" width="195"></p>
6. Experiência em sistemas Linux e shell scripting;
	<p><img src="https://github.com/pssilva/projeto-mean/blob/master/doc-repo/shell-linux.jpeg" alt="Experiência em sistemas Linux e shell scripting" height="50" width="195"></p>
7. Experiência em sistemas Amazon Web Services - AWS;
	<p><img src="https://github.com/pssilva/projeto-mean/blob/master/doc-repo/aws.png" alt="Experiência em sistemas Amazon Web Services - AWS" height="50" width="195"></p>
8. Experiência em projetos utilizando micro serviços (Microservices) e computação distribuída;

### Como usar:
Considerando que temos uma instância do Amazon Machine Image - AMI iniciada: [aqui](https://docs.aws.amazon.com/pt_br/AWSEC2/latest/UserGuide/AccessingInstances.html) AWS EC2. Execute os comandos abaixo:

- 1. Clonar o projeto: `git clone https://github.com/pssilva/projeto-mean.git`;
- 2. Acessar a pasta: `cd projeto-mean`;
- 3. Instalar as dependencias: `mpn install`;
- 3. Instalar as dependencias: `bower install`;
- 4. Start Server: `node server`;
- 5. Acessar o sistema: `localhost:3000?name=SeuPrimeiroNome`;

NOTA: MEAN CRUD - para criar um CRUD automaticamente use o comando: <br />
`gradle -q createMeanCRUD -PmodelName=articles -PfeatureName=example`

### Estrutura das Pastas do Projeto
Aqui assumimos a estrutura das pastas Vertical. Você pode gerar automaricamente com o comando: <br /> `$gradle -q createStrutucreFolders --stacktrace -PtypeStructure='v' -PfeatureName='featureName1'` <br /> que vai gerar uma estrutura conforme figura abaixo:

<p><img src="https://github.com/pssilva/projeto-mean/blob/master/doc-repo/vertical-structure-folder.png"></p>

Onde entendemos que a pasta feature representa a separação literal das funcionalidades. Exemplo, pretendo organizar authentication e authorization com o [OAuth2.0](https://oauth.net/2/) separadamente como um plugin usando a estrutura da pasta feature. 

### Referência
- Valeri Karpov, Diego Netto: 2015, John Wiley & Sons, Inc., [Professional AngularJS](http://www.allitebooks.com/professional-angularjs/)
- Amos Q. Haviv: 2014, Packt Publishing, [MEAN Web Development](http://it-ebooks.info/book/4849/): <br />
	Master real-time web application development using a mean combination of MongoDB, Express, AngularJS, and Node.js.
- Sébastien Goasguen: 2016, O’Reilly Media, Inc., [Docker Cookbook](http://www.allitebooks.com/docker-cookbook/): <br />
	SOLUTIONS AND EXAMPLES FOR BUILDING DISTRIBUTED APPLICATIONS.
- Alan Mark Berg: 2015,  Packt Publishing, [Jenkins Continuous Integration Cookbook](https://ebooks-it.org/1784390089-ebook.htm), Second Edition
- Alan Mark Berg: 2015 - 5,  __ Chapter 5: Kubernetes, pag 149.
- Christian Posta: 2016, O’Reilly Media, Inc., [Microservices for Java Developers](https://developers.redhat.com/promotions/microservices-for-java-developers/): <br />
	A Hands-on Introduction to Frameworks and Containers
- Markus Eisele: 2016, O’Reilly Media, Inc., [Modern Java EE Design Patterns](https://developers.redhat.com/promotions/distributed-javaee-architecture/): <br /> 
	Building Scalable Architecture for Sustainable Enterprise Development. 
