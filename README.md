# geek
仿极客时间 web前端

1. node爬取数据     数据爬取失败 不是li装的爬不到 -> 自己造假数据
2. 设计网页框架
3. 设计组件
4. 使用假数据串联网页

假数据的结构：
```
{
  Type: '',
  Courses: [
    {
      Title: '',
      Price: '',
      Discount: '',
      Detail: '',
      CourseUrl: [
        {
          index: Number,
          url: ''
        },
        ...
      ]
    },
    ...
  ]
}
```