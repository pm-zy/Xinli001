/**
 * Created by PM on 2016/5/6.
 */

var request = require('request');
var cheerio = require('cheerio');
var querystring=require("querystring");

//http://www.xinli001.com/ajax/article-comment-list.json?article_id=100317971&page=1

function getConment(param,callback){
    if(param == undefined || param == null){
        callback('Param Error');
        return;
    }
    if(param.id == "" || param.id == undefined){
        callback('Param Error');
        return;
    }
    param.page = (param.page=="" || param.page == null) ? 1 : param.page;
    var pa = {
        article_id : param.id,
        page : param.page
    }
    var url = 'http://www.xinli001.com/ajax/article-comment-list.json?';
    var paramString = querystring.stringify(pa);
    //console.log(paramString)
    request(
        {
            uri:url+paramString
        },
        function(err,res,body){
            if(err){
                callback(err);
                return;
            }
            var $ = cheerio.load(body,{ignoreSpace:true});
            var lis = $('body')._root.children();
             //console.log();
            var cmtList = [];
            lis.each(function (i){
                if (lis[i].name==='li'){
                    try{
                        var pic =lis[i].children[1].children[1].children[0].attribs['src'];
                        var item = {
                            userPic:pic.split('!')[0].trim(),
                            userName:lis[i].children[3].children[1].children[0].data.trim(),
                            comment:lis[i].children[3].children[3].children[0].data,
                            date:lis[i].children[3].children[5].children[1].children[1].children[0].data.trim()
                        };
                        cmtList.push(item);
                    }
                    catch (e){
                        callback('null');
                        return;
                    }
                }
            });
            //console.log(cmtList)
            if(cmtList.length<=0){
                callback('null');
                return;
            }
            else
                callback(cmtList);
            return;

        }
    )

}
//getConment({id:'100317971',page:1});
module.exports = getConment;

