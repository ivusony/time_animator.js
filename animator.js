const animator = (function($){
        
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
       
        function secondPositionCounter(){
            
        }

        return {
            secondPositionCounter : secondPositionCounter
        }
    
})(jQuery)