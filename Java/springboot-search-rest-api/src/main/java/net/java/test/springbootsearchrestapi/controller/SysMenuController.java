package net.java.test.springbootsearchrestapi.controller;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;
import net.java.test.springbootsearchrestapi.entity.SysMenu;
import net.java.test.springbootsearchrestapi.service.SysMenuService;

@Slf4j   // log
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

        // List<Integer> list = new ArrayList<>();
        List<SysMenu> list = new ArrayList<>();

        int i = 0;
        for (SysMenu element : sysMenuList) {
            System.out.println("第" + i + "次");
            
            System.out.println(element.getMENU_NAME());
            if ( "MID01".equals(element.getP_MENU_ID()) ) {
                System.out.println("heyhey I gonna remove: " + i); 
                // sysMenuList.remove(i);
                // list.add(i);
                list.add(element);
            }
            if ( "MID02".equals(element.getP_MENU_ID()) ) {
                System.out.println("heyhey I gonna remove: " + i); 
                // sysMenuList.remove(i);
                // list.add(i);
                list.add(element);
            }
            if ( "MID03".equals(element.getP_MENU_ID()) ) {
                System.out.println("heyhey I gonna remove: " + i); 
                // sysMenuList.remove(i);
                // list.add(i);
                list.add(element);
            }
            if ( "MID04".equals(element.getP_MENU_ID()) ) {
                System.out.println("heyhey I gonna remove: " + i); 
                // sysMenuList.remove(i);
                // list.add(i);
                list.add(element);
            }
            i++;

        }
        System.out.println(list);

        List newSysMenuList = new ArrayList<>();

        // int tmp, tmp2;
        // tmp = list.get(0);
        // for (int j = 1; j < list.size(); j++) {
        //     tmp2 = list.get(j);
        //     list.set(j, list.get(j) - tmp);
        //     tmp = tmp2;
        // }
        System.out.println("list = "+ list);

        int beforeInt = 0;
        // for (Integer integer : list) {
        //     System.out.println("I gonna remove: " + sysMenuList.get(integer.intValue() - beforeInt).getMENU_NAME()); 
        //     newSysMenuList.add(sysMenuList.remove(integer.intValue() - beforeInt).getMENU_NAME());
        //     // newSysMenuList.add(sysMenuList.remove(integer.intValue() - beforeInt));
        //     beforeInt = integer.intValue();
        // }

        // for (Integer integer : list) {
        //     System.out.println("I gonna remove: " + sysMenuList.get(integer.intValue() - beforeInt).getMENU_NAME()); 
        //     newSysMenuList.add(sysMenuList.remove(integer.intValue()).getMENU_NAME());
        //     // newSysMenuList.add(sysMenuList.remove(integer.intValue() - beforeInt));
        // }

        sysMenuList.removeAll(list);

        System.out.println(sysMenuList.size());

        System.out.println("newSysMenuList = " + newSysMenuList);

        return sysMenuList;
    }

    // @RequestMapping
    // List readSysMenu() {
    //     log.info("===SysMenuController===");
    //     List<SysMenu> sysMenuList = (List<SysMenu>) sysMenuService.readSysMenu();

    //     // sysMenuList.remove(0);

    //     List<Integer> list = new ArrayList<>();

    //     int i = 0;
    //     for (SysMenu element : sysMenuList) {
    //         System.out.println("第" + i + "次");
            
    //         System.out.println(element.getMENU_NAME());
    //         if ( "MID01".equals(element.getP_MENU_ID()) ) {
    //             System.out.println("heyhey I gonna remove: " + i); 
    //             // sysMenuList.remove(i);
    //             list.add(i);
    //         }
    //         i++;

    //     }
    //     System.out.println(list);

    //     List newSysMenuList = new ArrayList<>();

    //     int beforeInt = 0;
    //     for (Integer integer : list) {
    //         System.out.println("I gonna remove: " +sysMenuList.get(beforeInt).getMENU_NAME()); 
    //         // newSysMenuList.add(sysMenuList.remove(integer.intValue() - beforeInt).getMENU_NAME());
    //         newSysMenuList.add(sysMenuList.remove(integer.intValue() - beforeInt));
    //         beforeInt = integer.intValue();
    //     }

    //     System.out.println(sysMenuList.size());

    //     System.out.println("newSysMenuList = " + newSysMenuList);

    //     System.out.println(sysMenuList.get(0));

    //     // Convert data to a JsonArray
    //     JsonArray jsonArray = new JsonArray();

    //     for (SysMenu sm : sysMenuList) {
    //         JsonObject jsonObject = new JsonObject();
    //         jsonObject.addProperty("MENU_NAME",sm.getMENU_NAME());
    //         jsonObject.addProperty("MENU_ID", sm.getMENU_ID());

    //         if (sm.getP_MENU_ID() == null) {
    //             jsonObject.addProperty("P_MENU_ID", "");
    //         } else {
    //             jsonObject.addProperty("P_MENU_ID", sm.getP_MENU_ID());
    //         }

    //         jsonArray.add(jsonObject);
    //     }
    //     System.out.println(jsonArray);

    //     //Creating an empty ArrayList of type Object  
    //     ArrayList<Object> listdata = new ArrayList<>();  
    
    //     //Checking whether the JSON array has some value or not  
    //     if (jsonArray != null) {   
                
    //         //Iterating JSON array  
    //         for (i=0;i<jsonArray.size();i++){   
                    
    //             //Adding each element of JSON array into ArrayList  
    //             listdata.add(jsonArray.get(i));  
    //         }   
    //     }  

    //     System.out.println(listdata);

    //     return listdata;
    // }

}
