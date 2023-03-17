package com.syscom.lingan.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
@Controller
public class PrintHello{
    @RequestMapping("hello")
    protected ModelAndView hello(){
        System.out.println("Hello it's me,...");

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("user");

        return modelAndView;
    }
}
