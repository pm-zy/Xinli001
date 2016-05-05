/**
 * Created by PM on 2016/5/5.
 */
/**
 * Created by PM on 2016/4/29.
 */
var request = require('request');
var cheerio = require('cheerio');

function  getBanner(callback){
    var url = 'http://www.xinli001.com/';
    request(
        {
            uri: url
        },function (err,res,body){
            if(err){
                callback(err);
                return;
            }
            var $ = cheerio.load(body,{decodeEntities:false,ignoreSpace:true});
            var lis =$('.slide').children();
            //var tags=[];
            //console.log(uls);
            var dataList = [];
            lis.each(function (i){
                if(lis[i].name ==='a'){
                    var id = lis[i].attribs.href.substring(29).trim();//文章id
                    var div = lis[i].children;
                    var imgDiv = $(div).find('img')[0].attribs.src;//图片
                    var tip = $(lis[i]).find('.tip').text().trim();//图片下的tip
                    var item = {
                        ID : id,
                        image : imgDiv,
                        tip : tip
                    };
                    dataList.push(item)
                }
            });
            //console.log(dataList);
            callback(dataList);
        }
    )
}

module.exports = getBanner;