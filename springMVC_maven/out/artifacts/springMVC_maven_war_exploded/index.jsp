<%--
  Created by IntelliJ IDEA.
  User: User
  Date: 2023/3/23
  Time: 下午 04:49
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Index</title>
  </head>
  <body>

    <form action="${pageContext.request.contextPath}/register" method="post">
    <div>
      <label style="float:left; width: 80px; text-align: right">ID:</label>
      <input type="text" name="id" placeholder="00000" value="00000"/>
    </div>
    <div>
      <label style="float:left; width: 80px; text-align: right">Name:</label>
      <input type="text" name="name" placeholder="西安凌安" value="西安凌安"/>
    </div>
    <div>
      <label style="float:left; width: 80px; text-align: right">Password:</label>
      <input type="text" name="password" placeholder="888888" value="888888"/>
    </div>
    <div style="padding-left: 100px; padding-top:5px">
      <input type="submit"/>
    </div>
  </form>

    <form action="${pageContext.request.contextPath}/student" method="post">
    <div>
      <label style="float:left; width: 60px; text-align: right">ID:</label>
      <input type="text" name="id" placeholder="1" value="1" />
    </div>
    <div>
      <label style="float:left; width: 60px; text-align: right">Name:</label>
      <input type="text" name="name" placeholder="LTS" value="LTS" />
    </div>
    <div>
      <label style="float:left; width: 60px; text-align: right">Age:</label>
      <input type="text" name="age" placeholder="26" value="26"/>
    </div>
    <div>
      <label style="float:left; width: 60px; text-align: right">Email:</label>
      <input type="text" name="email" placeholder="DKLTSghost@gmail.com" value="DKLTSghost@gmail.com"/>
    </div>
    <div style="padding-left: 100px; padding-top:5px">
      <input type="submit"/>
    </div>
  </form>
  </body>
</html>
