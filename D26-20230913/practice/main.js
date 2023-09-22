var a="agaram"
var b=5
var c=true
var d=5.04 
console.log(typeof(d))

let week_days=["sunday","monday","tuesday"]
console.log(week_days[3])
console.log(week_days.length)
console.log (week_days[week_days.length-1])
week_days[2]="wednesday"
console.log(week_days)
week_days[3]="thursday"
console.log(week_days)
week_days.push("friday")
console.log(week_days)
week_days.pop()
console.log(week_days)
let details={
    name:"sangee",
    age:20,
    place:"vadasery"
}
console.log(details.age)
details.gender="female"
details.age=21
console.log(details)

var my_resume={
    name:"sangeetha",
    e_mail:"sangeethakesavan76@gmail.com",
    mobile_no:9344565704,
    softskills:["communication_skills","self_motivation"],
    hardskills:["type_writting","ms_office"],
    project:"Role of women entrepreneur change in the society",
    education:[
        {
            level:"sslc",
            inst_name:"s.m.r.v.higher_secondary_school",
            passed_year:2017,
            place:"vadasery"
        
        },
        {
            level:"hsc",
            inst_name:"s.m.r.v.higher_secondary_school",
            passed_year:2019,
            place:"vadasery"
        },
        {
            level:"B.com",
            inst_name:"womens_christian_college",
            passed_year:2023,
            place:"vdasery"
        }
    ],
    experience:[
        {
            company_name:"cape_start",
            experience:1.4,
            role:"manager"
        },
        {
            company_name:"wipro",
            experience:2,
            role:"system_manager"
        }
    ],
    personal_details:{
        father_name:"kesavan",
        father_occupation:"sales_man",
        dob:"21/07/2003",
        address:["54 thazhuviya_mahadevar_kovil_street,vadasery"],
    }
}
console.log(my_resume.education[0].city="vadasery")
console.log(my_resume)
console.log(my_resume.personal_details.address.push("Nagercoil"))
console.log(my_resume)
function getname(){
    console.log("welcome")
}
getname()
let name="sangeetha";
function getname(a){
    console.log(a)
}
getname(name)
for( var i=0; i<5; i++){
    console.log(i)
}
for(var i=0;i>-10;i--){
    console.log(i)
}
let e=["sunday","monday","tuesday","wednesday"]
for (var i=0;i<e.length;i++){
    console.log(e[i])
}
let frndz_details=[{
    name:"sangee",
    age:20,
    place:"vadasery"
},
{
    name:"murugeswari",
    age:20,
    place:"vadasery"
},
{
    name:"varshini",
    age:20,
    place:"vadasery"
} 
]
for (var i=0;i<frndz_details.length;i++){
    console.log(frndz_details[i].name)
}



var my_resume={
    name:"sangeetha",
    e_mail:"sangeethakesavan76@gmail.com",
    mobile_no:9344565704,
    softskills:["communication_skills","self_motivation"],
    hardskills:["type_writting","ms_office"],
    project:"Role of women entrepreneur change in the society",
    education:[
        {
            level:"sslc",
            inst_name:"s.m.r.v.higher_secondary_school",
            passed_year:2017,
            place:"vadasery"
        
        },
        {
            level:"hsc",
            inst_name:"s.m.r.v.higher_secondary_school",
            passed_year:2019,
            place:"vadasery"
        },
        {
            level:"B.com",
            inst_name:"womens_christian_college",
            passed_year:2023,
            place:"vdasery"
        }
    ],
    experience:[
        {
            company_name:"cape_start",
            experience:1.4,
            role:"manager"
        },
        {
            company_name:"wipro",
            experience:2,
            role:"system_manager"
        }
    ],
    personal_details:{
        father_name:"kesavan",
        father_occupation:"sales_man",
        dob:"21/07/2003",
        address:["54 thazhuviya_mahadevar_kovil_street,vadasery"],
    }
}
function resume(z){
for(var i=z.length-1;i>=0; i--)
    console.log(i+1,".", z[i].level)
}
resume(my_resume.education)

sessionStorage.setItem("name","sangee")

var s=localStorage.getItem("name",true)
console.log(typeof(s))

localStorage.setItem("name",true)

var list=["a","b","c"]
var stringlist=JSON.stringify(list)
localStorage.setItem("alpha",stringlist)
var m=localStorage.getItem("alpha")
var clist=JSON.parse(m)
console.log(clist[1])

