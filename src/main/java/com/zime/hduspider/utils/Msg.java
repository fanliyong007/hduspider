package com.zime.hduspider.utils;

import java.util.HashMap;
import java.util.Map;

public class Msg
{
    private int code;    //处理状态代码	101处理成功，102处理失败
    private String msg;
    private Map<String, Object> data = new HashMap<String, Object>();

    public static Msg success()
    {
        Msg msg = new Msg();
        msg.setCode(101);
        msg.setMsg("处理成功!");
        return msg;
    }

    public static Msg fail()
    {
        Msg msg = new Msg();
        msg.setCode(102);
        msg.setMsg("处理失败!");
        return msg;
    }

    public int getCode()
    {
        return code;
    }

    public void setCode(int code)
    {
        this.code = code;
    }

    public String getMsg()
    {
        return msg;
    }

    public void setMsg(String msg)
    {
        this.msg = msg;
    }

    public Map<String, Object> getData()
    {
        return data;
    }

    public void setData(Map<String, Object> data)
    {
        this.data = data;
    }

    public Msg add(String key, Object value)
    {
        this.getData().put(key, value);
        return this;
    }
}