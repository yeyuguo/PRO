# from . import chat
from . import friendList

@friendList.route('/',methods=['GET'])
def test():
    return 'friendList success'


