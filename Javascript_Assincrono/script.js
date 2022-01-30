const BASE_URL = "https://thatcopy.pw/catapi/rest/";
const CAT_BUTTON = document.getElementById("cat_button");
const CAT_IMAGE = document.getElementById("cat_image");

CAT_BUTTON.addEventListener("click", loadImg);

const getCats = async function(){
    try{
        const DATA = await fetch(BASE_URL);
        const JSON = await DATA.json();
        return JSON.webpurl;
    }

    catch(error){
        throw error;
    }
}

async function loadImg(){
    CAT_IMAGE.src = await getCats();
}