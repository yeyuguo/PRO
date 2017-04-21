var ZAurl = 'http://images.zastatic.com/';
var Profile = function(options){
	$.extend(this,options || {},{
		loginUrl:'/v2/login/login.do',
		profileUrl:'/v2/profile/getmemberdata.do?tabIndex=4',
		sayHelloSucPopupText:'<p style="font-size:1.1em;color:#37b21b;">打招呼成功,请耐心等待对方回应！</p>'
		+'<p style="font-size:1.1em">喜欢Ta,就把你的问候短信发给Ta吧~</p>'
		+'<p style="font-size:1.1em;color:red">(需要消耗一个珍爱信使)</p>',
		upLoadImgText:'<p>上传一张真实头像才能查看哦</p>',
		cancelText:'&nbsp&nbsp取消&nbsp&nbsp',
		msgTipText:'短信提醒',
		sureText:'确定',
		expansion:'展开',
		shrink:'收起',
		downAppText:'<p style="font-size:1.1em">立即下载App免费体验上线提醒</p><p style="font-size:1.1em">随时随地掌握心上人动向</p>',
		wakeupappUrl:'/v2/client/wakeupapp.do?source=7',
		trackEvent:'_trackEvent',
		trackTitle:'三资页(客)',
		upVipText:'升级珍心会员，沟通无障碍',
		payUrl:'/v2/payment/list.do'
	});
	this.img_box = $("#img_box_scroller");
	this.serverErrorText = "服务器出现未知错误，请重试或反馈问题！";
	this.init();
}
Profile.prototype={
	init:function(){
		var self = this;
		//Seo Statistics
		seoStat(4);
		self.showImage();
		self.heartWord();
		self.singleInfo();
		self.sayHello();
		self.sendMail();
		self.sendGift();
		self.guessLove();
		self.lineTips();
	},
	showImage:function(){//照片列表
		var self = this;
		var childs = self.img_box.children("ul").children("li");
		var l = childs.length;
		if(l > 0){
			var marginLeft = Math.ceil($(childs[0]).css("margin-left").replace("px",""))+1;
			self.img_box.css("width",l*(childs[0].offsetWidth)+l*marginLeft);
			var myScroll = new IScroll('#img_box_wrapper', {scrollX: true,scrollY:false,scrollbars:'custom',click: true,preventDefault:true });
			self.img_box.on("touchend","li[class='img_item']",function(){
                var index = $(this).index();
                self.touchImage.call(self,index)
            });
		}
	},
	singleInfo:function(){//资料信息的展开和收起
		var self = this;
		var info_expand_tool = $(".info_expand_tool");
		var flag = true;
		info_expand_tool.on("click",function(){
			var that = $(this);
			if(flag){
				that.prev().css({"height":"auto","overflow":"auto"});
				self.spread(that,self.shrink,45,"bottom");
				flag = false;
			}else{
				that.prev().css({"height":"8.75rem","overflow":"hidden"});
				self.spread(that,self.expansion,-135,"top");
				flag = true;
			}
		});
	},
	heartWord:function(){//内心独白
		var self = this;
		var heart_word_content= $("#heart_word_content");
		var expand_tool = $("#expand_tool");
		var heart_word = $clamp(heart_word_content[0], {clamp: 4,useNativeClamp: false, animate: false,dom:expand_tool});
		var i = 0;
		expand_tool.on("click",function(){
			if(i % 2 == 0){
				heart_word_content.html(heart_word.original);
				self.spread(expand_tool,self.shrink,45,"bottom");
			}else{
				heart_word = $clamp(heart_word_content[0], {clamp: 4,useNativeClamp: false, animate: false,dom:expand_tool});
				self.spread(expand_tool,self.expansion,-135,"top");
			}
			i++;
		});
	},
	spread:function(dom,text,deg,align){
		dom.children("span").eq(1).text(text);
		dom.children("span").eq(0).css({"-webkit-transform":"rotate("+deg+"deg)","vertical-align":""+align+""});
	},
	touchImage:function(i,evt){
		var self = this;
		if(self.isLogin === '0'){//判断是否登陆
			window.location.href = self.loginUrl;
			return;
		}
		if(self.hasDefaultPhoto === '1' || self.isZhenxin === 'true'){//判断是否上传形象照
			var obj = new Popup({
				type: "image",
				list:"img_item",
                index: i
			},$(this),evt);
		}else{

			// 记录日志  lenjee
			$.get('//m.zhenai.com/v2/personal/nplog.do?from=2&step=18',function(e){
				console.log(' 先上传头像 ： ',e)
			})
			
			self.showConfirmPopup("",self.upLoadImgText,self.sureText,self.cancelText,null,function(){
				window.location.href = self.profileUrl;
			});
		}
	},
	showConfirmPopup:function(title,content,ok,cancel,closeCallBack,okCallBack){
		new Popup({
			type: "confirm",
			title: title,
			content: content,
			ok: ok,
			cancel:cancel,
			icon: false,
			closeCallBack: closeCallBack,
			okCallBack:okCallBack
		});
	},
	sayHello:function(){//打招呼
		var self = this;
		var sayHello = $("#say_hello");
		sayHello.on("click",function(){self.sayHelloFn(this)});
	},
	sayHelloFn:function(dom){
		var self = this;
		var that = $(dom);
		var sayHello = '打招呼'
		if(self.isLogin === '0'){
			_hmt.push([self.trackEvent, self.trackTitle, self.trackTitle+'-'+sayHello+'-登录']);
			window.location.href = self.loginUrl;
			return;
		}
		_hmt.push([self.trackEvent, self.trackTitle, self.trackTitle+'-'+sayHello+'-执行交互']);
		that.find("i").addClass("shake");
		var load = new Popup({
			type: "loading",
		});
		$.ajax({
    			type: "POST",
    			async:true,
    			cache:false,
    			url: "/v2/mail/sendMailBatch.do",
    			data: {"memberIds": $(that).attr("data_src"),"source":1,"page":1},
    			dataType:"json",
    			success: function(json){
    				self.sayHelloFnSuccess(json,load);
    			},error:function(){
    				load.closeLoad();
 					self.showToast(self.serverErrorText);
    			}
    	});
	},
	sayHelloFnSuccess:function(json,load){
		var self = this;
		load.closeLoad();
		if(json.status==1){//成功

			        if(json.data.toastFlag==0){
                     	self.showConfirmPopup("",self.sayHelloSucPopupText,self.msgTipText,self.cancelText,
				      function(args){
					  _hmt.push([self.trackEvent, '打招呼弹层', '打招呼弹层-短信提醒-关闭']);
				      },function(){self.sendMsgTip()});

                  }else if(json.data.toastFlag==1){//邮件单次收费提醒
                    //无限畅聊弹框
                    var againTip = true, beginChatHtml = '<div class="cl-box">'
                        +'    <a href="javascript:;" class="close close-js"></a>'
                        +'    <div class="cl-title">'
                        +'        <p class="p1">永久畅聊</p>'
                        +'        <p class="p2">开启永久双向无阻碍沟通</p>'
                        +'        <p class="p2">发出邮件对方免费看</p>'
                        +'    </div>'
                        +'    <a href="javascript:;" class="pop-btn pop-red toChat-js">全站无限畅聊</a>'
                        +'    <a href="javascript:;" class="pop-btn pop-red after-js">仅与对方畅聊<span>(3珍爱币)</span></a>'
                        +'    <p class="cl-tip '+ (againTip ? '':'select') +' todayTip-js"><em class="checkbox"></em>今日不在提醒</p>'
                        +'</div>',
                        beginChatCss ='<style>'
                        +'    .cl-box{ position: relative;display: inline-block; width: 12.2rem; margin: 0 auto; }'
                        +'    .cl-box .close{ position: absolute; right: -1rem; top: -1rem; display: inline-block; width: 1.3rem; height: 1.3rem; background: url('+ZAurl+'imwap/wap2015/images/oneWay/close.png) 0 0 no-repeat; background-size: 1.05rem 1.05rem;}'
                        +'    .cl-box .p1{ padding: 2.2rem 0 .2rem; font-size: 1.3rem; color: #f89a5b; }'
                        +'    .cl-box .p2{ line-height: .7rem; font-size: .6rem; color: #8e491b; }'
                        +'    .cl-title{ width: 12.2rem; height: 8.9rem; background: url('+ZAurl+'imwap/wap2015/images/oneWay/bg1.png) 0 0 no-repeat; background-size: 12.2rem 8.9rem; }'
                        +'    .pop-btn{ display: block; margin: .7rem auto; height: 2.22rem; line-height: 2.2rem; border: 0; border-radius: 8px; font-size: .8rem; color: #fff; text-align: center; }'
                        +'    .pop-btn span{padding-left: 0.2rem;font-size: .6rem;}'
                        +'    .pop-red{ background-color: #ff5b5b; ; border: 1px solid #ff5b5b; }'
                        +'    .pop-redb{ color: #ff5b5b;background-color: #fff; ; border: 1px solid #ff5b5b; }'
                        +'    .pop-none{ border: 1px solid #cecccf; }'
                        +'    .cl-tip{ line-height: .7rem;line-height: .7rem; font-size: .5rem; color: #fff; text-align: left;}'
                        +'    .cl-tip .checkbox{ display: inline-block; font-size: 0; width: 1.05rem; height: .9rem; vertical-align: middle; background: url('+ZAurl+'imwap/wap2015/images/oneWay/checkBox.png) 0 -1.65rem no-repeat; background-size: .7rem 2.4rem; border-radius: 0;vertical-align: middle; overflow: hidden;}'
                        +'    .cl-tip.select .checkbox{background-position: 0 .05rem;}'
                        +'</style>';

                    new popShow({
                        css : beginChatCss,
                        html : beginChatHtml,
                        callback : function(el){
                            el.on('click','.close-js',function(){//关闭
                                el.remove();
                                  var obj = new Popup({
                                        type: "toast",
                                         content:"发送成功"
                                       });
                                return false;
                            }).on('click','.after-js',function(){//仅与对方畅聊
                                    $.ajax({
                                      type: "POST",
                                      cache:false,
                                      url: "/v2/mail/costCoinForSingleTimeMail.do",
                                      data: {"memberId": self.memberId},
                                      dataType:"json",
                                    success: function(json){
                                        el.remove();
                                       if(json.status==1){
                                          if(json.data.costFlag==1 || json.data.costFlag==3){
                                             //成功开启与对方畅聊
                                               var obj = new Popup({
                                               type: "toast",
                                               content:"已使用"+json.data.coinCost+"个珍爱币与对方畅聊"
                                               });
                                          }
                                       }else{
                                           var obj = new Popup({
                                           type: "toast",
                                            content:json.msg
                                          });
                                       }
                                     },error:function(){
                                        el.remove();
                                        var obj = new Popup({
                                        type: "toast",
                                         content:"服务器出现未知错误，请重试或反馈问题！"
                                       });
                                    }
                                 });

                            }).on('click','.todayTip-js',function(){//今日不在提醒

                                var $this = $(this);
                                $this.toggleClass('select');
                                var cookiesValue = 0;
                                if($this.hasClass('select')){
                                   //勾选今天不在提醒
                                   cookiesValue = 1
                                }
                                $.ajax({
                                   type: "POST",
                                   async:true,
                                   cache:false,
                                   url: "/v2/personal/addCookies.do",
                                   data: {"cookiesName": "singleTimeLeer","cookiesValue":cookiesValue,"storeTime":24*60*60},
                                   dataType:"json",
                                   success: function(json){
                                   },error:function(){
                                    }
                                 });


                            }).on('click','.toChat-js',function(){//全站无限畅聊
                                window.location.href="/v2/payment/list.do?paymentChannel=5135&pageSrc=11";
                                el.remove();
                            });
                        }
                    });
					}else if(json.data.toastFlag==2){//邮件QA问题设置提醒
						new Popup({
								type: "confirm",
								title: "关心问题设置",
								content: "<p style='font-size:1.1em'>当TA给你打招呼时<br>向TA提出你最关心的问题</p>",
								ok:"立即设置",
								cancel: "&nbsp&nbsp取消&nbsp&nbsp",
								okCallBack: function(){
										window.location.href = "/v2/personal/showMailQuestion.do";
								},
								closeCallBack: function(){
								}
						});
					}else if(json.data.toastFlag==3){//自定义打招呼弹窗
						loadScript(ZAurl+'imwap/wap2015/js/setHiDialog.js',function(){
							setHipop.init(1);
						})
					}
		}else{
			self.showToast(json.msg);
		}
	},
	sendMsgTip:function(){
		var self = this;
		var sayHello = $("#say_hello");
		var load = new Popup({
			type: "loading",
		});
		$.ajax({
			type: "POST",
			cache:false,
			url: "/v2/personal/confirmMsgRemind.do",
			data: {"activeId": sayHello.attr("data_src"),"userId": sayHello.attr("data_src"),"activeType": 6,"pageSource": 1,"messageSrc": 2},
			dataType:"json",
			success: function(json){
				load.closeLoad();
				var tip = '打招呼弹层';
				var subTip = '短信提醒';
				if(json.status==1){//成功
					_hmt.push([self.trackEvent, tip, tip+'-'+subTip+'-成功']);
					self.showToast(json.msg);
				}else if(json.status==2){ //余额不足
					_hmt.push([self.trackEvent, tip, tip+'-'+subTip+'-购买']);
					self.showToast(json.msg);
					setTimeout(function(){
        				window.location.href=json.paymentUrl;
					},800);
				}else if(json.status==-1){//发送失败
					_hmt.push([self.trackEvent, tip, tip+'-'+subTip+'-失败']);
					self.showToast(json.msg);
				}
			},error:function(){
				self.showToast(self.serverErrorText);
			}
		});
	},
	showToast:function(text){
		var obj = new Popup({
			type: "toast",
			content:text
		});
	},
	sendMail:function(){//发邮件
		var self = this;
		var tip = '发邮件';
		$("#send_mail").on("click",function(){
			if(self.isLogin === "0"){
				_hmt.push([self.trackEvent, self.trackTitle, self.trackTitle+'-'+tip+'-登录']);
            	window.location.href = self.loginUrl;
				return;
			}
			var isCanSendMail = self.isCanSendMail;
			var target = $(this);
            if(isCanSendMail === '1'){
				_hmt.push([self.trackEvent, self.trackTitle, self.trackTitle+'-'+tip+'-对话']);
				window.location = "/v2/mail/readPage.do?memberId="+$(target).attr("memberid");
            }else{
         	    self.showToast(self.upVipText);
			    _hmt.push([self.trackEvent, self.trackTitle, self.trackTitle+'-'+tip+'-购买']);
      	        setTimeout(function(){
			  	  window.location.href=self.payUrl+"?paymentChannel=5149";
		        },800);
            }
		});
	},
	sendGift:function(){//送礼物
		var self = this;
		var gift = '送礼物';
		$("#say_gift").on("click",function(){
			if(self.isLogin === '0'){
				_hmt.push([self.trackEvent, self.trackTitle, self.trackTitle+'-'+gift+'-跳转登录']);
            	window.location.href = self.loginUrl;
				return;
            }
			_hmt.push([self.trackEvent, self.trackTitle, self.trackTitle+'-'+gift+'-执行交互']);
			var memberId = $(this).attr("memberid");
			window.location.href = '/v2/personal/selectRose.do?userId='+memberId+'&backHome=/u/'+memberId;

		});
	},
	lineTips:function(){//上线提醒 联系他
		var self = this;
		var bottom_box = $("#bottom_box");
		bottom_box.on("click","span",function(){
			var that = $(this);
			var i = that.index();
			if(i == 0){
				var tip = '上线提醒';
				_hmt.push([self.trackEvent, self.trackTitle,  self.trackTitle+'-'+tip+'-点击']);
				self.showConfirmPopup("",self.downAppText,self.sureText,self.cancelText,
					function(args){
						_hmt.push([self.trackEvent, self.trackTitle, self.trackTitle+'-'+tip+'-关闭']);
					},function(){
						_hmt.push([self.trackEvent, self.trackTitle, self.trackTitle+'-'+tip+'-马上下载']);
						window.location.href=self.wakeupappUrl;
					}
				);
			}else{
				var tip = '联系ta';
				_hmt.push([self.trackEvent, self.trackTitle,  self.trackTitle+'-'+tip+'-点击']);
				if(self.isLogin === '0'){
					window.location.href = self.loginUrl;
					return;
				}
				var load = new Popup({
					type: "loading",
				});
				$.ajax({
					url : "/v2/hongniang/sendRequest.do",
					type : 'post',
					dataType : "json",
					data: {objmid:self.memberId},
					success : function(data) {
						load.closeLoad();
						if(data.errorcode == 1){
							that.find("i").addClass("active");
							that.find("label").text("已联系");
							_hmt.push([self.trackEvent, self.trackTitle, self.trackTitle+'-'+tip+'-联系成功']);
						}else{
        					self.showToast(data.errormsg);
							_hmt.push([self.trackEvent, self.trackTitle, self.trackTitle+'-'+tip+'-联系失败']);
						}
					},
					error:function(){
						load.closeLoad();
    					self.showToast(self.serverErrorText);
        			}
				});
			}
		});
	},
	guessLove:function(){//猜你喜欢
		var img_box = $("#recommend_container");
		var childs = img_box.children("ul").children("li");
		var l = childs.length;
		if(l > 0){
			var marginLeft = Math.ceil($(childs[1]).css("margin-left").replace("px",""))+5;
			img_box.css("width",l*(childs[0].offsetWidth)+l*marginLeft);
			new IScroll('#recommend_box', {scrollX: true,scrollY:false,scrollbars:'custom',click: true});
		}
	}
}
