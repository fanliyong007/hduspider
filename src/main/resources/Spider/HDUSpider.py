# coding = utf-8
import re
import os
import shutil
import zipfile
from os.path import join, getsize
from selenium import webdriver
option = webdriver.ChromeOptions()
option.add_argument("headless")
browser = webdriver.Chrome(chrome_options=option)
def zip_file(src_dir):
    zip_name = src_dir +'.zip'
    z = zipfile.ZipFile(zip_name,'w',zipfile.ZIP_DEFLATED)
    for dirpath, dirnames, filenames in os.walk(src_dir):
        fpath = dirpath.replace(src_dir,'')
        fpath = fpath and fpath + os.sep or ''
        for filename in filenames:
            z.write(os.path.join(dirpath, filename),fpath+filename)
            print ('==压缩成功==')
    z.close()
username=input("")#读入账户
userpass=input("")#读入密码
browser.get("http://acm.hdu.edu.cn/userstatus.php?user="+username)#取得当前用户题目集
queXpath="/html/body/table/tbody/tr[4]/td/table/tbody/tr/td/p[3]"#题目集xpath路径
browser.find_element_by_name("username").send_keys(username)
browser.find_element_by_name("userpass").send_keys(userpass)
browser.find_element_by_name("login").click()#模拟登录
que=browser.find_element_by_xpath(queXpath)#获取题目集文本
Myque=[]
for str in que.text.split(' '):
    if re.match(r'\d{4}',str):
        Myque.append(str)
for queNum in Myque:
    browser.get("http://acm.hdu.edu.cn/status.php?user="+username+"&pid="+queNum+"&status=5")
    browser.find_element_by_xpath("//*[@id=\"fixed_table\"]/table/tbody/tr[2]/td[7]/a").click()
    hander=browser.current_window_handle
    handers=browser.window_handles
    for h in handers:
        if h!=hander:
            browser.switch_to_window(h)
            code = browser.find_element_by_xpath("/html/body/table/tbody/tr[4]/td/div/div[2]/pre")
            print(code.text)
            f=open('D:\hduspider\src\main\resources\Spider\tmp\\'+queNum,'w')
            f.write(code.text)
            f.close()
            browser.close()
            browser.switch_to_window(hander)
zip_file("D:\hduspider\src\main\resources\Spider\tmp\\")
browser.quit()