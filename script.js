let allPriceRec = 0;


const addad = (number) =>{
    x = 0;
    if (number < 0){
        number = number * -1;
        x = 1
    }
    let q = 0;
    let len = String(number).length 
    let array = String(number).split('')
    let i = 0
    if (q === 0){
        if (len % 3 !== 0){
            let baghi = len % 3;
            array.splice(baghi,0,"/")
            i = i + baghi;
            i = i + 1
            i = i + 3
        }
        q = 1
    }
    else{
        i = 3
    }
    while (i < len){
        array.splice(i,0,"/");
        i = i + 1 
        i = i + 3
    }
    if (x === 1){
        array.splice(0,0,"-")
    }
    return array.join("")
}

const priceRecOkay = () =>{
    const PriceRec = document.getElementById("input-price-rec").value;
    allPriceRec = allPriceRec + parseInt(PriceRec);
    const dateRec = document.getElementById("input-date-rec").value;
    document.getElementById("answer-rec").innerHTML += '<div class="answer-rec-item"><h6 class="how-rec">مبلغ:' + addad(PriceRec) + '</h6><h6 class="when-rec" style="margin-top: -3px;">تاریخ:' + dateRec + '</h6></div>'
    document.getElementById("input-price-rec").value = "";
    document.getElementById("input-date-rec").value = "";
}

let allPricePay = 0;

const pricePayOkay = () =>{
    const PricePay = document.getElementById("input-price-pay").value;
    allPricePay = allPricePay + parseInt(PricePay);
    const datePay = document.getElementById("input-date-pay").value;
    const descPay = document.getElementById("input-desc-pay").value;
    document.getElementById("answer-pay").innerHTML += '<div class="answer-item"><h6 class="how-pay">مبلغ:' + addad(PricePay) + '</h6><h6 class="when-pay" style="margin-left: 10px;">تاریخ:' + datePay + '</h6><p class="desc-pay">' + descPay + '</p></div>'
    document.getElementById("input-price-pay").value = "";
    document.getElementById("input-date-pay").value = "";
    document.getElementById("input-desc-pay").value = "";
}

const doIt = () =>{
    const baghi = allPriceRec - allPricePay;
    document.getElementById("final-wrapper").innerHTML = '<h1 id="allpricepay" style="color: red;">خرج شده : ' + addad(allPricePay) + '</h1><h1 id="allpricerecive" style="color: green;"> دریافتی : ' + addad(allPriceRec) + '</h1><h1 id="baghi" style="color: blue;"> باقی مانده در حساب : ' + addad(baghi) + '</h1>'
    
}