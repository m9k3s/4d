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