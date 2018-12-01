(function($){
    DomReady.ready(function(){

        animator.secondPositionCounter()
        var ids = getIds();
       
        //main function
        setInterval(function(){
            ids.forEach(function(id){
                let div = $("#"+id+"");
                div.html("<h1>"+events.string(id)+"</h1>");
            })
        },1000)
        
        
        var events = {
            string: function(id){
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
                    sec : stringifyTime(stamp.getSeconds()+'s')
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