package com.zime.hduspider;

import com.zime.hduspider.utils.GoPY;

import java.io.IOException;
import java.text.DecimalFormat;
import java.util.Scanner;

public class Test
{
    public static void main(String[] args) throws IOException, InterruptedException
    {
        GoPY goPY=new GoPY();
        goPY.exec("test","test","D:\\hduspider\\src\\main\\resources\\Spider\\testPy.py");
    }

}
