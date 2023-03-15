package com.kuang.mapper;

import java.util.List;

import com.kuang.pojo.User;

public interface UserMapper {
    public List<User> selectUser();

    public int addUser(User user);

    public int deleteUser(int id);
    
}
