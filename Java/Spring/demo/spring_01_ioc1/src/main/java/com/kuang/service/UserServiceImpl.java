package com.kuang.service;

import com.kuang.dao.UserDao;
import com.kuang.dao.UserDaoImpl;
import com.kuang.dao.UserDaoMysqlIMPL;
import com.kuang.dao.UserDaoOracleImpl;

public class UserServiceImpl implements UserService{

    // private UserDao userDao = new UserDaoMysqlIMPL(); -----------nonIoC

    private UserDao userDao;

    public void setUserDao(UserDao userDao) {
        this.userDao = userDao;
    }

    public void getUser() {
        userDao.getUser();
    }
}
