import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.kuang.pojo.User;
import com.kuang.pojo.UserTest;

public class MyTest {
    public static void main(String[] args) {

        // Spring 容器
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        User user = (User) context.getBean("user");
        user.show();

        User user2 = (User) context.getBean("user");
        System.out.print("user 和 user2 是否是同一個創建對象 : ");
        System.out.println(user == user2);

        User user3 = (User) context.getBean("userAlias");
        user3.show();

        // User user = new User();

        UserTest usertest = (UserTest) context.getBean("u4T");
        usertest.show();

        UserTest usertestu5T = (UserTest) context.getBean("u5T");
        usertestu5T.show();
    }
}
