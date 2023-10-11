function showdata(){
    $.ajax({
        type:"get",
        url:"https://jsonplaceholder.typicode.com/posts",
        data:{},
        sucess:function(response){
            console.log("response",response)
        },
        error:function(err){
            console.log("error",err)
        }
        
        
    })
}

function data(){
    $.ajax({
        type:"get",
        url:"https://jsonplaceholder.typicode.com/posts",
        data:{},
        success:function (data){
            console.log(data)
            let view=""
        for( let i=0;i<data.length;i++){
            
            view=view+`<tr>
            <td>${data[i].id}</td>
            <td>${data[i].userId}</td>
            <td><button type="button" onclick="idshow(${data[i].id}">${data[i].title}<button onclick="put(${data[i].id})">put</button></button></td>
          </tr>`
        }
        $("#table").html(view)
        }
        
        
    })
}

function idshow(id){
   $.ajax({
    type:"get",
    url:`https://jsonplaceholder.typicode.com/posts/${id}`,
    data:{},
    success:function(data){
        console.log(data)
    },
    error:function(erro){
        console.log(erro)
    }
   })
}

function post(){
    $.ajax({
        type:"post",
        url:"https://jsonplaceholder.typicode.com/posts",
        data:{Name:"sangee",
        place:"vadasery"
    },
    success:function(list){
        console.log(list)

    },
    error:function (err){
        console.log(err)

    }

    })
}
function put(a){
    $.ajax({
        type:"put",
        url:
        data:{Name:"sangee",
        place:"vadasery"
    },
    success:function(list){
        console.log(list)

    },
    error:function (err){
        console.log(err)

    }

    })

}