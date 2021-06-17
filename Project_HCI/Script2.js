
let currentImage = document.getElementsByClassName("current-img")
let img
let select
let selectColor
let count



function getSelectedValue(){
    selectColor = document.getElementById("motor").value
    console.log(selectColor)
    select = document.getElementById("choose").value
    console.log(select)

    if(select==='R-255'){
        // document.getElementById("reserve").style.backgroundImage="url(./Assets/R-255(hitam).png)"
        if(selectColor==='Black'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/R-255hitam.png)" 
        }
        else if(selectColor==='Red'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/R-255merah.png)" 
        }
        else if(selectColor==='Green'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/R-255hijau.png)" 
        }
        else if(selectColor==='Yellow'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/R-255kuning.png)" 
        }
    }
    else if(select==='K75'){
       // document.getElementById("reserve").style.backgroundImage="url(./Assets/kawasako2.png)"
        if(selectColor==='Black'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/K75hitam.png)"
        }
        else if(selectColor==='Red'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/K75merah.png)"
        }
        else if(selectColor==='Green'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/K75hijau.png)"
        }
        else if(selectColor==='Yellow'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/K75kuning.png)"
        }
    }
    else if(select ==='K-SE'){
       // document.getElementById("reserve").style.backgroundImage="url(./Assets/kawasako3.png)"
        if(selectColor==='Black'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/K-SEhitam.png)"
        }
        else if(selectColor==='Red'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/K-SEmerah.png)"
        }
        else if(selectColor==='Green'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/K-SEhijau.png)"
        }
        else if(selectColor==='Yellow'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/K-SEkuning.png)"
        }
    }
    else if(select ==='G-12'){
       // document.getElementById("reserve").style.backgroundImage="url(./Assets/vixian1.png)"
        if(selectColor==='Black'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/G-12hitam.png)"
        }
        else if(selectColor==='Red'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/G-12merah.png)"
        }
        else if(selectColor==='Green'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/G-12hijau.png)"
        }
        else if(selectColor==='Yellow'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/G-12kuning.png)"
        }
    }
    else if(select ==='BF-3'){
       // document.getElementById("reserve").style.backgroundImage="url(./Assets/vixian2.png)"
        if(selectColor==='Black'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/BF-3hitam.png)"
        }
        else if(selectColor==='Red'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/BF-3merah.png)"
        }
        else if(selectColor==='Green'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/BF-3hijau.png)"
        }
        else if(selectColor==='Yellow'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/BF-3kuning.png)"
        }
    }
    else if(select ==='SR-15'){
       // document.getElementById("reserve").style.backgroundImage="url(./Assets/vixian3.png)"
        if(selectColor==='Black'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/SR-15hitam.png)"
        }
        else if(selectColor==='Red'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/SR-15merah.png)"
        }
        else if(selectColor==='Green'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/SR-15hijau.png)"
        }
        else if(selectColor==='Yellow'){
            document.getElementById("reserve").style.backgroundImage="url(./Assets/SR-15kuning.png)"
        }
    }

}


function submit(){
    e.preventDefault();
    let name = document.getElementById("name").value
    let alert = document.getElementById("alert")

    if(name === ''){
        alert = "test";
    }
    return false;
    }

function test(){
    let name = document.getElementById("name").value
    let errorrMsg = document.getElementById("error-msg")
        if(name === ''){
            errorMsg = "test"
            (errorMsg)
        }
}


function validateData(event){
    event.preventDefault()

    // ambil data datanya
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value +""
    let address = document.getElementById('address').value
    let agree = document.getElementById('agree').checked
    let choose1 = document.getElementById('choose').value
    let choose2 = document.getElementById('motor').value
    let qty = document.getElementById('qty').value

    // validasi
    // !  jangan pakai regex (pakai regex -> dianggap salah)
    let error = document.getElementById('error')
    error.innerText =''
    if(name === ""){
        
        error.innerText="Name Can't be Empty"
    }
    else if(!email.endsWith('.com') || !email.includes('@')){
        error.innerText="Email must include .com And @"
        console.log('test')
    }
    else if(choose1 === 'nul' || choose2 ==='nul'){
        error.innerText="Please select your color/motorcycle"
    }
    else if(qty==='' || qty==='0'){
        error.innerText ="Quantity cannot be empty and greater than 0"
    }
    else if(address.length <=20){
        error.innerText ="Address atleast contains 20 words"
    }
    else if(agree ===false){
        error.innerText ="You must aggree to terms and conditions"
    }
    
}



