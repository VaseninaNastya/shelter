let pets = []; //8
let fullPetsList = []; //48
const request = new XMLHttpRequest();
request.open('GET', './pets.json');
fetch('./pets.json').then(res => res.json()).then(list => {
    pets =list;
    fullPetsList =(()=>{
        let tempArr =[];
        for(let i=0; i<6; i++){
            const newPets =pets;
            for(let j=pets.length; j>0; j--){
                let randInd = Math.floor(Math.random()*j)
                const randElem = newPets.splice(randInd, 1)[0]
                newPets.push(randElem)
            }
        tempArr=[...tempArr, ...newPets]
        }
        return tempArr;
    })();

    fullPetsList = sort863(fullPetsList);
    createPets(fullPetsList);

    for(let i=0; i<(fullPetsList.length/6); i++){
        const stepList = fullPetsList.slice(i*6, (i*6)+6);
        //for(let j=0; j<6; j++){
        //   stepList.forEach((item, ind)=>{
        //        if(item.name === stepList[j].name && (ind !== j)){
        //            document.querySelector("#pets").children[(i*6)+j].style.border = '5px solid red'
        //        }
        //    })
        //}
    }

})
//request.onload = () =>{
  //  pets = JSON.parse(request.response);
//};
const createPets =(petsList)=>{
    const elem = document.querySelector("#pets")
    elem.innerHTML += createElements(petsList)
}
createElements = (petsList) => {
    let str ='';
    for (let i=0; i< petsList.length; i++){
        str +=  `
        <li class="ourFriends_slider_item"  onclick="showModal(${i})">
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

request.send();

const sort863 = (list)=>{
    let length = list.length;
    for(let i=0; i<(length/6); i++){
        const stepList = fullPetsList.slice(i*6, (i*6)+6);
        for(let j=0; j<6; j++){
            const duplicatedItem = stepList.find((item, ind)=>{
                return item.name === stepList[j].name && (ind !==j)
            });
            if(duplicatedItem!==undefined){
                const ind = (i*6)+j;
                const which8ofList = Math.trunc(ind/8);
                const elem = list.splice(ind, 1)[0];
                list.splice(which8ofList*8, 0, elem);
                i-=2;
                break;
            }
        }
    }
    return list
}
let pageCounter =0;
let listWidth = document.querySelector("#pets").offsetWidth
let numberOfPages = 6
switch(listWidth ){
    case 580:
        numberOfPages = 8
        break;
      case 271:
        numberOfPages = 16
        break;
      default:
         numberOfPages = 6
}

window.addEventListener('resize', function(event){

    listWidth = document.querySelector("#pets").offsetWidth
numberOfPages = 6
 switch(listWidth ){
      case 580:
        numberOfPages = 8
        break;
      case 271:
        numberOfPages = 16
        break;
      default:
         numberOfPages = 6
}

if(pageCounter==0){
    document.querySelector("#prevPage").setAttribute("disabled", "disabled");
    document.querySelector("#firstPage").setAttribute("disabled", "disabled");
    document.querySelector("#prevPage").classList.add("disabled");
    document.querySelector("#firstPage").classList.add("disabled");

    
}
if(pageCounter>numberOfPages -1){
    pageCounter=numberOfPages -1;
}
if(pageCounter!=numberOfPages-1){
    document.querySelector("#nextPage").removeAttribute("disabled");
    document.querySelector("#lastPage").removeAttribute("disabled");
    document.querySelector("#nextPage").classList.remove("disabled");
    document.querySelector("#lastPage").classList.remove("disabled");
}
document.querySelector("#pets").style.marginLeft= `calc(${-(listWidth+40)*pageCounter}px)`
document.querySelector("#numberOfPage").innerHTML = `<a href="#">${1+pageCounter}</a>`
});

document.querySelector("#prevPage").addEventListener("click" ,()=>{
    if(pageCounter>0){
        pageCounter--;
    }
    if(pageCounter==0){
        document.querySelector("#prevPage").setAttribute("disabled", "disabled");
        document.querySelector("#firstPage").setAttribute("disabled", "disabled")
    }
    if(pageCounter!=numberOfPages-1){
        document.querySelector("#nextPage").removeAttribute("disabled");
        document.querySelector("#lastPage").removeAttribute("disabled");
    }
    document.querySelector("#pets").style.marginLeft= `calc(${-(listWidth+40)*pageCounter}px)`
    document.querySelector("#numberOfPage").innerHTML = `<a href="#">${1+pageCounter}</a>`
}) 
document.querySelector("#nextPage").addEventListener( "click" ,()=>{
    if(pageCounter<numberOfPages -1){
        pageCounter++;
    }
    if(pageCounter!=0){
        document.querySelector("#prevPage").removeAttribute("disabled");
        document.querySelector("#firstPage").removeAttribute("disabled");
    }
    if(pageCounter==numberOfPages -1){
        document.querySelector("#nextPage").setAttribute("disabled", "disabled");
        document.querySelector("#lastPage").setAttribute("disabled", "disabled");
    }
    document.querySelector("#pets").style.marginLeft= `calc(${-(listWidth+40)*pageCounter}px)`
    document.querySelector("#numberOfPage").innerHTML = `<a href="#">${1+pageCounter}</a>`
}) 
if(pageCounter==0){
    document.querySelector("#prevPage").setAttribute("disabled", "disabled");
    document.querySelector("#firstPage").setAttribute("disabled", "disabled")
}

document.querySelector("#lastPage").addEventListener( "click" ,()=>{
    pageCounter=numberOfPages-1;
    document.querySelector("#pets").style.marginLeft= `calc(${-(listWidth+40)*pageCounter}px)`;
    document.querySelector("#nextPage").setAttribute("disabled", "disabled");
    document.querySelector("#lastPage").setAttribute("disabled", "disabled");
    document.querySelector("#prevPage").removeAttribute("disabled");
    document.querySelector("#firstPage").removeAttribute("disabled");
    document.querySelector("#numberOfPage").innerHTML = `<a href="#">${1+pageCounter}</a>`
}) 
document.querySelector("#firstPage").addEventListener( "click" ,()=>{
    pageCounter=0
    document.querySelector("#pets").style.marginLeft= `calc(${-(listWidth+40)*pageCounter}px)`;
    document.querySelector("#prevPage").setAttribute("disabled", "disabled");
    document.querySelector("#firstPage").setAttribute("disabled", "disabled")
    document.querySelector("#nextPage").removeAttribute("disabled");
    document.querySelector("#lastPage").removeAttribute("disabled");
    document.querySelector("#numberOfPage").innerHTML = `<a href="#">${1+pageCounter}</a>`
}) 

















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





const modal_close = document.querySelector('.modal_close');
    const modal_main = document.querySelector('.modal_main');
    const modal = document.querySelector('.modal');
    const ourFriends_slider_item = document.querySelector('.ourFriends_slider_item');




    function showModal(i) {
        setTimeout(()=>{
            document.querySelector('.modal').style.display = 'flex';
            document.querySelector('body').style.overflow = 'hidden'
            document.querySelector("#pet_name").innerHTML = fullPetsList[i].name;
            document.querySelector(".modal_content_description").innerHTML=fullPetsList[i].description;
            document.querySelector("#modal_age").innerHTML=fullPetsList[i].age;
            document.querySelector("#modal_inoculations").innerHTML=fullPetsList[i].inoculations;
            document.querySelector("#modal_diseases").innerHTML=fullPetsList[i].diseases;
            document.querySelector("#modal_parasites").innerHTML=fullPetsList[i].parasites;
            document.querySelector("#modal_img").src=fullPetsList[i].img;
            document.querySelector("#modal_type").innerHTML = fullPetsList[i].type;
            document.querySelector("#modal_breed").innerHTML=fullPetsList[i].breed;
            
        },1000)
    
    }
    
    function onClickModal(e) {
        if (e.target == modal || e.target == modal_main || e.target == modal_close ) {
            document.querySelector('.modal').style.display = 'none';
            document.querySelector('body').style.overflow = 'auto'
        }
    }
    
    modal.addEventListener("click", onClickModal);