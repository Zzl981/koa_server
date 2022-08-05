// 设置响应头
module.exports = async (ctx,next) => {
    const contentType = 'application/json; charset=utf-8'
    // 设置内容响应头
    ctx.set('Content-Type',contentType)
    // 设置允许跨域
    ctx.set("Access-Control-Allow-Origin","*")
    ctx.set("Access-Control-Allow-Methods","OPTIONS,GET,POST,PUT,DELETE")
    await next()
}