<template>
	<div>
		<headers>
			<span slot="tite">通讯录</span>
			<i class="iconfont" slot="icon1" style="float: right;margin-left: 1.481481rem;">&#xe6ac;</i>
			<i class="iconfont" slot="icon2" style="float: right;">&#xe63a;</i>
		</headers>
		<div class="content">
			<div>
				<friend>
					<div class="friend-img" style="background-color: #fa9d3d;" slot="friend-img">
						<i class="iconfont" style="font-size: 0.622222rem;" >&#xe6dc;</i>
					</div>
					<span slot="friend-name" class="friend-name">新来的沙雕</span>
				</friend>
				<friend>
					<div class="friend-img" style="background-color: #07c062;" slot="friend-img">
						<i class="iconfont" style="font-size: 0.622222rem;">&#xe6dc;</i>
					</div>

					<span slot="friend-name" class="friend-name">好多沙雕</span>
				</friend>
				<friend>
					<div class="friend-img" style="background-color: #2781d9;" slot="friend-img">
						<i class="iconfont" style="font-size: 0.622222rem;">&#xe627;</i>
					</div>

					<span slot="friend-name" class="friend-name">标签</span>
				</friend>
				<friend>
					<div class="friend-img" style="background-color: #2781d9;" slot="friend-img">
						<i class="iconfont" style="font-size: 0.622222rem;">&#xe64d;</i>
					</div>

					<span slot="friend-name" class="friend-name">公众号</span>
				</friend>
				<!--  -->
			</div>
		</div>
	</div>
</template>
<style>
	.friend-name{
		font-size: 0.592592rem;
		line-height: 1.629629rem;
	}
</style>
