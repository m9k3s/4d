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

function generate_all()
{
    let all_number = []
    for(let a =0;a<23;a++)
    {
        all_number.push(random_4d_number())
        //console.log(random_4d_number())
    }
    console.log(all_number)

    let result = document.getElementById("result")
    let h2_top3 = document.createElement("h2")
    h2_top3.textContent = "Top 3"
    let ol_top3 = document.createElement("ol")
    ol_top3.id = "top_3"

    let h2_first_10 = document.createElement("h2")
    h2_first_10.textContent = "First 10"

    let ol_first_10 = document.createElement("ol")
    ol_first_10.id = "first_10"

    let h2_second_10 = document.createElement("h2")
    h2_second_10.textContent = "Second 10"

    let ol_second_10 = document.createElement("ol")
    ol_second_10.id = "second_10"

    for (let a = 0;a<3;a++)
    {
        let li = document.createElement("li")
        li.textContent = all_number[a]
        ol_top3.appendChild(li)
    }

    for(let a = 3;a<13;a++)
    {
        let li = document.createElement("li")
        li.textContent =all_number[a]
        ol_first_10.appendChild(li)
    }

    for(let a=13;a<23;a++)
    {
        let li = document.createElement("li")
        li.textContent = all_number[a]
        ol_second_10.appendChild(li)
    }


    result.innerHTML = " "
    result.appendChild(h2_top3)
    result.appendChild(ol_top3)
    result.appendChild(h2_first_10)
    result.appendChild(ol_first_10)
    result.appendChild(h2_second_10)
    result.appendChild(ol_second_10)

}

let one = document.getElementById("one")
one.addEventListener("click",generete_1)

let all = document.getElementById("all")
all.addEventListener("click",generate_all)