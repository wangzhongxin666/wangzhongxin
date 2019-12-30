<template>
	<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#ffffff" text-color="black" active-text-color="#42eaff">
		<el-menu-item><img src="https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cHM6Ly81YWViZjhiNjA1OTMxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDUvY2QwYzNkNjRmNjUwYzJhMTNkY2NhYmFiMThhODgyMmEtOTAud2VicA_p_p100_p_3D_p_p100_p_3D.webp" style="wdith:100%;height: 100%;margin-right: 200px;"></el-menu-item>
		<el-menu-item index="/">网站首页</el-menu-item>
		<el-menu-item index="/n2">产品中心</el-menu-item>
		<el-menu-item index="/n3">合作案例</el-menu-item>
		<el-menu-item index="/n4">核心团队</el-menu-item>
		<el-menu-item index="/n5">行业动态</el-menu-item>
		<el-menu-item index="/n6">关于我们</el-menu-item>
		<li style="text-align: center;line-height: 60px;">400-200-2200</li>
	</el-menu>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: '/'
			};
		},
		mounted(){
			this.activeIndex = this.$route.path
		},
		methods: {
			handleSelect(key, keyPath) {
				location.href = '#'+key
			}
		}
	}
</script>

<style>

</style>