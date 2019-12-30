import lee from './lee.vue'

var index = {
	install(Vue){
		Vue.component('no1',lee)
		Vue.component('no1',{
			template:`
			<div style="width: 200px;height: 50px;margin: 0 auto;text-align: center;">
			<p style="font-size: 28px;line-height: 50px;">双目深度学习</p>
			<span style="font-size: 14px;">让生活和社会更安全</span>
		</div>`
		})
		Vue.component('no2',{
			template:`<div style="width: 250px;height: 50px;margin: 0 auto;text-align: center;"><p style="font-size: 28px;line-height: 50px;">
革新时代的先驱</p>
		<span style="font-size: 14px;">十万企业用户的共同选择，查看更多</span>
		</div>`
		})
		Vue.component('no3',{
					template:`<div style="width: 350px;height: 50px;margin: 0 auto;text-align: center;"><p style="font-size: 28px;line-height: 50px;">
		
为企业提供安全解决方案</p>
				<span style="font-size: 14px;">十万企业用户的共同选择，查看更多</span>
				</div>`
				})
				Vue.component('no4',{
					template:`<div style="width: 100%;height: 250px;background-color: rgba(38,212,239,0.7);padding-top: 50px;">
			<div style="width: 150px;height: 5px;background: #ffffff;margin-left: 50px;"></div>
			<div style="font-size: 32px;color: #FFFFFF;line-height: 80px;margin-left: 50px;">人脸识别行业动态</div>
			<div style="font-size: 14px;color: #FFFFFF;line-height: 30px;margin-left: 50px;">让社会和生活跟安全</div>
		</div>`
				})
				Vue.component('no5',{
							template:`<div style="width: 100%;height: 250px;background-color: rgba(38,212,239,0.7);padding-top: 50px;">
					<div style="width: 150px;height: 5px;background: #ffffff;margin-left: 50px;"></div>
					<div style="font-size: 32px;color: #FFFFFF;line-height: 80px;margin-left: 50px;">产品服务</div>
					<div style="font-size: 14px;color: #FFFFFF;line-height: 30px;margin-left: 50px;">强人工智能人脸识别系统</div>
				</div>`
						})
						Vue.component('no6',{
									template:`<div style="width: 100%;height: 250px;background-color: rgba(38,212,239,0.7);padding-top: 50px;">
							<div style="width: 150px;height: 5px;background: #ffffff;margin-left: 50px;"></div>
							<div style="font-size: 32px;color: #FFFFFF;line-height: 80px;margin-left: 50px;">
为企业提供安全解决方案</div>
							<div style="font-size: 14px;color: #FFFFFF;line-height: 30px;margin-left: 50px;">十万企业用户的共同选择，查看更多</div>
						</div>`
								})
								Vue.component('no7',{
																	template:`<div style="width: 100%;height: 250px;background-color: rgba(38,212,239,0.7);padding-top: 50px;">
															<div style="width: 150px;height: 5px;background: #ffffff;margin-left: 50px;"></div>
															<div style="font-size: 32px;color: #FFFFFF;line-height: 80px;margin-left: 50px;">
								核心研发团队</div>
															<div style="font-size: 14px;color: #FFFFFF;line-height: 30px;margin-left: 50px;">十万企业用户的共同选择，查看更多</div>
														</div>`
																})
																Vue.component('no8',{
																									template:`<div style="width: 100%;height: 250px;background-color: rgba(38,212,239,0.7);padding-top: 50px;">
																							<div style="width: 150px;height: 5px;background: #ffffff;margin-left: 50px;"></div>
																							<div style="font-size: 32px;color: #FFFFFF;line-height: 80px;margin-left: 50px;">
																关于我们</div>
																							<div style="font-size: 14px;color: #FFFFFF;line-height: 30px;margin-left: 50px;">公司简介 / 联系我们 / 加入我们</div>
																						</div>`
																								})
	}
}

export default index

