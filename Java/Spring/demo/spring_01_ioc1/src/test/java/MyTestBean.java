import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.kuang.service.UserServiceImpl;

public class MyTestBean {
    public static void main(String[] args) {

        // 獲取 ApplicationContext, 通過 bean.xml 配置文件拿到 Spring 容器
        ApplicationContext context = new ClassPathXmlApplicationContext("bean.xml");

        // 容器在手, 天下我有, 需要什麼, 直接get什麼
        UserServiceImpl userServiceImpl =  (UserServiceImpl) context.getBean("UserServiceImpl");
        userServiceImpl.getUser();
    }
}
