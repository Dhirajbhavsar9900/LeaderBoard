let section2 = document.querySelector(".section2");

let fName = document.querySelector(".firstname");
let lName = document.querySelector(".lastname");
let sub = document.querySelector(".subject");
let marks = document.querySelector(".score");

let btn = document.querySelector('button');






let data = [
    {
        firstName:'Rohit',
        lastName:'Chaudhari',
        score:'60',
        subject: 'English'
    },
    {
        firstName:'Mansi',
        lastName:'Mali',
        score:'100',
        subject: 'Geometry'
    }
]


btn.addEventListener('click', (e) =>{
    e.preventDefault();

    if(fName.vlaue=="" || lName.value=="" || sub.value=="" || marks.value=="" ){
        alert("Fill the all Fields")
    }

let studentObj = {
    firstName: fName.value,
    lastName: lName.value,
    score: Number(marks.value),
    subject: sub.value
};

data.push(studentObj);

updateData();

fName.value ="";
lName.value ="";
sub.value ="";
marks.value ="";



})

function updateData() {
    data.sort((s1, s2) => {
        return s2.score - s1.score;
    });
    
    let html = "";
    
    data.forEach((item) => {
        html += `
            <div class="section2-data">
                <span>${item.firstName}</span>
                <span>${item.lastName}</span>
                <span>${item.score}</span>
                <span>${item.subject}</span>
                <div>
                
                    <span class="add">+5</span>
                    <span class="sub">-5</span>
                </div>
            </div>
        `;
    });

    console.log(section2);
    
    section2.innerHTML = html;
}



document.onload = updateData();
