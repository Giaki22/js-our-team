// VARIABLES //
const teamMembers = [
    {
        img : "img/wayne-barnett-founder-ceo.jpg",
        name : "Wayne Barnett",
        role : "Founder & CEO",
    },
    {
        img : "img/walter-gordon-office-manager.jpg",
        name : "Walter Gordon Barret",
        role : "Office Manager",
    },
    {
        img : "img/scott-estrada-developer.jpg",
        name : "Scoot Estrada",
        role : "Developer",
    },
    {
        img : "img/barbara-ramos-graphic-designer.jpg",
        name : "Barbara Ramos",
        role : "Graphic Designer",
    },
    {
        img : "img/angela-lopez-social-media-manager.jpg",
        name : "Angela Lopez",
        role : "Social Media Manager",
    },
    {
        img : "img/angela-caroll-chief-editor.jpg",
        name : "Angela Carrol",
        role : "Chief Editor",
    },
];

// DOM OBJS //
const container = document.querySelector(".team-container");
const button = document.getElementById("addMemberButton");
const uName = document.getElementById("name");
const uRole = document.getElementById("role");
const uImg = document.getElementById("image");

// FUNCTIONS //
function printTeam(){
    for(let i=0; i<teamMembers.length; i++){
        const card =`<div class="team-card">
                <div class="card-image">
                    <img src="${teamMembers[i].img}" alt="Wayne Barnett"/>
                </div>
                <div class="card-text">
                  <h3>${teamMembers[i].name}</h3>
                  <p>${teamMembers[i].role}</p>
                </div>
            </div>`
        container.innerHTML += card;
    }
};
function addTeamMember(){
    if (!(uImg.value == "" || uName.value == "" || uRole.value == "")){
        teamMembers.push({img : uImg.value, name: uName.value, role : uRole.value});
        const card =`<div class="team-card">
                <div class="card-image">
                    <img src="${teamMembers[teamMembers.length-1].img}" alt="Error"/>
                </div>
                <div class="card-text">
                  <h3>${teamMembers[teamMembers.length-1].name}</h3>
                  <p>${teamMembers[teamMembers.length-1].role}</p>
                </div>
            </div>`;
    container.innerHTML += card;
    uName.value = "";
    uRole.value = "";
    uImg.value = "";
    } else {
        alert("Riempi tutti i campi");
    };
};
// MAIN //
printTeam();
button.addEventListener("click", addTeamMember);