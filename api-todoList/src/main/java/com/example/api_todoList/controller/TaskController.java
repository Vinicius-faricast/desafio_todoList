package com.example.api_todoList.controller;

import com.example.api_todoList.DTO.RequestTaskDTO;
import com.example.api_todoList.DTO.ResponseTaskDTO;
import com.example.api_todoList.service.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("api/todos")
public class TaskController {

    private TaskService service;

    public TaskController(TaskService service) {
        this.service = service;
    }


    @PostMapping
    public ResponseEntity<ResponseTaskDTO> createTask(@RequestBody RequestTaskDTO dto){
        ResponseTaskDTO taskCreate = service.createTask(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(taskCreate);
    }
}
