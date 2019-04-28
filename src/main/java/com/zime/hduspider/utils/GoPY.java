package com.zime.hduspider.utils;

import java.io.*;

public class GoPY
{
    public void exec(String username, String password, String command) throws IOException, InterruptedException
    {
        try
        {
            String s;
            String[] cmdArr = new String[]{"python", command};
            Process process = Runtime.getRuntime().exec(cmdArr);
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(process.getInputStream()));
            BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(process.getOutputStream()));
            bufferedWriter.write(username+"\n");
            bufferedWriter.write(password);
            bufferedWriter.flush();
            bufferedWriter.close();
            while ((s = bufferedReader.readLine()) != null)
                System.out.println(s);
            process.waitFor();
        }
        catch (IOException e)
        {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }
}
