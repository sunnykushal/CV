let verifybtn = document.getElementById("greet")
let inputtext = document.getElementById("intxt")
let greetmsg = document.getElementById("jsapply")
let skilllink = document.getElementById("skills")
let skillp = document.getElementById("six")
let download = document.getElementById("download")
let insta = document.getElementById("insta")
let tweet = document.getElementById("twitter")
let linkdn = document.getElementById("linkdn")
// let skillbtn = document.getElementById("skbtn")
// let skillmenu = document.getElementById("menu2")
// mySkills = ["HTML","CSS","JavaScript","Java","C programming"]


verifybtn.addEventListener("click", function() {
    console.log("button tabgya")
    
        greetmsg.innerHTML = `<p id="greetstyle">
        Welcome to my portfolio folks!!
      </p>`
    })

    // else if(inputtext.value === " "){
    //   greetmsg.innerHTML = `
    //   <button id="greet">Gracias</button>
    //                        `}

//     else{
//         greetmsg.innerHTML = `<p id="greetstyle2">
//         Either way..Lets checkout!
//       </p>`
//     }

    
// })

skilllink.addEventListener("click", function() {
  console.log("button tabgya")
  skillp.innerHTML = `<p id="skillpara">
  I did my 10th from Army Public School Ranchi with a Grade of 10 CGPA(CBSE) and also my 12th from Army Public School Ranchi with a percentage of 84.4%(CBSE);
                      </p>`
  
})

download.addEventListener("click", function() {
  console.log("button tabgya")
  location.href = "https://drive.google.com/file/d/1p3bWtoy8gokBbw83RfMZa0nZqjrRuW35/view?usp=sharing"
  
})

insta.addEventListener("click", function() {
  location.href = "https://www.instagram.com/humour_life01/"
})

twitter.addEventListener("click", function() {
  location.href = "https://twitter.com/Sunny_Kushal124?t=u8DhYjM8MnHy97ptljRi6A&s=09"
})

linkdn.addEventListener("click", function() {
  location.href = "https://www.linkedin.com/in/p-kushal-081672223"
})

// skillbtn.addEventListener("click", function() {
//     console.log("button tabgya ye bhi")
//     skillbtn.innerHTML = `<p>
//                              This is my following skillsets, have quite more!!
//                           </p>`
//     skillmenu.textContent = []
//     for (let i = 0; i<mySkills.length; i++)
//     {
//      skillmenu.innerHTML += `<li>
//                             ${mySkills[i]}
//                             </li>`
//     }
    
// })




