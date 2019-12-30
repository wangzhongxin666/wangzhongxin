<template>
	<div>
		<no7></no7>
	    <div style="width: 100%;height: 378px;">
	    			<div style="width: 1000px;height: 192px;margin: 0 auto;padding: 93px 0;">
	    				<el-carousel indicator-position="outside">
	    					<el-carousel-item v-for="i in arr2">
	    						<div style="width: 118px;height: 118px;float: left;margin-top: 30px;"><img style="width: 78px;height: 78px;margin-left: 20px; border-radius: 50%;" :src="i.img" alt="" /></div>
	    						<div style="width: 759px;float: left; margin-left: 30px;font-size: 22px;color: #66666;">{{i.text}}</div>
	    						<div style="width: 759px;float: left; margin-left: 30px;font-size: 13px;color: #66666;line-height: 24px;margin-top: 15px;">{{i.name}}</div>
	    					</el-carousel-item>
	    				</el-carousel>
	    			</div>
	    		</div>

	</div>
</template>

<script>
	export default {
			data(){
				return{
					arr2:[
						{
							img:'https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wNy83OGZjYTI1ZjlmZTMwMWYzMGE3M2IxODg5OThlZGNlZi0xMTB4MTEwLTkwLndlYnA_p_p100_p_3D.webp',
							text:'技术工程师',
							name:'起飞页是响应式建站专家，拥有全球最领先的屏幕界面智能识别技术，实现所有建站功能组件在多种屏幕下的完美呈现，真正让您的桌面/平板/手机3个网站同步生成，还可连接微信公众平台，创建您的微站。当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。'
						},
						{
							img:'https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wNy85NjliOTY3YTA4ZmY4NmE4Zjk0NDM5YmMyMGMxMDFiYy0xMTB4MTEwLTkwLndlYnA_p_p100_p_3D.webp',
							text:'技术工程师',
							name:'起飞页是响应式建站专家，拥有全球最领先的屏幕界面智能识别技术，实现所有建站功能组件在多种屏幕下的完美呈现，真正让您的桌面/平板/手机3个网站同步生成，还可连接微信公众平台，创建您的微站。当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。'
						}
					]
				}
			}
		};
</script>

<style>
	.el-carousel{
			height: 190px;
		}
		.el-carousel__item h3 {
				color: #475669;
				font-size: 18px;
				opacity: 0.75;
				line-height: 300px;
				margin: 0;
			}
			.el-carousel--horizontal{
				overflow: hidden;
			}
			.el-carousel__arrow{
				left: 0;
				width: 0;
				height: 0;
				color: #fff;
			}
</style>