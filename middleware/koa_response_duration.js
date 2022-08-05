// 计算服务器内部处理总耗时
module.exports = async (ctx,next) => {
    // 开始时间
    const start = Date.now()
    await next()
    // 结束时间
    const end = Date.now()
    const resDuration = end - start
    // 设置响应头
    ctx.set('X-Response-Time',resDuration + 'ms')
}