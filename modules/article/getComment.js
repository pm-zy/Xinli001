/**
 * Created by PM on 2016/5/6.
 */

var request = require('request');
var cheerio = require('cheerio');

//http://www.xinli001.com/ajax/article-comment-list.json?article_id=100317971&page=1

function getConment(param){
    if(param == undefined || param == null){
        //callback('Param Error');
        return;
    }
    if(param.id == "" || param.id == undefined){
        //callback('Param Error');
        return;
    }
    param.page = (param.page=="" || param.page == null) ? 1 : param.page;
    var pa = {
        article_id : param.id,
        page : param.page
    }
    var url = 'http://www.xinli001.com/ajax/article-comment-list.json?';
    var paramString = querystring.stringify(param);
    request(
        {
            uri:url+paramString
        },
        function(err,res,body){
            if(err){
                //callback(err);
                return;
            }
            var $ = cheerio.load(body,{ignoreSpace:true});
            var lis = $('li');
            console.log(lis);
        }
    )

}
getConment({id:100317971,page:1});
module.exports = getConment;

