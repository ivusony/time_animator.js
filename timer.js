(function($){
    DomReady.ready(function(){
        //initialisation
        //wait until resize is over, then calculate new middle
        var resizeTimer; 
        $(window).on('resize', function(){
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                let pos = $(window).height()/2;
                ids.forEach(function(h1) {
                    setTimeout(function(){
                        let div = $("#"+h1+"");
                        div.animateToPosition(pos, 1000);
                    },300)
                })
            }, 100);    
        })


       
        var ids = getIds();
       
        ids.forEach(function(h1) {
            let div = $("#"+h1+"");
            div.animateToPosition($(window).height()/2, 2500);
        })
        // counter and h1 updater interval function
        setInterval(initialSettings,1000)
        
        function initialSettings(){
            ids.forEach(function(id){
                let div = $("#"+id+"");
                let OldVal = $("#"+id+"").find('h1').text();
                //pass values to update h1 only if conditions has been met
                div.updateValue(OldVal , dateAndTime.value(id));
            })
        }
        
        var dateAndTime = {
            value: function(id){
               let obj = getDateAndTime();
               return obj[id]
            }
        }
        //gett ids from divs
        function getIds(){
            let idArr = [];
            let objArr = document.querySelectorAll('div.h1container');
            objArr.forEach(function(div){
                idArr.push(div.getAttribute('id'))
            })
            return idArr;
        }
        //GETTING AND CORRECTING DATE AND TIME 
        function getDateAndTime(){
            let stamp = new Date();
            let timestamp = ()=>{
                return {
                    day: stringifyDay(stamp.getDay()),
                    date : dateOrdial(stamp.getDate()),
                    month : stringifyMonth(stamp.getMonth()),
                    year : "'"+yearToShort(stamp.getFullYear()),
                    hour : stringifyTime(stamp.getHours())+'h',
                    min : stringifyTime(stamp.getMinutes())+'m',
                    sec : stringifyTime(stamp.getSeconds()) + 's'
                }
                function stringifyTime(num){
                    num = num.toString();
                    return num.length<2 ? '0'+num : num
                }
                function stringifyDay(indexOfDay){
                    let dayArray = ['Sun', 'Mon' ,'Tue','Wed','Thu','Fri','Sat'];
                    return dayArray[indexOfDay]
                }
                function dateOrdial(date){
                    return  date===1  ?   date+'st' :
                            date===2  ?   date+'nd' :
                            date===3  ?   date+'rd' :
                            date+'th'
                }
                function stringifyMonth(indexOfMonth){
                    let monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
                    return monthArray[indexOfMonth]
                }
                function yearToShort(y){
                    y = y.toString();
                    return y = y.substring(2);
                }
            }
            return timestamp()
        }
    })//domready    
})(jQuery)//iife


