ch = true;

function AddCont(dp){
    if(dp)
    {
        document.querySelector('.add-box').style.display = 'block';
        document.querySelector('.back').style.display = 'block';
    }else{
        document.querySelector('.add-box').style.display = 'none';
        document.querySelector('.back').style.display = 'none';

    }
}

function create(){
    let dv = document.createElement('div');
    dv.className = 'task';
    let box = document.createElement('div');
    box.className = 'task-box';
    let dc = document.createElement('p');
    dc.className = 'task-description';
    let time = document.createElement('p');
    time.className = 'task-time';
    let check = document.createElement('div');
    check.className = 'task-check';
    let ci = document.createElement('h1');
    ci.className = 'check-icon';

    ci.innerHTML = '✓';
    dc.innerHTML = document.querySelector('#description').value;
    time.innerHTML = document.querySelector('#time').value;
    let cv = false;
    check.onclick = ()=>{
        if(!cv){
            ci.style.display = 'block';
            cv = true;
        }else{
            ci.style.display = 'none';
            cv = false;
        }
    }

    check.appendChild(ci);
    box.appendChild(dc);
    box.appendChild(time);
    dv.appendChild(box);
    dv.appendChild(check);
    document.querySelector('.container').appendChild(dv);
    AddCont();
}