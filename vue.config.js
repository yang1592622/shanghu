/*
module.exports = {
		publicPath: './',

		devServer: {
				proxy: {
						'/serve':{
						target: 'http://localhost:8081/', // 接口域名
						ws:true,
						changeOrigin:true,  //是否跨域
						pathRewrite: {
						'^/serve': '/'
						}
						},
				}
		},



 }
 */



module.exports = {
publicPath: './',
    devServer: {
        open: true,
        //以上的ip和端口是我们本机的;下面为需要跨域的
        proxy: {//配置跨域
            '/api': {
                //target: 'http://www.iqy.com/api.php/',//这里后台的地址模拟的;应该填写你们真实的后台接口
                target: 'http://sh.com/vueapi.php/',//这里后台的地址模拟的;应该填写你们真实的后台接口
                ws: true,
                changOrigin: true,//允许跨域
                pathRewrite: {
                    '^/api': '/'//请求的时候使用这个api就可以
                },
            }
            
        }
    }
}

