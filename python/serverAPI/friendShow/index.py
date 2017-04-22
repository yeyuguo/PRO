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
    # data_demo=[{"car":-1,"isHideVip":0,"workCity":"北京大兴区","memberid":99270279,"isVip":0,"introduceContent":"书山有路勤为径，学海无涯苦做舟。共勉！心烦的时候想看海。人们都觉得会遇到更好的，事实真的是这样吗？","contentType":0,"house":2,"nickName":"会员99270279","pageNo":3,"age":26,"lastLoginT":"2小时前","otherMsg":"26岁  北京大兴区... 工程师 169cm","defaultPhoto":"http://photo14.zastatic.com/images/photo/24818/99270279/1481304222759_2.jpg","isHideZX":0,"salary":"12-20k","isZhenaiMailVip":1},{"car":1,"isHideVip":0,"workCity":"北京大兴区","memberid":101329783,"isVip":0,"introduceContent":"一切随缘吧！小女有积极乐观的生活态度，典型北京女孩儿性格，不矫情不做作。工作独立，但属于传统思想主张女性家庭至上。懂生活还算精致。在健康的家庭环境成长，受良好的教育培养。注重健康，样貌不算出众但从不懈怠自己。希望遇见善良孝敬的他相互包容理解，更希望坦诚的心灵沟通。望以结婚为目的，成熟稳重有担当的男士结识为伴。非诚勿扰","contentType":0,"house":1,"nickName":"星星","pageNo":1,"age":30,"lastLoginT":"在线","otherMsg":"30岁  北京大兴区... 教育业 165cm","defaultPhoto":"http://photo12.zastatic.com/images/photo/25333/101329783/1487605332557_2.jpg","isHideZX":0,"salary":"8-12k","isZhenaiMailVip":1},{"car":2,"isHideVip":0,"workCity":"北京大兴区","memberid":102432169,"isVip":0,"introduceContent":"内蒙古赤峰人，父母定居辽宁，孤身一人来到北京，长相一般，应该是可以带的出去的，但是一定也能带的回来，每个女孩都会有个公主梦，我也同样，希望那天我的王子突然来到我的身边！我要的生活很简单，白天各自上班，晚上回家做好饭菜等你回家，听我唠叨今天工作的点点滴滴，休息的时候一起就去旅旅游！总言之:愿我能在最好的年华，能遇见最好的你，共度余生","contentType":0,"house":6,"nickName":"阳光颖儿","pageNo":1,"age":26,"lastLoginT":"在线","otherMsg":"26岁  北京大兴区... 服务行业 163cm","defaultPhoto":"http://photo12.zastatic.com/images/photo/25609/102432169/1490878166005_2.jpg","isHideZX":0,"salary":"3-5k","isZhenaiMailVip":1},{"car":2,"isHideVip":0,"workCity":"北京大兴区","memberid":98627548,"isVip":0,"introduceContent":"我正在寻找北京大兴区,年龄在28-32岁,学历为大学本科,月薪在8000元以上的男性","contentType":1,"house":3,"nickName":"好天气","pageNo":1,"age":26,"lastLoginT":"在线","otherMsg":"26岁  北京大兴区... 工程师 164cm","defaultPhoto":"http://photo15.zastatic.com/images/photo/24657/98627548/1479614571982_2.jpg","isHideZX":0,"salary":"8-12k","isZhenaiMailVip":1},{"car":2,"isHideVip":1,"workCity":"北京大兴区","memberid":95618392,"isVip":1,"introduceContent":"我正在寻找其他地区,年龄在29-36岁,学历为大专,月薪在8000元以上的男性","contentType":1,"house":4,"nickName":"桃子","pageNo":1,"age":28,"lastLoginT":"在线","otherMsg":"28岁  北京大兴区... 服务行业 164cm","defaultPhoto":"http://photo15.zastatic.com/images/photo/23905/95618392/1491653116018_2.jpg","isHideZX":0,"salary":"5-8k","isZhenaiMailVip":0},{"car":2,"isHideVip":1,"workCity":"北京大兴区","memberid":101641523,"isVip":1,"introduceContent":"没啥照片上传，将就看吧，现在有点富态了。我是一个善良、独立的女孩，目前在上市公司工作，主营照明工程，平时喜欢研究做菜、中医、唱歌，我家庭是普通的东北农村家庭，在意勿扰，想找一个人品好，孝顺父母，脾气好，独立自强的男孩相伴一生。","contentType":0,"house":6,"nickName":"我的牙坏了","pageNo":1,"age":30,"lastLoginT":"在线","otherMsg":"30岁  北京大兴区... 服务行业 167cm","defaultPhoto":"http://photo16.zastatic.com/images/photo/25411/101641523/1490859189162_2.jpg","isHideZX":0,"salary":"5-8k","isZhenaiMailVip":0}]
    data={
        'status':200,
        'data':data_demo
    }
    return jsonify(data)
    pass



