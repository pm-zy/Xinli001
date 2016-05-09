/**
 * Created by PM on 2016/5/9.
 */
var request = require('request');
var cheerio = require('cheerio');
var querystring=require("querystring");
//成功返回信息{code:0,data:'登录成功',next='http://www.xinli001.com/'}
/*失败返回信息：
178
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
    <meta http-equiv="refresh" content="1;url=http://account.xinli001.com/login" />

    <title>Redirecting to http://account.xinli001.com/login</title>
    </head>
<body>
Redirecting to <a href="http://account.xinli001.com/login">http://account.xinli001.com/login</a>.
</body>
</html>
0
*/
//var p={
// username:'panda_m@126.4com',
// password:'yumeng'
// };
var userCookie;
function userLogin(username, password, callback) {
    if (username == '' || password == '') {
        callback('Account Error');
        //console.log('u')
        return;
    }
     request(
         {
             url:'http://account.xinli001.com/login',
             method:'POST',
             headers: {
                 ContentType: 'application/x-www-form-urlencoded; charset=UTF-8'
             },
             form: {
                 username: username,
                 password: password
             }
         },
         function(err,res,body){
             if(err){
                 callback(err);
                 return;
             }
             userCookie = res.headers['set-cookie'];
                 var resJson = JSON.parse(body);
             //console.log(resJson.code)
                 if(resJson.code == 0 ){
                     callback(userCookie);
                     return;
                     //console.log(userCookie);
                 }
                 else if(resJson.code==-1){
                     callback('Account Error');
                     return;
                 }
             else {
                     callback('ERR');
                     return;
                 }


         }

     )
}
//userLogin(p.username, p.password);
module.exports = userLogin ;