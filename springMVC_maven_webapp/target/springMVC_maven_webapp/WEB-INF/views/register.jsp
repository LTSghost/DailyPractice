<%--
  Created by IntelliJ IDEA.
  User: User
  Date: 2023/3/22
  Time: 下午 05:24
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Register</title>
</head>
<body>
    <h2>${text}</h2>

    <form action="${pageContext.request.contextPath}/register" method="post">
      <div>
        <label style="float:left; width: 80px; text-align: right">ID:</label>
        <input type="text" name="id" placeholder="00000" value="00000"/>
      </div>
      <div>
        <label style="float:left; width: 80px; text-align: right">Password:</label>
        <input type="text" name="password" placeholder="888888" value="888888"/>
      </div>
      <div>
        <label style="float:left; width: 80px; text-align: right">Name:</label>
        <input type="text" name="name" placeholder="西安凌安" value="西安凌安"/>
      </div>
      <div style="padding-left: 100px; padding-top:5px">
        <input type="submit"/>
      </div>
    </form>

</body>
</html>
