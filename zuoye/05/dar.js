Vue.component('no2',{
	props:['box_arr'],
		data() {
			return {
				arr:this.box_arr,
				index:0,
				tran: 'l'
			}
		},
		methods: {
			r() {
				this.tran = 'r'
				this.index--
				if(this.index<=-1){
					this.index=this.arr.length-1
				}
			}
		},
		mounted() {
			var img = this.$refs.img[0]
			img.onload = () => {
				var h = this.$refs.img[0].offsetHeight
				for(var i = 0; i < this.$refs.img.length; i++) {
					this.$refs.img[i].style.height = h + 'px'
				}
				this.$el.style.height = h + 'px'
			}
		},
	template:`
	<div style="position:relative">
				<transition :name="tran" v-for="(i,$index) in arr">
					<div style="width: 100%;position: absolute;" v-show="$index==index">
						<img :src="i" width="100%" ref="img"/>
					</div>
				</transition>
				<div class="r" @click="r">
					>
				</div>
			</div>
	`
})
new Vue({
	el: "#no1",
	data:{
		arr: [
				'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODBkMjY5NjYzNDJmNTM1ZjdkYmEwMjY2OTNmMmQ5ZjcucG5n.png',
				'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvNzY5MDExMmQ0MjIzN2Y5YTg0OWVjNjc0N2NmOGMxYWYucG5n.png',
				'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODBkMjY5NjYzNDJmNTM1ZjdkYmEwMjY2OTNmMmQ5ZjcucG5n.png',
				'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvNzY5MDExMmQ0MjIzN2Y5YTg0OWVjNjc0N2NmOGMxYWYucG5n.png'
			]
	}
})