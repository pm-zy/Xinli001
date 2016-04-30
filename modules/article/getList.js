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
var param ={
    type:'',
    tag:'',
    flag:'new',
    page:1
};
getList(param);
function getList(param){
   //type默认是全部
    if(param == undefined || param == null){
        //callback('Param Error');
    }
    var paramString = querystring.stringify(param);
    console.log(paramString);
    var url = 'http://www.xinli001.com/ajax/article-list.json?';
    request
    (
        {
            uri:url+paramString,
            encoding:null
        },function(err,res,body){
        if(err){
            //callback(err);
            return;
        }
        var $ =cheerio.load(body);
        console.log(body.toString());
    }
    )


}