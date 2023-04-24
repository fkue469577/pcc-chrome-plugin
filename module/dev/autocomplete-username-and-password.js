if(location.href.indexOf("http://127.0.0.1:8668/login")>-1) {
	$("input[name=username]").val("admin@jztm");
	$("#password").val("admin@jztm");
	$("select[name=role]").val(2)
}
if(location.href.indexOf("http://localhost:8668/login")>-1) {
	$("input[name=username]").val("admin");
	$("#password").val("admin");
}
if(location.href.indexOf("http://192.168.1.33:8668/login")>-1) {
	$("input[name=username]").val("zhangsan");
	$("#password").val("zhangsan");
}

// -------------------------  port: 8058  -------------------------------
if(location.href.indexOf("http://localhost:8058/sysadmin/login/index")>-1) {
	$("input[name=userName]").val("admin");
	$("input[name=pwd]").val("admin");
}
if(location.href.indexOf("http://localhost:8058/admin/login/index")>-1) {
	$("input[name=user_name]").val("1@jztm");
	$("input[name=psw]").val("1@jztm");
}
if(location.href.indexOf("http://127.0.0.1:8058/admin/login/index")>-1) {
	$("input[name=user_name]").val("admin@jztm");
	$("input[name=psw]").val("admin@jztm");
}
if(location.href.indexOf("http://localhost:8058/teacher/login/index")>-1) {
	$("input[name=userName]").val("zmf@jztm");
	$("input[name=pwd]").val("zmf@jztm");
}
if(location.href.indexOf("http://127.0.0.1:8058/teacher/login/index")>-1) {
	$("input[name=userName]").val("cjj@jztm");
	$("input[name=pwd]").val("cjj@jztm");
}
if(location.href.indexOf("http://192.168.1.33:8058/teacher/login/index")>-1) {
	$("input[name=userName]").val("1@tgjy");
	$("input[name=pwd]").val("1@tgjy");
}
if(location.href.indexOf("http://localhost:8058/home/login/index")>-1 || location.href.indexOf("http://192.168.1.33:8058/home/login/index")>-1) {
	$("input[name=userName]").val("1@jztm");
	$("input[name=pwd]").val("1@jztm");
}
if(location.href.indexOf("http://127.0.0.1:8058/home/login/index")>-1 || location.href.indexOf("http://192.168.1.33:8058/home/login/index")>-1) {
	$("input[name=userName]").val("2@tgjy");
	$("input[name=pwd]").val("2@tgjy");
}
if(location.href.indexOf("http://127.0.0.1:8058/home/login/index")>-1 || location.href.indexOf("http://192.168.1.33:8058/home/login/index")>-1) {
	$("input[name=userName]").val("3@jztm");
	$("input[name=pwd]").val("3@jztm");
}
