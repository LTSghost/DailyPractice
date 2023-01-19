// HTML onload. Get local .txt file to display on #box-small
$(function(){
    $("#box-selector > label").text("選擇器:");
    $("#box-selector > input[type='button']").val("確定");
    $(".box-small > p").text("程式代碼");

    // display left #sample-dom
    $.get('./Exercise-1-read.txt', function(data){
        $('#sample-dom').append(data);
    });

    $("#sample-dom > p").text("請使用我們的jQuery 選擇器檢測器來演示不同的選擇器〪");

    // display right #sample-dom-source
    $.get('./Exercise-1-read.txt', function(data) {
        $('#sample-dom-source').text(data);
    });

})

// click #button-apply button to matched element from div#sample-dom 
// and addClass on matched element
$("#button-apply").click(function () {
    $("#sample-dom > p").text("請使用我們的jQuery 選擇器檢測器來演示不同的選擇器〪");
    
    selectTableTd1 = $("table.reference.notranslate > tbody > tr > td:nth-child(1)")

    selectTableTd2 = $("table.reference.notranslate > tbody > tr > td:nth-child(2)")
    

    tableCount = 0
    $.each(selectTableTd1, function(n, elem){
        // selector.val() matched selectTableTd1
        if ( $("#selector").val() == elem.textContent) {

            $(elem).css("background-color","yellow");

            Td2 = selectTableTd2[n].textContent   // e.g. $(":text")

            $(selectTableTd2[n]).css("background-color","green");

            // $("#jquery-statement").text("jQuery語句: $(\"" + selectorText + "\").addClass(\"found-element\");");

            $("#jquery-statement").text("jQuery語句: " + Td2 + ".addClass(\"found-element\");");

            // string process
            Td2 = Td2.replace("$(\"","")
            Td2 = Td2.replace("\")","")
            console.log(Td2)

            // const founded = $("#sample-dom").find(Td2);
            founded = $(".box-small").find(Td2);

            console.log(founded)

            founded.addClass("found-element");

            $("#resulting-elements-count").text("匹配結果:"+ " " + founded.length)

            var alltext = "";
            $.each(founded, function(n, elem){
                alltext += founded[n].tagName + "#" + founded[n].id + "\n"
                $("#resulting-elements").text(alltext)
            })
        } else tableCount++
    })

    // matched selectTable then return 0
    if (tableCount != selectTableTd1.length) {
        return 0;
    }

    try {
        // in div#sample-dom to find element 
        // and assign to founded variable
        // const founded = $("#sample-dom").find($("#selector").val());

        founded = $(".box-small").find($("#selector").val());

        console.log(founded)

        $("#jquery-statement").text("jQuery語句: \"" + $("#selector").val() + "\".addClass(\"found-element\");");

        // addClass in matched element
        founded.addClass("found-element");

        // $("#jquery-statement").text("jQuery語句: $(\"" + $("#selector").val() + "\").addClass(\"found-element\");");

        $("#resulting-elements-count").text("匹配結果:"+ " " + founded.length)

        var alltext = "";
        $.each(founded, function(n, elem){
            alltext += founded[n].tagName + "#" + founded[n].id + "\n"
            $("#resulting-elements").text(alltext)
        })

    } catch (error) {
        console.log("error")
        $("#jquery-statement").text("jQuery語句: \"" + $("#selector").val() + "\".addClass(\"found-element\");");
        $("#resulting-elements-count").text("匹配結果: error")
        $("#resulting-elements").text("error")
    }
});

