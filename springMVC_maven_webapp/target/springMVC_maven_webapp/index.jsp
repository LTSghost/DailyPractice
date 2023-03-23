<html>
<body>
<h2>Hello World!</h2>

    <form action="${pageContext.request.contextPath}/helloUserModel" method="post">
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

    <div>
        <button id="searchStudent">Students</button>
    </div>

    <script type="text/javascript">
        const user = {
            name:"LTS",
            age: 26,
            gender: "male"
        };
        console.log(JSON.stringify(user))   // will be json format
        console.log(JSON.parse(JSON.stringify(user))) // will be object

        const btn = document.getElementById("searchStudent")
        btn.addEventListener('click',function (){
            fetch('http://localhost:8090/springMVC_maven_webapp_war/RestJSON')
                .then(response => response.text())
                .then(data => console.log(data))
                .catch(error => console.error(error))
        })
    </script>

</body>
</html>
