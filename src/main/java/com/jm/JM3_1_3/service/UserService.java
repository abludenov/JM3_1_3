package com.jm.JM3_1_3.service;

import com.jm.JM3_1_3.entity.User;

import java.util.List;

public interface UserService {
    List<User> findAllUsers();
    User findUserByUsername(String username);
    User findUserById(Long id);
    void removeUserById(Long id);
    void addUser(User user);
    void updateUser(User user);
    void addRoleToUser(String username, String nameRole);







}
