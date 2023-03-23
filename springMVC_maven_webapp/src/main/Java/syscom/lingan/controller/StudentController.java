package syscom.lingan.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import syscom.lingan.entity.Student;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class StudentController {

    @RequestMapping("student")
    public Map<String,Object> createStudent(Student student) throws JsonProcessingException {
        Map<String,Object> map = new HashMap<>();
        Date date = new Date();
        SimpleDateFormat sf= new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        student.setCreatTime(date);
        student.setUpdateTime(date);

        System.out.println(student.getId());
        System.out.println(student.getName());
        System.out.println(student.getAge());
        System.out.println(student.getEmail());
//        System.out.println(date);
//        sf.format(date);
//        System.out.println(date);
//        System.out.println(sf);
//        System.out.println(sf.format(date));
        System.out.println(sf.format(student.getCreatTime()));

//        ObjectMapper mapper = new ObjectMapper();
//        String str = mapper.writeValueAsString(student);

        map.put("id",student.getId());
        map.put("name",student.getName());
        map.put("age",student.getAge());
        map.put("email",student.getEmail());
        map.put("createTime",sf.format(student.getCreatTime()));
        map.put("updateTime",student.getUpdateTime());

        // Read JSON file into string
//        String jsonStr = null;
//        try {
////            jsonStr = new String(Files.readAllBytes(Paths.get("./student.json")), StandardCharsets.UTF_8);
//            byte[] content = Files.readAllBytes(Paths.get("student.json"));
//            System.out.println(content);
//        } catch (IOException e) {
//            e.printStackTrace();
//        }


        return map;
    }

    @RequestMapping("students")
    public String searchStudent(){
        return "";
    }
}
