package com.zime.hduspider.controller;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.zime.hduspider.entity.User;
import com.zime.hduspider.entity.Word;
import com.zime.hduspider.service.WordService;
import com.zime.hduspider.utils.GoPY;
import com.zime.hduspider.utils.Msg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import javax.validation.Valid;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ManageAPIController
{
    @Autowired
    private WordService wordService;

    @RequestMapping(value = "/word")
    public Msg getALL(@RequestParam(value = "pn", defaultValue = "1") Integer pageNum)
    {
        //在查询之前调用静态方法设置起始页和页面大小
        PageHelper.startPage(pageNum, 100, "Frequency desc");
        //startPage后面紧跟着的查询就是分页查询
        List<Word> words = wordService.getAll();
        //使用PageInfo包装查询后的结果，并将pageInfo存入map中
        PageInfo<Word> wordPageInfo = new PageInfo<Word>(words, 5);
        return Msg.success().add("word", wordPageInfo);
    }

    @RequestMapping("/save")
    public Msg saveCode(@Valid User user, BindingResult result)
    {
        try
        {
            System.out.println(user.toString());
            GoPY goPY = new GoPY();
            goPY.exec(user.getUsername(), user.getPassword(), "D:\\hduspider\\src\\main\\resources\\Spider\\HDUSpider.py");
            return Msg.success();
        }
        catch (Exception e)
        {
            return Msg.fail().add("errors", e.getMessage());
        }
    }
    @GetMapping("/download")
    public ResponseEntity<InputStreamResource> downloadFile(Long id)
            throws IOException
    {
        String filePath = "D:\\hduspider\\src\\main\\resources\\Spider\\tmp.zip";
        FileSystemResource file = new FileSystemResource(filePath);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
        headers.add("Content-Disposition", String.format("attachment; filename=\"%s\"", file.getFilename()));
        headers.add("Pragma", "no-cache");
        headers.add("Expires", "0");
        return ResponseEntity
                .ok()
                .headers(headers)
                .contentLength(file.contentLength())
                .contentType(MediaType.parseMediaType("application/octet-stream"))
                .body(new InputStreamResource(file.getInputStream()));
    }
    @GetMapping("/question")
    public ResponseEntity<InputStreamResource> downloadQuestion(Long id)
            throws IOException
    {
        String filePath = "D:\\hduspider\\src\\main\\resources\\Spider\\question.zip";
        FileSystemResource file = new FileSystemResource(filePath);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Cache-Control", "no-cache, no-store, must-revalidate");
        headers.add("Content-Disposition", String.format("attachment; filename=\"%s\"", file.getFilename()));
        headers.add("Pragma", "no-cache");
        headers.add("Expires", "0");
        return ResponseEntity
                .ok()
                .headers(headers)
                .contentLength(file.contentLength())
                .contentType(MediaType.parseMediaType("application/octet-stream"))
                .body(new InputStreamResource(file.getInputStream()));
    }
}
