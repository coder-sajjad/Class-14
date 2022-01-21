
/**
 *  ORDER TIMER CALCULATOR
 */
const mainForm = document.querySelector('#fivver_form');
const date = document.querySelector('#date');
const time = document.querySelector('#time');
const submit = document.querySelector('#submit');
const timeShow = document.querySelector('#timeShow');
const timeMsg = document.querySelector('.timeMsg');

mainForm.addEventListener('submit', function(e){
    e.preventDefault();

    let date = this.querySelector('input[type="date"]').value;
    let time = this.querySelector('input[type="time"]').value;
     
    setInterval(() => {
        let startTime = new Date();
        let endTime = new Date(date + ' ' + time);

        let timeDiffarent = Math.floor(Math.abs(endTime.getTime() - startTime.getTime()));

        let totalSec = Math.floor(timeDiffarent / 1000);
        let totalMin = Math.floor(totalSec / 60);
        let totalHours = Math.floor(totalMin / 60);
        let totalDay = Math.floor(totalHours / 24);

        let hours = totalHours - (totalDay * 24);
        let minute = totalMin - (totalDay * 24 * 60) - (hours * 60);
        let second = totalSec - (totalDay * 24 * 60 * 60) - (hours * 60 * 60) - (minute * 60);

        timeShow.innerHTML = `<p> ${ totalDay > 9 ? totalDay : '0'+totalDay } : ${ hours > 9 ? hours : '0'+hours } : ${ minute > 9 ? minute : '0'+minute } : ${ second > 9 ? second : '0'+second }  </p>`;

    }, 1000);   

});


/**
 *  AGE CAlCULATOR
 */
const ageMainForm = document.querySelector('#ageMainForm');
const ageResult = document.querySelector('.ageResult');


ageMainForm.addEventListener('submit', function(e){
    e.preventDefault();
    
    let ageMonth = this.querySelector('input[type="date"]').value;
    let ageDay = this.querySelector('input[type="time"]').value;

    let date = new Date();
    let ageDate = new Date(ageMonth + ' ' + ageDay);

    let ageDiff = Math.floor(Math.abs(ageDate.getTime() - date.getTime()));

    let totalSec = Math.floor(ageDiff / 1000);
    let totalMin = Math.floor(totalSec / 60);
    let totalHour = Math.floor(totalMin / 60);
    let totalDay = Math.floor(totalHour / 24);
    let totalMonth = Math.floor(totalDay / 30);
    let totalYears = Math.floor(totalMonth / 12);
    let totalWeek = Math.floor(totalDay / 7);

    let smonth = totalMonth - (totalYears + 12);
    let sday =  totalDay - (totalYears * 12 * 30) - (totalMonth * 30);
    let shour =  totalHour - (totalYears * 12 * 30 * 24) - (totalMonth * 30 * 24) - (sday * 24);
    let sminute =  totalMin - (totalYears * 12 * 30 * 24 * 60) - (totalMonth * 30 * 24 * 60 ) - (totalDay * 24 * 60) - (totalHour * 60);
    let ssecond =  totalSec - (totalYears * 12 * 30 * 24 * 60 * 60) - (totalMonth * 30 * 24 * 60 * 60) - (totalDay * 24 * 60 * 60) - (totalHour * 60 * 60) - (totalMin * 60);

    if( ageMonth == '' || ageDay == '' ){
        ageResult.innerHTML = `<p class="alert alert-danger">Date and Time fields are required</p>`;
    }else{
        ageResult.innerHTML = `<p class="alert alert-success">${ totalYears } years ${ smonth } Month ${ totalWeek } Weeks ${ sday } Day ${ shour } Hours ${ sminute } Minute ${ ssecond }</p>
        <h5 class="bg-white"><p>Month : ${ smonth }</p>
        <p>Weeks : ${ totalWeek }</p>
        <p>Day : ${ sday} </p>
        <p>Hour : ${ shour }</p>
        <p>Minute : ${ sminute }</p>
        <p>Your Total Second : ${ ssecond }</p></h5>

        `;
    }



    

});

