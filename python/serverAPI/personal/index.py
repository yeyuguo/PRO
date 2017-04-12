# from . import chat
from . import personal

@personal.route('/',methods=['GET'])
def test():
    return 'personal success'


