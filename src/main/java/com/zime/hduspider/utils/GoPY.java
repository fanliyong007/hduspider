package com.zime.hduspider.utils;

import java.io.IOException;

public class GoPY
{
    public void exec(String username, String password, String command) throws IOException, InterruptedException
    {
        String[] cmdArr = new String[]{"python", command, username, password};
        Process process = Runtime.getRuntime().exec(cmdArr);
        process.waitFor();
    }
}
