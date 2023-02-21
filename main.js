function focusbox(nametxt) {
    nametxt.style.background = "yellow";
}

function blurbox(nametxt) {
    nametxt.style.background="white";
}

function selectmenu(){
    const select = document.getElementById('menu');
    const choosen = document.getElementById('select-result');
    cose = select.value;
    choosen.innerText=(cose);
}

function nameform(){
    const fname = document.getElementById('name');
    const ffname = document.getElementById('firstname');
    const lname = document.getElementById('surname');
    const llname = document.getElementById('lastname')
    castfname = fname.value;
    castlname = lname.value;
    ffname.innerText=(castfname);
    llname.innerText=(castlname);


    const getdate = document.getElementById('dateinfo');
    const dategoto = document.getElementById('display-date');

    castdate = getdate.value;
    dategoto.innerText=(castdate);
}
