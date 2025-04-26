//offer functionality

var offerClose = document.getElementById("offer-close")

offerClose.addEventListener("click",function(){
    offerClose.parentElement.parentElement.style.display="none"
})

//navbar functionality

var navIcon = document.getElementById("nav-icon")
var sideBar = document.getElementById("side-bar")
var navClose = document.getElementById("nav-close")

navIcon.addEventListener("click",function(){
   sideBar.style.left="0"
})

navClose.addEventListener("click",function(){
    sideBar.style.left="-50%"
})
//search functionality
var search = document.getElementById("Search")
var searchArea = document.getElementById("search-container").querySelectorAll("div")


search.addEventListener("keyup",function(e){
    var inputValue = e.target.value.trim().toUpperCase()

    for(count=0;count<searchArea.length;count++)
    {
        var searchName = searchArea[count].querySelector("h3").textContent.toUpperCase()
        if(searchName.includes(inputValue)){
            searchArea[count].style.display="block"

        }
        else{
            searchArea[count].style.display="none"

        }
    }

})

//filter functionality
var form = document.querySelector("form");


form.addEventListener("change", function () {
    var formData = new FormData(form);
    var itemstag = formData.getAll("tags");
    console.log(itemstag);
    // var searchArea = document.getElementById("search-container").querySelectorAll("div")
    for (var count = 0; count < searchArea.length; count++) {
        var searchName = searchArea[count].querySelector("h3").textContent.toLowerCase();
        var matchFound = false;

        for (var i = 0; i < itemstag.length; i++) {
            var tag = itemstag[i].toLowerCase();
            if (searchName.includes(tag)) {
                matchFound = true;
            }
        }

        if (matchFound || itemstag.length === 0) {
            searchArea[count].style.display = "block";
        } else {
            searchArea[count].style.display = "none";
        }
    }
});


// var filterContainer = document.getElementById("product-page-left-container")
// var filterBox = filterContainer.querySelectorAll("div")
// for(count=0;count<filterBox.length;count++){
//     var checkbox = filterBox[count].querySelector("input")
//     if(checkbox.checked){
//         var checkBoxValue = checkbox.value.toUpperCase()
//         for(count=0;count<searchArea.length;count++){
//             var searchName = searchArea[count].querySelector("h3").textContent.toUpperCase()
//             if(searchArea.includes(checkBoxValue)){
//                 searchArea[count].style.display="block"

//             }
//             else{
//                 searchArea[count].style.display="none"
    
//             } 

//         }
        
    

//     }


