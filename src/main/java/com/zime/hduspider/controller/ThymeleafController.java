package com.zime.hduspider.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

@Controller
public class ThymeleafController
{
    @RequestMapping("/show")
    public String showEnglish()
    {
        return "show.html";
    }
}