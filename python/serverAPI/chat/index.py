# from . import chat
from . import chat

@chat.route('/',methods=['GET'])
def test():
    return 'chat success'


