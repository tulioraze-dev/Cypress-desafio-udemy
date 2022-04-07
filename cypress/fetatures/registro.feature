#lenguage: pt

Funcionalidade: Efetuar Registro
    Como usuário da plataforma
    Quero poder fazer um cadastro
    Para que eu possa fazer uso das funcionalidades da aplicação

Cenário: Registro na plataforma
    Dado que eu acesse a aplicação
    Quando clicar em registrar 
    E preencher o formulario corretamente
    E clicar no botão "Registrar"
    Então devo ver um card "Usuário adicionado com sucesso"

Cenário: Enviado formulário vazio
    Dado que eu acesse a págida de registro
    Quando submeter um formlário vazio
    Então devo ver um card com a mensagem "Erro: Error: Request failed with status code 500"

Cenário: Enviando formulario sem email
    Dado que eu acesse a página de registro
    Quando submeter o formlário sem preencher o campo "Email"
    Então devo ver um card com a mensagem "Erro: Error: Request failed with status code 500"

Cenário: Enviando formulario sem Nome
    Dado que eu aceese a pagina registro
    Quando submeter o formulário sem preencher o campo "Nome"
    Então devo ver a mensagem "Erro: Error: Request failed with status code 500"

Cenário: Enviando formulario sem Senha
    Dado que eu acesse a página de registro
    Quando submeter o formulário sem preencher o campo "Senha"
    Então devo ver a mensagem "Erro: Error: Request failed with status code 500"
