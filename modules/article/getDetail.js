/**
 * Created by PM on 2016/5/2.
 */
var request = require('request');
var cheerio = require('cheerio');

//文章地址：
//http://www.xinli001.com/info/100310245
//div.text
//题图：div.text>p>img

function getDetail(id,callback){
    if(id == undefined || id == null || id == ""){
        callback('Param Error');
        return;
    }

    var url = 'http://www.xinli001.com/info/';

    request(
        {
            uri:url+id
        },
        function(err,res,body){
            if(err){
                callback(err);
                return;
            }
            var $ = cheerio.load(body,{decodeEntities: false});
            //console.log(body);
            try{
                var date = $('.attr')[0].children[3].children[0].data;//发表时间
            }
            catch (e){
                callback('null');
                return;
            }
            //var date = $('.attr')[0].children[3].children[0].data;//发表时间
            $('.copyright').remove();
            $('#zan-btn').remove();
            var detail = $.html('.texts');//文章内容
            var title =  $.html('.title >h2');
           title = title.slice(4,-5);
            //console.log(title)
            var textObj = {};
            textObj.title = title;
            textObj.content = detail;
            textObj.date = date;
            callback(textObj);
            //console.log(body);

        }
    )

}
module.exports = getDetail;