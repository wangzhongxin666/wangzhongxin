var routes = [{
		path: '/',
		component: {
			template: '#no1'
		}
	},
	{
		path: '/no2',
		component: {
			template: '#no2',
			data() {
				return {
					index: 0,
					arr: [{
							t: "全部设备",
							c: [{
									img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODliOWE1ZWI3YjZhYjZkNWZjZjFiNjEyNDAyOWFhMWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
									name: "仪器设备Um350",
									item: "编译设备副标题"
								}, {
									img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTQ3M2MwZWI4ODE4ZmYzM2Y5OGFmYWY1ODg2N2I4ZjgtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
									name: "仪器设备Um370",
									item: "编译设备副标题"
								}, {
									img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvY2Y4YzM5NDJmMjU5YThmYmMzMDA3OWNiMTQ2NjE2MWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
									name: "仪器设备Um380",
									item: "编译设备副标题"
								}, {
									img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODliOWE1ZWI3YjZhYjZkNWZjZjFiNjEyNDAyOWFhMWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
									name: "仪器设备Um250",
									item: "编译设备副标题"
								}, {
									img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS85NWVmMjE4MzY1ZTI4YmI4N2E2OTA1YTc0Mjg3YjE1ZC0yMTB4MjEwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
									name: "仪器设备Um380",
									item: "编译设备副标题"
								}, {
									img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS8yNmZkOGVlNjViYzhhNzBlZmQ0Y2E5Yjc5YWYwODU1Zi0yMTB4MjEwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
									name: "仪器设备Um380",
									item: "编译设备副标题"
								}, {
									img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi83ZDhhODQzZmM4MmM0MTc4N2Q1NTE1MjUwZmM5YmNkNC0yMTB4MjEwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
									name: "仪器设备Um380",
									item: "编译设备副标题"
								},
								{
									img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi8xYzg4MWMwYjdjYmUzNzBkNTBmM2U4YjM3ZTU3MTk4Ni0yMTB4MjEwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg',
									name: "仪器设备Um380",
									item: "编译设备副标题"
								}

							]
						},
						{
							t: "设备分类一",
							c: [{
									img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvMDE1MmFkNTI5MjBkOWM3YTY4NmM5MjZjOTNhZTczMmMtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
									name: "仪器设备Um370",
									item: "编译设备副标题"
								}, {
									img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODliOWE1ZWI3YjZhYjZkNWZjZjFiNjEyNDAyOWFhMWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
									name: "仪器设备Um370",
									item: "编译设备副标题"
								}, {
									img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODliOWE1ZWI3YjZhYjZkNWZjZjFiNjEyNDAyOWFhMWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
									name: "仪器设备Um370",
									item: "编译设备副标题"
								},

							]
						},
						{
							t: "设备分类二",
							c: [{
									img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvN2Q4YTg0M2ZjODJjNDE3ODdkNTUxNTI1MGZjOWJjZDQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
									name: "仪器设备Um370",
									item: "编译设备副标题"
								}, {
									img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODliOWE1ZWI3YjZhYjZkNWZjZjFiNjEyNDAyOWFhMWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
									name: "仪器设备Um370",
									item: "编译设备副标题"
								},

							]
						},
						{
							t: "设备分类三",
							c: [{
									img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvN2Q4YTg0M2ZjODJjNDE3ODdkNTUxNTI1MGZjOWJjZDQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
									name: "仪器设备Um370",
									item: "编译设备副标题"
								}, {
									img: 'https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODliOWE1ZWI3YjZhYjZkNWZjZjFiNjEyNDAyOWFhMWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg',
									name: "仪器设备Um370",
									item: "编译设备副标题"
								},

							]
						},
					]
				}
			}
		}
	},
	{
				path: '/no3',
				component: {
					template: '#no3'
				},
				children: [{
						path: '/',
						component: {
							template: `<div style="width: 890px;height: 1433px;">
						<div style="height: 100px;">
							<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
								<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9iODYyMTlmMWJkZjk0YjhmMjU0YmU3NGYzYWY5ZjBhNC0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
							</div>
							<div style="width: 688px; float: left;">
								<div style="font-size: 16px;color: #000000;">医疗PPP有望成后起之秀 概念股早盘活跃</div>
								<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
								<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
							</div>
						</div>
						<div style="margin-top: 60px; height: 100px;">
							<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
								<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9iM2JhNzljNmFhZWY4ZGYyNDM2ZWY2M2ViNjU5YWI4Ni0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
							</div>
							<div style="width: 688px; float: left;">
								<div style="font-size: 16px;color: #000000;">国产高端医疗设备凭高性价比应对“GPS”垄断局面</div>
								<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
								<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
							</div>
						</div>
						<div style="margin-top: 60px; height: 100px;">
							<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
								<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9iMTY3ZjllYWE2NmJlZTAxYjdjMDM3NmU4MjY4ZDE1Ni0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
							</div>
							<div style="width: 688px; float: left;">
								<div style="font-size: 16px;color: #000000;">医疗器械国产化命脉：“供应商”转型“合作伙伴”</div>
								<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
								<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
							</div>
						</div>
						<div style="margin-top: 60px; height: 100px;">
							<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
								<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9lNjRkNTQxNGEzMGUyMTlmNTI1MTc5NWM2ZDU1OGFkYy0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
							</div>
							<div style="width: 688px; float: left;">
								<div style="font-size: 16px;color: #000000;">医疗器械9只概念股价值解析</div>
								<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
								<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
							</div>
						</div>
						<div style="margin-top: 60px; height: 100px;">
							<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
								<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOC9lZjlkZjA0NWJjNWZkMTRmMDhlNGIyMDVjNjE2NjJkNC0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
							</div>
							<div style="width: 688px; float: left;">
								<div style="font-size: 16px;color: #000000;">医疗器械抽验 7批产品不合标准</div>
								<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
								<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
							</div>
						</div>
						<div style="margin-top: 60px; height: 100px;">
							<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
								<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS81MDNmZDY3ZTc5OTEwNTk1MWY4ZTA0OTQ4NTVlNWM1MS0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
							</div>
							<div style="width: 688px; float: left;">
								<div style="font-size: 16px;color: #000000;">第五届生物产业大会 与专家共议未来发展</div>
								<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
								<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
							</div>
						</div>
						<div style="margin-top: 60px; height: 100px;">
							<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
								<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOC9iZWU1YjQxYTc2YThlYWFlM2EyYWYwNTljZjdhZGNjZS0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
							</div>
							<div style="width: 688px; float: left;">
								<div style="font-size: 16px;color: #000000;">医疗器械国产化命脉：“供应商”转型“合作伙伴”</div>
								<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
								<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
							</div>
						</div>
						<div style="margin-top: 60px; height: 100px;">
							<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
								<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS85NWVmMjE4MzY1ZTI4YmI4N2E2OTA1YTc0Mjg3YjE1ZC0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
							</div>
							<div style="width: 688px; float: left;">
								<div style="font-size: 16px;color: #000000;">医疗器械行业上半年利润增速达29.30%</div>
								<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
								<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
							</div>
						</div>
						<div style="margin-top: 60px; height: 100px;">
							<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
								<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi8xMGMyNGU3YjY2ZGYxZDkyNmI3MzBmNmM1NWZmYzhjZS0xNjB4MTAwLnBuZw_p_p100_p_3D_p_p100_p_3D.png" alt="">
							</div>
							<div style="width: 688px; float: left;">
								<div style="font-size: 16px;color: #000000;">20种进口医疗器械产品减税力度空前</div>
								<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
								<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
							</div>
						</div>
					</div>`
						}
					},
					{
						path: 'no1',
						component: {
							template: `<div style="width: 890px;height: 1533px;">
						<div style="height: 100px;">
							<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
								<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9iM2JhNzljNmFhZWY4ZGYyNDM2ZWY2M2ViNjU5YWI4Ni0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
							</div>
							<div style="width: 688px; float: left;">
								<div style="font-size: 16px;color: #000000;">国产高端医疗设备凭高性价比应对“GPS”垄断局面</div>
								<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
								<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
							</div>
						</div>
						<div style="margin-top: 60px; height: 100px;">
							<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
								<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9iODYyMTlmMWJkZjk0YjhmMjU0YmU3NGYzYWY5ZjBhNC0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
							</div>
							<div style="width: 688px; float: left;">
								<div style="font-size: 16px;color: #000000;">医疗PPP有望成后起之秀 概念股早盘活跃</div>
								<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
								<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
							</div>
						</div>
						<div style="margin-top: 60px; height: 100px;">
							<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
								<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9iMTY3ZjllYWE2NmJlZTAxYjdjMDM3NmU4MjY4ZDE1Ni0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
							</div>
							<div style="width: 688px; float: left;">
								<div style="font-size: 16px;color: #000000;">医疗器械国产化命脉：“供应商”转型“合作伙伴”</div>
								<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
								<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
							</div>
						</div>
						<div style="margin-top: 60px; height: 100px;">
							<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
								<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9lNjRkNTQxNGEzMGUyMTlmNTI1MTc5NWM2ZDU1OGFkYy0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
							</div>
							<div style="width: 688px; float: left;">
								<div style="font-size: 16px;color: #000000;">医疗器械9只概念股价值解析</div>
								<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
								<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
							</div>
						</div>
						<div style="margin-top: 60px; height: 100px;">
							<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
								<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOC9lZjlkZjA0NWJjNWZkMTRmMDhlNGIyMDVjNjE2NjJkNC0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
							</div>
							<div style="width: 688px; float: left;">
								<div style="font-size: 16px;color: #000000;">医疗器械抽验 7批产品不合标准</div>
								<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
								<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
							</div>
						</div>
						<div style="margin-top: 60px; height: 100px;">
							<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
								<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS81MDNmZDY3ZTc5OTEwNTk1MWY4ZTA0OTQ4NTVlNWM1MS0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
							</div>
							<div style="width: 688px; float: left;">
								<div style="font-size: 16px;color: #000000;">第五届生物产业大会 与专家共议未来发展</div>
								<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
								<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
							</div>
						</div>
						<div style="margin-top: 60px; height: 100px;">
							<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
								<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOC9iZWU1YjQxYTc2YThlYWFlM2EyYWYwNTljZjdhZGNjZS0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
							</div>
							<div style="width: 688px; float: left;">
								<div style="font-size: 16px;color: #000000;">医疗器械国产化命脉：“供应商”转型“合作伙伴”</div>
								<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
								<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
							</div>
						</div>
						<div style="margin-top: 60px; height: 100px;">
							<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
								<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS85NWVmMjE4MzY1ZTI4YmI4N2E2OTA1YTc0Mjg3YjE1ZC0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
							</div>
							<div style="width: 688px; float: left;">
								<div style="font-size: 16px;color: #000000;">医疗器械行业上半年利润增速达29.30%</div>
								<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
								<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
							</div>
						</div>
						<div style="margin-top: 60px; height: 100px;">
							<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
								<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi8xMGMyNGU3YjY2ZGYxZDkyNmI3MzBmNmM1NWZmYzhjZS0xNjB4MTAwLnBuZw_p_p100_p_3D_p_p100_p_3D.png" alt="">
							</div>
							<div style="width: 688px; float: left;">
								<div style="font-size: 16px;color: #000000;">20种进口医疗器械产品减税力度空前</div>
								<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
								<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
							</div>
						</div>
					</div>`
						}
					}
				]
				},

	{
		path: '/no4',
		component: {
			template: '#no4'
		}
	},
	{
		path: '/no5',
		component: {
			template: '#no5'
		}

	},

]
var router = new VueRouter({
	routes
})
new Vue({
	el: "#box",
	router,

})
