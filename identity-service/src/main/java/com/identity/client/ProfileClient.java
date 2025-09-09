package com.identity.client;

import com.identity.dto.request.ProfileReq;
import com.identity.dto.response.ProfileResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;

@FeignClient(name = "profile-service", url = "${application.service.profile}")
public interface ProfileClient {
    @PostMapping(value = "/users", produces = MediaType.APPLICATION_JSON_VALUE)
    ProfileResponse createProfile(ProfileReq profileReq);
}
