$(document).ready(function(){

    $('.next').click(function(){
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

      })

      $('.prev').click(function(){
        let currentImage = $('.current-img')
        let prevImage = currentImage.prev()


        if(prevImage.length !=0){
            currentImage.removeClass('current-img').css('z-index',-10)
            prevImage.addClass('current-img').css('z-index',10)
        }
        else{
            let lastImage = currentImage.nextAll().last()
            currentImage.removeClass('current-img').css('z-index',-10)
            lastImage.addClass('current-img').css('z-index',10)
        }

      })


})




