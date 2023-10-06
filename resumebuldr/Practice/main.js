let user_details = {}
let each_temp = {}
function ParseData(ele, p_key) {
    if (p_key) {
        if (user_details[p_key]) {
            user_details[p_key] = {
                ...user_details[p_key]
            }
        }
        else {
            user_details[p_key] = {}
        }
        user_details[p_key][ele.name] = ele.value

    }
    else {
        user_details[ele.name] = ele.value
    }
    // user_details[ele.name]=e.value
    // console.log(user_details)
    display()
}
function handlekey(p_key, ele_id, skil) {
    if (!user_details[p_key]) {
        user_details[p_key] = []
    }
    let element = document.getElementById(ele_id)
    if (element.value == "") {
        alert("enter your input")
        element.focus()
    }
    else {
        user_details[p_key].push(element.value)
    }
    // element=document.getElementById(ele_id)

    // user_details[p_key].push(document.getElementById(ele_id).value)
    // let data = [...user_details[p_key]]
    // html = ""
    // for (i = 0; i < data.length; i++) {

    //     html = html + `${data[i]}`+ `<button type="button" class="btn btn-primary " aria-label="Close" onclick="delt('${p_key}','${data[i]}')">
    //     <span aria-hidden="true">&times;</span>
    //   </button>`
    // }
    // document.getElementById(skil).innerHTML = html
    handle(p_key, skil)
    document.getElementById(ele_id).value = ""
    display()
}
function handle1(p_key, reload) {
    if (!user_details[p_key]) {
        user_details[p_key] = []

    }
    user_details[p_key].push(each_temp)

    each_temp = {}
    display()
    arrays(p_key)

}


function delt(p_key, ele, skil) {
    let data = [...user_details[p_key]]
    let new_data = []
    for (i = 0; i < data.length; i++) {
        if (data[i] != ele) {
            new_data.push(data[i])

        }
    }
    user_details[p_key] = new_data

    display()
    handle(p_key, skil)
    handle1(p_key, ele_id)
}



function display() {

    document.getElementById("display_data").innerHTML = JSON.stringify(user_details, undefined, 2)
    console.log(user_details)
}

function handle(p_key, skil) {
    let data = [...user_details[p_key]]
    html = ""
    for (i = 0; i < data.length; i++) {

        html = html + `${data[i]}` + `<button type="button" class="btn btn-primary " aria-label="Close" onclick="delt('${p_key}','${data[i]}','${skil}')">
        <span aria-hidden="true">&times;</span>
      </button>`

    }
    document.getElementById(skil).innerHTML = html
}

function handlemult(ele) {
    each_temp[ele.name] = ele.value
}
function arrays(p_key) {
    let a = user_details[p_key]

    for (i = 0; i < a.length; i++) {
        let b = Object.keys(a[i])
        for(i = 0; i < b.length; i++  ){
            document.getElementById(b[i]).value = ""

        } 
     
        
    }
}