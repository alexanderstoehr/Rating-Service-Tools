let starInputs = document.querySelectorAll(".starInput")

let oneStarInput = document.getElementById("client-1star")
let twoStarInput = document.getElementById("client-2star")
let threeStarInput = document.getElementById("client-3star") 
let fourStarInput = document.getElementById("client-4star")
let fiveStarInput = document.getElementById("client-5star")

let servCol1_1s = document.querySelectorAll(".k-item")[7]
let servCol1_2s = document.querySelectorAll(".k-item")[12]
let servCol1_3s = document.querySelectorAll(".k-item")[17]
let servCol1_4s = document.querySelectorAll(".k-item")[22]
let servCol1_5s = document.querySelectorAll(".k-item")[27]

let servCol2_1s = document.querySelectorAll(".k-item")[8]
let servCol2_2s = document.querySelectorAll(".k-item")[13]
let servCol2_3s = document.querySelectorAll(".k-item")[18]
let servCol2_4s = document.querySelectorAll(".k-item")[23]
let servCol2_5s = document.querySelectorAll(".k-item")[28]

let servCol3_1s = document.querySelectorAll(".k-item")[9]
let servCol3_2s = document.querySelectorAll(".k-item")[14]
let servCol3_3s = document.querySelectorAll(".k-item")[19]
let servCol3_4s = document.querySelectorAll(".k-item")[24]
let servCol3_5s = document.querySelectorAll(".k-item")[29]

let avgCalcCol1 = document.querySelectorAll(".k-item")[36]
let avgCalcservCol1 = document.querySelectorAll(".k-item")[37]
let avgCalcservCol2 = document.querySelectorAll(".k-item")[38]
let avgCalcservCol3 = document.querySelectorAll(".k-item")[39]

let amount1 = document.getElementById("amount1")
let amount2 = document.getElementById("amount2")
let amount3 = document.getElementById("amount3")


// listen and collect -> starInputs
addEventListener("input", calculateFields);

//update fields functions

    // update avg rating
    // update 1 star servicecols  
    // update 2 star servicecols  
    // update 3 star servicecols  
    // update 4 star servicecols  
    // update 5 star servicecols  
    // update output needs message

function calculateFields (){
    pasteRowValues()
    avgCalcCol1.innerText = avgRating(
        Number(oneStarInput.value),
        Number(twoStarInput.value),
        Number(threeStarInput.value),
        Number(fourStarInput.value),
        Number(fiveStarInput.value)
    )
    avgCalcservCol1.innerText = avgRating(
        0,
        Number(twoStarInput.value),
        Number(threeStarInput.value),
        Number(fourStarInput.value),
        Number(fiveStarInput.value)
    )
    avgCalcservCol2.innerText = avgRating(
        0,
        0,
        Number(threeStarInput.value),
        Number(fourStarInput.value),
        Number(fiveStarInput.value)
    )
    avgCalcservCol3.innerText = avgRating(
        0,
        0,
        0,
        Number(fourStarInput.value),
        Number(fiveStarInput.value)
    )

    amount1.innerText = oneStarInput.value
    amount2.innerText = twoStarInput.value
    amount3.innerText = threeStarInput.value

    handleNan(avgCalcservCol3)
    handleNan(avgCalcservCol2)
    handleNan(avgCalcservCol1)


}

let pasteRowValues = () => {
    servCol1_2s.innerText = twoStarInput.value
    servCol1_3s.innerText = threeStarInput.value
    servCol1_4s.innerText = fourStarInput.value
    servCol1_5s.innerText = fiveStarInput.value
    
    servCol2_4s.innerText = fourStarInput.value
    servCol2_3s.innerText = threeStarInput.value
    servCol2_5s.innerText = fiveStarInput.value

    servCol3_4s.innerText = fourStarInput.value
    servCol3_5s.innerText = fiveStarInput.value
}

let avgRating = (q1, q2, q3, q4, q5) => {
    let avg = (q1 + q2*2 + q3*3 + q4*4 + q5*5)/(q1+q2+q3+q4+q5)
    return avg.toFixed(1)
}

let handleNan = field => field.innerText === "NaN" ? field.innerText=0 : null ;


//store in session