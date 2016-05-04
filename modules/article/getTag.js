/**
 * Created by PM on 2016/4/29.
 */
var request = require('request');
var cheerio = require('cheerio');

function  getTags (slug){
    if(slug == undefined || slug == null){
        //callback('Param Error');
        return;
    }
    var slugs=[,'marry','family','career','healthy','science'];
    if(slug !== '' && slugs.indexOf(slug)<0){
        //callback('Param Error');
        return;
    }
    var url = 'http://www.xinli001.com/info/';
    request(
        {
           uri: url
        },function (err,res,body){
            if(err){
                //callback(err);
                return;
            }
            console.log(url);
            var $ = cheerio.load(body,{decodeEntities:false});
            //console.log($('.selector-tag').html());
            var uls =$('.selector-tag');// cheerio.load($('.selector-tag').html(),{decodeEntities:false});
            console.log(uls);
            uls.forEach(function (ul){

            })

        }


    )

}

//getTags("");