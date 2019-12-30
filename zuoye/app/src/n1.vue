<template>
	<div>
		<div style="width: 100%; overflow: hidden;">
			<img src="https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cHM6Ly81YWViZjhiNjA1OTMxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDUvZmNlODFiMDA0NTVjZWNhMWIxYjM1YjA4NzY3MWI0MWMtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp" alt="" style="width: 100%;height: 100%;" >
		</div>
		<div style="width: 100%;height: 100px;overflow: hidden;margin-top: 50px;">
		<div style="width: 100px;height: 5px;background: #007AFF;margin: 0 auto;"></div>
		<no1></no1>
		</div>
		<div style="width: 100%;height: 300px;overflow: hidden;position: relative;">
			<div>
				<ul class="l1" :style="{left:index*-500+'px'}">
					<li class="l2" v-for="(i,$index) in 5" :key="$index">
						<img :src="arr[$index]" class="imgs">
					</li>
				</ul>
				<span class="left" @click='shang'><</span>
				<span class="right" @click='xia'>></span>
			</div>
			
			
			</div>
			<div class="L1"><a href="#/n2">MORE</a></div>
			<div style="width: 100%;height: 400px;background-color: #CCCCCC;padding-top: 20px;">
			<div style="width: 100px;height: 5px;background: #007AFF;margin: 0 auto;"></div>
			<no2></no2>
			<div style="width: 80%;height: 150px;margin-left: 300px; margin-top: 50px;padding-bottom: 40px;">
				<div class="L3">
					<img src="https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9hMWU4NDZlOTg1OThiY2QzYTczNjAyMzIxMThkZGYwNy05MC53ZWJw.webp" alt="">
					<p style="line-height: 40px;">无人驾驶</p>
				</div>
				<div class="L3">
					<img src="https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9jNDRjYmQ2MmY1NjVhNzJkN2I4ZWJmNjE0YTA4MWNkNi05MC53ZWJw.webp" alt="">
					<p style="line-height: 40px;">办公效率</p>
				</div>
				<div class="L3">
					<img src="https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS82NTBjMjY5ODU5YTNkZTBkNGE4MGFiMzVmOWQ4ZDZiZS05MC53ZWJw.webp" alt="">
					<p style="line-height: 40px;">响应式布局</p>
				</div>
				<div class="L3">
					<img src="https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS80NzFkNjc5NmNjM2U3MTJiNjhhNzQwNGE3NWQxNzA2YS05MC53ZWJw.webp" alt="">
					<p style="line-height: 40px;">服务质量</p>
				</div>
				<div class="L3">
					<img src="https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9mZmQ3ZGI2OWU3OTBlNWY0ZWExYjljMzIyODcxNTRhOS05MC53ZWJw.webp" alt="">
					<p style="line-height: 40px;">信息大全</p>
				</div>
				<div class="L3">
					<img src="https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS83NzI4NzA5ODMyMjk0YmNhNzhiMzNlYTJiZWNmNmNiMS05MC53ZWJw.webp" alt="">
					<p style="line-height: 40px;">信息采集</p>
				</div>
			</div>
			<div class="L1"><a href="#/n5">MORE</a></div>
			</div>
	<div style="width: 100%;height: 380px;overflow: hidden;padding-top: 20px;">
		<div style="width: 100px;height: 5px;background: rgba(66,234,255,0.8);margin: 0 auto;"></div>
		<no1></no1>
		<div style="width: 100%;position: relative;">
			<div style="width: 50%;height: 100px;border: 1px solid #909399;position: absolute;top: 50px;left: 350px;z-index: 99;padding:20px 40px 20px 40px;background-color: #FFFFFF;">
				<div class="hove-1">
					<div class="hove-2">
						<p style="font-size: 28px;">2000+名</p>
						<p style="color: #5ddffe;">研发工程师</p>
					</div>
				</div>
				<div class="hove-1">
					<div class="hove-2">
						<p style="font-size: 28px;">1400+项</p>
						<p style="color: #5ddffe;">技术专利</p>
					</div>
				</div>
				<div class="hove-1">
					<div class="hove-2">
						<p style="font-size: 28px;">200+条</p>
						<p style="color: #5ddffe;">自动化生产线</p>
					</div>
				</div>
				<div class="hove-1">
					<div class="hove-2 s">
						<p style="font-size: 28px;">80+条</p>
						<p style="color: #5ddffe;">自动化生产线</p>
					</div>
				</div>
			</div>
			<div style="width: 100%;height: 200px;background-color: rgba(66,234,255,0.8);position: absolute;top: 120px;left: 0;"></div>
		</div>
	</div>
	<div style="width: 100%;height: 600px;padding-top: 20px;">
		<div style="width: 100px;height: 5px;background: rgba(66,234,255,0.8);margin: 0 auto;"></div>
		<no1></no1>
		<div style="width: 80%;height:200px;margin: 0 auto;margin-top: 40px;">
			<div class="L5">
				<p style="font-size: 32px;color: #CCCCCC;">08-24</p>
				<p style="line-height: 40px;">致力于让办公管理变得更简单，响应式网站的倡导者</p>
				<div class="L6">
					<span>当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为...</span>
				</div>
				<div style="width: 100%;height: 200px;">
					<img class="i1" src="https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wNS83MWJlZWVlNWM4MzliZDQ2NDMzZTA0ZGRjODlkNzFlOC02MDB4MzA0LTkwLndlYnA_p_p100_p_3D.webp">
				</div>
				<button class="btn">+</button>
			</div>
			<div class="r6">
				<div class="r6-1">
					<p style="color: #CCCCCC;line-height: 40px;">十万家企业正在使用我们研发的产品</p>
					<span style="font-size: 14px;color: #CCCCCC;">1、当今最领先的响应式自助建站平台</span><br>
					<span style="font-size: 14px;color: #CCCCCC;">2、流线式网页布局设计方案和可视化图文内容编辑模</span><br>
					<span style="font-size: 14px;color: #CCCCCC;">3、我们是响应..</span>
					<div class="r6-2">
						<p style="font-size: 28px;color: #CCCCCC;">08-24</p>
						<br>
						<p>|→</p>
					</div>
				</div>
				<div class="r6-1">
					<p style="color: #CCCCCC;line-height: 40px;">我们是响应式网站的倡导者</p>
					<span style="font-size: 14px;color: #CCCCCC;">流线式网页布局设计方案和可视化图文编辑，</span><br>
					<span style="font-size: 14px;color: #CCCCCC;">流线式网页布局设计方案和可视化图文内容编辑模式让网站制作成为一件...</span>
					<div class="r6-2">
						<p style="font-size: 28px;">08-24</p><br>
						<p>|→</p>
					</div>
				</div>
				<div class="r6-1">
					<p style="color: #CCCCCC;line-height: 40px;">当今最领先的响应式自助建站平台</p>
					<span style="font-size: 14px;color: #CCCCCC;">流线式网页布局设计方案和可视化图文编辑，</span><br>
					<span style="font-size: 14px;color: #CCCCCC;">流线式网页布局设计方案和可视化图文内容编辑模式让网站制作成为一件...</span>
					<div class="r6-2">
						<p style="font-size: 28px;color: #CCCCCC;">08-24</p><br>
						<p>|→</p>
					</div>
				</div>
				
			</div>
		</div>
	</div>
	<div style="width: 100%;min-height: 400px;">
		<div style="width: 100px;height: 5px;background: rgba(66,234,255,0.8);margin: 0 auto;"></div>
		<no3></no3>
		<div style="width: 80%;height: 180px;margin: 0 auto;margin-top: 40px;">
			<div class="f1"><img src="https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMi8yODIxMDdkZTBiMjBiZWNmMDFkMzJmNTZmMzU5NGYyMi05MC53ZWJw.webp" style="width: 100%;height: 100%;"></div>
			<div class="f1"><img src="https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMi9lMmY5ZDY1M2JiNGI3MDM5NTEzNDUwMGJhMmEzMjUwYy05MC53ZWJw.webp" style="width: 100%;height: 100%;"></div>
			<div class="f1"><img src="https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMi9mNjRiNDg3YjgzYmVkOTBiZTAyZmY5MWFmZjIwYzQ5My05MC53ZWJw.webp" style="width: 100%;height: 100%;"></div>
			<div class="f1"><img src="https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMi9hODIyODUyMzAzZTA1NjMzZTI2YWMzNmUyZGUwNDM2OS05MC53ZWJw.webp" style="width: 100%;height: 100%;"></div>
			<div class="f1"><img src="https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMi85ODYxMmFlMDYzNmE2ZjljMGVmZDcxZjQ3NTUxNDVmMC05MC53ZWJw.webp" style="width: 100%;height: 100%;"></div>
			<div class="f1"><img src="https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMi9kMjkzZTBiODFiZjcyYjQ5YWIxYzZlODQ2ZDVhOGFkNi05MC53ZWJw.webp" style="width: 100%;height: 100%;"></div>
			<div class="f1"><img src="https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMi8zYjk5NjU1MTM1ZmViMTczYWQ5ODhhZjA2MDU1ZWEyOC05MC53ZWJw.webp" style="width: 100%;height: 100%;"></div>
		</div>
	</div>
	<div style="width: 100%;min-height:500px ;">
		<div style="width: 100%;height: 500px;background: rgba(38,212,239,0.7);">
					<div style="width: 1190px;height: 100px;padding: 78px 0 46px;margin: auto;text-align: center;">
						<div style="width: 60px;height: 4px; background: #fff;position: absolute; left: 48%;"></div>
						<div style="font-size:34px;color: #fff;margin-top:20px;">用户如何评价我们</div>
						<div style="font-size: 14px;color: #fff;padding-top: 10px;">让生活和社会更安全</div>
					</div>
					<div style="width: 1000px;height: 152px;margin: 0 auto;margin-top: 20px;">
						<el-carousel indicator-position="outside">
							<el-carousel-item v-for="i in arr2">
								<div style="width: 118px;height: 118px;float: left;"><img style="width: 78px;height: 78px;margin-left: 20px; border-radius: 50%;" :src="i.img" alt="" /></div>
								<div style="width: 759px;float: left; margin-left: 30px;font-size: 13px;color: #fff;line-height: 24px;">{{i.name}}</div>
							</el-carousel-item>
						</el-carousel>
					</div>
				</div>
		
	</div>
	</div>
</template>

<script>
	export default{
		// name:'app',
		components:{},
		data(){
			return{
				arr: [
					'https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wNS9jNzNkNGY1MzFjNjk2MGFmMDdlYjdiMTNiMTM5ZTY1Zi00NDB4MzIwLTkwLndlYnA_p_p100_p_3D.webp',
					'https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wNS83ODExNDNjZTRjMDdlMTA3ZmM1ZjdiNTNhODc3NjUzZi00NDB4MzIwLTkwLndlYnA_p_p100_p_3D.webp',
					'https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wNS83MWJlZWVlNWM4MzliZDQ2NDMzZTA0ZGRjODlkNzFlOC00NDB4MzIwLTkwLndlYnA_p_p100_p_3D.webp',
					'https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wNS9jMmNlMGUyMGU3YzVlYjBjMzNkM2NhYzEyOTc1YjllMC00NDB4MzIwLTkwLndlYnA_p_p100_p_3D.webp',
				],
				index: 0,
				time: '',
				
			arr2:[
							{
								img:'https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wNy83OGZjYTI1ZjlmZTMwMWYzMGE3M2IxODg5OThlZGNlZi0xMTB4MTEwLTkwLndlYnA_p_p100_p_3D.webp',
								name:'起飞页是响应式建站专家，拥有全球最领先的屏幕界面智能识别技术，实现所有建站功能组件在多种屏幕下的完美呈现，真正让您的桌面/平板/手机3个网站同步生成，还可连接微信公众平台，创建您的微站。当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。'
							},
							{
								img:'https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wNy85NjliOTY3YTA4ZmY4NmE4Zjk0NDM5YmMyMGMxMDFiYy0xMTB4MTEwLTkwLndlYnA_p_p100_p_3D.webp',
								name:'起飞页是响应式建站专家，拥有全球最领先的屏幕界面智能识别技术，实现所有建站功能组件在多种屏幕下的完美呈现，真正让您的桌面/平板/手机3个网站同步生成，还可连接微信公众平台，创建您的微站。当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。'
							}
						]	
				
			}
		},
		methods: {
			xia: function() {
				this.index++;
				if(this.index == 2) {
					this.index = 0
				}
			},
			shang: function() {
				this.index--;
				if(this.index == -1) {
					this.index = 1
				}
			}
		}
	}
	
</script>

<style>
	a{
		text-decoration: none;
	}
	.L1{
		width: 100px;
		height: 30px;
		margin-top: 60px;
		border: 1px solid #0000FF;
		border-radius:10px ;
		margin: 0 auto;
		text-align: center;
		line-height: 30px;
		background-color: rgb(66, 234, 255);
		margin-bottom: 20px;
		
	}
	.L1:hover{
		background: #FFFFFF;
		color: rgb(66, 234, 255)
	}
	.L2{
		 width: 30%;
		 height: 280px;
		 margin: 10px 10px;
		 float: left;
	}
	.L3{
		width: 110px;
		height: 110px;
		float: left;
		text-align: center;
		padding: 20px 20px;
		margin:0 20px;
		background-color:rgba(115,192,244,0.5);
	}
	.L3:hover{
		background-color: #00FFFF;
	}
	.hove-1{
		width: 25%;
		height: 80px;
		float: left;
		overflow: hidden;
	}
	.hove-2{
		width: 100%;
		height: 100%;
		border-right: 1px solid #999999;
		text-align:center;
		margin-top: 20px;
		transition: all 0.5s;
	}
	.s{
		border: none;
	}
	.hove-2:hover{
		margin-top: 0;
	}
	.L5{
		width: 40%;
		height: 380px;
		margin-right: 20px;
		padding: 40px;
		overflow: hidden;
		float: left;
	}
	.L5:hover .btn{
		margin-top: 20px;
	}
	.btn{
	 width: 200px;
	 text-align: center;
	 line-height: 50px;
	 margin-top: 90px;
	 font-size: 34px;
	 transition: all 0.5s;
	 background-color: #000000;
	 color: #fff;
	}
	.L6{
		 width: 90%;
		 height: 50px;
		 font-size: 14px;
		 transition: all 0.5s;
		 overflow: hidden;	
	}
	.L5:hover .L6{
		margin-left: 20px;
		 padding-left:20px ;
		border-left:1px solid #000000 ;
	}
	.L5:hover .i1{
		
		height: 110%;
	}
	.i1{
		width: 100%;
		height: 100%;
		transition: all 0.5s;
	}
	.r6{
		width: 44%;
		height: 380px;
		float: left;
		padding: 40px;
	}
	.r6-1{
		width: 98%;
		height: 100px;
		border-top: 1px solid #000000;
		padding: 20px;
		position: relative;
	}
		
	.r6-2{
		position: absolute;
		top: 20px;
		right: 50px;
		color: #CCCCCC;
	}
	.r6-1:hover {
		margin-left: 20px;
	}
	.l1 {
					width: 300%;
					height: 300px;
					position: absolute;
					transition: 0.35s;
				}
				
				.l1 .l2 {
					width: 565px;
					float: left;
					list-style: none;
				}
				
				.imgs {
					width: 100%;
					height:300px;
				}
				
				.left {
					width: 60px;
					height: 60px;
					background-color: rgba(0, 0, 0, .5);
					position: absolute;
					left: 0;
					top: 50%;
					margin-top: -30px;
					text-align: center;
					line-height: 60px;
					font-size: 20px;
					color: #fff;
				}
				
				.right {
					width: 60px;
					height: 60px;
					background-color: rgba(0, 0, 0, .5);
					position: absolute;
					right: 0;
					top: 50%;
					margin-top: -30px;
					text-align: center;
					line-height: 60px;
					font-size: 20px;
					color: #fff;
				}
			.f1{
				width: 150px;
				height: 80px;
				float: left;
				margin: 40px 20px;
			}
			
	
	.el-carousel{
		height: 150px;
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
			color: rgba(38, 212, 239, 0.7);
		}
	
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
		color: rgba(38, 212, 239, 0.7);
	}
	
.el-carousel{
	height: 150px;
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
		color: rgba(38, 212, 239, 0.7);
	}
	
	.el-carousel{
		height: 150px;
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
			color: rgba(38, 212, 239, 0.7);
		}
	.el-carousel__item, .el-carousel__mask{
		height: 50%;
	}
	
</style>