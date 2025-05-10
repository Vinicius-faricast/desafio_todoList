package com.example.api_todoList.repository;

import com.example.api_todoList.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, String> {
}
