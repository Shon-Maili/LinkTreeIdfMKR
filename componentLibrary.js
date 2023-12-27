var linkTreeLibrary =  linkTreeLibrary || {}

linkTreeLibrary.insertListOfForms = function (arr,searchValue){

    let formsList = $('<div>', {
        class:"formsList",
    })
   
    
    let results = $('<div>', {
        class:"results",
        text:"תוצאות עבור" + ' "' + searchValue + '"'
    })
   
    $(".formsOutput").prepend(results);

    for(let i=0;i<arr.length;i++){
       
        let formsListItem = $('<div>', {
            class:"formsListItem",
            text:arr[i].text,
            item:"item" + i
        })

        

        let link= $('<a>', {
            class:"link",
            href:"https://wiz.medone.idf.il/MU/m/" + arr[i].ending,
            target:"_blank"
        })

        let arrow= $('<img>', {
            class:"arrow",
            src:"./images/arrow.png",
            alt:"arrowLogo"
        })

        formsListItem.css({'position':'relative','top':'5px','opacity':'0'})

        link.append(arrow);

        formsListItem.append(link);


       formsList.append(formsListItem);

      

    }

    $(".formsOutput").append(formsList)

    

}

linkTreeLibrary.initCommonForms = function (arr){

    
    let commonFormsDiv = $('<div>', {
        class:"commonFormsDiv",
    })


    let commonFormsHeader = $('<div>', {
        class:"commonFormsHeader",
        text:"פניות נפוצות"
    })

    let CommonFormsList = $('<div>', {
        class:"CommonFormsList",
    })
   

    for(let i=0;i<arr.length;i++){
       
        let CommonFormsListItem = $('<div>', {
            class:"CommonFormsListItem",
            item:"CommonItem" + i
        })

        let imageContainer= $('<div>', {
           class : "imageContainer"
        })

        imageContainer.css('backgroundImage' , "url('" + arr[i].photoPath + "')");
    
        let commonFormTextAndArrow= $('<div>', {
            text:arr[i].text,
            class: "commonFormTextAndArrow"
        })

        let arrow= $('<img>', {
            src:"./images/arrow1.png",
            alt:"arrow1Logo"
        })

        let link= $('<a>', {
            href:"https://wiz.medone.idf.il/MU/m/" + arr[i].ending,
            target:"_blank"
        })


        

        link.append(arrow);

        commonFormTextAndArrow.append(link);


        CommonFormsListItem.append(imageContainer,commonFormTextAndArrow);

        CommonFormsList.append(CommonFormsListItem);
      

    }
    commonFormsDiv.prepend(commonFormsHeader,CommonFormsList)
    $(".homeContent").prepend(commonFormsDiv)

    

}

window.linkTreeLibrary = linkTreeLibrary;