function popupform(B,A){if(!window.focus){return true}window.open("",A,"height=570,width=760,scrollbars=yes,resizable=yes");B.target=A;return true}function launchTagWindow(B){var A=jQuery.getZone(location.href);A=zoneHash[A];if((A!=null)&&(A!=undefined)){B=B+"&base="+jQuery.getNormalizedZoneUrl(location.href)+"&dwapp="+A+"&lang="+rBHash.viperLang}else{B=B+"&base="+jQuery.getNormalizedZoneUrl(location.href)+"&lang="+rBHash.viperLang}windowObject=window.open(B,"TagWindow","height=570,width=760,scrollbars=yes,resizable=1");
windowObject.focus()}(function(A){jQuery.extend({checkRB:function(){if((rBHash==null)||(rBHash==undefined)){rBHash=new Object();rBHash.viperLang="en";rBHash.urlLang="en";rBHash.tagThisWinTitle="Tagit";rBHash.pTags1="Popular tags";rBHash.pTags2="End of Popular tags";rBHash.mTags1="My tags";rBHash.mTags2="End of My tags";rBHash.alt1="Loading Content";rBHash.noATags="No active tags";rBHash.signIn1="Please ";rBHash.signIn2="sign in";rBHash.signIn3=" to access";rBHash.signIn4="My Tags";rBHash.signIn5="To access My Tags, please ";
rBHash.signIn6="sign in";rBHash.signIn7="Read Popular tags"}}})})(jQuery);(function(A){jQuery.extend({isTutorial:function(B){if((B!=null)&&(B!=undefined)){if(B.indexOf("tutorials")!=-1){return"true"}else{return"false"}}}})})(jQuery);(function(A){jQuery.extend({setRB:function(B){if((B!=null)&&(B!=undefined)){rBHash=B}}})})(jQuery);(function(A){jQuery.extend({launchTagThisWindow:function(){var B="/developerworks/mydeveloperworks/bookmarks/bookmarklet/dwtagg/dwtagpost.jsp?lang="+rBHash.viperLang+"&url="+encodeURIComponent(jQuery.normalizeUrl(location.href))+"&title="+encodeURIComponent(window.document.title);
if(login=="false"){windowObject=window.open(B,rBHash.tagThisWinTitle,"height=570,width=600,scrollbars=yes,resizable=1")}else{windowObject=window.open(B,rBHash.tagThisWinTitle,"height=570,width=600,scrollbars=false,resizable=1")}windowObject.focus()}})})(jQuery);(function(A){jQuery.extend({normalizeUrl:function(C){if(C==null||C==undefined){C=location.href}var B=C.indexOf("#");if(B!=-1){C=C.substring(0,B)}C=C.replace(/https:/,"http:");B=C.indexOf("/library/");index2=C.indexOf("/developerworks/");index7=C.indexOf("/tutorials/");
if(index7!=-1&&index2!=-1&&index7>index2){url2=C.substring(index7+11);index4=url2.indexOf("/");if(index4!=-1){C=C.substring(0,index7+index4+11)+"/";return C}}if(B!=-1&&index2!=-1&&B>index2){var D=jQuery.getProtoAndDomain(C)+"developerworks/";if((rBHash.urlLang!="en")&&(rBHash.urlLang!=undefined)){D=D+rBHash.urlLang+"/"}lib="library/";index3=C.indexOf("index.html");if(index3!=-1){C=C.substring(0,index3)}else{index6=C.indexOf(".html");if(index6!=-1){index5=C.indexOf("?");if(index5>index6){C=C.substring(0,index5);
return C}return C}else{index5=C.indexOf("?");if(index5>B){C=C.substring(0,index5)}}}url2=C.substring(B+9);index4=url2.indexOf("/");if(index4!=-1){article=url2.substring(0,index4)+"/"}brand=C.substring(index2+16,B);switch(brand){case"java":C=D+lib+article;break;case"cloud":C=D+lib+article;break;case"industry":C=D+lib+article;break;case"linux":C=D+lib+article;break;case"opensource":C=D+lib+article;break;case"webservices":C=D+lib+article;break;case"web":C=D+lib+article;break;case"xml":C=D+lib+article;
break;case"wireless":C=D+lib+article;break;case"autonomic":C=D+lib+article;break;case"grid":C=D+lib+article;break;case"architecture":C=D+lib+article;break;case"power":C=D+lib+article;break;case"ibm":C=D+lib+article;break}return C}index8=C.indexOf("websphere/techjournal");if(index8!=-1){index5=C.indexOf("?");if(index5>index8){C=C.substring(0,index5)}return C}index9=C.indexOf("websphere/bpmjournal");if(index9!=-1){index5=C.indexOf("?");if(index5>index9){C=C.substring(0,index5)}return C}return C}})})(jQuery);
(function(A){jQuery.extend({getWIInfo:function(){var B="false";jQuery.ajax({type:"GET",url:"/developerworks/dwwi/jsp/Auth.jsp?format=json",dataType:"json",success:function(C){if(C&&C.status=="false"){login="false";userid=null;B="false"}else{if(C&&C.status=="true"){login="true";userid=C.ibmuniqueid;B="true"}}},failure:function(C){login="false";userid=null;alert("onFail: "+C.statusText)},async:false});return B}})})(jQuery);(function(A){jQuery.extend({getProtoAndDomain:function(D){if(D==null){D=location.href
}var B="ibm.com/";var E=B.length;var C=D.indexOf(B);if(C!=-1){return D.substring(0,C+E)}}})})(jQuery);(function(A){jQuery.extend({getZoneUrl:function(E){if(E==null||E==undefined){E=location.href}else{var B="/developerworks/";if((rBHash.urlLang!="en")&&(rBHash.urlLang!=undefined)){B=B+rBHash.urlLang+"/"}var D=B.length;var C=E.indexOf(B);if(C!=-1){C=C+D;var F=E.substring(C);var G=F.indexOf("/");if(G!=-1){E=E.substring(0,(C+G))}else{E=location.href}}else{E=location.href}}return E}})})(jQuery);(function(A){jQuery.extend({getNormalizedZoneUrl:function(F){if(F==null||F==undefined){F=location.href
}else{F=F.replace(/https:/,"http:");var B=jQuery.getProtoAndDomain(F);B=B+"developerworks/";if((rBHash.urlLang!="en")&&(rBHash.urlLang!=undefined)){B=B+rBHash.urlLang+"/"}var E="tutorials/";if(F.indexOf(E)!=-1){B=B+jQuery.getZone(F);return B}var D=B.length;var C=F.indexOf(B);if(C!=-1){C=C+D;var G=F.substring(C);var H=G.indexOf("/");if(H!=-1){zone=G.substring(0,H);if((zone=="java")||(zone=="cloud")||(zone=="industry")||(zone=="linux")||(zone=="opensource")||(zone=="webservices")||(zone=="web")||(zone=="xml")||(zone=="wireless")||(zone=="autonomic")||(zone=="grid")||(zone=="architecture")||(zone=="power")||(zone=="ibm")){F=F.substring(0,C)+"library/"
}else{F=F.substring(0,(C+H))+"/"}}else{F=location.href}}else{F=location.href}}return F}})})(jQuery);(function(A){jQuery.extend({getZone:function(E){if(E==null||E==undefined){E=""}else{var B="/developerworks/";if((rBHash.urlLang!="en")&&(rBHash.urlLang!=undefined)){B=B+rBHash.urlLang+"/"}var D=B.length;var C=E.indexOf(B);if(C!=-1){C=C+D;var F=E.substring(C);var G=F.indexOf("/");if(G!=-1){E=F.substring(0,G);if((zoneHash[E]==null)||(zoneHash[E]==undefined)){E=""}}else{E=""}}else{E=""}}return E}})})(jQuery);
(function(A){jQuery.extend({prepAccessDiv:function(){if((pCont!="")&&(mCont!="")){var C=jQuery.getListItems(pCont);var B="";if(signInMCont==""){B=jQuery.getListItems(mCont)}else{B=signInMCont}accessCont='<div id="dw-tag-access" class="ibm-access"><h2>'+rBHash.pTags1+"</h2>"+C+"<p>"+rBHash.pTags2+"</p><h2>"+rBHash.mTags1+"</h2>"+B+"<p>"+rBHash.mTags2+"</p></div>";A(accessCont).insertAfter("#dw-tag-select-my")}}})})(jQuery);(function(A){jQuery.extend({getListItems:function(E){var C="<ul>";var D="</ul>";
var B=E.indexOf(C);if(B!=-1){E=E.substring(B);var F=E.indexOf(D);if(F!=-1){F=F+D.length;E=E.substring(0,F)}}return E}})})(jQuery);(function(A){jQuery.extend({handleSlider:function(F,D){var E=0;currValue=D.value;if((whichTags=="init")||(whichTags=="pTags")){E=pValue}if(whichTags=="mTags"){E=mValue}if(E<currValue){for(var C=E;C<currValue;C++){A("a.lotusF"+(C+1)).addClass("dw-hidetag")}if((whichTags=="init")||(whichTags=="pTags")){pValue=currValue}if(whichTags=="mTags"){mValue=currValue}}if(E>currValue){for(var B=currValue;
B<E;B++){A("a.lotusF"+(B+1)).removeClass("dw-hidetag")}if((whichTags=="init")||(whichTags=="pTags")){pValue=currValue}if(whichTags=="mTags"){mValue=currValue}}}})})(jQuery);(function(A){jQuery.extend({showUserTags:function(){var B=jQuery.getWIInfo();if(login=="true"){pCont=jQuery("#dw-tag-cloud").html();jQuery("#dw-tag-cloud").html('<center><img class="loading" src="/developerworks/mydeveloperworks/bookmarks/h3/images/progressIndicator.gif" alt="'+rBHash.alt1+'" height="21" width="21"/></center>');
jQuery("#dw-tag-cloud").html(mCont);jQuery("#content-slider").html("");jQuery("#content-slider").slider({animate:true,min:0,max:4,step:1,slide:function C(E,D){jQuery.handleSlider(E,D)}});jQuery("#dw-tag-select-popular").addClass("dw-hidetag");jQuery("#dw-tag-select-my").removeClass("dw-hidetag");jQuery("#acloud").click(function(){jQuery.switchVisible("#dogearTagList","#dogearTagCloud")});jQuery("#alist").click(function(){jQuery.switchVisible("#dogearTagCloud","#dogearTagList")});if(whichTags=="init"){whichTags="mTags";
jQuery("#a-popular").click(function(){jQuery.showAlternateTags()})}else{if(whichTags=="pTags"){whichTags="mTags";A("#content-slider").slider("option","value",mValue)}else{}}}else{pCont=jQuery("#dw-tag-cloud").html();jQuery("#dw-tag-select-popular").addClass("dw-hidetag");jQuery("#dw-tag-select-my").removeClass("dw-hidetag");jQuery("#dw-tag-cloud").html(mCont);if(whichTags=="init"){jQuery("#a-popular").click(function(){jQuery.showAlternateTags()})}whichTags="mTags"}}})})(jQuery);(function(A){jQuery.extend({showAlternateTags:function(){if(whichTags=="init"){jQuery.showUserTags()
}else{if(whichTags=="mTags"){whichTags="pTags";mCont=jQuery("#dw-tag-cloud").html();jQuery("#dw-tag-cloud").html(pCont);jQuery("#content-slider").html("");jQuery("#content-slider").slider({animate:true,min:0,max:4,step:1,slide:function B(D,C){jQuery.handleSlider(D,C)}});A("#content-slider").slider("option","value",pValue);jQuery("#dw-tag-select-my").addClass("dw-hidetag");jQuery("#dw-tag-select-popular").removeClass("dw-hidetag");jQuery("#acloud").click(function(){jQuery.switchVisible("#dogearTagList","#dogearTagCloud")
});jQuery("#alist").click(function(){jQuery.switchVisible("#dogearTagCloud","#dogearTagList")})}else{if(whichTags=="pTags"){jQuery.showUserTags()}else{}}}}})})(jQuery);(function(A){jQuery.extend({switchVisible:function(C,B){if(C!=""){jQuery(C).addClass("dw-hidetag")}if(B!=""){jQuery(B).removeClass("dw-hidetag")}}})})(jQuery);(function(A){jQuery.extend({getPopularTags:function(B){jQuery.ajax({type:"GET",url:B,dataType:"text",success:function(C){C=jQuery.trim(C);if(C.length==0){jQuery("#dw-tag-cloud").html("<center>"+rBHash.noATags+"</center><br />");
pCont="<center>"+rBHash.noATags+"</center><br />"}else{jQuery("#dw-tag-cloud").html(C);pCont=C}jQuery.prepAccessDiv();jQuery("#acloud").click(function(){jQuery.switchVisible("#dogearTagList","#dogearTagCloud")});jQuery("#alist").click(function(){jQuery.switchVisible("#dogearTagCloud","#dogearTagList")});jQuery("#a-my").click(function(){jQuery.showAlternateTags()});jQuery.switchVisible("","#dw-tag-cloud-container");jQuery("#content-slider").slider({animate:true,min:0,max:4,step:1,slide:function D(F,E){jQuery.handleSlider(F,E)
}})},async:true})}})})(jQuery);(function(A){jQuery.extend({getUserTags:function(){var B=jQuery.getWIInfo();urlStr="/developerworks/dwtags/dwjquerytabtags?userid="+userid+"&base="+jQuery.getNormalizedZoneUrl(location.href)+"&lang="+rBHash.viperLang;if(login=="true"){jQuery.ajax({type:"GET",url:urlStr,dataType:"text",success:function(C){C=jQuery.trim(C);if(C.length==0){mCont="<center>"+rBHash.noATags+"</center><br />"}else{mCont=C}jQuery.prepAccessDiv()},async:true})}else{mCont="<center>"+rBHash.signIn1+'<a href="/developerworks/dwwi/DWAuthRouter?m=auth&lang='+rBHash.viperLang+"&d="+encodeURIComponent(location.href)+'">'+rBHash.signIn2+"</a>"+rBHash.signIn3+"<br />"+rBHash.signIn4+"</center><br />";
signInMCont='<div id="dw-tag-access-my" class="ibm-access"><center>'+rBHash.signIn5+'<a href="/developerworks/dwwi/DWAuthRouter?m=auth&lang='+rBHash.viperLang+"&d="+encodeURIComponent(location.href)+'">'+rBHash.signIn6+"</a><p>"+rBHash.signIn7+"</p></center><br /></div>";jQuery.prepAccessDiv()}}})})(jQuery);(function(A){jQuery.extend({getTagsForContent:function(B){jQuery.ajax({url:B,dataType:"html",success:function(D){D=jQuery.trim(D);jQuery("#dw-tag-content").html(D);var E=jQuery("#moretags").html();
if(E!=null){var C=E.indexOf("<A");if(C==-1){C=E.indexOf("<a")}if(C!=-1){E=E.substring(C);jQuery("#dw-moretags-access").html(E)}}jQuery("a.dwmoretags").cluetip({local:true,showTitle:false,positionBy:"bottomTop",sticky:true,mouseOutClose:true,closeText:'<img src="//www.ibm.com/developerworks/js/jquery/cluetip98/i/x.gif" alt="Close" />',arrows:false,dropShadow:true,cluetipClass:"dwbasic"})},async:true})}})})(jQuery);