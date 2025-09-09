package com.identity.service;

import com.identity.dto.request.RoleReq;
import com.identity.dto.response.RoleResponse;

import java.util.List;

public interface IRoleService {
    RoleResponse createRole(RoleReq roleReq);

    void deleteRole(String role);

    RoleResponse getRole(String role);

    List<RoleResponse> getAllRoles();
}
