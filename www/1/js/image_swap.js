$(document).ready(function(){
    
    
    $("#image_list a").each(function(){
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });
    //set up event handlers for links
    $("#image_list a").click(function(evt){
        
        //swap image
        var imageURL = $(this).attr("href");
        $("#image").attr("src", imageURL);
        
        //swap caption
        var caption = $(this).attr("title");
        $("#caption").text(caption);
        //cancel default action of the link
        evt.preventDefault();   //jquery method thats cross-border compatible
    });  //end click
}); //end ready