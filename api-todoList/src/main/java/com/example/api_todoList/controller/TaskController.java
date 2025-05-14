package com.example.api_todoList.controller;

import com.example.api_todoList.DTO.RequestTaskDTO;
import com.example.api_todoList.DTO.ResponseTaskDTO;
import com.example.api_todoList.service.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping
    public ResponseEntity<List<ResponseTaskDTO>> listTask(){
        List<ResponseTaskDTO> Tasks = service.listTask();
        return ResponseEntity.ok(Tasks);
    }

    @GetMapping("{id}")
    public ResponseEntity<ResponseTaskDTO> getTaskById(@PathVariable Long id){
        try{
            ResponseTaskDTO task = service.taskById(id);
            return ResponseEntity.ok(task);
        }catch (RuntimeException e){
            return ResponseEntity.notFound().build();
        }
    }
}
