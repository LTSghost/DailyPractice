var ulLeft = []
var ulRight = []
$(function(){
    // change SimpleChinese to TranditionalChinese
    $("div.box-title > label:nth-child(1)").text("圖片插入位置:");
    $(".box-item > div")[0].textContent = "可選項";
    $(".box-item > div")[1].textContent = "已選項";
    
    $.getJSON( "data.json", function( json ) {
        data = json['data']
        // console.log(data)
        // console.log(data[0])
        // console.log(data[0][1])

        $.each( data, function(key, val){
            ulLeft.push(data[key][key+1])
        })

        // new li > img
        $.each(ulLeft, function(i, val){
            i++  // let index start from 0 to 1
            // $li = $("<li id=\"" + i + "\" ></li>");
            $li = $("<li id=\"pL" + i + "\" ></li>");
            newLi = $("ul.item-list.jq-leftbox").append($li);

            $img = $("<img src=\"" + val + "\">");
            // $("ul.item-list.jq-leftbox > li#\\3" + i + "").append($img)
            $("ul.item-list.jq-leftbox > li#pL\\3" + i + "").append($img)

            $("ul.item-list.jq-leftbox > li#pL\\3" + i + "").click(function(){
                if ($(this).hasClass( "bgColor" )) {
                    $(this).removeAttr('class');
                    return 0;
                }
                $(this).addClass("bgColor")
            });

            
        })


        // $("#p1").click(function(){
        //     if ($( "#p1" ).hasClass( "bgColor" )) {
        //         $("#p1").removeAttr('class');
        //         return 0;
        //     }
        //     $(this).addClass("bgColor")
        // });
        
        // $.each( data, function( key, val ) {
        //     key += 1
        //     $li = $("<li id=\"" + key + "\" ></li>");
        //     newLi = $("ul.item-list.jq-leftbox").append($li);
            
        //     $img = $("<img src=\"" + data[key-1][key] + "\">");
        //     $("ul.item-list.jq-leftbox > li#\\3" + key + "").append($img)
        //     console.log($img)

        //     console.log(newLi.get(0))
        // });
        
    });

})

// 問題 無法給事件
// $("#p1").click(function(){
//     if ($( "#p1" ).hasClass( "bgColor" )) {
//         $("#p1").removeAttr('class');
//         return 0;
//     }
//     $(this).addClass("bgColor")
// });


// $( ".item-title" ).addClass("bgColor");

// put all left to right  
$(".jq-rightall").click(function(){
    var inputCheck = $("input:checked");

    if (inputCheck.val() == "append") {
        // remove left origin
        $("ul.item-list.jq-leftbox > li").remove();

        // $.each(ulLeft, function(i,val){
        //     ulRight.push(val);
        // })

        // "append"
        $.each(ulLeft, function(){
            ulRight.push(ulLeft.shift())
        })

        show(ulRight);
    } else {
        // remove left origin
        $("ul.item-list.jq-leftbox > li").remove();

        // "prepend"
        $.each(ulLeft, function(){
            ulRight.unshift(ulLeft.pop())
        })

        show(ulRight);
    }

})

// put all right to left
$(".jq-leftall").click(function(){
    var inputCheck = $("input:checked");

    if (inputCheck.val() == "append") {
        // remove right element
        $("ul.item-list.jq-rightbox > li").remove();
        
        // "append"
        $.each(ulRight, function(){
            ulLeft.push(ulRight.shift())
        })
        show(ulLeft);
    } else {
        // remove right element
        $("ul.item-list.jq-rightbox > li").remove();

        // "prepend"
        $.each(ulRight, function(){
            ulLeft.unshift(ulRight.pop())
        })
        show(ulLeft);
    }


})

// lock left to right  
$(".jq-right").click(function(){
    var inputCheck = $("input:checked");
    var count = 0;
    all = $(".jq-leftbox > li")

    // $.each(all,function(i, val){
    //     if (val.className == "bgColor") { 
    //         count ++;
    //     }
    // })
    // if (count > 1) {
    //     alert("只能選擇一個")
    //     return 0;
    // }

    if (inputCheck.val() == "append") {
        // "append"
        $.each(all,function(i, val){
            if (val.className == "bgColor") {
                i -= count;
                console.log(i);
                removeL = ulLeft.splice(i,1);
                ulRight.push(removeL)
                console.log("ulLeft = " + ulLeft)
                console.log("ulRight = " + ulRight)
                count++;
            }
        })
    } else {
        var tempArr = []
        // "prepend"
        $.each(all,function(i, val){
            if (val.className == "bgColor") {
                i -= count;
                console.log(i);
                removeL = ulLeft.splice(i,1);
                console.log(removeL);
                // ulRight.unshift(removeL)
                console.log("ulLeft = " + ulLeft);
                console.log("ulRight = " + ulRight);
                tempArr.push(removeL);
                console.log(tempArr);
                count++;
            }
        })
        $.each(tempArr,function(){
            ulRight.unshift(tempArr.pop())
        })
        
    }


    show(ulLeft);
    show(ulRight);
})

// lock right to left
$(".jq-left").click(function(){
    var inputCheck = $("input:checked");
    var count = 0;
    all = $(".jq-rightbox > li")

    // $.each(all,function(i, val){
    //     if (val.className == "bgColor") { 
    //         count ++;
    //     }
    // })
    // if (count > 1) {
    //     alert("只能選擇一個")
    //     return 0;
    // }

    if (inputCheck.val() == "append") {
        $.each(all,function(i, val){
            if (val.className == "bgColor") { 
                i -= count;
                removeR = ulRight.splice(i,1);
                ulLeft.push(removeR)
                console.log("ulLeft = " + ulLeft)
                console.log("ulRight = " + ulRight)
                count++;
            }
        })
    } else {
        var tempArr = []
        // "prepend"
        $.each(all,function(i, val){
            if (val.className == "bgColor") { 
                i -= count;
                removeR = ulRight.splice(i,1);
                // ulLeft.unshift(removeR);
                tempArr.push(removeR);
                count++;
            }
        })
        $.each(tempArr,function(){
            ulLeft.unshift(tempArr.pop())
        })
    }


    show(ulLeft);
    show(ulRight);
})

// $('#'+1).click(function() {
//     $(this).css("background","yellow");
// });

// according array to show element
function show(ul) {
    if (ul == ulRight) {
        // remove right origin element
        $("ul.item-list.jq-rightbox > li").remove();

        // append right new element according ulRight array
        $.each(ul, function(i,val){
            i++
            $li = $("<li id=\"pR" + i + "\" ></li>");
            newLi = $("ul.item-list.jq-rightbox").append($li);

            $img = $("<img src=\"" + val + "\">");
            $("ul.item-list.jq-rightbox > li#pR\\3" + i + "").append($img)

            $("ul.item-list.jq-rightbox > li#pR\\3" + i + "").click(function(){
                if ($(this).hasClass( "bgColor" )) {
                    $(this).removeAttr('class');
                    return 0;
                }
                $(this).addClass("bgColor")
            });
        })
    } else {
        // remove left origin element
        $("ul.item-list.jq-leftbox > li").remove();

        // append left new element according ulLeft array
        $.each(ul, function(i,val){
            i++
            $li = $("<li id=\"pL" + i + "\" ></li>");
            newLi = $("ul.item-list.jq-leftbox").append($li);

            $img = $("<img src=\"" + val + "\">");
            $("ul.item-list.jq-leftbox > li#pL\\3" + i + "").append($img)

            $("ul.item-list.jq-leftbox > li#pL\\3" + i + "").click(function(){
                if ($(this).hasClass( "bgColor" )) {
                    $(this).removeAttr('class');
                    return 0;
                }
                $(this).addClass("bgColor")
            });
        })
    }
}