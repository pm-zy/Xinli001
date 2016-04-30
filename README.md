# Xinli001
壹心理文章Node.js API

# Xinli001
壹心理文章Node.js API

运行端口：3002

#文章
##获取当前分类下的标签（tag）
没写呢
##按分类获取文章列表
URL:
请求方式:
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

```
##获取文章详情
URL:
请求方式:
参数:
```
'ID' : string
```