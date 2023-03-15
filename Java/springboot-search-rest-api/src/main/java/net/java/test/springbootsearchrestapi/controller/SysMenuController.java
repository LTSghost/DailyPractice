package net.java.test.springbootsearchrestapi.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;
import net.java.test.springbootsearchrestapi.entity.SysMenu;
import net.java.test.springbootsearchrestapi.service.SysMenuService;

@Slf4j
@RestController
@RequestMapping("api/v1/sys_menu")
@CrossOrigin(origins = "*")
public class SysMenuController {
    
    private SysMenuService sysMenuService;

    public SysMenuController(SysMenuService sysMenuService) {
        this.sysMenuService = sysMenuService;
    }

    @RequestMapping
    List<SysMenu> readSysMenu() {
        log.info("===SysMenuController===");
        List<SysMenu> sysMenuList = (List<SysMenu>) sysMenuService.readSysMenu();

        // sysMenuList.remove(0);

        List<Integer> list = new ArrayList<>();

        int i = 0;
        for (SysMenu element : sysMenuList) {
            System.out.println("第" + i + "次");
            
            System.out.println(element.getMENU_NAME());
            if ( "MID01".equals(element.getP_MENU_ID()) ) {
                System.out.println("heyhey I gonna remove: " + i); 
                // sysMenuList.remove(i);
                list.add(i);
            }
            i++;

        }
        System.out.println(list);

        List newSysMenuList = new ArrayList<>();

        int beforeInt = 0;
        for (Integer integer : list) {
            System.out.println("I gonna remove: " +sysMenuList.get(beforeInt).getMENU_NAME()); 
            newSysMenuList.add(sysMenuList.remove(integer.intValue() - beforeInt).getMENU_NAME());
            beforeInt = integer.intValue();
        }

        System.out.println(sysMenuList.size());

        System.out.println("newSysMenuList = " + newSysMenuList);

        return sysMenuList;
    }

}
