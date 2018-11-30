(function($){
        
         //window object
         var win = {
            h: document.body.clientHeight,
            w: document.body.clientWidth,
            onResize: function(){
                this.h = document.body.clientHeight;
                this.w = document.body.clientWidth;
                $('.segment').find('h1').top();
            }
        }
        //update window object on resize
        $(window).on('resize', win.onResize.bind(win));

        $.fn.top =  function(){
            this.css({'margin-top':(win.h/2-100)});
            return this;
        }

        
    
})(jQuery)