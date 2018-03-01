#coding:utf-8
import sys
from flask import Flask,g,make_response,Blueprint,jsonify
from friendMsg.index import friendMsg
from friendList.index import friendList
from friendShow.index import friendShow
from personal.index import personal
from test.index import test   # API 测试模块

app = Flask(__name__)
# 允许跨域
from flask_cors import CORS
CORS(app, supports_credentials=True)

app.register_blueprint(friendMsg,url_prefix='/chat')
app.register_blueprint(friendList,url_prefix='/friendList')
app.register_blueprint(friendShow,url_prefix='/friendShow')
app.register_blueprint(personal,url_prefix='/personal')
app.register_blueprint(test,url_prefix='/test')


from functools import wraps


'''
demo data:\|/
data = {
        'status':200,
        'data':None
    }
    data_demo={}
    data['data'] = data_demo
    return jsonify(data)
'''


# def newApp(func):
#     def innerFuc(*args,**kwargs):
#         return newFuc
#     return innerFuc

# @app.route('/test')
# def test():
#     return 'test result'

# 原文地址：http://www.tuicool.com/articles/vqYZBbj
def responseto(msg=None, error=None, data=None, **kwargs):
    '''
    封装 json 响应
    ''' 
    # 如果提供了 data，那么不理任何其他参数，直接响应 data
    if not data:
        data = kwargs
        data['error'] = error
        if msg:
            # 除非显示提供 error 的值，否则默认为 True
            # 意思是提供了 msg 就代表有 error
            data['msg'] = msg
            if error is None:
                data['error'] = True
        else:
            # 除非显示提供 error 的值，否则默认为 False
            # 意思是没有提供 msg 就代表没有 error
            if error is None:
                data['error'] = False
    if not isinstance(data, dict):
        data = {'error':True, 'msg':'data 必须是一个 dict！'}
    resp = jsonify(data)
    # 跨域设置
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp

# @app.route('/test',methods=['GET'])
# @allow_cross_domain
# def test1():
#     return 'test success'

@app.route('/api/test')
def test():
    return "yes"

def main():
    # print u'命令行参数: %s'%sys.argv
    # if sys.argv[1] == '-h':
    #     host = sys.argv[2];
    # if sys.argv[3] == '-h':
    #     host = sys.argv[4];
    
    
    # if sys.argv[1] == '-p':
    #     port = sys.argv[2];
    # if sys.argv[3] == '-p':
    #     port = sys.argv[4];
    # else:
    #     port = 6666
    host = '0.0.0.0'
    port = 9999;
    # print u'启动 SERVER API 成功 ---> %s:%s'%(host,port);
    app.run(host=host,port=port,debug=True)
    

if __name__ == "__main__":
    main()
    