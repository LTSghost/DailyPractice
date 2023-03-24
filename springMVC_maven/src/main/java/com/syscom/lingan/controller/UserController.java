package com.syscom.lingan.controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.syscom.lingan.domain.Account;
import com.syscom.lingan.entity.Student;
import lombok.SneakyThrows;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.text.SimpleDateFormat;
import java.util.*;

@RestController
public class UserController {

    @RequestMapping("hello")
    public ModelAndView hello(){
        ModelAndView modelAndView = new ModelAndView();

        modelAndView.setViewName("hello");

        return modelAndView;
    }

    @SneakyThrows
    @RequestMapping("student")
    public Map<String, Object> student(){
        Date date = new Date();
        SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        SimpleDateFormat sf2 = new SimpleDateFormat("yyyy-MM-dd HH:mm");
//        Date temp = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(date.toString());

        System.out.println(date.getTime()+5); // will plus 5 to time

        Student student = new Student(1,"哈哈是我啦!",26,"DKLTSghost@gmail.com",date,date);
        Student student2 = new Student(2,"哭阿",26,"DKLTSghost@gmail.com",date,date);

        ObjectMapper mapper = new ObjectMapper();
        String str = mapper.writeValueAsString(student);

        Map<String,Object> newMap = new HashMap<>();

        newMap.put("id", student.getId());
        newMap.put("name", student.getName());
        newMap.put("age", student.getAge());
        newMap.put("email", student.getAge());
        newMap.put("createTime", sf.format(student.getCreateTime()));
//        newMap.put("createTime2", sf.format(student.getCreateTime().getTime()+5));
        newMap.put("updateTime", sf2.format(student.getUpdateTime()));
        str = mapper.writeValueAsString(newMap);

        String tmpStr = mapper.writeValueAsString(student2);
//        return "[" + str + "," + tmpStr + "]";

        Map<String, Object> map2 = mapper.convertValue(student, Map.class);
        map2.replace("createTime",sf.format(map2.get("createTime")));
        map2.replace("updateTime",sf2.format(map2.get("updateTime")));
        return map2;

//
//        return newMap;

    }

    @SneakyThrows
    @RequestMapping("students")
    public List students(){
        Date date = new Date();
        SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        SimpleDateFormat sf2 = new SimpleDateFormat("yyyy-MM-dd HH:mm");

        Student student = new Student(1,"還敢",26,"DKLTSghost@gmail.com",date,date);
        Student student2 = new Student(2,"下來阿",26,"DKLTSghost@gmail.com",date,date);
        Student student3 = new Student(3,"冰鳥",26,"DKLTSghost@gmail.com",date,date);
        Student student4 = new Student(4,"是不是",26,"DKLTSghost@gmail.com",date,date);
        Student student5 = new Student(5,"在哭阿",26,"DKLTSghost@gmail.com",date,date);

        List<Student> studentList = Arrays.asList(student, student2, student3, student4, student5);
        List mapList = new ArrayList<>();
        for(Student element :studentList){
            ObjectMapper mapper = new ObjectMapper();
            Map<String, Object> newMap = mapper.convertValue(element, Map.class);
            newMap.replace("createTime",sf.format(newMap.get("createTime")));
            newMap.replace("updateTime",sf2.format(newMap.get("updateTime")));
            mapList.add(newMap);
        }

//        ObjectMapper mapper = new ObjectMapper();
//
//        List newList = new ArrayList<>();
//
//        Map<String, Object> newMap = mapper.convertValue(student, Map.class);
//        newMap.replace("createTime",sf.format(newMap.get("createTime")));
//        newMap.replace("updateTime",sf2.format(newMap.get("updateTime")));
//
//        Map<String, Object> newMap2 = mapper.convertValue(student2, Map.class);
//        newMap2.replace("createTime",sf.format(newMap2.get("createTime")));
//        newMap2.replace("updateTime",sf2.format(newMap2.get("updateTime")));
//
//        newList.add(newMap);
//        newList.add(newMap2);

        return mapList;

    }


    @RequestMapping("register")
    public ModelAndView register(Account account) {

        if ("西安凌安".equals(account.getName())) {
            if ("888888".equals(account.getPassword())) {
                System.out.println("歡迎" + account.getName() + "登入成功，您的用戶號碼為" + account.getId());

                // name & password both correct
                return renderRegister("welcome", account.getId(), account.getName(),
                        account.getPassword(),"歡迎，" + account.getName());
            } else {
                System.out.println("對不起，密碼不正確，請重新輸入");

                // password incorrect
                return renderRegister("fail", account.getId(), account.getName(),
                        account.getPassword(),"密碼不正確");
            }
        } else {
            System.out.println("對不起，查無此用戶");

            // name incorrect
            return renderRegister("fail",account.getId(), account.getName(),
                    account.getPassword(),"帳戶不正確");
        }
    }

     ModelAndView renderRegister(String status, String id, String account,
                                String password, String message){
        ModelAndView modelAndView = new ModelAndView();

         modelAndView.addObject("status",status);
         modelAndView.addObject("id",id);
         modelAndView.addObject("account",account);
         modelAndView.addObject("password",password);
         modelAndView.addObject("message",message);
         modelAndView.setViewName("resRegister");

        return modelAndView;
    }
}
