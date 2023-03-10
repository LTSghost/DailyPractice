package net.java.test.springbootsearchrestapi.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.java.test.springbootsearchrestapi.entity.SysRole;
import net.java.test.springbootsearchrestapi.service.SysRoleService;

@RestController
@RequestMapping("api/v1/sysrole")
public class SysRoleController {
    
    private SysRoleService sysRoleService;

    public SysRoleController(SysRoleService sysRoleService) {
        this.sysRoleService = sysRoleService;
    }

    // @GetMapping("/search")
    // public ResponseEntity<List<SysRole>> searchSysRoles(String query) {
    //     return ResponseEntity.ok(sysRoleService.searchSysRoles(query));
    // }

    @GetMapping("/search")
    public int searchSysRoles() {
        return 200;
    }
}
