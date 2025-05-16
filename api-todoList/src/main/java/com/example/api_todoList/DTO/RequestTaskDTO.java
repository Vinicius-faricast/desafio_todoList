package com.example.api_todoList.DTO;

import jakarta.validation.constraints.NotBlank;

public record RequestTaskDTO(
        @NotBlank(message = "Description cannot be empty")
        String description,
        @NotBlank(message = "Responsible cannot be empty")
        String responsible
) {
}
