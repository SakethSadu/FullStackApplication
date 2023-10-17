package com.sakethsadu.studentsystem.service;

import java.util.List;

import com.sakethsadu.studentsystem.model.student;

public interface StudentService {
	
	public student saveStudent(student Student) ;

	public List<student> getAllStudents();

}
