/**
 * Created by PM on 2016/4/29.
 */
//处理callback的各种参数问题
/**
 * Created by 国正 on 2014/7/13.
 */
var callbackHeader;
var res;

var uniResult = {
    status: false,
    info: "",
    data:null
};

function resultProc(req, result, resParam) {
    res = resParam;
    callbackHeader = req.param('callback');
    switch (result) {
        case 'Account Error':
            apiError(401,'ACCOUNT_ERROR');
            break;
        case 'Not Login':
            apiError(403,'USER_NOT_LOGIN');
            break;
        case 'null':
            apiReturn(204,'NO_RECORD');
            break;
        case 'Server Error':
            apiError(500,'REMOTE_SERVER_ERROR');
            break;
        case 'Param Error':
            apiError(400,'PARAM_ERROR');
            break;
        //case 'Renew Failed':
        //    apiError('RENEW_FAILED');
        //    break;
        case 'Added Succeed':
            apiReturn(200,'ADDED_SUCCEED');
            break;
        case 'Already In Favorite':
            apiReturn(200,'ALREADY_IN_FAVORITE');
            break;
        //case 'Added Failed':
        //    apiError('ADDED_FAILED');
        //    break;
        //case 'Deleted Succeed':
        //    apiReturn('DELETED_SUCCEED');
        //    break;
        //case 'Deleted Failed':
        //    apiError('DELETED_FAILED');
        //    break;
        case 'Out Of Range':
            apiError(400,'OUT_OF_RANGE');
            break;
        case 'Session Invalid':
            apiError(403,'SESSION_INVALID');
            break;
        case 'No Info':
            apiError(404,'NO_INFO');
            break;
        default:
            apiReturn(200,result);
            break;
    }
}

function apiError(status,err) {
    uniResult.status = status ;
    uniResult.info = err;
    uniResult.data = {};
    returnJSON(res);
}

function apiReturn(status,content) {
    uniResult.status = status ;
    uniResult.data = content;
    uniResult.info = 'SUCCESS'
    returnJSON(res);
}

function returnJSON() {
    var returnStr;
    if (callbackHeader != '' && callbackHeader) {
        returnStr = callbackHeader + "(" + JSON.stringify(uniResult) + ")";
    }
    else {
        returnStr = JSON.stringify(uniResult);
    }

    if (!res._header) {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.send(returnStr);
    }
    return;
}

module.exports.resultProc = resultProc;