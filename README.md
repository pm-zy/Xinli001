# Xinli001
壹心理文章Node.js API

临时URL（下个月月初会改）:http://www.varpm.com:3002/v1
不要问我为什么还没改。。。我找不到域名的解析入口了。。。

自己搭的话运行端口：3002

#文章
##获取当前分类下的标签（tag）

URL:/article/getTags

请求方式：GET/SONP

参数：
```
'sort':string
```
###sort可选值：
- 全部 ""
- 婚恋 "marry"
- 亲子 "family"
- 职场 "career"
- 健康 "healthy"
- 科普 "science"

####返回信息
```js
{
    status:number
    info:string
    data:[
            string,
            string
            ...
        ]
}
```

####示例代码
```
http://www.varpm.com:3002/v1/article/getTags?sort=family
```
####返回信息示例
```json
{
    "status": 200,
    "info": "SUCCESS",
    "data": [
        "单身",
        "恋爱",
        "婚姻",
        "亲密关系",
        "安全感",
        "性",
        "吵架",
        "出轨",
        "异地恋",
        "同性恋",
        "脱单攻略",
        "恋爱技巧",
        "分手",
        "备胎",
        "两性差异",
        "相处技巧"
    ]
}
```

##按分类获取文章列表

URL:/article/getList

请求方式:GET

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

####返回信息
```js
{
    status:number
    info:string
    data:[{
             title: string,
             image: string（URL）,
             view: string(可转int),
             tags: [
                         string,
                         string,
                         ...
                     ],
             ID: string,
             author: string
            },
            ...
        ]
}


```

####示例代码
```
http://www.varpm.com:3002/v1/article/getList?flag=new&page=1
```
####返回信息示例
```json
{
    "status": 200,
    "info": "SUCCESS",
    "data": [
        {
            "title": "寂寞是最好的增值期",
            "image": "http://image.xinli001.com/20160505/024146qlhbyb9ndc7z3yb7.jpg",
            "view": "1361",
            "tags": [
                "职业发展"
            ],
            "ID": "100318131",
            "author": "李尚龙"
        },
        {
            "title": "付出感，是破坏亲子关系的根源",
            "image": "http://image.xinli001.com/20160504/0318005x83vl22fm1tvr0l.jpg",
            "view": "1395",
            "tags": [
                "儿童心理",
                "父母成长",
                "家庭关系"
            ],
            "ID": "100318009",
            "author": "亲子专栏"
        },
        {
            "title": "孤独的人如何愉快地交流？",
            "image": "http://image.xinli001.com/20160505/024141vf6et0whfu0qnnwd.jpg",
            "view": "798",
            "tags": [
                "情绪及调节",
                "孤独",
                "个人成长",
                "人际关系"
            ],
            "ID": "100318132",
            "author": "倪愚"
        },
        {
            "title": "除了吴彦祖，好男人还有弗洛伊德",
            "image": "http://image.xinli001.com/20160504/101359fyhr8o58ktcxeikc.jpg",
            "view": "978",
            "tags": [
                "心理学家"
            ],
            "ID": "100318066",
            "author": "苏剑锋"
        },
        {
            "title": "考试有压力？全是你自找的",
            "image": "http://image.xinli001.com/20160504/112513fj73wyfh2qot8pku.jpg",
            "view": "582",
            "tags": [
                "情绪及调节",
                "有心事",
                "焦虑",
                "个人成长"
            ],
            "ID": "100318071",
            "author": "健康专栏·壹心理"
        },
        {
            "title": "我们被妈妈夺走的重要东西",
            "image": "http://image.xinli001.com/20150614/160103fdde9f3f841c0dd5.jpg",
            "view": "15445",
            "tags": [
                "儿童心理",
                "家庭关系"
            ],
            "ID": "100015487",
            "author": "丛非从"
        },
        {
            "title": "好好思考这个问题：是什么让你痛苦？",
            "image": "http://image.xinli001.com/20160505/025407bmf00b7rpsczi8z7.jpg",
            "view": "1233",
            "tags": [
                "职业发展"
            ],
            "ID": "100318137",
            "author": "职场专栏·壹心理"
        },
        {
            "title": "周星驰：强大母亲护航的沧桑童年",
            "image": "http://image.xinli001.com/20160504/032711gbwfwbi9zlz71k7j.jpg",
            "view": "2200",
            "tags": [
                "亲子沟通",
                "父母成长",
                "家庭关系"
            ],
            "ID": "100317874",
            "author": "夏滨"
        },
        {
            "title": "一图读懂：关于内向者的17个生活事件",
            "image": "http://image.xinli001.com/20160504/0937442671c562hpv1e558.jpg",
            "view": "2577",
            "tags": [
                "性格与人格",
                "图解心理"
            ],
            "ID": "100317971",
            "author": "生活愿望清单"
        },
        {
            "title": "当你懂得这些，死亡便不再可怕",
            "image": "http://image.xinli001.com/20160504/064616la64ywq0ngjj3eky.jpg",
            "view": "2559",
            "tags": [
                "死亡",
                "个人成长"
            ],
            "ID": "100317713",
            "author": "Joy Liu"
        }
    ]
}
```
##获取文章详情

URL:/article/getDetail/

请求方式:GET/POST/JSONP

####参数:
```
'ID' : string
```

####返回信息
```js
{
    status:number
    info:string
    data:[{
            title:string
            content:string(html)
            date:string
            },
            ...
        ]
}
```

####示例代码
```
http://www.varpm.com:3002/v1/article/getDetail/100317885
```
####返回信息示例
```json
{
    "status": 200,
    "info": "SUCCESS",
    "data": {
        "title": "不能接受最坏的结果，再努力也是徒劳",
        "content": "<div class=\"texts\">\n\t\t\t\t\t\t\t\t<p style=\"text-align: center;\"><img src=\"http://ossimg.xinli001.com/20160503/df3eeb431af98f5813c465de21343dc8.jpg\" title=\"6882884345413909.jpg\" alt=\"niserin141200066.jpg\"></p><p>文：赵晓璃|壹心理专栏作者</p><p style=\"text-align: center;\"><img src=\"http://ossimg.xinli001.com/20160503/f508aaf9dc9c9fca0e7419d98fc0f0f7.png\" title=\"9227423748876161.png\" alt=\"1.png\"></p><p>许久不见的小婷最近和我取得了联系，对我说有要事相告。</p><p>小婷是我两年前带过的一名学员，后来去了一家企业做会计，我也很想知道她目前的工作状态，就和她约在避风塘见面。</p><p>她很严肃地问我：“老师，你说如果我把注会通过了真的可以收入翻番吗？”</p><p>我说：“怎么了？是不是最近工作不顺心啊？”</p><p>她眼圈一红，告诉我说最近情绪无比低落。</p><p>原来，小婷原先的领导连同几个财务主力干将去年集体辞职了，就剩下小婷一个人守着一个部门，很快老板又招兵买马，一个新的财务班子重新建立起来，可不知为何，她总能感到自己渐渐被财务部边缘化了，她很苦恼，于是想到考注会，可又担心注会考完之后去另一家单位会遭遇同样恶劣的人事环境。</p><p><strong>有人的地方就有江湖，因为每个人的出身、经历及看法不同，这些都在不同程度上都影响着你努力的效果。</strong></p><p>比如商场里刚踏入工作岗位的营业员往往热情洋溢，他们会不遗余力给客户推荐新款服饰以及宣传最新的优惠政策，然而并不是每个顾客都会接受这种热情，有些顾客会觉得很烦，反而会适得其反。</p><p>而成熟的营业员或者店长级别的销售“老人”则不会轻易这样做，他们会观察顾客的言行，和顾客做适当的交流，根据客户的性格特点以及喜好给出合适的搭配，让每个进店的顾客感觉非常舒服，每个月的业绩也都是遥遥领先。</p><p>要说后者比前者多了什么，如果用一句简单的话描述，那就是“成熟的心态”。</p><p><strong>“成熟的心态”有一个最显著的标志就是，做任何事情，都会尽自己最大的努力，但也能接受最坏的结果。</strong></p><p>我告诉小婷，在我看来，很多时候没必要把自己逼到墙角，也许事实和你想象的不一样。当然辞职考注会听起来确实很励志也很酷，但我们也要知道，这个过程更是一条漫漫艰辛路，而据我的经验来看，希望越大，往往失望越大。</p><p style=\"text-align: center;\"><img src=\"http://ossimg.xinli001.com/20160503/840e913f793bff4ae1d3aeb8a3415cd7.png\" title=\"4326907360943788.png\" alt=\"2.png\"></p><p>还记得刚开始当讲师那会儿，我被派到一个新开的校区担任主讲老师，当我满怀憧憬踏进教室的时候，发现里面只有五个学员。</p><p>我当时感到一阵失落，我甚至有些后悔来到这所校区，我在想到底要不要和领导说换一个校区呢。不过很快我就说服了我自己，毕竟校区的招生人数不是我所能掌控的，我唯一能做的事情，就是尽力把课上好，让现有的几名学员学有所获，上课的口碑与影响传出去之后，我相信上课人数对我而言就不再是问题了。</p><p>于是我一丝不苟地上课，该讲的知识点一个也不落下，加上之前充分的备课，我找了很多相关素材力求将知识点讲的通俗易懂，结果一个多月之后，白班上课人数就增加到了二十多人。</p><p>“我不能保证我的每一节课都有很多学员来听，但是我会竭尽所能上好我的每一节课。”这是我一遍一遍对自己说的话。</p><p><strong>当我了解很多事情并不能如我所愿般迅速达成结果，我反而平静了很多，</strong><strong>我可以接受最坏的结果，于是我终于不用在选择的迷途中继续打转，而是笃定下来，做好眼前的每一件小事。</strong></p><p style=\"text-align: center;\"><img src=\"http://ossimg.xinli001.com/20160503/05bdae834cd4f59ae6e21b953ec4accb.png\" title=\"5989896432114693.png\" alt=\"3.png\"></p><p>小婷若有所悟，她说其实自己也害怕辞了职之后全力考注会更容易焦虑，可眼下这种人际关系又到底要怎样处理才好呢？</p><p>我说你相信么？如果你今天处理不好，就算你考上了注会，同样会在新的单位遭遇类似的人或事，你同样还会陷入类似今天这样的困惑中。</p><p>小婷点点头。</p><p>我对她说了两点。</p><p><strong>首先直面问题，做一些积极的努力。</strong></p><p>比如主动找现任领导沟通，看看TA对自己有哪些期望和要求，然后就积极行动，<strong>不要花费精力在无谓的猜测与纠结上</strong>。每个人做事难免会被人说，尤其当你工作开始有些起色、领导对你赞赏有加的时候，那时候的人际关系可能还不如现在。你不可能什么都想要，你想获得成长就必须舍弃以前让你倍感舒适的人际关系。</p><p><strong>其次要明白，不是你所做的努力都能被人认可或接受</strong>。</p><p>也许会有些风凉话传到你耳朵里，这个时候适当的装聋作哑很重要，因为很多事情还需要时间去检验和证明。</p><p>对你如此，对你的领导而言更是如此。</p><p style=\"text-align: center;\"><img src=\"http://ossimg.xinli001.com/20160503/de44af3f1ab1aafd42e5981a3ffa3982.png\" title=\"9774100571493851.png\" alt=\"4.png\"></p><p>小婷又问，那到底要不要考注会啊？</p><p>为什么不呢？</p><p>因为你无法保证你所做的努力能获得境遇的改善，如果领导最终还是无法容下你，你只能重新换个环境，而到时候如果你没有相应的能力与知识储备，又如何能够把握住其他的好机会呢？</p><p>踏入社会之后我渐渐明白，好多事情发生了就是发生了，你再后悔不迭也终究是过去式，正是因为好些得不到，所以才彰显为自己而活是有多重要。</p><p><strong>而为自己而活的关键点，就是不沉迷过去，也不幻想未来，而是一步一个脚印，做好当下的每一件事情。</strong></p><p>顺着这种逻辑，这些年我就是这样走过来的，包括现在去外地上公开课的时候，偶尔也会遇到刮风下雨到场学员稀稀拉拉的情况，但我依然能够热情不减。</p><p>因为今天我所做的每一件事情，都会在将来成为我的名片。</p><p><strong>终有一天你会明白，当你学会了接受最坏的结果，你才能把专注力放在当下不计结果地努力，到那时你会收获一样特别的成长厚礼，叫做“素养”。</strong></p><p>如果说努力能拉开人与人之间巨大的差距，而素养则决定了在人生这条漫漫不归路上，你能走多远，你又能坚持多久。</p><p style=\"text-align: center;\"><img src=\"http://ossimg.xinli001.com/20160503/4651c6de0e93b0a0f713241e2e3aa04e.png\" title=\"6228651014132331.png\" alt=\"壹心理分割线.png\"></p><p>原题：是素养，让你与众不同</p><p>作者简介：赵晓璃，80后一枚，职业培训师，简书签约作者。自媒体微信公众号“璃语”（crystal_words），新浪微博@赵晓璃。</p><p>责任编辑：黄小希<br></p><p style=\"text-align: center;\"><img src=\"http://ossimg.xinli001.com/20160503/99b0df409d0642af281331671114bd67.png\" title=\"9126560195320479.png\" alt=\"职场.png\"></p>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t  \t\t\n\t\t\t</div>",
        "date": "发表于2016-05-03 10:15:28"
    }
}

```

##获取轮播图

URL:/article/getBanner/

请求方式:GET/POST/JSONP

####参数: 无

####示例代码
```
http://www.varpm.com:3002/v1/article/getBanner/
```

####返回信息
```js
{
    status:number
    info:string
    data:[{
            ID:string //对应文章的ID
            image:string(URL) //图片地址
            tip:string //每张图下面的配字
            },
            ...
        ]
}
```


####返回信息示例
```json
{
    "status": 200,
    "info": "SUCCESS",
    "data": [
        {
            "ID": "100008511",
            "image": "http://image.xinli001.com/20160505/0903508ilhiukplyricd9t.jpg",
            "tip": "立夏 | 背着青春，行走于街头"
        },
        {
            "ID": "100315086",
            "image": "http://ossimg.xinli001.com/20160504/418f8ae767fc659494db9d64178282da.jpg",
            "tip": "4岁自闭症儿童死于康复机构，我们应该知道什么？"
        },
        {
            "ID": "100317968",
            "image": "http://ossimg.xinli001.com/20160503/5b2ef06fdc71d1b6ed89b2b0a98a9ef8.jpg",
            "tip": "为什么有些女性没有体验过性高潮？"
        },
        {
            "ID": "100317973",
            "image": "http://image.xinli001.com/20160504/083427sjsrzfs8a4xw06b0.jpg",
            "tip": "\"一切都是父母的错“正在毁灭我们的社会"
        },
        {
            "ID": "100015123",
            "image": "http://image.xinli001.com/20150429/154214536761e933f2835c.jpg",
            "tip": "青年节|所有时代的青年人，共同的人生困境是什么？"
        }
    ]
}
```

##获取某篇文章的评论

URL:/article/getComment/

请求方式:GET/JSONP

####参数:
```
'id':string  //文章的ID
'page':number  //评论的页数，默认第一页
```

####示例代码
```
http://www.varpm.com:3002/v1/article/getComment?id=100317971&page=1
```

####返回信息
```js
{
    status:number
    info:string
    data:[{
            userPic:string(URL) //用户头像
            userName:string //用户名
            comment:string //评论内容
            date:string  //评论发表的时间
            },
            ...
        ]
}
```


####返回信息示例
```json
{
    "status": 200,
    "info": "SUCCESS",
    "data": [
        {
            "userPic": "http://ossimg.xinli001.com/20160329/9fe4842afb2c58c2200a1b9ae7a68ca9.png",
            "userName": "凝心者",
            "comment": "90%相同  只有一点 我有朋友  虽然不多 但还不错",
            "date": "5小时前"
        },
        {
            "userPic": "http://ossimg.xinli001.com/20160329/9fe4842afb2c58c2200a1b9ae7a68ca9.png",
            "userName": "錦繡",
            "comment": "一模一樣",
            "date": "7小时前"
        },
        {
            "userPic": "http://ossimg.xinli001.com/20160329/9fe4842afb2c58c2200a1b9ae7a68ca9.png",
            "userName": "一匹猫ZzZ",
            "comment": "几乎一模一样，特别是社交圈子和社交状态变化",
            "date": "23小时前"
        },
        {
            "userPic": "http://ossimg.xinli001.com/20160329/9fe4842afb2c58c2200a1b9ae7a68ca9.png",
            "userName": "qq_fOSd0IDy",
            "comment": "电话来了不想接，事后觉得自己人品有问题。看来这是正常现象。。。",
            "date": "1日前"
        },
        {
            "userPic": "http://ossimg.xinli001.com/20160329/9fe4842afb2c58c2200a1b9ae7a68ca9.png",
            "userName": "qq_smZ28Mer",
            "comment": "最后一项简直一模一样",
            "date": "2日前"
        },
        {
            "userPic": "http://ossimg.xinli001.com/20160329/9fe4842afb2c58c2200a1b9ae7a68ca9.png",
            "userName": "妮妮7949",
            "comment": "为了不回答这些问题，我愿意出钱！（认真脸）",
            "date": "2日前"
        },
        {
            "userPic": "http://ossimg.xinli001.com/20160329/9fe4842afb2c58c2200a1b9ae7a68ca9.png",
            "userName": "新晴阳光",
            "comment": "这不都是我吗？原来我很正常",
            "date": "2日前"
        },
        {
            "userPic": "http://ossimg.xinli001.com/20160329/9fe4842afb2c58c2200a1b9ae7a68ca9.png",
            "userName": "lvse洋",
            "comment": "已收藏",
            "date": "2日前"
        },
        {
            "userPic": "http://ossimg.xinli001.com/20160329/9fe4842afb2c58c2200a1b9ae7a68ca9.png",
            "userName": "lvse洋",
            "comment": "为了不愿意听到这些问题，我愿意出钱，对不起笑出声，准的很",
            "date": "2日前"
        },
        {
            "userPic": "http://ossimg.xinli001.com/20160329/9fe4842afb2c58c2200a1b9ae7a68ca9.png",
            "userName": "wu无聊",
            "comment": "我是中向性格，感觉真好！",
            "date": "2日前"
        }
    ]
}
```
##非正常（2xx）信息说明
本宝宝出门两天，有啥问题联系QQ 910739015
