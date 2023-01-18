// ----------------------------- v1
// function DocumentReady()
// {
// 	$("#divTest1").text("Hello, world!");	
// }

// $(document).ready(DocumentReady);

// ----------------------------- v2
// $(document).ready(function()
// {
// 	$("#divTest1").text("Hello, world!");	
// });

// ----------------------------- v3
$(function()
{
	$("#divTest1").text("Hello, world!");
    $("span.bold").text("Hello, world!").css("font-weight", "bold");
    $("[title]").css("text-decoration", "underline");
    $("a[target='_blank']").append(" [new window]");
    $("a[target!='_blank']").append(" [same window]");
});