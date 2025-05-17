package com.example.api_todoList.controller;

import com.example.api_todoList.DTO.RequestTaskDTO;
import com.example.api_todoList.DTO.ResponseTaskDTO;
import com.example.api_todoList.service.TaskService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/todos")
@Tag(name = "Tasks", description = "Endpoints para gerenciamento de tarefas")
public class TaskController {

    private TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }


    @Operation(summary = "Criar uma nova tarefa", description = "Cria uma nova tarefa com os dados fornecidos")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "Tarefa criada com sucesso",
            content = @Content(schema = @Schema(implementation = ResponseTaskDTO.class))),
        @ApiResponse(responseCode = "400", description = "Dados inválidos fornecidos")
    })
    @PostMapping
    public ResponseEntity<ResponseTaskDTO> createTask(
        @Parameter(description = "Dados da nova tarefa") @RequestBody @Valid RequestTaskDTO dto) {
        ResponseTaskDTO taskCreate = service.createTask(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(taskCreate);
    }


    @Operation(summary = "Listar todas as tarefas", description = "Retorna uma lista com todas as tarefas cadastradas")
    @ApiResponse(responseCode = "200", description = "Lista de tarefas recuperada com sucesso")
    @GetMapping
    public ResponseEntity<List<ResponseTaskDTO>> listTask() {
        List<ResponseTaskDTO> Tasks = service.listTask();
        return ResponseEntity.ok(Tasks);
    }

    @Operation(summary = "Buscar tarefa por ID", description = "Retorna uma tarefa específica pelo seu ID")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Tarefa encontrada com sucesso"),
        @ApiResponse(responseCode = "404", description = "Tarefa não encontrada")
    })
    @GetMapping("{id}")
    public ResponseEntity<ResponseTaskDTO> getTaskById(
        @Parameter(description = "ID da tarefa") @PathVariable Long id) {
        try{
            ResponseTaskDTO task = service.taskById(id);
            return ResponseEntity.ok(task);
        }catch (RuntimeException e){
            return ResponseEntity.notFound().build();
        }
    }

    @Operation(summary = "Atualizar tarefa", description = "Atualiza os dados de uma tarefa existente")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "Tarefa atualizada com sucesso"),
        @ApiResponse(responseCode = "404", description = "Tarefa não encontrada"),
        @ApiResponse(responseCode = "400", description = "Dados inválidos fornecidos")
    })
    @PutMapping("{id}")
    public ResponseEntity<ResponseTaskDTO> updateTask(
        @Parameter(description = "ID da tarefa") @PathVariable Long id,
        @Parameter(description = "Novos dados da tarefa") @RequestBody @Valid RequestTaskDTO dto) {
        try{
            ResponseTaskDTO updateTask = service.updateTask(id, dto);
            return ResponseEntity.ok(updateTask);
        }catch (RuntimeException e){
            return ResponseEntity.notFound().build();
        }
    }

    @Operation(summary = "Deletar tarefa", description = "Remove uma tarefa existente")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "204", description = "Tarefa deletada com sucesso"),
        @ApiResponse(responseCode = "404", description = "Tarefa não encontrada")
    })
    @DeleteMapping("{id}")
    public ResponseEntity<Void> deleteTask(
        @Parameter(description = "ID da tarefa") @PathVariable Long id) {
        try {
            service.deleteTask(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e){
            return ResponseEntity.notFound().build();
        }
    }
}
