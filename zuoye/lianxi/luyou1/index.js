var routes=[
	{
		path:'/',
		component:{template:'#no1'}
	},
	{
		path:'/no2',
		component:{template:'#no2'},
		
	},
	{
		path:'/no3',
		component:{template:'#no3'}
	}
	
]
var router=new VueRouter({
	routes
})

new Vue({
	el:"#box",
	router
})