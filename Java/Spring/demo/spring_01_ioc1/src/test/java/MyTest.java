import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.kuang.dao.UserDao;
import com.kuang.dao.UserDaoMysqlIMPL;
import com.kuang.dao.UserDaoOracleImpl;
import com.kuang.dao.UserDaoSQLserverImpl;
import com.kuang.service.UserService;
import com.kuang.service.UserServiceImpl;

public class MyTest {
    public static void main(String[] args) {

        // 用戶實際調用的是業務層, dao層他們不需要接觸!
        UserService userService = new UserServiceImpl();

        // userService.getUser();   -----------nonIoC

        ((UserServiceImpl) userService).setUserDao(new UserDaoSQLserverImpl());
        userService.getUser();

    }
}
