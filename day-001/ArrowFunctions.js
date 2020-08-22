const ArrowFunSingleArg =  name => {
    return `Hello, ${name}`;
}

var SingleContent = ArrowFunSingleArg('Mohan');

var rootPage = document.getElementById('root');
var para = document.createElement("P");
para.innerText = "This is a paragraph";
rootPage.appendChild(para);
if(SingleContent != ""){
    rootPage.appendChild(SingleContent);    
}