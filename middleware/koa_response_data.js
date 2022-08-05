// 处理业务逻辑
const path = require('path')
const fileUtils = require('../utils/file_utils')
module.exports = async (ctx,next) => {
    const url = ctx.request.url
    let filePath = url.replace('/api','')
    filePath = '../data' + filePath + '.json'
    filePath = path.join(__dirname,filePath)
    try {
        // 返回的是Promise对象，用await修饰可以得到返回的值
        const res = await fileUtils.getFileData(filePath)
        ctx.response.body = res
    } catch(error) {
        const ErrorMsg = {
            message: '您访问的文件资源不存在！',
            status: 404
        }
        ctx.response.body = JSON.stringify(ErrorMsg)
    }
    await next()
}