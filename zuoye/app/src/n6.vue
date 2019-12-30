<template>
	<div>
		<no8></no8>
		<div style="width: 100%;min-height: 567px;">
					<div style="width: 1190px;margin: auto;padding-top: 60px;">
						<div style="width: 843px;float: left;">
							<div style="font-size: 22px;color: #000000;">公司简介</div>
							<div><br></div>
							<div style="font-size: 14px;color: #808080;line-height: 26px;">
								当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。想创建一个简单的单页式站点，还是一个专业的公司网站，亦或是一个别具一格的博客？起飞 页可以满足您的所有需求。我们是响应式网站的倡导者。
							</div>
							<div><br></div>
							<div style="font-size: 14px;color: #808080;line-height: 26px;">
								当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。想创建一个简单的单页式站点，还是一个专业的公司网站，亦或是一个别具一格的博客？起飞 页可以满足您的所有需求。我们是响应式网站的倡导者，所有前端页面代码均采用HMLT5和CSS3实现。起飞页提供了海量精美网站模板和成品网站，几乎覆盖了当今各个行业，您只需在模板上进行少量修改。
							</div>
							<div><br></div>
							<div style="font-size: 14px;color: #808080;line-height: 26px;">
							起飞页是响应式建站专家，拥有全球最领先的屏幕界面智能识别技术，实现所有建站功能组件在多种屏幕下的完美呈现，真正让您的桌面/平板/手机3个网站同步生成，还可连接微信公众平台，创建您的微站。
							</div>
						</div>
						<div style="float: right;">
							<div>
							  <div id="allmap"></div>
							 </div>
						</div>
					</div>
				</div>
	</div>
</template>

<script>
	
	export default {
		  mounted() {
		   var map = new BMap.Map("allmap");
		   map.addControl(new BMap.NavigationControl());
		   map.addControl(new BMap.ScaleControl());
		   map.addControl(new BMap.OverviewMapControl());
		   map.addControl(new BMap.MapTypeControl());
		   map.centerAndZoom('邯郸', 11);
		  }
		 }

</script>

<style>
	#allmap {
		  width: 290px;
		  height: 350px;
		  float: left;
		  background: #004444;
		 }

</style>