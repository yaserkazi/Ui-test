(function($) {
    "use strict"; // Start of use strict
    var profileDetails = JSON.parse(localStorage.getItem('registerObj')),
        interestArrayLength = profileDetails.interestArray.length,
        ctr =1,
        interestText='';
    
    $.each(profileDetails.interestArray, function (i, val) {
           if(ctr != interestArrayLength){
               interestText += val +', ';
           }else{
               interestText += val;
           }
        var interestTag = "<span class='interestTagsSpan'><span class='interestValue'>"+ val +"</span> &nbsp;<span class='removeCurrentTag cursor-pointer'>X</span></span> ";
             $("#tagsHolder").append(interestTag);           
        ctr++;
    });
       console.log(interestText) ;
    var userBio= "I'm " +profileDetails.fname +' '+ profileDetails.lname + " and Im above 20 years and ";
        userBio+="you can send your emails to <br/>";
        userBio+= "<a href='mailto:"+profileDetails.email+"'>"+profileDetails.email+"</a>"; 
        userBio+=" I live in the state of " + profileDetails.state;
        userBio+=" I like "+ interestText;
            if(profileDetails.subscribe == 1){    
                userBio+=" And Please send me newsletters. " ;
            }
        userBio+=" Please reach out to me on my phone number."  ;
    $('.user-bio').html(userBio);
    
    $("#editProfile").click(function(){
        $(".user-bio, .user-bio-edit, #iAgree").toggleClass('hide');
        $("#fname").val(profileDetails.fname);
        $("#lname").val(profileDetails.lname);
        $("#email").val(profileDetails.email);
        $("#telno").val(profileDetails.telno);
        $("#age").val(profileDetails.age);
        $("#showAge").val(profileDetails.age);
        $("#state").val(profileDetails.state);
        $("#country").val(profileDetails.country);
        $("#address").val(profileDetails.address).trigger('change');
        $("#address1").val(profileDetails.add1);
        $("#address2").html(profileDetails.add2);

    });
})(jQuery); // End of use strict
