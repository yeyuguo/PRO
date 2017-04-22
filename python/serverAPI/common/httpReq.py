
import requests
import os

reqSession = requests.Session()
postParams = {
    'loginInfo':'101713928',
    'password':'212200689'
}

url = 'http://m.zhenai.com/v2/personal/getRecommandUserInfos.do?pageNo=1&pageSize=5'
result = reqSession.get(
    url,
    data=postParams
)
print result


def httpReq(url=None):
    if url is None:
        url = 'http://m.zhenai.com/v2/personal/getRecommandUserInfos.do?pageNo=1&pageSize=5'
    result = reqSession.get(
        url,
        data=postParams
    )
    print result
    return 'test'
    pass

if __name__ == "__main__":
    pass