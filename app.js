
/**
 *  ORDER TIMER CALCULATOR JS
 */
const mainForm = document.querySelector('#fivver_form');
const date = document.querySelector('#date');
const time = document.querySelector('#time');
const submit = document.querySelector('#submit');
const timeShow = document.querySelector('#timeShow');
const timeMsg = document.querySelector('.timeMsg');


    let clearTimer ;
mainForm.addEventListener('submit', function(e){
    e.preventDefault();

    let date = this.querySelector('input[type="date"]').value;
    let time = this.querySelector('input[type="time"]').value;
     
    clearTimer = setInterval(() => {
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

    if( second == 0 ){
        clearInterval(clearTimer);
    }

    date.value = '';
    time.value = '';
    
});


/**
 *  AGE CAlCULATOR JS
 */
const ageMainForm = document.querySelector('#ageMainForm');
const ageResult = document.querySelector('.ageResult');

//  form Submit
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

    if( ageMonth == '' || ageDay == '' ){
        ageResult.innerHTML = `<p class="alert alert-danger">Date and Time fields are required</p>`;
    }else{
        ageResult.innerHTML = `<p class="alert alert-info">${ totalYears } years ${ totalMonth } Month ${ totalWeek } Weeks ${ totalDay } Day ${ totalHour } Hours ${ totalMin } Minute ${ totalSec }</p>
            <h5 class="bg-white p-3"><p>Month : ${ totalMonth }</p>
            <p>Weeks : ${ totalWeek }</p>
            <p>Day : ${ totalDay} </p>
            <p>Hour : ${ totalHour }</p>
            <p>Minute : ${ totalMin }</p>
            <p>Total Second : ${ totalSec }</p></h5>
        `;
    }

    ageMonth.value = '';
    ageDay.value = '';    

});


/**
 *  PRODUCT FORM JS
 */
const clickMeAddp = document.querySelector('#clickMeAddp');
const mainProductForm = document.querySelector('#mainProductForm');
const closeBTN = document.querySelector('#closeBTN');
const productForm = document.querySelector('#productForm');
const productList = document.querySelector('#productList');

//  CLOSE BTN
closeBTN.addEventListener('click', function(){
    mainProductForm.style.display="none";
});
mainProductForm.style.display="none" ;

clickMeAddp.addEventListener('click', function(){
    mainProductForm.style.display="block";
});

// PRODUCT FORM
productForm.addEventListener('submit', function(e){
   e.preventDefault();

    let productName = this.querySelector('input[name="productName"]').value;
    let regularPrice = this.querySelector('input[name="regularPrice"]').value;
    let salePrice = this.querySelector('input[name="salePrice"]').value;
    let photo = this.querySelector('input[name="photo"]').value;

    let productArr;
    if( dataGet('products')){
        productArr = dataGet('products');
    }else{
        productArr = [];
    }

    productArr.push({
        name    : productName,
        rprice  : regularPrice,
        sprice  : salePrice,
        image   : photo
    });

    dataSend('products', productArr);
    allProducts();

});

// Product Function for Output
allProducts();
function allProducts(){
    
    let product_all = dataGet('products');
    let data = '';

    product_all.map(productData => {
        data += `
        <div class="col-lg-3 my-3">
           <div class="card">
            <img style="width:100%; height: 200px; object-fit:cover;" class="card-img" src="${ productData.image }" alt="">
                <div class="card-body">
                    <h4>${ productData.name }</h4>
                    <p><span><del>${ productData.rprice ? '$' + productData.rprice : productData.rprice = '' }</del></span> <span>$${ productData.sprice }</span></p>
                    <div class="form-group text-center">
                    <input type="submit" class="btn btn-primary shadow-none" value="Add to cart">
                    </div>
               </div>
            </div>
        </div>
        `;
    });

    productList.innerHTML = data;

};



/**
 *  TEAM MEMBER ADD JS
 */
//  Elements
const teamForm = document.querySelector('#teamForm');
const memberRuslt = document.querySelector('.memberRuslt');


//  Submit form
teamForm.addEventListener('submit', function(e){
    e.preventDefault();

    let dName = this.querySelector('input[name="dName"]');
    let skills = this.querySelectorAll('input[name="skills"]:checked');
    let gender = this.querySelector('input[name="gender"]:checked');
    let dPhoto = this.querySelector('input[name="photo"]');

    let skillsArr = [];
    for( let i = 0; i < skills.length ; i++ ){
        skillsArr.push(skills[i].value);
    }

    let data_arr;
    if( dataGet('devs') ){
        data_arr = dataGet('devs')
    }else{
        data_arr = [];
    }

    data_arr.push({
        devName     :   dName.value,
        devskills   :   skillsArr,
        devgender   :   gender.value,
        dPhoto      :   dPhoto.value
    });

    dataSend('devs', data_arr);

    allDevs();

});

// AllDevs function for Output
allDevs();
function allDevs(){

    let all_Dev = dataGet('devs');
    let devData = '';

    all_Dev.map(ddata => {

        let dlists = '';
        ddata.devskills.map(list => {
            dlists += '<li class="list-group-item"> '+ list +' </li>';

        });

        devData += `
            <div class="col-lg-4 pb-4">
                <div class="card">
                    <img class="card-img" style="width:100%; height:220px; object-fit:cover;" src="${ ddata.dPhoto }" alt="">
                    <div class="card-body">
                    <h4>${ ddata.devName }</h4>
                    <label class="mt-2 mb-2">I have skills :</label>
                    <ul class="list-group">
                        ${ dlists }
                    </ul>
                    <p class="mt-3">Gender : ${ ddata.devgender }</p>
                    </div>
                </div>
            </div>

        `;

    });

    memberRuslt.innerHTML = devData;

};