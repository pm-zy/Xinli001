/**
 * Created by PM on 2016/4/29.
 */
var request = require('request');
var cheerio = require('cheerio');
var querystring=require("querystring");


//全部-最热：http://www.xinli001.com/ajax/article-list.json?flag=hot&page=1
//全部-最新：http://www.xinli001.com/ajax/article-list.json?flag=new&page=2
//婚恋-最热：http://www.xinli001.com/ajax/article-list.json?slug=marry&tag=&flag=hot&page=2
//亲子-最热：http://www.xinli001.com/ajax/article-list.json?slug=family&tag=&flag=hot&page=1
//职场-最热：http://www.xinli001.com/ajax/article-list.json?slug=career&tag=&flag=hot&page=1
//健康-最热：http://www.xinli001.com/ajax/article-list.json?slug=healthy&tag=&flag=hot&page=1
//科普-最热：http://www.xinli001.com/ajax/article-list.json?slug=science&tag=&flag=hot&page=2

//分类的参数集合
//var slug=['','marry','family','career','healthy','science'];
//flag=['new','hot'];//最新还是最热
//page //页码
//tag  //当前分类下，按标签检索，值是汉字（或编码后的）

//参数是示例
//var param ={
//    tag:'',
//    slug:'',
//    flag:'new',
//    page:1
//};
//getList(param);
function getList(param,callback){
   //type默认是全部
    if(param == undefined || param == null){
        callback('Param Error');
    }
    var paramString = querystring.stringify(param);
    //console.log(paramString);
    var url = 'http://www.xinli001.com/ajax/article-list.json?';
    request
    (
        {
            uri:url+paramString

        },function(err,res,body){
        if(err){
            callback(err);
            return;
        }
        var $ =cheerio.load(body);
        var temp =$._root.children;
        //var lenght = temp.length;
        var dataList = [];
        temp.forEach(function (elem){
            var item={};
            var dtURL = elem.children[1].children[1].attribs['href'];//文章的链接
            var id = dtURL.substring(29).trim();
            var img =  elem.children[1].children[1].children[0].attribs['src'].split('!')[0];//图片的链接  ！180*120
            //console.log(id);
            var title = elem.children[3].children[1].children[0].children[0].data;//文章标题
            var author = elem.children[3].children[3].children[1].children[1].children[0].data.trim();//作者
            var view = elem.children[3].children[3].children[3].children[1].children[0].children[0].data;//阅览次数
            var tag=[];
            var tagTp = elem.children[3].children[5];
            if(tagTp != undefined){
                 if(tagTp.name == 'dl'){
                     var tags = tagTp.children;
                     tags.forEach(function(t){
                         if(t.name == 'dd'){
                             //console.log(t.children[0].children[0].data);//标签
                             tag.push(t.children[0].children[0].data);
                         }
                     });
                     //console.log(tagTp)

                 }

            }
            else {
                tag.push('none');
            }
            item.title = title;
            item.image = img;
            item.view = view;
            item.tags = tag;
            item.ID = id;
            item.author = author;
            dataList.push(item);//添加数据

            //console.log('=============================')

        });
        callback(dataList);
        return;
            //console.log(dataList)
    }
    );
}

module.exports = getList;
