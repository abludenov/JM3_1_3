package com.jm.JM3_1_3.service;

import com.jm.JM3_1_3.entity.Role;
import com.jm.JM3_1_3.repository.UserRepository;
import com.jm.JM3_1_3.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements UserService, UserDetailsService {

    private final UserRepository userRepository;
    private final RoleServiceImpl roleService;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findUserByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found " + username);
        }
        return user;
    }

    @Override
    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User findUserByUsername(String username) {
        return userRepository.findUserByUsername(username);
    }

    @Override
    public User findUserById(Long id) {
        return userRepository.findUserById(id);
    }

    @Override
    public void removeUserById(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public void addUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Set<Role> roleSet = new HashSet<>();
        if(user.getRoles() != null) {
            for(Role rl: user.getRoles()) {
                roleSet.add(roleService.findByNameRole(rl.getNameRole()));
            }
        }
        user.setRoles(roleSet);
        userRepository.save(user);
    }

    @Override
    public void updateUser(User user) {
        User userByUsername = userRepository.findUserByUsername(user.getUsername());
        if (user.getPassword().equals("")) {
            user.setPassword(findUserById(user.getId()).getPassword());
        } else {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
        }
        Set<Role> roleSet = new HashSet<>();
        if(user.getRoles() != null) {
            for(Role rl: user.getRoles()) {
                roleSet.add(roleService.findByNameRole(rl.getNameRole()));
            }
        }
        user.setRoles(roleSet);
        userRepository.save(user);
    }

    @Override
    public void addRoleToUser(String username, String nameRole) {
        User user = userRepository.findUserByUsername(username);
        Role role = roleService.findByNameRole(nameRole);
        user.getRoles().add(role);
    }
}
