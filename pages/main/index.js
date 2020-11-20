document.querySelector("#burger").addEventListener( "click" ,()=>{
    document.querySelector("#burger").classList.toggle("burger__rotated") 

    setTimeout(()=>{
        document.querySelector("#logo").classList.toggle("logo_burger");
    document.querySelector("#nav_list").classList.toggle("intro-header_navigation_burger");
    document.querySelector("#nav").classList.toggle("nav_burger");
    document.querySelector("#wrap").classList.toggle("shadow");
    document.querySelector("#burger_icon_menu").classList.toggle("burger_icon_menu");
    document.querySelector("body").classList.toggle("overflow_body");
    },300)
    

}) 
document.querySelector("#wrap").addEventListener( "click" ,()=>{
    document.querySelector("#burger").classList.remove("burger__rotated")
    document.querySelector("#logo").classList.remove("logo_burger");
    document.querySelector("#nav_list").classList.remove("intro-header_navigation_burger");
    document.querySelector("#nav").classList.remove("nav_burger");
    document.querySelector("#wrap").classList.remove("shadow");
    document.querySelector("#burger_icon_menu").classList.remove("burger_icon_menu");
    document.querySelector("body").classList.remove("overflow_body");
}) 
document.querySelector("#burger_icon_menu").addEventListener( "click" ,()=>{
    document.querySelector("#burger").classList.remove("burger__rotated")
    document.querySelector("#logo").classList.remove("logo_burger");
    document.querySelector("#nav_list").classList.remove("intro-header_navigation_burger");
    document.querySelector("#nav").classList.remove("nav_burger");
    document.querySelector("#wrap").classList.remove("shadow");
    document.querySelector("#burger_icon_menu").classList.remove("burger_icon_menu");
    document.querySelector("body").classList.remove("overflow_body");
}) 

let pets = []; //8
let newPetsList = []; //3
const request = new XMLHttpRequest();
request.open('GET', '../pets/pets.json');
fetch('../pets/pets.json').then(res => res.json()).then(list => {
    pets =list;
    newPetsList =(()=>{
        const TemporaryPets = Array.from(pets);
        const newPets =[];
        for(let j=3; j>0; j--){
            let randInd = Math.floor(Math.random()*j)
            const randElem = TemporaryPets.splice(randInd, 1)[0]
            newPets.push(randElem)
        }
        return newPets;
    })();
createPets(newPetsList);
})

const updatePetsListRight = ()=>{
    let updatePetsList = [];
    const TemporaryPets = Array.from(pets);
    while(updatePetsList.length<3){
        let randInd = Math.floor(Math.random()*TemporaryPets.length)
        const randElem = TemporaryPets.splice(randInd, 1)[0]
        let isPush=true
        for(let i=0; i<3; i++){
            if(randElem.name==newPetsList[i].name){
                isPush=false
            }
        }
        if (isPush)         updatePetsList.push(randElem)
    }
    newPetsList =[...newPetsList, ...updatePetsList] ;
    console.log('newPetsList',newPetsList);
    createPets(newPetsList);
}
const updatePetsListLeft = ()=>{
    let updatePetsList = [];
    const TemporaryPets = Array.from(pets);
    while(updatePetsList.length<3){
        let randInd = Math.floor(Math.random()*TemporaryPets.length)
        const randElem = TemporaryPets.splice(randInd, 1)[0]
        let isPush=true
        for(let i=0; i<3; i++){
            if(randElem.name==newPetsList[i].name){
                isPush=false
            }
        }
        if (isPush)         updatePetsList.push(randElem)
    }
    newPetsList =[ ...updatePetsList,...newPetsList] ;
    console.log('newPetsList',newPetsList);
    createPets(newPetsList);
}

const createPets =(petsList)=>{
    const elem = document.querySelector("#pets")
    elem.innerHTML = createElements(petsList)
}

createElements = (petsList) => {
    let str ='';
    for (let i=0; i< petsList.length; i++){
        str +=  `
        <li class="ourFriends_slider_item" onclick="showModal(${i})">
            <img class="ourFriends_slider_item_img" src="${petsList[i].img}">
            <h4 class="ourFriends_slider_item_name">
                ${petsList[i].name}
            </h4>
            <div class="button__secondary">
                <a href="#">
                    Learn more
                </a>
            </div>
        </li>
        `
    }
    return str;
}
document.querySelector(".ourFriends_arrow_right").addEventListener( "click" ,()=>{
    updatePetsListRight();
    setTimeout(()=>document.querySelector("#pets").classList.add("ourFriends_slider_list__margin-right"),0)
    setTimeout(()=>newPetsList=newPetsList.slice(3,6),0)
    setTimeout(()=>{createPets(newPetsList)
        document.querySelector("#pets").classList.remove("ourFriends_slider_list__margin-right")
        },501)
}) 
document.querySelector(".ourFriends_arrow_left").addEventListener( "click" ,()=>{
    updatePetsListLeft()
    document.querySelector("#pets").classList.add("ourFriends_slider_list__pre-margin")
   setTimeout(()=>document.querySelector("#pets").classList.add("ourFriends_slider_list__margin-left"),0)
    setTimeout(()=>{newPetsList=newPetsList.slice(0,3)
        createPets(newPetsList)
        document.querySelector("#pets").classList.remove("ourFriends_slider_list__pre-margin")
        document.querySelector("#pets").classList.remove("ourFriends_slider_list__margin-left")
    },501)
    //console.log("newPetsList1111111111111",newPetsList);
   // setTimeout(()=>newPetsList=newPetsList.slice(0,3),650)
    //setTimeout(()=>createPets(newPetsList),650)
}) 

const modal_close = document.querySelector('.modal_close');
    const modal_main = document.querySelector('.modal_main');
    const modal = document.querySelector('.modal');
    const ourFriends_slider_item = document.querySelector('.ourFriends_slider_item');

function showModal(i) {
    setTimeout(()=>{
        document.querySelector('.modal').style.display = 'flex';
        document.querySelector('body').style.overflow = 'hidden'
        document.querySelector("#pet_name").innerHTML = newPetsList[i].name;
        document.querySelector(".modal_content_description").innerHTML=newPetsList[i].description;
        document.querySelector("#modal_age").innerHTML=newPetsList[i].age;
        document.querySelector("#modal_inoculations").innerHTML=newPetsList[i].inoculations;
        document.querySelector("#modal_diseases").innerHTML=newPetsList[i].diseases;
        document.querySelector("#modal_parasites").innerHTML=newPetsList[i].parasites;
        document.querySelector("#modal_img").src=newPetsList[i].img;
        document.querySelector("#modal_type").innerHTML = newPetsList[i].type;
        document.querySelector("#modal_breed").innerHTML=newPetsList[i].breed;
        
    },1000)
}

function onClickModal(e) {
    if (e.target == modal || e.target == modal_main || e.target == modal_close ) {
        document.querySelector('.modal').style.display = 'none';
        document.querySelector('body').style.overflow = 'auto'
    }
}

modal.addEventListener("click", onClickModal);

// ourFriends_slider_item.addEventListener("click", onClickOurFr);