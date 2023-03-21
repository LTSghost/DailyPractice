package com.syscom.lingan.controller;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.AbstractController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class TraditionalClass extends AbstractController {
    @Override
    protected ModelAndView handleRequestInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse) throws Exception {
        System.out.println("TraditionalClass");

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("Traditional");

        return modelAndView;
    }
}
