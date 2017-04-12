# from . import chat
from flask import jsonify
from . import chat

@chat.route('/',methods=['GET'])
def test():
    # return jsonify({'msg':'test error','status':200})
    return 'chat success'

@chat.route('/test',methods=['GET'])
def test0():
    return jsonify({'msg':'test error','status':200})
    # return 'chat success'



