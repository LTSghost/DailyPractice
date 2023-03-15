package com.kuang.mapper;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;

import com.kuang.pojo.User;

public class UserMapperImpl implements UserMapper{

    // 我們的所有操作, 都使用sqlSession來執行, 在原來的時候, 現在改成使用 SqlSessionTemplate;
    private SqlSessionTemplate sqlSession;

    public void setSqlSession(SqlSessionTemplate sqlSession) {
        this.sqlSession = sqlSession;
    }

    @Override
    public List<User> selectUser() {
        UserMapper mapper = sqlSession.getMapper(UserMapper.class);
       return mapper.selectUser();
    }
    
}
