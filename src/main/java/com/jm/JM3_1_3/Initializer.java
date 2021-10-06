package com.jm.JM3_1_3;

import com.jm.JM3_1_3.entity.Role;
import com.jm.JM3_1_3.entity.User;
import com.jm.JM3_1_3.service.RoleService;
import com.jm.JM3_1_3.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.HashSet;

@Component
@RequiredArgsConstructor
public class Initializer {
    private final UserService userService;
    private final RoleService roleService;

    @PostConstruct
    private void postConstruct() {
        roleService.addNewRole(new Role(null,"ROLE_ADMIN"));
        roleService.addNewRole(new Role(null, "ROLE_USER"));

        userService.addUser(new User(null, "adminName", "adminSurname", 0, "adminEmail", "admin", "admin", new HashSet<>()));
        userService.addUser(new User(null, "user1Name", "user1Surname", 1, "user1Email", "user1", "user1", new HashSet<>()));

        userService.addRoleToUser("admin", "ROLE_ADMIN");
        userService.addRoleToUser("admin", "ROLE_USER");
        userService.addRoleToUser("user1", "ROLE_USER");
    }
}
