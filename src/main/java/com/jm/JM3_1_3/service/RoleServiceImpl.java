package com.jm.JM3_1_3.service;

import com.jm.JM3_1_3.repository.RoleRepository;
import com.jm.JM3_1_3.entity.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class RoleServiceImpl implements RoleService {

    private final RoleRepository roleRepository;

    @Override
    public void addNewRole(Role role) {
        Role roleByName = roleRepository.findByNameRole(role.getNameRole());
        if(roleByName != null) {
            throw new IllegalStateException("Role have");
        }
        roleRepository.save(role);
    }

    @Override
    public Role findByNameRole(String nameRole) {
        return roleRepository.findByNameRole(nameRole);
    }
}
