#coding:utf-8
'''
user : //*[@id="loginFrom"]/div[2]/input
password: //*[@id="password_input"]

'''
import time
import selenium
from selenium import webdriver
loginUrl = 'http://m.zhenai.com/v2/login/login.do'
# 手机端的XPATH
userPath = '//*[@id="loginFrom"]/div[2]/input'
pwdPath = '//*[@id="password_input"]'
clickPath = '//*[@id="submit"]'

#pc端的XPATH
userPath = '//*[@id="jcLoginName"]'
pwdPath = '//*[@id="jcLoginPass"]'
clickPath = '//*[@id="loginForm"]/div/a[1]'

sel = selenium.webdriver.Chrome()

#如果报错，就把 chromeDriver 升级到最高就可以了
sel.get(loginUrl)
print '等待打开浏览器和网址'  
# time.sleep(8) 

sel.find_element_by_xpath(userPath).send_keys('101713928')  
sel.find_element_by_xpath(pwdPath).send_keys('212200689')  
sel.find_element_by_xpath(clickPath).click() 

#sign in the username 
try:
    sel.find_element_by_xpath(userPath).send_keys('101713928')  
    print 'user success!'
except:
    print 'user error!'

#sign in the pasword  
try:
    sel.find_element_by_xpath(pwdPath).send_keys('212200689')  
    print 'pw success!'  
except:
    print 'pw error!'

#click to login  
try:
    sel.find_element_by_xpath(clickPath).click()  
    print 'click success!'  
except:
    print 'click error!' 

#判断是否登录
curpage_url = sel.current_url
print curpage_url
# while(curpage_url == loginurl):  
#     #print 'please input the verify code:'  
#     print 'please input the verify code:'  
#     verifycode = sys.stdin.readline()  
#     sel.find_element_by_xpath("//div[@id='pl_login_form']/div/div[2]/div[3]/div[1]/input").send_keys(verifycode)  
#     try:  
#         sel.find_element_by_xpath("//div[@id='pl_login_form']/div/div[2]/div[6]/a").click()  
#         print 'click success!'  
#     except:  
#          print 'click error!'  
#     curpage_url = sel.current_url 
#     print curpage_url


#获取登录的 cookie
cookie = [item["name"] + "=" + item["value"] for item in sel.get_cookies()]  
#print cookie
cookiestr = ';'.join(item for item in cookie)
# print cookiestr




# ------------- 访问获取到数据 ------------------------
import urllib2  

# print '%%%using the urllib2 !!'  
homeurl = sel.current_url  
print 'homeurl: %s' % homeurl  
headers = {'cookie':cookiestr}  
req = urllib2.Request(homeurl, headers = headers)  
# try:
    # response = urllib2.urlopen(req)  
#     text = response.read()  
#     # fd = open('homepage', 'w')  
#     # fd.write(text)  
#     # fd.close()  
#     print '###get home page html success!!'
# except:  
#     print '### get home page html error!!'

