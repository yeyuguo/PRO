# from . import chat
from . import friendShow

@friendShow.route('/',methods=['GET'])
def test():
    return 'friendShow success'


