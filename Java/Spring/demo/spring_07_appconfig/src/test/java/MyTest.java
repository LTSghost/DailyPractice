import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.kuang.config.KuangConfig;
import com.kuang.pojo.User;

public class MyTest {
    public static void main(String[] args) {
        
        // 如果完全使用了配置類方法去做, 我們就只能通過 AnnotationConfig 上下文來獲取容器, 通過配置類的 class 對象加載!
        ApplicationContext context = new AnnotationConfigApplicationContext(KuangConfig.class);
        User getUser = context.getBean("user", User.class);
        System.out.println(getUser.getName());
    }
}
