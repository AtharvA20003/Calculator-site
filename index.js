function display(){
    let x=document.getElementById("sci")
    if(x.style.display==="block"){
        x.style.display="none"
    }else{
        x.style.display="block"
    }
}
let count=0
function graphing(){
    let elt = document.getElementById('calculator');
    let calculator = Desmos.GraphingCalculator(elt);
    if(calculator.style.display==='none'){
        calculator.style.display='block'
    }else{
        calculator.style.display='none'
    }
}

// Scroll to Scientific Calculator
let scroller = document.getElementById('scroll-to-scientific')
let scrollToScientific = document.getElementById('sci')
scroller.addEventListener("click", function(){
    scrollToScientific.scrollIntoView()
})
// Scroll to Graphic Calculator
let scroller_To_Graphic = document.getElementById('scroll-to-graphing')
let scroll_To_Graphing = document.getElementById('calculator')
scroller_To_Graphic.addEventListener("click", function(){
    scroll_To_Graphing.scrollIntoView()
})




function add(){
    // document.getElementById('display_operator').textContent="+" 
    let num1=document.getElementById('sp1').value
    let num2=document.getElementById('sp2').value
    let ans=parseInt(num1)+parseInt(num2)
    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent="Answer= "+ans
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent="Answer= "+ans
        document.getElementById('res').style.display='block'
    }
}
function subtract(){
    // document.getElementById('display_operator').textContent="-" 
    let num1=document.getElementById('sp1').value
    let num2=document.getElementById('sp2').value
    let ans=parseInt(num1)-parseInt(num2)
    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent="Answer= "+ans
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent="Answer= "+ans
        document.getElementById('res').style.display='block'
    }
    
}
function multiply(){
    // document.getElementById('display_operator').textContent="x"
    let num1=document.getElementById('sp1').value
    let num2=document.getElementById('sp2').value
    let ans=parseInt(num1)*parseInt(num2)
    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent="Answer= "+ans
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent="Answer= "+ans
        document.getElementById('res').style.display='block'
    }
    
}
function divide(){
    // document.getElementById('display_operator').textContent="/" 
    let a=document.getElementById('sp1').value
    let b=document.getElementById('sp2').value
    let ans=a/b

    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent=a+"/"+b+" = "+ans
        document.getElementById('res').style.display='block'
    }else if(ans===Infinity){
        document.getElementById('res').textContent="Can't divide by zero"
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent=a+"/"+b+" = "+ans
        document.getElementById('res').style.display='block'        
    }   
}
function Gcd(a,b){
    if (a == 0)
        return b;
    return Gcd(b%a, a)
    // console.log(parseInt(b%a))
}
function getele(){
    let a=document.getElementById('sp1').value
    let b=document.getElementById('sp2').value
    let ans=Gcd(parseInt(a), parseInt(b))
    // console.log(ans)
    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent="GCD("+a+","+b+") =" + ans
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent="GCD("+a+","+b+") =" + ans
        document.getElementById('res').style.display='block'
    }
}
function lcm(){
    let a=document.getElementById('sp1').value
    let b=document.getElementById('sp2').value
    let gCd=Gcd(parseInt(a), parseInt(b))
    let ans=(a*b)/gCd;
    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent="LCM("+a+","+b+") ="+ans
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent="LCM("+a+","+b+") ="+ans
        document.getElementById('res').style.display='block'
    }
}

function apowb(){
    let a=document.getElementById('sp1').value
    let b=document.getElementById('sp2').value
    let ans=Math.pow(a,b)
    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent="a^b("+a+","+b+") ="+ans
        document.getElementById('res').style.display='block'
    }else if(ans==Infinity){
        document.getElementById('res').textContent="a^b("+a+","+b+") ="+ans
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent=a+"^"+b+" ="+ans
        document.getElementById('res').style.display='block'
    }
}
function sqrt(){
    let a=document.getElementById('sp1').value
    // let b=document.getElementById('sp2').value
    let ans=Math.sqrt(a)
    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent=a+"^(1/2) ="+ans
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent=a+"^(1/2) ="+ans
        document.getElementById('res').style.display='block'
    }
}
function epowa(){
    let a=document.getElementById('sp1').value
    // let b=document.getElementById('sp2').value
    let ans=Math.pow(Math.E, a)
    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent="e^ "+a+" ="+ans
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent="e^"+a+" ="+ans
        document.getElementById('res').style.display='block'
    }
}

function lna(){
    let a=document.getElementById('sp1').value
    // let b=document.getElementById('sp2').value
    let ans=Math.log(a)
    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent="ln("+a+") ="+ans
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent="ln("+a+") ="+ans
        document.getElementById('res').style.display='block'
    }
}

function log2(){
    let a=document.getElementById('sp1').value
    // let b=document.getElementById('sp2').value
    let ans=Math.log2(a)
    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent="log2("+a+") ="+ans
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent="log2("+a+") ="+ans
        document.getElementById('res').style.display='block'
    }
}

function log10(){
    let a=document.getElementById('sp1').value
    // let b=document.getElementById('sp2').value
    let ans=Math.log10(a)
    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent="log10("+a+") ="+ans
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent="log10("+a+") ="+ans
        document.getElementById('res').style.display='block'
    }
}

function sin(){
    let a=document.getElementById('sp1').value
    // let b=document.getElementById('sp2').value
    let ans=Math.sin(a)
    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent="sin("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent="sin("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }
}

function cos(){
    let a=document.getElementById('sp1').value
    // let b=document.getElementById('sp2').value
    let ans=Math.cos(a)
    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent="cos("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent="cos("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }
}

function tan(){
    let a=document.getElementById('sp1').value
    // let b=document.getElementById('sp2').value
    let ans=Math.tan(a)
    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent="tan("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent="tan("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }
}

function sini(){
    let a=document.getElementById('sp1').value
    // let b=document.getElementById('sp2').value
    let ans=Math.asin(a)
    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent="arcsin("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent="arcsin("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }
}

function cosi(){
    let a=document.getElementById('sp1').value
    // let b=document.getElementById('sp2').value
    let ans=Math.acos(a)
    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent="arccos("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent="arccos("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }
}

function tani(){
    let a=document.getElementById('sp1').value
    // let b=document.getElementById('sp2').value
    let ans=Math.atan(a)
    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent="arctan("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent="arctan("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }
}

function sinh(){
    let a=document.getElementById('sp1').value
    // let b=document.getElementById('sp2').value
    let ans=Math.sinh(a)
    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent="sinh("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent="sinh("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }
}

function cosh(){
    let a=document.getElementById('sp1').value
    // let b=document.getElementById('sp2').value
    let ans=Math.cosh(a)
    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent="cosh("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent="cosh("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }
}

function tanh(){
    let a=document.getElementById('sp1').value
    // let b=document.getElementById('sp2').value
    let ans=Math.tanh(a)
    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent="tanh("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent="tanh("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }
}

function sinhi(){
    let a=document.getElementById('sp1').value
    // let b=document.getElementById('sp2').value
    let ans=Math.asinh(a)
    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent="arcsinh("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent="arcsinh("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }
}

function coshi(){
    let a=document.getElementById('sp1').value
    // let b=document.getElementById('sp2').value
    let ans=Math.acosh(a)
    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent="arccosh("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent="arccosh("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }
}

function tanhi(){
    let a=document.getElementById('sp1').value
    // let b=document.getElementById('sp2').value
    let ans=Math.atanh(a)
    if(isNaN(ans)){
        ans=0
        document.getElementById('res').textContent="arctanh("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }else{
        document.getElementById('res').textContent="arctanh("+a+") (assuming a in radians) ="+ans
        document.getElementById('res').style.display='block'
    }
}

function changesc(){
    document.getElementById('domain1').textContent="Enter your first number(a) (between -1 & 1) :"
    
}

function defaulttxt(){
    document.getElementById('domain1').textContent="Enter your first number(a) :"
}
function coshsp(){
    document.getElementById('domain1').textContent="Enter your first number(a) (>=1):"

}