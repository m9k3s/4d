//alert("a begining of the 4d project")

function random_4d_number()
{
    let r

    r = Math.random()*10000
    r = Math.floor(r)

    return r
}

for(let a= 0;a < 100 ;a++)
{
    console.log(random_4d_number())
}