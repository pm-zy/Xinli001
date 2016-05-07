/**
 * Created by PM on 2016/4/29.
 */
var request = require('request');
var cheerio = require('cheerio');

function  getTags (slug ,callback){
    if(slug == undefined || slug == null){
        callback('Param Error');
        return;
    }
    var slugs=[,'marry','family','career','healthy','science'];
    if(slug !== '' && slugs.indexOf(slug)<0){
        callback('Param Error');
        return;
    }
    var url = 'http://www.xinli001.com/info/';
    var i = slugs.indexOf(slug);
    if(i === -1){
        i=0;
    }
    request(
        {
           uri: url
        },function (err,res,body){
            if(err){
                callback(err);
                return;
            }
             var $ = cheerio.load(body,{decodeEntities:false,ignoreSpace:true});
             var uls =$('.selector-tag');
            var tags=[];
            uls[i].children.forEach(function (it){
                    if(it.name == 'li'){
                        //console.log();
                         tags.push(it.attribs['data-tag'])
                    }
                });

            callback(tags);
            return;


        }


    )

}

//getTags("science");
module.exports = getTags ;