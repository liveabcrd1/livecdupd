function devideType() {
    var u = navigator.userAgent;
    var ua = navigator.userAgent.toLocaleLowerCase();
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android終端 
    var isiOS = !!u.match(/\(i[^;] ;( U;)? CPU. Mac OS X/); //ios終端 
    var is64Bytes = ua.indexOf('x64') > -1;

    /* 平台系統判斷 -- navigator.platform
     * Return Value:  HP-UX 
     * Linux i686
     * Linux armv7l
     * Mac68K
     * MacPPC
     * MacIntel
     * SunOS
     * Win16
     * Win32
     * WinCE
     * Etc..
     */
    var devSys = navigator;
    var isWin = false;        
    var strPlatform="";
    switch (devSys.platform) {
        case "Win32":
        case "Win16":
            if(is64Bytes==true){
                strPlatform = "x64";
            } else {
                strPlatform = "x32";
            }
            return [true,devSys.platform,strPlatform]; break;
        default:
            return [false,devSys.platform,strPlatform]; break;
    }
}

$(function(){
    /* 平台系統判斷 */    
    var isWinarry = devideType();    
    var isWin = isWinarry[0];    
    var WinName = isWinarry[1];
    var Winis64 = isWinarry[2];
    var a = document.getElementById("download_btn");
    if (isWin == false) {
        $('a.test-btn').attr("href", "");
        a.onclick = function () {
            alert("此程式適用於 【Windows 7 以上版本 】。 請至此系統下載並安裝！")
            return false;
        }

    } else {        
        a.onclick = function () {
            //alert(WinName + "！")
            if(WinName == "Win32" & Winis64 == "x64") {
                //a.href = "https://github.com/hwang6291/bswebsite/raw/gh-pages/mgzapp_x64.exe";
		window.location="https://s3.hicloud.net.tw/mgzapp/download/wfaied/mgzapp_x64.exe";
            } else {
                //a.href = "https://github.com/hwang6291/bswebsite/raw/gh-pages/mgzapp_x32.exe";
		window.location="https://s3.hicloud.net.tw/mgzapp/download/wfaied/mgzapp_x32.exe";
            }
            return true;
        }        
    }
})