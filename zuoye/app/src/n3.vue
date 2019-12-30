<template>
	<div>
		<no6></no6>
		<div style="width: 100%;min-height: 338px;">
				<div style="width: 1190px;margin: 0 auto;">
					<div v-for="i in arr_1" style="float: left;margin-top: 70px;"><img style=" width: 113px;height: 53px;margin-left: 35px;" :src="i.img" alt="" /></div>
					<div v-for="i in arr_1" style="float: left;margin-top: 70px;"><img style=" width: 113px;height: 53px;margin-left: 35px;" :src="i.img" alt="" /></div>
			</div>
			</div>
	</div>
</template>

<script>
export default {
		data(){
			return{
				arr_1:[
					{
						img:'https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMi8yODIxMDdkZTBiMjBiZWNmMDFkMzJmNTZmMzU5NGYyMi05MC53ZWJw.webp'
					},
					{
						img:'https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMi9lMmY5ZDY1M2JiNGI3MDM5NTEzNDUwMGJhMmEzMjUwYy05MC53ZWJw.webp'
					},
					{
						img:'https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMi9mNjRiNDg3YjgzYmVkOTBiZTAyZmY5MWFmZjIwYzQ5My05MC53ZWJw.webp'
					},
					{
						img:'https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMi9hODIyODUyMzAzZTA1NjMzZTI2YWMzNmUyZGUwNDM2OS05MC53ZWJw.webp'
					},
					{
						img:'https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMi85ODYxMmFlMDYzNmE2ZjljMGVmZDcxZjQ3NTUxNDVmMC05MC53ZWJw.webp'
					},
					{
						img:'https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMi9jYjU5MDVjODE1ZDYyZDI4N2UzYjFlODUwNTA5NTYwNy05MC53ZWJw.webp'
					},
					{
						img:'https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMi9kMjkzZTBiODFiZjcyYjQ5YWIxYzZlODQ2ZDVhOGFkNi05MC53ZWJw.webp'
					},
					{
						img:'https://ccdn.goodq.top/caches/6519d4c1d4722a0f0d85a70bbee8ffbe/aHR0cDovLzVhZWJmOGI2MDU5MzEudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMi8zYjk5NjU1MTM1ZmViMTczYWQ5ODhhZjA2MDU1ZWEyOC05MC53ZWJw.webp'
					}
				]
			}
		}
	};
</script>

<style>

</style>