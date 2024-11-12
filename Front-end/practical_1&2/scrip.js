js=document.getElementById("js");
jv=document.getElementById("jv");
py=document.getElementById("py");

js.onclick=()=>{
    let count= document.querySelector("#jscount")
    count.innerHTML= +count.innerHTML+1;
}
jv.onclick=()=>{
    let count= document.querySelector("#jvcount")
    count.innerHTML= +count.innerHTML+1;
}
py.onclick=()=>{
    let count= document.querySelector("#pycount")
    count.innerHTML= +count.innerHTML+1;
}

setInterval(() => {
    let JScount = document.querySelector("#jscount");
    let JVcount = document.querySelector("#jvcount");
    let PYcount = document.querySelector("#pycount");
    let lang = Math.floor(3 * Math.random())
    if (lang === 0) {
        JScount.innerHTML = +JScount.innerHTML + Math.floor(10 * Math.random() + 1)
    }
    else if (lang === 1) {
        JVcount.innerHTML = +JVcount.innerHTML + Math.floor(10 * Math.random() + 1)
    }
    else {
        PYcount.innerHTML = +PYcount.innerHTML + Math.floor(10 * Math.random() + 1)
    }
    console.log(lang);
}, 2000)