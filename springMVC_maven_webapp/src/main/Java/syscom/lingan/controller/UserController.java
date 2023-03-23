package syscom.lingan.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import syscom.lingan.domain.User;

@Controller
public class UserController {

    @RequestMapping("hello")
    public ModelAndView hello000(){
        System.out.println("execute UserController.hello");

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("hello");

        return modelAndView;
    }
    @RequestMapping("helloName")
    public ModelAndView hello(String name){
        System.out.println("execute UserController.hello");
        System.out.println("queryString name = " + name);

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("hello");

        return modelAndView;
    }
    @RequestMapping("helloUsername")
    public ModelAndView hello1(@RequestParam("username") String name){
        System.out.println("execute UserController.hello");
        System.out.println("queryString username = " + name);

        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("hello");

        return modelAndView;
    }
    @RequestMapping("helloUser")
    public ModelAndView hello2(User user){
        System.out.println("execute UserController.hello");
        System.out.println("queryString OBJ : " + user.toString());

        ModelAndView modelAndView = new ModelAndView();

        modelAndView.addObject("hello", "你好");
        modelAndView.addObject("id",user.getId());
        modelAndView.addObject("name",user.getName());
        modelAndView.addObject("age",user.getAge());

        modelAndView.setViewName("hello");

        return modelAndView;
    }
    @RequestMapping("helloUserModel")
    public String hello3(User user, ModelMap model){
        System.out.println("execute UserController.hello");
        System.out.println("queryString OBJ : " + user);
        System.out.println(user.getName());

        model.addAttribute("hello", "你好");
        model.addAttribute("id",user.getId());
        model.addAttribute("name",user.getName());
        model.addAttribute("age",user.getAge());

        return "hello";
    }
    @RequestMapping("json")
    @ResponseBody // this annotation will return a String, not find View
    public String json(){
        User user = new User(1,"田匡宇",26);
        return user.toString();
    }

}
