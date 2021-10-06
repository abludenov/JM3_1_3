package com.jm.JM3_1_3.repository;

import com.jm.JM3_1_3.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByNameRole(String nameRole);
}
