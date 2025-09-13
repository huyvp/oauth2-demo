package com.identity.service;

import com.identity.dto.request.PermissionReq;
import com.identity.dto.response.PermissionResponse;

import java.util.List;

public interface IPermissionService {
    PermissionResponse createPermission(PermissionReq permissionReq);

    void deletePermission(String permission);

    PermissionResponse getPermission(String permission);

    List<PermissionResponse> getAllPermission();
}
