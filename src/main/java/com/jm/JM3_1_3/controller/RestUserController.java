package com.jm.JM3_1_3.controller;

import com.jm.JM3_1_3.entity.User;
import com.jm.JM3_1_3.service.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class RestUserController {

    private final UserServiceImpl userService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> GetAllUsers() {
        List<User> users = userService.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> GetOneUser(@PathVariable("id") long id) {
        User user = userService.findUserById(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/users")
    public ResponseEntity<User> addNewUser(@RequestBody User user) {
        userService.addUser(user);
        return ResponseEntity.ok().body(user);
    }

    @PatchMapping("/users")
    public ResponseEntity<?> updateUser(@RequestBody User user) {
        userService.updateUser(user);
        return ResponseEntity.ok().body(HttpStatus.OK);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
        userService.removeUserById(id);
        return ResponseEntity.ok().body(HttpStatus.OK);
    }

    @GetMapping ("/getAuthorizedUserInfo")
    public ResponseEntity<User> getUser(Principal principal) {
        User user = userService.findUserByUsername(principal.getName());
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}