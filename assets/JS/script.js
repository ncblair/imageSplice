$("document").ready(function(){
    
    //display and close modal
    var $info_button = $("#info");
    var $info_modal = $("#info-modal");
    var $close_button = $(".exit");
    $info_button.click(function(){
        $info_modal.css("display", "block");
    });
    $close_button.click(function(){
        $info_modal.css("display", "none");
    });
    
    
    
    //pick a random background image and set the unloaded version
    var image_folder = "assets/img/backgrounds/";
    var $background_img = $(".background-unloaded")
    $background_img.attr("src", getRandomImage());
    console.log($background_img.attr("src"));
    
    function getRandomImage() {
        //var images = getListOfImages(image_folder);
        return image_folder + Math.floor(Math.random()*7) + ".JPG";
    }
    
    
    
    /*
    //This is a more dynamic solution that I couldn't quite get to work.
    function getListOfImagesFrom(path) {
        

        var images = [];
        
        var $getImages = $.ajax({
            url : path
        });

        $getImages.done(function(returned) {
            $(returned).find("td > a").each(function(){
                images.push($(this).attr("href"));
            });
        });

        for (var image in images){
            console.log(image);
        }
        return images;
    }
    */
    
    
    
    
});