var temp_pr_version = document.location.href.toString().split('/');
var new_url = document.location.href.toString().split(temp_pr_version[4]);
var pg_cur,pg_pp,pg_pn,pg_st,pg_en;

setTimeout(function(){
	document.getElementById("ept-prd-vr").value= parseInt(temp_pr_version[4].toString().replace('v',''))
},1000);

setTimeout(function(){
	$(document).ready(function() {
		// set class and add nav-expander class
		if($( window ).width() >= 1023 ){
			$(".site-nav").css("display","block");
		}
		$('.site-nav ul li ul').addClass('nav-list');
		$('.site-nav ul li ul li').addClass('nav-list-item');
		$('.site-nav ul li ul li a').addClass('nav-list-link');		

		$(".has_child").each(function() {
			$(this).find('a').first().before('<a href="#" class="nav-list-expander"><svg viewBox="0 0 24 24"><use xlink:href="#svg-arrow-right"></use></svg></a>');
		});
		$(".site-nav .nav-list-link").each(function(index) {
		    if( $(this).text().toString().length >= 3 )
		    {
		    	
		        if( $(this).prop("href").toString().split(temp_pr_version[4])[1] === new_url[1])
				{	
					$(this).parent('li').addClass('active');
					$(this).parents('li').addClass('active');
					$(this).addClass('active');
				}
		    }
		    else{
		        $(this).remove();
		    }
			
		});
		
		//set custom attribute for the pagination
		setTimeout(function(){
			$(".site-nav .nav-list-link").each(function(index) {
		    		$(this).attr("cur-pg",index);
			});
		},1500);

		//get Current,Previous and Next Page
		setTimeout(function(){
			$( ".nav-list-link" ).each(function(index) {
			    if($(this).hasClass('active')){
			        pg_cur = parseInt($(this).attr("cur-pg"));
			        pg_pp = pg_cur - 1;
			        pg_pn = pg_cur + 1;
			        pg_st = parseInt($("#site-nav ul li:first a").attr('cur-pg'));
			        pg_en = parseInt($("#site-nav ul li:last a").attr('cur-pg'));
			    }
			});
			if(pg_cur == pg_en)
				$('.ept_pn').hide();
			else
				$('.ept_pn').show();
			if(pg_cur == pg_st)
				$('.ept_pp').hide();
			else
				$('.ept_pp').show();
			
		},4000);
		$(".ept_pp").click(function(){
			if(pg_pp >= 0){
				$(this).show();
				$(".nav-list-link").each(function(index) {
					if(parseInt($(this).attr('cur-pg')) === pg_pp ){
						window.location = document.location.origin + $(this).attr('href');
					}
				});	
			}
			else{
				$(this).hide();
			}
		});
		$(".ept_pn").click(function(){
			if(pg_pn <= pg_en){
				$(this).show();
				$(".nav-list-link").each(function(index) {
					if(parseInt($(this).attr('cur-pg')) === pg_pn ){
						window.location = document.location.origin + $(this).attr('href');
					}
				});	
			}
			else{
				$(this).hide();
			}
		});

		if(temp_pr_version[5] == '' || temp_pr_version[5] == undefined)
		{
			// Fire nav click event once body is ready
			window.location = $("#site-nav ul li:first a").attr('href');
		}
		//set link in Product Name
		var temp_pr_name_link = $(".ept_a_prd_logo").attr('href') + temp_pr_version[4];
		$(".ept_a_prd_logo").attr('href',temp_pr_name_link);
		
		//hide nav bar panel
		$('.ept_nav_arr').click(function(){
			if($( window ).width() >= 1023 ){
				if($(this).hasClass('ept_lf_arr')){
					$('.side-bar').animate({'left' : "-304px"});
					$(this).removeClass('ept_lf_arr');
					$(this).addClass('ept_rf_arr');
					$('.main').animate({'marginLeft' : "44px"});
					$(".main-header").css("width","calc(100% - 44px)");
				}
				else
				{
					$(".main-header").css("width","calc(100% - 340px)");
					$('.main').animate({'marginLeft' : "348px"});
					$('.side-bar').animate({'left' : "0px"});
					$(this).removeClass('ept_rf_arr');		
					$(this).addClass('ept_lf_arr');
				}
				
			}
		});
	});
},1000);

function changeProductVersion(data){
	
	var temp_url = "{{ site.url }}{{site.baseurl }}/";
	window.location = temp_url + 'v'+data.value;
}

