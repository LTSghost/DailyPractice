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
            $li = $("<li id=\"" + i + "\" ></li>");
            newLi = $("ul.item-list.jq-leftbox").append($li);

            $img = $("<img src=\"" + val + "\">");
            $("ul.item-list.jq-leftbox > li#\\3" + i + "").append($img)

            $("ul > li").get(0).click(function(){
                alert="哭阿"
            })
        })
        
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

// put all left to right  "append"
$(".jq-rightall").click(function(){
    // remove left origin
    $("ul.item-list.jq-leftbox > li").remove();

    // $.each(ulLeft, function(i,val){
    //     ulRight.push(val);
    // })

    $.each(ulLeft, function(){
        ulRight.push(ulLeft.shift())
    })
    show(ulRight);
})

// put all right to left  "append"
$(".jq-leftall").click(function(){
    // remove right element
    $("ul.item-list.jq-rightbox > li").remove();

    // $.each(ulLeft, function(i,val){
    //     ulRight.push(val);
    // })

    $.each(ulRight, function(){
        ulLeft.push(ulRight.shift())
    })
    show(ulLeft);
})

// lock one left to right
$(".jq-right").click(function(){

})

// lock one right to left
$(".jq-left").click(function(){
    
})


// according array to show element
function show(ul) {
    if (ul == ulRight) {
        // remove right origin element
        $("ul.item-list.jq-rightbox > li").remove();

        // append right new element according ulRight array
        $.each(ul, function(i,val){
            i++
            $li = $("<li id=\"" + i + "\" ></li>");
            newLi = $("ul.item-list.jq-rightbox").append($li);

            $img = $("<img src=\"" + val + "\">");
            $("ul.item-list.jq-rightbox > li#\\3" + i + "").append($img)
        })
    } else {
        // remove left origin element
        $("ul.item-list.jq-leftbox > li").remove();

        // append left new element according ulLeft array
        $.each(ul, function(i,val){
            i++
            $li = $("<li id=\"" + i + "\" ></li>");
            newLi = $("ul.item-list.jq-leftbox").append($li);

            $img = $("<img src=\"" + val + "\">");
            $("ul.item-list.jq-leftbox > li#\\3" + i + "").append($img)
        })
    }
}