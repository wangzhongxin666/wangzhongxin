<template>
	<div id="app">
		 <div style="height: 60px;position: absolute;top: 0;left: 0;width: 100%;">
		 	<menus></menus>
		 </div>
		 <div style="min-height: 1000px;margin-top: 60px;">
		 	   <router-view></router-view>
		 </div>
		 <div style="height: 200px;background: #000;">
		 	<foots></foots>
		 </div>
	</div>
</template>

<script>
	import menus from './menu.vue'
	import foots from './foot.vue'
	export default {
		name: 'app',
		components:{
			menus,
			foots
		},
		data() {
			return {
                
			}
		}
	}
</script>

<style>
    *{
    	margin: 0;
    	padding: 0;
    }
</style>