/**
 * Created by Administrator on 2015/12/28 0028.
 */
var oDiv = document.getElementById("br")
var oLis = oDiv.getElementsByTagName("li")
var oDiv1 = document.getElementById("tu")
var oLit = oDiv1.getElementsByTagName("li")
for (var i = 0; i < oLis.length; i++) {
    oLis[i].zhuFeng = i;
    oLis[i].onmousemove = function () {
        tabchange(this.zhuFeng)
    }
}
function tabchange(curIndex) {
    for (var i = 0; i < oLis.length; i++) {
        oLis[i].className = null;
        oLit[i].className = null;
    }
    oLis[curIndex].className = "select";
    oLit[curIndex].className = "select";
}
