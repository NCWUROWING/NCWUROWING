function mywidth() {
    document.getElementById('one').style.width='250px';//style更改
}
function mytime() {
    document.getElementById('demo').innerHTML = Date();
}
function myalert() {
    window.alert(123);
}


function myFunction (x,y) {
    return x*y;
}
function myfunction() {

    var person = {
        firstName: "Bill",
        lastName : "Gates",
        id       : 678,
        fullName : function() {
        return this.firstName + " " + this.lastName;
        }
};//定义对象

    var x,y,z;
    x=22;
    y=11;
    z=x+y;
    document.getElementById('function').innerHTML=myFunction(6,7)+"Z="+z+typeof z;//注释大小写敏感,类型
    var x = "中国是瓷器的故乡，因此 china 与\"China（中国）\"同名。";//\"转义
    var y=x.length;//x的长度
    document.getElementById('function1').innerHTML = x; 
    document.getElementById('function2').innerHTML = y; 
}




