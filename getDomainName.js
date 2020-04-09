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
}//end dName

dName("http://github.com/carbonfive/raygun");// == "github" 
dName("http://www.zombie-bites.com");// == "zombie-bites"
dName("https://www.cnet.com");// == "cnet"
dName("http://google.com");//'google'
dName("http://google.co.jp");//'google'
dName("https://123.net");//'123'
dName("https://hyphen-site.org");//'hyphen-site'
dName("http://codewars.com");//'codewars'
dName("www.xakep.ru");//'xakep'
dName("https://youtube.com");//'youtube'
dName("http://www.codewars.com/kata/");//'codewars'
dName("icann.org");//'icann'
dName("http://p5hjcu2.jp");//'p5hjcu2
dName("kj3olkw50skzp5.br/users");//
