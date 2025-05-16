package com.example.api_todoList;

import com.example.api_todoList.DTO.RequestTaskDTO;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.reactive.server.WebTestClient;

// Configura o teste para iniciar um servidor em uma porta aleatória
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ApiTodoListApplicationTests {

    // Injeta o cliente de teste que será usado para fazer requisições HTTP
    @Autowired
    private WebTestClient webTestClient;

    // Método executado antes de cada teste
    @BeforeEach
    void setUp() {
        // Cria duas tasks para serem usadas nos testes
        var task1 = new RequestTaskDTO("Tarefa 1", "Usuario 1");
        var task2 = new RequestTaskDTO("Tarefa 2", "Usuario 2");

        // Cria a primeira task via API
        webTestClient
                .post()                                  // Método HTTP POST
                .uri("/api/todos")                       // URL da API
                .contentType(MediaType.APPLICATION_JSON)  // Tipo do conteúdo enviado
                .bodyValue(task1)                        // Dados da task
                .exchange();                             // Executa a requisição

        // Cria a segunda task via API
        webTestClient
                .post()
                .uri("/api/todos")
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(task2)
                .exchange();
    }

    // Teste para verificar a criação de task com sucesso
    @Test
    void testCreateTaskSuccess() {
        // Cria uma nova task para o teste
        var taskRequest = new RequestTaskDTO("tarefa teste", "usuario");

        webTestClient
                .post()                                  // Método HTTP POST
                .uri("/api/todos")                       // URL da API
                .contentType(MediaType.APPLICATION_JSON)  // Tipo do conteúdo
                .bodyValue(taskRequest)                  // Dados da task
                .exchange()                              // Executa a requisição
                .expectStatus().isCreated()              // Verifica se retornou 201 (Created)
                .expectBody()                            // Verifica o corpo da resposta
                .jsonPath("$.description").isEqualTo(taskRequest.description())  // Verifica se a descrição está correta
                .jsonPath("$.responsible").isEqualTo(taskRequest.responsible()); // Verifica se o responsável está correto
    }

    // Teste para verificar a falha na criação de task com dados inválidos
    @Test
    void testCreateTaskFailure() {
        // Cria uma task inválida (campos vazios)
        var invalidTask = new RequestTaskDTO("", "");

        webTestClient
                .post()                                  // Método HTTP POST
                .uri("/api/todos")                       // URL da API
                .contentType(MediaType.APPLICATION_JSON)  // Tipo do conteúdo
                .bodyValue(invalidTask)                  // Dados inválidos
                .exchange()                              // Executa a requisição
                .expectStatus().isBadRequest();          // Verifica se retornou 400 (Bad Request)
    }

    // Teste para verificar a listagem de tasks com sucesso
    @Test
    void testListTasksSuccess() {
        webTestClient
                .get()                                   // Método HTTP GET
                .uri("/api/todos")                       // URL da API
                .exchange()                              // Executa a requisição
                .expectStatus().isOk()                   // Verifica se retornou 200 (OK)
                .expectBody()                            // Verifica o corpo da resposta
                .jsonPath("$").isArray()                 // Verifica se é um array
                .jsonPath("$.length()").isEqualTo(2)     // Verifica se tem 2 items (criados no setUp)
                .jsonPath("$[0].description").exists()   // Verifica se primeira task tem descrição
                .jsonPath("$[0].responsible").exists()   // Verifica se primeira task tem responsável
                .jsonPath("$[1].description").exists()   // Verifica se segunda task tem descrição
                .jsonPath("$[1].responsible").exists();  // Verifica se segunda task tem responsável
    }

    // Teste para verificar a listagem de tasks quando está vazia
    @Test
    void testListTasksEmpty() {
        // Primeiro, busca todas as tasks existentes
        webTestClient
                .get()                                   // Método HTTP GET
                .uri("/api/todos")                       // URL da API
                .exchange()                              // Executa a requisição
                .expectBody()                            // Verifica o corpo
                .jsonPath("$[*].id")                    // Pega todos os IDs das tasks
                .value(ids -> {                          // Para cada ID encontrado
                    if (ids != null) {
                        ((java.util.List<?>) ids).forEach(id -> {
                            webTestClient                 // Deleta a task
                                    .delete()             // Método HTTP DELETE
                                    .uri("/api/todos/" + id)  // URL com ID da task
                                    .exchange()           // Executa a requisição
                                    .expectStatus().isNoContent(); // Verifica se retornou 204 (No Content)
                        });
                    }
                });

        // Depois de deletar todas as tasks, verifica se a lista está vazia
        webTestClient
                .get()                                   // Método HTTP GET
                .uri("/api/todos")                       // URL da API
                .exchange()                              // Executa a requisição
                .expectStatus().isOk()                   // Verifica se retornou 200 (OK)
                .expectBody()                            // Verifica o corpo
                .jsonPath("$").isArray()                 // Verifica se é um array
                .jsonPath("$.length()").isEqualTo(0);    // Verifica se está vazio
    }

    // Teste para verificar a atualização de task com sucesso
    @Test
    void testUpdateTaskSuccess() {
        // Primeiro, criamos uma task para depois atualizar
        var taskRequest = new RequestTaskDTO("Task Original", "Usuario Original");
        
        // Cria a task e extrai o ID da resposta
        Integer[] taskId = new Integer[1];
        webTestClient
                .post()                                  // Método HTTP POST
                .uri("/api/todos")                       // URL da API
                .contentType(MediaType.APPLICATION_JSON)  // Tipo do conteúdo
                .bodyValue(taskRequest)                  // Dados da task
                .exchange()                              // Executa a requisição
                .expectStatus().isCreated()              // Verifica se criou com sucesso
                .expectBody()
                .jsonPath("$.id").value(id -> taskId[0] = ((Integer) id)); // Extrai o valor do ID

        // Cria os novos dados para atualização
        var updateRequest = new RequestTaskDTO("Task Atualizada", "Usuario Atualizado");

        // Atualiza a task
        webTestClient
                .put()                                   // Método HTTP PUT
                .uri("/api/todos/" + taskId[0])              // URL com ID da task
                .contentType(MediaType.APPLICATION_JSON)  // Tipo do conteúdo
                .bodyValue(updateRequest)                // Novos dados
                .exchange()                              // Executa a requisição
                .expectStatus().isOk()                   // Verifica se retornou 200 (OK)
                .expectBody()
                .jsonPath("$.description").isEqualTo(updateRequest.description())  // Verifica se a descrição foi atualizada
                .jsonPath("$.responsible").isEqualTo(updateRequest.responsible()); // Verifica se o responsável foi atualizado
    }

    // Teste para verificar a falha ao tentar atualizar uma task que não existe
    @Test
    void testUpdateTaskNotFound() {
        var updateRequest = new RequestTaskDTO("Task Atualizada", "Usuario Atualizado");
        
        webTestClient
                .put()                                   // Método HTTP PUT
                .uri("/api/todos/999")                   // ID inexistente
                .contentType(MediaType.APPLICATION_JSON)  // Tipo do conteúdo
                .bodyValue(updateRequest)                // Dados da atualização
                .exchange()                              // Executa a requisição
                .expectStatus().isNotFound();            // Verifica se retornou 404 (Not Found)
    }

    // Teste para verificar a falha ao tentar atualizar com dados inválidos
    @Test
    void testUpdateTaskInvalidData() {
        // Primeiro, criamos uma task para depois tentar atualizar
        var taskRequest = new RequestTaskDTO("Task Original", "Usuario Original");
        
        // Cria a task e extrai o ID da resposta
        Integer[] taskId = new Integer[1];
        webTestClient
                .post()
                .uri("/api/todos")
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(taskRequest)
                .exchange()
                .expectStatus().isCreated()
                .expectBody()
                .jsonPath("$.id").value(id -> taskId[0] = ((Integer) id));

        // Tenta atualizar com dados inválidos (campos vazios)
        var invalidUpdate = new RequestTaskDTO("", "");

        webTestClient
                .put()                                   // Método HTTP PUT
                .uri("/api/todos/" + taskId[0])              // URL com ID da task
                .contentType(MediaType.APPLICATION_JSON)  // Tipo do conteúdo
                .bodyValue(invalidUpdate)                // Dados inválidos
                .exchange()                              // Executa a requisição
                .expectStatus().isBadRequest();          // Verifica se retornou 400 (Bad Request)
    }
}
