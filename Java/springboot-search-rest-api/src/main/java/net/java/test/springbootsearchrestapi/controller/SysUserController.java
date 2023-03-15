package net.java.test.springbootsearchrestapi.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.annotation.Resource;
import net.java.test.springbootsearchrestapi.entity.SysUser;
import net.java.test.springbootsearchrestapi.repository.SysUserRepository;
import net.java.test.springbootsearchrestapi.service.SysUserService;

@RestController
@RequestMapping("api/v1/sys_user")
@CrossOrigin(origins="*")
public class SysUserController {
    
    @Resource
    private SysUserService sysUserService;

    private SysUserRepository sysUserRepository;

    public SysUserController(SysUserService sysUserService) {
        this.sysUserService = sysUserService;
    }

    @RequestMapping("/list")
    public ResponseEntity<List<SysUser>> searchSysUsers() {
        
        // void
        // System.out.println(sysUserRepository.findAll());
        // return;

        System.out.println("=================list======");

        // System.out.println(sysUserRepository.findById("admin"));

        return ResponseEntity.ok(sysUserService.searchSysUsers());
    }

    // @PostMapping(value = "/add")
    // public String addUser(SysUser sysUser) {
    //     sysUserRepository.save(sysUser);
    //     System.out.println(sysUser);
    //     return "add success";
    // }

    @PostMapping
    public SysUser creatUser(@RequestBody SysUser sysUser){
        return sysUserService.createSysUser(sysUser);
    }

}
