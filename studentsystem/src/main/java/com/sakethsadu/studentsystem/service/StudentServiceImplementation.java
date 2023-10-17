package com.sakethsadu.studentsystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sakethsadu.studentsystem.model.student;
import com.sakethsadu.studentsystem.repository.Studentrepo;

@Service
public class StudentServiceImplementation implements StudentService{

	
	@Autowired
	private Studentrepo studentRepository;
	
	@Override
	public student saveStudent(student Student) {
		// TODO Auto-generated method stub
		return studentRepository.save(Student);
	}
	
	@Override
	public List<student> getAllStudents(){
		return studentRepository.findAll();
		
	}
	
	

}
