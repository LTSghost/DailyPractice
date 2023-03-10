import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.kuang.pojo.Hello;

public class MyTest {
    public static void main(String[] args) {
        // 獲取 Spring 的上下文對象!
        ApplicationContext context = new ClassPathXmlApplicationContext("beans.xml");

        // 我們的對象現在都在 Spring 中管理了, 我們要使用, 直接進去裡面取出來就可以!
        Hello hello = (Hello) context.getBean("hello");
        System.out.println(hello.toString());
    }
}
