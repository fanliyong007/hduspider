package com.zime.hduspider.controller;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.zime.hduspider.entity.Word;
import com.zime.hduspider.service.WordService;
import com.zime.hduspider.utils.Msg;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ManageWordController
{
    @Autowired
    private WordService wordService;
    @RequestMapping(value = "/word")
    public Msg getALL(@RequestParam(value = "pn", defaultValue = "1") Integer pageNum)
    {
        //在查询之前调用静态方法设置起始页和页面大小
        PageHelper.startPage(pageNum, 100,"Frequency desc");
        //startPage后面紧跟着的查询就是分页查询
        List<Word> words=wordService.getAll();
        //使用PageInfo包装查询后的结果，并将pageInfo存入map中
        PageInfo<Word> wordPageInfo=new PageInfo<Word>(words,5);
        return Msg.success().add("word",wordPageInfo);
    }
}
