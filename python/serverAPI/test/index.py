
from flask import jsonify,abort
from . import test

@test.route('/',methods=['GET'])
def test00():
    return jsonify({'msg':'test test','status':200})

@test.route('/success',methods=['GET'])
def test0():
    return jsonify({'data':'test success','status':200})

@test.route('/error',methods=['GET'])
def test1():
    return jsonify({'msg':'test error','status':201})

@test.route('/notFound')
def tes2():
    abort(404);