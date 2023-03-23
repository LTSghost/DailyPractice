package syscom.lingan.controller;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import syscom.lingan.domain.Account;
import syscom.lingan.domain.User;
import syscom.lingan.entity.Student;

@RestController
public class RestUserController {

//    @RequestMapping(value = "RestJSON", produces = "application/json;charset=utf-8")
    @RequestMapping(value = "RestJSON", produces = "application/json;charset=utf-8")
    @ResponseBody // this annotation will return a String, not find View
    public String json() throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        User user = new User(1,"田匡宇",26);
        String str = mapper.writeValueAsString(user);
        System.out.println(str);

        return str;
    }
    @RequestMapping("RestC")
    @ResponseBody
    public String restc(){
        System.out.println("有喔");
        return "";
    }

    @RequestMapping("registerPage")
    public ModelAndView registerPage(){
        System.out.println("execute RestController.registerPage");

        ModelAndView modelAndView = new ModelAndView();

        modelAndView.setViewName("register");

        modelAndView.addObject("text","This is registerPage");

        return modelAndView;
    }

    @RequestMapping("register")
    public ModelAndView register(Account account){
        System.out.println(account.getId());
        System.out.println(account.getPassword());
        System.out.println(account.getName());

//        ModelAndView modelAndView = new ModelAndView();

        if("西安凌安".equals(account.getName())){
            if ("888888".equals(account.getPassword())){
                System.out.println("歡迎" + account.getName() + "登入成功，您的用戶號碼為" + account.getId());

//                modelAndView.addObject("status","welcome");
//                modelAndView.addObject("id",account.getId());
//                modelAndView.addObject("account",account.getName());
//                modelAndView.addObject("password",account.getPassword());
//                modelAndView.addObject("message","歡迎" + account.getName());
//                modelAndView.setViewName("resRegister");

                return renderRegister("welcome",account.getId(),
                        account.getName(),account.getPassword(),
                        "歡迎，" + account.getName());

            } else {
                System.out.println("對不起，密碼不正確，請重新輸入");

//                modelAndView.addObject("status","fail");
//                modelAndView.addObject("id",account.getId());
//                modelAndView.addObject("account",account.getName());
//                modelAndView.addObject("password",account.getPassword());
//                modelAndView.addObject("message","密碼不正確");
//                modelAndView.setViewName("resRegister");
//
//                return modelAndView;

                return renderRegister("fail",account.getId(),
                        account.getName(),account.getPassword(),
                        "密碼不正確");
            }
        } else {
            System.out.println("對不起，查無此用戶");

//            modelAndView.addObject("status","fail");
//            modelAndView.addObject("id",account.getId());
//            modelAndView.addObject("account",account.getName());
//            modelAndView.addObject("password",account.getPassword());
//            modelAndView.addObject("message","帳戶不正確");
//            modelAndView.setViewName("resRegister");
//
//            return  modelAndView;

            return renderRegister("fail",account.getId(),
                    account.getName(),account.getPassword(),
                    "帳戶不正確");
        }
    }

    public ModelAndView renderRegister(String status, String id, String account,
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
