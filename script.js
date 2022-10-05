const inpEl=document.querySelector("#question")
const btn=document.querySelector(".fa-search")
const iframe=document.querySelector("iframe")
const firstFrame=iframe.contentWindow.document
const setting=document.querySelector(".settings")
const foreground=localStorage.getItem("foreground")
const background=localStorage.getItem("background")
const p = document.querySelector("p")
btn.addEventListener("click", function(){
    firstFrame.open()
    firstFrame.writeln(

        `
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">


            <style>
            body{
                margin:0;
                padding:0;
            }
            div{
                color:blue;
                display:flex;
                justify-content:center;
                align-items:center;
                flex-direction:column;
                height:100vh;
                background:white
            }
            .fa-spinner{
                font-size:90px;
            }
            </style>
            </head>
        <div>
        <h1><i class="fa fa-spinner" aria-hidden="true"></i></h1>
        </div>
`

    )
    firstFrame.close()


        const apikey=`https://api.wolframalpha.com/v1/simple?appid=ARWRHJ-XUEAJTG89X&i=${inpEl.value}%3F&fontsize=16&background=${background}&foreground=${foreground}`
    iframe.src=apikey
    
})

firstFrame.open()
    firstFrame.writeln(

        `
        <div>
        <h2>Craennie Mini Wolfram</h2>
        <p>Let's solve your problems...</p>
        </div>
        <style>
            body{
                margin:0;
                padding:0;
            }
            div{
                color:blue;
                display:flex;
                justify-content:center;
                align-items:center;
                flex-direction:column;
                height:100vh;
                background:white
            }
            </style> `

    )
    firstFrame.close()

          function settings(){
            setting.style.display="flex"
    }

    function cancel(){
        setting.style.display="none"
        p.innerText=""
    }

function darkmode(){

    localStorage.setItem("background","193555")
    localStorage.setItem("foreground","white")
    p.innerHTML=`Darkmode has been activated, please refresh page for this feature to work. Or click <a onclick="location.reload()" href="">here</a>`
}

function lightmode(){
    localStorage.setItem("background","f5f5f5")
    localStorage.setItem("foreground","193555")
    p.innerHTML=`Lightmode has been activated, please refresh page for this feature to work. Or click <a onclick="location.reload()" href="">here</a>`
}

//background=F5F5F5
//foreground=white