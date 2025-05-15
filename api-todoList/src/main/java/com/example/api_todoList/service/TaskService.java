package com.example.api_todoList.service;

import com.example.api_todoList.DTO.RequestTaskDTO;
import com.example.api_todoList.DTO.ResponseTaskDTO;
import com.example.api_todoList.entity.Task;
import com.example.api_todoList.repository.TaskRepository;
import org.springframework.stereotype.Service;

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

    public ResponseTaskDTO updateTask(long id, RequestTaskDTO dto){
        return repository.findById(id).map(task -> {
            task.setResponsible(dto.responsible());
            task.setDescription(dto.description());
            return toResponseDTO(repository.save(task));
        }).orElseThrow(() -> new RuntimeException("Tarefa não encontrada"));
    }

    public void deleteTask(Long id){
        if(!repository.existsById(id)){
            throw new RuntimeException("Tarefa não encontrada");
        }
        repository.deleteById(id);
    }
}
