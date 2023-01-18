$(function(){
    $("#box-selector > label").text("選擇器:");
    $("#box-selector > input[type='button']").val("確定");
    $(".box-small > p").text("程式代碼");
    $("#selector").val(":text");
    
    

    // $("#selector").val()

    // display left
    $.get('./Exercise-1-read.txt', function(data){
        // var lines = data.split('\n')
        $('#sample-dom').append(data);
        // $.each(lines, function(n, elem) {
        //     console.log(lines)
        //     $('#sample-dom').append(elem);
        // });
    });

    $("#sample-dom > p").text("請使用我們的jQuery 選擇器檢測器來演示不同的選擇器〪");
    $("#sample-dom > p").text("請使用");

    // display right
    $.get('./Exercise-1-read.txt', function(data) {
        $('#sample-dom-source').text(data);
    });

})

$("#button-apply").click(function () {
    var selectorText = $("#selector").val()
    $("#jquery-statement").text("jQuery語句: $(\"" + selectorText + "\").addClass(\"found-element\");");
    selectAble = $("table.reference.notranslate > tbody > tr > td:nth-child(1)")
    console.log(selectAble)

    var counted = 0;

    

    // in div#sample-dom to find element
    founded = $("#sample-dom").find($("#selector").val());
    


    $.each(selectAble, function(n, elem){
        // console.log(elem.textContent)
        if ( $("#selector").val() == elem.textContent) {
            console.log("found")
            // $(elem.textContent).addClass("found-element");
            $(elem).css("background-color","yellow");
            console.log(counted)
        } else console.log("not found")
    })

    
    if ( founded ) {
        $("#resulting-elements-count").text("匹配結果:"+ " " + founded.length)
        $("#resulting-elements").text(founded[0].tagName + "#" + founded[0].id)
        $("#sample-dom >" + $("#selector").val()).addClass("found-element")
        // $("#resulting-elements").text(founded[0])
    }
});

