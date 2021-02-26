var saleprice = 202;
var discount = 6/100;
var max_discount = 95;
var dis_amount = saleprice * discount;

if(saleprice >= 200){
    if(dis_amount > 95){
      after_discount = saleprice - max_discount;
      console.log("final price" + after_discount);      
    }
    else{
        after_discount = saleprice - dis_amount;
        console.log("final price" + after_discount);

    }
}
else{
    console.log(saleprice);
}

var num = 7;

if(num % 2 ==1){
    console.log("num is odd")
}
else{
    console.log("num is even");
}

var a = 'y';
if(a != 'a')
