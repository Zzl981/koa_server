const path = require('path')
const fileUtils = require('../utils/file_utils')

// 导入WebSocket包
const WebSocket = require('ws')
// 创建WebSocket服务器端对象，端口号为9998
const wss = new WebSocket.Server({
    port: 9998
})
module.exports.listen = () => {
    // 监听客户端连接事件，client为客户端的连接socket对象
    wss.on('connection', (client) => {
        console.log('客户端连接成功...');
        // 监听客户端连接对象的message事件，msg为客户端发送的数据
        client.on('message', async (msg) => {
            // 转为JSON字符串格式
            let payload = JSON.parse(msg)
            // 获取action字段
            const action = payload.action
            if(action === 'getData') {
                // 获取要读取的文件路径
                let filePath = '../data/' + payload.chartName + '.json'
                filePath = path.join(__dirname, filePath)
                // 读取文件内容
                const res = await fileUtils.getFileData(filePath)
                // 将读取文件的结果放到data字段发送给客户端
                payload.data = res
                // 将JSON字符串转为普通字符串
                client.send(JSON.stringify(payload))
            } else {
                // 原封不同发送原来的数据，clients为所有客户端连接对象数组
                wss.clients.forEach((client) => {
                    client.send(JSON.stringify(payload))
                })
            }
            // 服务端发送给客户端的数据
            // client.send('hello socket from backend')
        })
    })
}
