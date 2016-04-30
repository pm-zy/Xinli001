/**
 * Created by PM on 2016/4/29.
 */
var express = require('express');
var router = express.Router();
var parsers = require('../modules/parsers');
var getList = require('../modules/article/getList');

router.use('/getList',function(req,res){
    var s = (req.param('sort') == null) ? "":req.param('sort');
    var f = (req.param('flag') == null) ? "":req.param('flag');
    var p = (req.param('page') == null) ? 1:req.param('page');
    var t = (req.param('tag') == null) ? "":req.param('tag')

    var paramObj = {
        slug:s,
        flag:f,
        page:p,
        tag:t
    };
    getList(paramObj,function(result){
        parsers.resultProc(req,result,res);
    });
});
module.exports = router;