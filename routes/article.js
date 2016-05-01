/**
 * Created by PM on 2016/4/29.
 */
var express = require('express');
var router = express.Router();
var parsers = require('../modules/parsers');
var getList = require('../modules/article/getList');

router.use('/getList',function(req,res){
    var s = (req.params.sort== null) ? "":req.params.sort;
    var f = (req.params.flag == null) ? "":req.params.flag;
    var p = (req.params.page == null) ? 1:req.params.page;
    var t = (req.params.tag == null) ? "":req.params.tag;

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