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
    // getElementById(skil).innerHTML = html
    handle(p_key, skil)
    document.getElementById(ele_id).value = ""
    display()
}
function handle1(p_key) {
    if (!user_details[p_key]) {
        user_details[p_key] = []

    }
    user_details[p_key].push(each_temp)


    display()
    let a = user_details[p_key]

    for (i = 0; i < a.length; i++) {
        let b = Object.keys(a[i])
        for (i = 0; i < b.length; i++) {
            document.getElementById(b[i]).value = ""

        }

    }
    addobj(user_details[p_key])
    // showdata(each_temp)
    each_temp = {}
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
// function showdata(each_temp){
//     // let data = [...user_details[p_key]]
//     htmldata=""
//     for(key in each_temp){
//         console.log(`${key} : ${each_temp[key]}`)

//     }


// }

function addobj(p_key) {
    let data = ""
    for (i = 0; i < p_key.length; i++) {
        console.log(p_key[i])
        for (const key in p_key[i]) {
            console.log(`${key}:${p_key[i][key]}`)
            data = data + `<tr>
            <td>${key}</td>
            <td>${p_key[i][key]}</td>
            <td><button type="button" onclick="tabledel(${p_key[i][key]})" >&#128465</button></td>
            <tr>`
            console.log(data)
        }
    }
    document.getElementById("table").innerHTML = data
}
function post() {
    $.ajax({
        type: "post",
        url: "http://agaram.academy/api/action.php",
        data: {
            request: "create_resume",
            user: "sangee",
            resume: user_details
        },
        success: function (response) {
            console.log("response", response)
            window.location = "index.html"
            get()
        },
        error: function (err) {
            console.log("error", err)
        }
    })
}

function get() {
    $.ajax({
        type: "get",
        url: "http://agaram.academy/api/action.php",
        data: {
            request: "get_user_resume",
            user: "sangee"
        },
        success: function (response) {

            console.log("response", JSON.parse(response))
            let a = JSON.parse(response)
            let b = a.data

            let view = ""
            for (let i = 0; i < b.length; i++) {
                view = view + `<tr>
            
                <td>${b[i].id}</td>
                <td>${b[i].user}</td>
                <td><button onclick="delt(${b[i].id})">Delete</button></td>
                <td><a href="single.html?id=${b[i].id}">button</a><td>
              </tr>`
            }
            $("#table").html(view)
        },
        error: function (err) {
            console.log("error", err)
        }
    })
}

function del(z) {
    $.ajax({
        type: "get",
        url: "http://agaram.academy/api/action.php",
        data: {
            request: "delete_user_resume",
            user: "sangee",
            id: z
        },
        success: function (response) {
            console.log("response", JSON.parse(response))
        },
        error: function (err) {
            console.log("error", err)
        }
    })
    get()
}

function get_resume(s) {
    $.ajax({
        type: "get",
        url: "http://agaram.academy/api/action.php",
        data: {
            request: "get_resume_by_id",
            user: "sangee",
            id:s
        },
        success: function (response) {
            // console.log("response",JSON.parse(response))
            let a=JSON.parse(response)
            let b=a.data.data
            let c=JSON.parse(b)
                console.log(c)
                
                $('#Name').html(c.Name)
                $("#Declaration").html(c.Declaration)
                $("#Email").html(c.Email)
                $("#jobtitle").html(c.Jobtitle)
                let m=c.Personal_details
                $("#fathername").html(m.FatherName )
                
                $("#mothername").html(m.MotherName)
                $("#objective").html(c.Objective)

               
                let d=c.skill
                let e=""
                console.log(d)
                for(i=0; i<d.length;i++){
                    console.log(d[i])
                    e=e+`<p>${d[i]}</p>`
                   
                }
                $('#skills').html(e) 

                let hobi=c.hobby
                let h=""
                for (i=0;i<hobi.length;i++){
                    console.log(hobi[i])
                h=h+`<p>${hobi[i]}</p>`
                }
                $('#hobbies').html(h)

                let edu=c.education
                let v=""
                for(i=0; i<edu.length;i++){
                v=v+`<tr><td>${edu[i].inst_year}</td>
                    <td>${edu[i].inst_name}</td>
                    <td>${edu[i].inst_level}</td>
                    <td>${edu[i].inst_percentage}</td></tr>`
                }
                $("#edu").html(v)

                
        },
        error: function (err) {
            console.log("error", err)
        }
    })

}
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

function generatePDF(){
    let page=document.getElementById('myresume');
    var opt={
        margin:1,
        filename:'demopdf.pdf',
        image:{type:'jpeg',quality:0.98},
        html2canvas:{scale:2},
        jsPdf:{unit:'in',format:'letter',orientation:'portrait'}
    };
    html2pdf().set(opt).from(page).save();

}