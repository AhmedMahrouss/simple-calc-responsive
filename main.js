let changeTheme = document.getElementById("smallCircle");
let output = document.getElementById(".output");
let result = document.querySelector(".output p");
let keys = document.querySelectorAll(".inputs span");
let reset = document.getElementById("reset");
let equal = document.getElementById("equal");
let del = document.getElementById("del");
let root = document.querySelector(":root");

let circleValue = 1;
changeTheme.onclick = ()=>{
circleValue++;
if(circleValue == 1){
changeTheme.style.left = '-10px';
document.body.style.background = 'hsl(222, 26%, 31%)';
root.style.setProperty("--input","hsl(223, 31%, 20%)");
root.style.setProperty("--boxshadow","hsl(28, 16%, 65%)");
root.style.setProperty("--resetBoxShadow","hsl(224, 28%, 35%)");
root.style.setProperty("--boxShadowEqual","hsl(6, 70%, 34%)");
root.style.setProperty("--dellReset","hsl(225, 21%, 49%)");
root.style.setProperty("--keyscolor","hsl(224, 28%, 35%)");
root.style.setProperty("--keysBackground","hsl(30, 25%, 89%)");
root.style.setProperty("--output","hsl(224, 36%, 15%)");
root.style.setProperty("--pra","hsl(0, 0%, 100%)");
root.style.setProperty("--smallcircle","hsl(6, 63%, 50%)");
}
else if(circleValue == 2){
changeTheme.style.left = '17px';
document.body.style.background = 'hsl(0, 0%, 90%)';
root.style.setProperty("--input","hsl(0, 5%, 81%)");
root.style.setProperty("--boxshadow","hsl(35, 11%, 61%)");
root.style.setProperty("--resetBoxShadow","hsl(185, 58%, 25%)");
root.style.setProperty("--boxShadowEqual","hsl(25, 99%, 27%)");
root.style.setProperty("--dellReset","hsl(185, 58%, 25%)");
root.style.setProperty("--keyscolor","hsl(60, 10%, 19%)");
root.style.setProperty("--keysBackground","hsl(30, 25%, 89%)")
root.style.setProperty("--output","#fff");
root.style.setProperty("--pra","hsl(60, 10%, 19%)");
root.style.setProperty("--smallcircle","hsl(25, 98%, 40%)");
}
else{
changeTheme.style.left = '45px'
document.body.style.background = 'hsl(268, 75%, 9%)';
root.style.setProperty("--input","hsl(268, 71%, 12%)");
root.style.setProperty("--boxshadow","hsl(285, 91%, 52%)");
root.style.setProperty("--resetBoxShadow","hsl(285, 91%, 52%)");
root.style.setProperty("--boxShadowEqual","hsl(177, 92%, 70%)");
root.style.setProperty("--dellReset","hsl(290, 70%, 36%)");
root.style.setProperty("--keyscolor","hsl(52, 100%, 62%)");
root.style.setProperty("--keysBackground","hsl(281, 89%, 26%)");
root.style.setProperty("--output","hsl(268, 71%, 12%)");
root.style.setProperty("--pra","hsl(52, 100%, 62%)");
root.style.setProperty("--smallcircle","hsl(176, 100%, 44%)");
circleValue = 0;
}
}

// Start Reset Function
reset.onclick = ()=>{
result.innerHTML = '';
}
// End Reset Function

// Start Show opertion Fun
keys.forEach(key=>{
    key.addEventListener("click",(e)=>{
        let value = e.target.dataset.num;
        result.innerHTML += value;
    })
})
// End Show opertion Fun

// Start Equal Function
equal.addEventListener("click",function(e){
    if(result.innerHTML == ''){
        result.innerHTML = '';
    }else{
        let answer = eval(result.innerHTML);
        result.innerHTML = answer;
    }
})
// End Equal Function

// Start del Function
del.onclick = ()=>{
result.innerHTML = result.innerHTML.slice(0,-1);
}
// End Equal Function

