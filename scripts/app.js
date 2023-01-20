(function(){


    window.addEventListener("load", Start)

    function DisplayHomePage(){

        //switch page to about us page when button is clicked
        let AboutUsButton = document.getElementById("AboutUsBtn");
        AboutUsButton.addEventListener("click",function (){
            location.href = "about.html"
        });

        //set a dynamic first paragraph
        let MainContent = document.getElementsByTagName("main")[0];
        let MainParagraph = document.createElement("p");
        let FirstString = "This is";
        let SecondString = ${FirstString} "the Main Paragraph";
        MainParagraph.textContent = SecondString;
        MainParagraph.setAttribute("id","MainParagraph");
        MainParagraph.setAttribute("class","mt-3");
        MainParagraph.textContent = "This is the Main Paragraph!";
        MainContent.appendChild(MainParagraph);
        let Article = document.createElement("article");
        let ArticleParagraph = '<p id="ArticleParagraph" class="mt-3"> This is my article paragraph</p>';
        Article.setAttribute("class","container");
        Article.innerHTML = ArticleParagraph;
        DocumentBody.appendChild(Article);
    }


    function DisplayProductsPage(){

    }

    function DisplayServicesPage(){

    }

    function DisplayAboutUsPage(){

    }

    function DisplayContactPage(){

    }

    function Start()
    {
        console.log("App Started!")
        switch(document.title){
            case "Home":
                DisplayHomePage();
                break;
            case "Products":
                DisplayProductsPage();
                break;
            case "Services":
                DisplayServicesPage();
                break;
            case "About Us":
                DisplayAboutUsPage();
                break;
            case "Contact Us":
                DisplayContactPage();
                break;
        }
    }

})();

