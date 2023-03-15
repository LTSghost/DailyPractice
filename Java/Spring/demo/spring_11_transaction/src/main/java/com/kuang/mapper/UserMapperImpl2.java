package com.kuang.mapper;

import java.util.List;

import org.mybatis.spring.support.SqlSessionDaoSupport;

import com.kuang.pojo.User;

public class UserMapperImpl2 extends SqlSessionDaoSupport implements UserMapper{

    

    @Override
    public List<User> selectUser() {

        User user = new User(666, "RAN", "cutest");

        UserMapper mapper = getSqlSession().getMapper(UserMapper.class);

        mapper.addUser(user);
        mapper.deleteUser(777);

        return mapper.selectUser();
    }

    @Override
    public int addUser(User user) {
        return getSqlSession().getMapper(UserMapper.class).addUser(user);
    }

    @Override
    public int deleteUser(int id) {
        return getSqlSession().getMapper(UserMapper.class).deleteUser(id);
    }
    
}
