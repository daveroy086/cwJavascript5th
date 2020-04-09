function dName(url){

    var n = Infinity;
    var loseTheScheme = '';
    var loseTheRest = '';

    if (url.includes('www.')){
        n = url.indexOf('.');
        loseTheScheme = url.slice(n + 1);
    }else if(url.includes('//')){
        n = url.indexOf('/');
        loseTheScheme = url.slice(n + 2);
    }else{
        loseTheScheme = url;
    }

    n = loseTheScheme.indexOf('.');
    loseTheRest = loseTheScheme.slice(0, n);
    return loseTheRest;
}//end dName()

console.log(dName("http://github.com/carbonfive/raygun"));// == "github" 
console.log(dName("http://www.zombie-bites.com"));// == "zombie-bites"
console.log(dName("https://www.cnet.com"));// == "cnet"
console.log(dName("http://google.com"));//'google'
console.log(dName("http://google.co.jp"));//'google'
console.log(dName("https://123.net"));//'123'
console.log(dName("https://hyphen-site.org"));//'hyphen-site'
console.log(dName("http://codewars.com"));//'codewars'
console.log(dName("www.xakep.ru"));//'xakep'
console.log(dName("https://youtube.com"));//'youtube'
console.log(dName("http://www.codewars.com/kata/"));//'codewars'
console.log(dName("icann.org"));//'icann'
console.log(dName("http://p5hjcu2.jp"));//'p5hjcu2
console.log(dName("kj3olkw50skzp5.br/users"));//
