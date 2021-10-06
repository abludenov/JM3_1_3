package com.jm.JM3_1_3.service;

import com.jm.JM3_1_3.entity.Role;

public interface RoleService {
    void addNewRole(Role nameRole);
    Role findByNameRole(String nameRole);
}
