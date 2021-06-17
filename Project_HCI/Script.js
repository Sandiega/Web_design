$(document).ready(function(){


    setInterval(function(){ 
        let currentImage = $('.current-img')
        let nextImage = currentImage.next()


        if(nextImage.length !=0){
            currentImage.removeClass('current-img').css('z-index',-10)
            nextImage.addClass('current-img').css('z-index',10)
            
        }
        else{
            let firstImage = currentImage.prevAll().last()
            currentImage.removeClass('current-img').css('z-index',-10)
            firstImage.addClass('current-img').css('z-index',10)
            
        }

    }, 3000);

})





