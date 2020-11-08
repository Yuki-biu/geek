// node发起请求 -> 获取html信息 -> 解析html
const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')

// 通过https模块的get方法，请求网站链接，在回调函数中获取资源
https.get('https://time.geekbang.org/', (res) => {
    console.log(res)
    // 因为获取到的资源是分段返回的，所以需要手动拼接（HTML）
    let html = ''
    res.on('data', (chunk) => {
        html += chunk
    })

    // 当res数据加载完成后
    res.on('end', () => {
        // cheerio操作dom
        const $ = cheerio.load(html)
        // 数据
        let allCourses = []
        $('div ._33ly3o09_0').each(function() {
            const title = $('.TsqvfD9D_0', this).text()
            const tag = $('.YRXVEB34_0', this).text()
            const courseTime = $('._3vYaOmbL_0', this).text()
            const discount = $('._7ImCoNnW_0', this).text()
            const price = $('.orhJ42Kl_0', this).text()
            const imgUrl = $('._6Gc2XI7H_0 img', this).attr('src')
            allCourses.push({title, tag, courseTime, discount, price, imgUrl})
        })
        console.log(allCourses)
    })
})