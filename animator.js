const animator = (function($){
        
         //window object
         var win = {
            h: document.body.clientHeight,
            w: document.body.clientWidth,
            onResize: function(){
                this.h = document.body.clientHeight;
                this.w = document.body.clientWidth;
            }
        }
        //updates the value of h1 only if it differs from the old (existing) one
        $.fn.updateValue = function(oldValue ,newValue){
           if(!oldValue){
                this.html("<h1>" + newValue + "</h1>");
           }else if(oldValue!=newValue){
                this.html("<h1>" + newValue + "</h1>");
           }else{
               return
           }

            
        }
        $.fn.animateToPosition = function(fromTop, speed){
            this.animate({top: fromTop+ 'px'}, speed);
        }
       
        $.fn.calculateHeight = function (){
            console.log(this.innerHeight());
        }
       
    
})(jQuery)