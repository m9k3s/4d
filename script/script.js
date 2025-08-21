//alert("a begining of the 4d project")

function random_4d_number()
{
    let r

    r = Math.random()*10000
    r = Math.floor(r)

    if(r<10)
    {
        r = "000" + String(r)
    }
    else if (r < 100)
    {
        r = "00" + String(r)
    }
    else if (r < 1000)
    {
        r = "0" + String(r)
    }
    else 
    {
        r = String(r)
    }

    return r
}


for(let a= 0;a < 100 ;a++)
{
    console.log(random_4d_number())
}

function generete_1()
{
    let number
    let result = document.getElementById("result")
    number = random_4d_number()
    let p = document.createElement("P")
    p.innerText = number
    result.innerHTML = " "
    result.appendChild(p)
}

let one = document.getElementById("one")
one.addEventListener("click",generete_1)