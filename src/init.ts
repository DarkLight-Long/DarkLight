// 在我们执行 npm run build 脚本命令时，会执行cross-env NODE_ENV=production node yunprod.js build
// 把NODE_ENV设置为production，所以 process.env.NODE_ENV就被设置为production了

// for github pages
let webpath = ''
if (process.env.NODE_ENV === 'production') {
  webpath = 'demo-blog'
}

export { webpath }
