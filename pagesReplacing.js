let welcomePage = ` <div id="page1">
<div id="WelcomeConent">
<img id="mekaraprLogoWelcome" src="images/Logo_mekarpar.png" alt="mekaraprLogo">
<div id="welcomeText">
<h1 id="welcome-bigText">ברוכים הבאים</h1>
<h2 id="welcome-smallText">חיל הרפואה</h2>
<div id="developedBy">
    <img id="shacharLogo" src="./images/ShacharLogo.png" alt="shacharLogo">
    <div id="developedByText">פותח ע"י יחידת שחר</div>
</div>
</div>  
</div>
</div>`

let searchPage= ` <div id="page2">
<img id="mekarparHomeLogo" src="./images/Logo_mekarpar.png" alt="mekarparLogo">
<div id="homeBody">
    <input type="text" class="search" placeholder="חפש כאן">
    <img src="images/glass.png" alt="glass" class="glass"> 
    <div class="formsOutput"></div>
</div>
</div>
`
let homePage= ``

let formsArray = [{text:"פניה לקרן הסיוע לעצמאים" , ending:"VRSM3GVXLZ"},{text:"קרן הסיוע- דמה", ending:"VMSM3GVXLZ"}]
let commonsFormsArray = [{text:"פניה לקרן הסיוע לעצמאים" , ending:"VRSM3GVXLZ", photoPath:"./images/freedom.png"},{text:"קרן הסיוע- דמה", ending:"VMSM3GVXLZ",photoPath:"./images/freedom.png"},{text:"קרן הסיוע- דמה", ending:"VMSM3GVXLZ",photoPath:"./images/freedom.png"},{text:"קרן הסיוע- דמה", ending:"VMSM3GVXLZ",photoPath:"./images/freedom.png"}]


$(document).ready(function() {
    $(".formsOutput").css('display','none');
    $("#WelcomeConent").animate({opacity:1,top:0},{duration:1000},{easing: "easeOut"});
     
    setTimeout(function() {
        $("#page1").animate(
            { opacity: 0 },
            {
                duration: 700,
                easing: "linear",
                complete: function() {
                    // Animation complete, set display to none
                    $(this).css('display', 'none');
                }
            }
        );
    }, 2000);
   
    linkTreeLibrary.initCommonForms(commonsFormsArray);

     $(".glass").on('click', function() {
        console.log($(".search").val());
        if($(".search").val())
        {
        $(".homeContent").css('display','none');
        $(".commonFormsDiv").css('opacity','0');
        $(".contactInfo").css('opacity','0');
        $(".formsOutput").css('display','flex');
        $("#goBackHomeButton").css('display','flex').animate({opacity:1},500);
        $(".formsOutput").empty();

         let filteredArray =  formsArray.filter(item => item.text.includes($(".search").val()))
         
         linkTreeLibrary.insertListOfForms(filteredArray,$(".search").val());

         if (filteredArray.length === 0){
            
            $(".formsOutput").append(`
            <div id="noResultsMessage">
            <img src="./images/noResults.png" alt="noResults">
            <div>לא מצאנו תוצאות מתאימות...</div>
            </div>`)
            $("#noResultsMessage").animate({'opacity':'1','bottom':'24vh'},700)
         }
         else{
            
            for(let i=0;i<filteredArray.length;i++){
                setTimeout(function (i) {
                    $("[item='item" + i + "']").animate({ opacity: 1, top: 0 }, 500, "linear");
                }.bind(null, i), i * 500);
            }
         }
        }
        
     })

     $("#goBackHomeButton").on('click',function() {
        
        $(".formsOutput").css('display','none');
        $("#goBackHomeButton").css({'display':'none','opacity':'0'})
        $(".homeContent").css('display','flex');
        $(".search").val("")
        
        setTimeout(function() {
            $(".commonFormsDiv").animate({ opacity: 1 }, 500);
        }, 1 * 200);
        
        setTimeout(function() {
            $(".contactInfo").animate({ opacity: 1 }, 500);
        }, 2 * 200);

      
     })
    
 })