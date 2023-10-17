package com.sakethsadu.studentsystem.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sakethsadu.studentsystem.model.student;
import com.sakethsadu.studentsystem.service.StudentService;

@RestController
@RequestMapping("/Student")
@CrossOrigin
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	
	@PostMapping("/add")
	public String add(@RequestBody student Student) {
		studentService.saveStudent(Student);
		return "New Student is added in the records";
		
	}
	
	@GetMapping("getAll")
	public List<student> getAllStudents(){
		return studentService.getAllStudents();
	}
	
	

}
