var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src',"{{ 'theme/assets/js/jquery.min.js' | relative_url }}");
document.head.appendChild(jQueryScript);

var temp_pr_version = document.location.href.toString().split('/');
setTimeout(function(){
	document.getElementById("ept-prd-vr").value= parseInt(temp_pr_version[4].toString().replace('v',''))
},1000);

setTimeout(function(){
	$(document).ready(function() {

		if(temp_pr_version[5] == '' || temp_pr_version[5] == undefined)
		{
// 			window.location = $("#site-nav ul li:first a").attr('href');
		}
	});
},200);

function changeProductVersion(data){
	
	var temp_url = "{{ site.url }}{{site.baseurl }}/";
	window.location = temp_url + 'v'+data.value;
}
	
