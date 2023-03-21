package com.syscom.lingan.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
@Controller
public class PrintHello{
    @RequestMapping("hello")
    protected ModelAndView hello(){
        System.out.println("execute PrintHello Class");

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("hello", "你好");
        modelAndView.setViewName("user");

        return modelAndView;
    }

    @RequestMapping("hello2")
    public String justHello(){
        return "Hello";
    }

}
