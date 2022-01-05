//对 tsconfig.json的补充 
module.exports = {
    // 静态文件加载路径
    publicPath: "./",
    // 编译后文件放置位置
    outputDir: "dist",
    // 编译后js,css文件放置到/dist/static目录下，方便nginx访问
    assetsDir: "static",
    productionSourceMap: false
}
