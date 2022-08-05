// 读取json文件
const fs = require('fs')
module.exports.getFileData = (filepath) => {
    // 读取文件是异步任务，需要包装在Promise对象中
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}