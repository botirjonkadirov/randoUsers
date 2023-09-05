// api
const API = 'https://randomuser.me/api/?results=9'

// for leader
const overlay = document.getElementById('overlay')

const loder = (lod)=>{
    if(lod){
        overlay.classList.remove(`hidden`)
    } else {
        overlay.classList.add(`hidden`)
    }
}

const getUsers = (resource)=>{
    return new Promise ((res, rej)=>{
        const req = new XMLHttpRequest()

        req.addEventListener(`readystatechange`, ()=>{
            if(req.readyState<4) {
                loder(true)
            } else if (req.readyState==4 && req.status==200){
                const data = JSON.parse(req.responseText)
                res(data.results)
                loder(false)
            } else {
                rej(`error`)
                loder(false)
            }
        })

        req.open(`get`, resource)
        req.send()
    })
}
const reload = ()=>{
    getUsers(API).then((data)=>{
        updateU(data)
    }).catch((err)=>{
        console.log(err)
    })
}
document.addEventListener(`DOMContentLoaded`, reload)