package com.identity.repo;

import com.identity.entity.Role;
import com.identity.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepo extends JpaRepository<Role, String> {
}
