package com.zime.hduspider.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ThymeleafController
{
    @RequestMapping("/show")
    public String showEnglish()
    {
        return "show.html";
    }
    @RequestMapping("/wait")
    public String showWait()
    {
        return "wait.html";
    }

}