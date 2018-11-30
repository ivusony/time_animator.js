(function($){
    DomReady.ready(function(){
       
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
            },
            position: function(id){

            }
        }
        //gett ids from divs
        function getIds(){
            let idArr = [];
            let objArr = document.querySelectorAll('div.segment');
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
                    year : stamp.getFullYear(),
                    hour : stringifyTime(stamp.getHours()),
                    min : stringifyTime(stamp.getMinutes()),
                    sec : stringifyTime(stamp.getSeconds())
                }
                function stringifyTime(num){
                    num = num.toString();
                    return num.length<2 ? '0'+num : num
                }
                function stringifyDay(indexOfDay){
                    let dayArray = ['Sunday', 'Monday' ,'Tuesday','Wednesday','Thursday','Friday','Saturday'];
                    return dayArray[indexOfDay]
                }
                function dateOrdial(date){
                    return  date===1  ?   date+'st' :
                            date===2  ?   date+'nd' :
                            date===3  ?   date+'rd' :
                            date+'th'
                }
                function stringifyMonth(indexOfMonth){
                    let monthArray = ['December', 'January', 'February', 'March', 'April', 'May', 
                                    'Jun', 'July', 'August', 'September', 'October', 'November'];
                    return monthArray[indexOfMonth]
                }
            }
            return timestamp()
        }
    })//domready    
})(jQuery)//iife