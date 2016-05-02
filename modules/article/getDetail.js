/**
 * Created by PM on 2016/5/2.
 */
var request = require('request');
var cheerio = require('cheerio');

//文章地址：
//http://www.xinli001.com/info/100310245
//div.text
//题图：div.text>p>img

function getDetail(id){
    if(id == undefined || id == null || id == ""){
        //callback('Param Error');
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
            var $ = cheerio.load(body);
            //console.log(body);
            var date = $('.attr')[0].children[3].children[0].data;//发表时间
            var detail = $('.texts')[0];

            console.log(detail);
        }
    )

}
getDetail(100310245);
module.exports = getDetail();