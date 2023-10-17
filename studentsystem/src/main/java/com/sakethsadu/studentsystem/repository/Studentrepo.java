package com.sakethsadu.studentsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sakethsadu.studentsystem.model.student;

public interface Studentrepo extends JpaRepository<student, Integer> {

}
