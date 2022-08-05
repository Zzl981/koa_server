// 服务器入口文件
// 创建实例对象
const Koa = require('koa')
const app = new Koa()

// 中间件
const ResDuration = require('./middleware/koa_response_duration')
app.use(ResDuration)

const ResHeader = require('./middleware/koa_response_header')
app.use(ResHeader)

const ResData = require('./middleware/koa_response_data')
app.use(ResData)

// 运行的端口号
app.listen(8888,function() {
    console.log('Server is running...');
})

const WebSocketService = require('./service/web_socket_service')
// 服务端开启监听
WebSocketService.listen()