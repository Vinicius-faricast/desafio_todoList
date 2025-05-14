package com.example.api_todoList.service;

import com.example.api_todoList.DTO.RequestTaskDTO;
import com.example.api_todoList.DTO.ResponseTaskDTO;
import com.example.api_todoList.entity.Task;
import com.example.api_todoList.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TaskService {

private TaskRepository repository;

    public TaskService(TaskRepository repository) {
        this.repository = repository;
    }

    private ResponseTaskDTO toResponseDTO(Task task){
        return new ResponseTaskDTO(
                task.getId(),
                task.getDescription(),
                task.getResponsible()
        );
    }

    public ResponseTaskDTO createTask(RequestTaskDTO dto){
        Task newTask = new Task(dto.description(), dto.responsible());
//        Task createdNewTask = repository.save(newTask);
        repository.save(newTask);
        return toResponseDTO(newTask);
    }

    public List<ResponseTaskDTO> listTask(){
        return repository.findAll()
                .stream()
                .map(this::toResponseDTO)
                .collect(Collectors.toList());
    }

    public ResponseTaskDTO taskById(Long id){
        return repository.findById(id)
                .map(this::toResponseDTO)
                .orElseThrow(() -> new RuntimeException("Tarefa não encontrada"));
    }
}
