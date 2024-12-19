// Defina a URL da API que você deseja consumir
const url = "https://jsonplaceholder.typicode.com/posts/1";  // Exemplo de API pública

// Realizando a requisição GET
fetch(url)
  .then(response => {
    // Verificar se a requisição foi bem-sucedida
    if (!response.ok) {
      throw new Error('Erro ao acessar a API');
    }
    return response.json();  // Parse da resposta JSON
  })
  .then(data => {
    console.log("Dados recebidos:", data);  // Exibe os dados no console
  })
  .catch(error => {
    console.error('Erro:', error);  // Exibe erros, caso ocorram
  });
