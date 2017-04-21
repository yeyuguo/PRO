#coding:utf-8
from . import friendShow
from flask import jsonify

@friendShow.route('/',methods=['GET'])
def test():
    return 'friendShow success'

@friendShow.route('/latest',methods=['GET'])
def latest():
    data ={}
    data_demo = [{
            'img': '../../images/mn1.jpg',
            'title': '相约酒店',
            'des': '需要风吹日晒',
            'sex':'',
            'isVip':1
        },
        {
            'img': '../../images/mn2.jpg',
            'title': '麦当劳邀您过周末',
            'des': '日晒',
            'sex':'girl',
            'isVip':0
        },
        {
            'img': '../../images/mn4.jpg',
            'title': '食惠周',
            'des': '不是',
            'sex':'boy',
            'isVip':1
        }]
    data={
        'status':200,
        'data':data_demo
    }
    return jsonify(data)
    pass



