import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.kuang.mapper.UserMapper;
import com.kuang.pojo.User;

public class MyTest {
    @Test
    public void test() throws IOException{

        // String resources = "mybatis_config.xml";
        // InputStream in = Resources.getResourceAsStream(resources);

        // SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(in);
        // SqlSession openSession = sqlSessionFactory.openSession(true);

        // UserMapper mapper = openSession.getMapper(UserMapper.class);
        // List<User> userList = mapper.selectUser();

        // for (User user : userList) {
        //     System.out.println(user);
        // }

        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        UserMapper userMapper = context.getBean("userMapper2", UserMapper.class);
        for (User user : userMapper.selectUser()) {
            System.out.println(user);
        }

    }
}
