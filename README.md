# Xinli001
壹心理文章Node.js API

# Xinli001
壹心理文章Node.js API
临时URL（下个月月初会改）:http://www.varpm.com:3002/

自己搭的话运行端口：3002

#文章
##获取当前分类下的标签（tag）
没写呢
##按分类获取文章列表
URL:/article/getList
请求方式:GET (POST/JSONP也可用)
参数:
```
'sort' : string
'tag'  : string
'flag' : string
'page' : number
```
###sort可选值：
- 全部 ""
- 婚恋 "marry"
- 亲子 "family"
- 职场 "career"
- 健康 "healthy"
- 科普 "science"

###tag可选值：
由getTag获取

###flag可选值：
- "hot" 最热文章
- "new" 最新文章

###page可选值：
从1开始

####示例代码
```
http://www.varpm.com:3002/article/getList?flag=new&page=1
```
####返回信息示例
```json
{
    "Result": true,
    "Detail": [
        {
            "title": "精选|如何吃透书中的知识，还能愉快地运用",
            "image": "http://image.xinli001.com/20160324/101559tlkzqe80hl2syp3p.jpg",
            "view": "6647",
            "tags": [
                "职场礼仪",
                "职场经历",
                "职业发展"
            ],
            "ID": "100314307",
            "author": "袁麟翥"
        },
        {
            "title": "精选|怎样才能更好的投资自己？",
            "image": "http://image.xinli001.com/20160412/084723zcrsuk5mui4g8056.jpg",
            "view": "5242",
            "tags": [
                "职业发展"
            ],
            "ID": "100315823",
            "author": "职场专栏·壹心理"
        },
        {
            "title": "精选丨内向的孩子，你的世界是否被懂得",
            "image": "http://image.xinli001.com/20160228/154417z2m6beq8dzrwnnxh.jpg",
            "view": "6612",
            "tags": [
                "儿童心理",
                "亲子沟通",
                "父母成长"
            ],
            "ID": "100311340",
            "author": "小楼老师"
        },
        {
            "title": "精选丨如果需要伪装，那不是爱情",
            "image": "http://image.xinli001.com/20160405/064813bg5epx3gh44ugs9j.jpg",
            "view": "6863",
            "tags": [
                "亲密关系",
                "相处技巧"
            ],
            "ID": "100315183",
            "author": "丛非从"
        },
        {
            "title": "亲爱的，别用爱来“控制”我",
            "image": "http://image.xinli001.com/20160429/1428306kyboj8k8egdqgq7.png",
            "view": "1141",
            "tags": [
                "心理咨询"
            ],
            "ID": "100317614",
            "author": "刘彦含"
        },
        {
            "title": "你真的、真的、会休假吗？",
            "image": "http://image.xinli001.com/20160429/151705gv5aqi06fvl0wo0k.png",
            "view": "1080",
            "tags": [
                "none"
            ],
            "ID": "100317699",
            "author": "健康专栏·壹心理"
        },
        {
            "title": "不八卦会死？进化学说有可能",
            "image": "http://image.xinli001.com/20160429/07180656eskky8qfb0doxq.jpg",
            "view": "1242",
            "tags": [
                "none"
            ],
            "ID": "100317612",
            "author": "王日出"
        },
        {
            "title": "精选丨法国爸妈教育孩子的法宝是什么？",
            "image": "http://image.xinli001.com/20160406/0619040lsgadtb97rzzf13.jpg",
            "view": "3590",
            "tags": [
                "儿童心理",
                "亲子沟通",
                "父母成长"
            ],
            "ID": "100315369",
            "author": "小楼老师"
        },
        {
            "title": "精选丨你为什么会被发“好人卡”？",
            "image": "http://image.xinli001.com/20160419/094152l1d9orhhe8ir9zpx.jpg",
            "view": "5286",
            "tags": [
                "恋爱",
                "婚姻",
                "亲密关系",
                "出轨",
                "两性差异"
            ],
            "ID": "100316434",
            "author": "罗近月"
        },
        {
            "title": "5招击败拖延小怪兽",
            "image": "http://image.xinli001.com/20160429/091211a1p5xhrsqn6ax0ng.png",
            "view": "780",
            "tags": [
                "职场新人"
            ],
            "ID": "100317643",
            "author": "职场专栏·壹心理"
        }
    ]
}
```
##获取文章详情
URL:
请求方式:
参数:
```
'ID' : string
```