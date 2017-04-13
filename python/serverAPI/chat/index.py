# from . import chat
from flask import jsonify,abort
from . import chat

@chat.route('/',methods=['GET'])
def test():
    # return jsonify({'msg':'test error','status':200})
    return 'chat success'


