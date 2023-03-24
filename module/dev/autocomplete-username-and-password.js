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
if(location.href.indexOf("http://localhost:8058/sysadmin/login/index")>-1) {
	$("input[name=userName]").val("admin");
	$("input[name=pwd]").val("admin");
}
if(location.href.indexOf("http://localhost:8058/teacher/login/index")>-1) {
	$("input[name=userName]").val("zmf@jztm");
	$("input[name=pwd]").val("zmf@jztm");
}
if(location.href.indexOf("http://localhost:8058/home/login/index")>-1) {
	$("input[name=userName]").val("1@jztm");
	$("input[name=pwd]").val("1@jztm");
}
if(location.href.indexOf("http://127.0.0.1:8058/teacher/login/index")>-1) {
	$("input[name=userName]").val("cjj@jztm");
	$("input[name=pwd]").val("cjj@jztm");
}