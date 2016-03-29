export default (filePath, info)=> {
    filePath = filePath.substring(2)
    let filePathArray = filePath.split('/')

    filePathArray.shift()
    filePathArray.shift()
    filePathArray.shift()
    filePathArray.shift()
    filePathArray.pop()

    // 长度是0,说明是根路径,不处理
    if (filePathArray.length === 0) {
        return ''
    }

    const prefix = `${info.categoryInfo.prefix}-${info.categoryName}-${info.module.path}`
    const addonPath = filePathArray.join('-')
    return `${prefix}-${addonPath}`
}