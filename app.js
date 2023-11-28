document.addEventListener("DOMContentLoaded", function () {
    loadData();
    displayCategory(1000);
});
const loadData = () => {
    fetch(`https://openapi.programming-hero.com/api/videos/categories`)
      .then((res) => res.json())
      .then((data) => {
        const categories = data.data;
        createCategoryButtons(categories);
    })
      
};
  
const createCategoryButtons = (categories) => {
    const buttonContainer = document.getElementById('button-container');
    const categoryArray = Array.isArray(categories[2]) ? categories[2] : categories;

    for (var i = 0; i < categoryArray.length; i++) {
        const category = categoryArray[i];
        console.log(`Category at index ${i}:`, category);
        const card = document.createElement("div");
        card.classList.add("category-btn");
        card.innerHTML = `
            <button onclick="displayCategory('${category.category_id}')" type="button" class="btn btn-danger">
                ${category.category}
            </button>
        `;
        buttonContainer.appendChild(card);
    }

};

const displayCategory = (id) =>{
    fetch(`https://openapi.programming-hero.com/api/videos/category/${id ? id: 1000}`)
    .then((res) => res.json())
    .then((data) => displayData(data.data));
};

const displayData = (data) => {
    const categoryContainer = document.getElementById("category-container");
    categoryContainer.innerHTML = '';
    if (data.length === 0) {
        // If data is empty, display a message
        const card = document.createElement("div");
        card.classList.add("box");
        card.innerHTML = `
            <img class="box-img-null" src="./PHero-Tube-main/Icon.png" alt="">
            <h2>Oops!! Sorry, There is no content here</h2>
        `;
        categoryContainer.appendChild(card);
    } else {
        // Display data cards
        data.forEach((video) => {
            const card = document.createElement("div");
            card.classList.add("box");
            card.innerHTML = `
                <img class="box-img" src=${video.thumbnail} alt="">
                <div class="profile-title d-flex justify-content-center">
                    <img class="profile-img" src=${video.authors[0].profile_picture} alt="">
                    <h5>${video?.title}</h5>
                </div>
                <div class="profile-verified">
                    <p>${video.authors[0].profile_name}</p>
                    <p>${video.others.views} ${video.authors[0].verified ? '<i class="fa fa-tik"></i>' : ''}</p>
                </div>
            `;
            categoryContainer.appendChild(card);
        });
    }
};
const displayModal = () =>{
    
    console.log("Hello");
    document.getElementById("accordionExample").innerHTML = `
    <div class="accordion">
        <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Discuss the scope of var, let, and const
            </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Tell us the use cases of null and undefined
            </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
        </div>
        <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            What do you mean by REST API?
            </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
        </div>
    </div>
    `;
};