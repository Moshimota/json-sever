let btn = document.querySelector('.btn')

const GetData = async () => {
    const url = await fetch("http://localhost:3000/data")
    const json = url.json()
    console.log(json);
}
GetData()


const CreateData = () =>{
    let user = document.querySelector(".USERNAME").value
    let pass = document.querySelector('.PASSWORD').value
    fetch("http://localhost:3000/data", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({name: user,passvord: pass})
    })
}


btn.addEventListener("click", CreateData)
