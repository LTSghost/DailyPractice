package com.kuang.mapper;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.support.SqlSessionDaoSupport;

import com.kuang.pojo.User;

public class UserMapperImpl2 extends SqlSessionDaoSupport implements UserMapper{

    @Override
    public List<User> selectUser() {
        // SqlSession sqlSession = getSqlSession();
        // UserMapper mapper = sqlSession.getMapper(UserMapper.class);
        // return mapper.selectUser();

        return getSqlSession().getMapper(UserMapper.class).selectUser();
    }
    
}
