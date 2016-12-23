
(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });
    
    $('body').on('click', '.removeCurrentTag', removeCurrentTag);
    
    function removeCurrentTag(){
        $(this).parent().remove();
    }
    
    $('#openRegisterModal').click(function(){
        $("#registerModal").modal('show');
    });
    
    var url = window.URL || window.webkitURL;
    $("#profilePicture").change(function (e) {
        var file, 
            img;
        if ((file = this.files[0])) {
            img = new Image();
            img.onload = function () {
                if(this.width != 310 && this.height != 325){
                     alert("Image size should be 310px X 325px Only!!!");
                }
            };
            img.onerror = function () {
                alert("not a valid file: " + file.type);
            };
            img.src = url.createObjectURL(file);
        }
    });
    
    
    $('#fname').keyup(function(){
       $(this).val($(this).val().replace(/[^a-zA-Z]/g,''));
    });
    $("#age").on("input change", function() { 
        $('#showAge').html(this.value);
    });

    $("#address").change(function(){
        if(this.value.length > 0){
            $("#addressSelectionContainer").find('#addLabel1').html('<span class="text-fade-grey"> Address1</span>');
            $("#addressSelectionContainer").find('#addLabel2').html('<span class="text-fade-grey"> Address2</span>');
            $("#addressSelectionContainer").removeClass('hide');
        }else{
             $("#addressSelectionContainer").addClass('hide');   
        }
    });
    
    $("#interest").keydown(function(e){
         if (e.keyCode == 13) {
             var interestTag = "<span class='interestTagsSpan'><span class='interestValue'>"+ this.value +"</span> &nbsp;<span class='removeCurrentTag cursor-pointer'>X</span></span> ";
             $("#tagsHolder").append(interestTag);
             this.value='';
         }
    });
    
    function validateNSubmitForm(){
        var fname = $('#fname').val(),
            lname = $("#lname").val(),
            email = $("#email").val(),
            telno = $("#telno").val(),
            age = $("#age").val(),
            state = $("#state").val(),
            country = $("#country").val(),
            address = $("#address").val(),
            add1  =   $("#address1").val(),
            add2  =   $("#address2").val(),
            subscribe  =   $("#subscribe").val(),
            valid = true;
    
            if((address.length ==0) || (add1.length ==0 || add2.length == 0)){
                $(".validation-error").text('Address cannot be empty');
                $(".validation-error").removeClass('hide');
                valid = false;
            }
            if(valid){
                var interestArray = [];
                $(".interestValue").each(function(){
                    interestArray.push($(this).text());
                });
                
                var registerObj = {'fname':fname, 'lname':lname, 'email': email, 'telno':telno, 
                            'age':age, 'state':state, 'country':country, 'address':address,'add1':add1, 'add2':add2, 'interestArray':interestArray, 'subscribe':subscribe};
                        
                localStorage.setItem('registerObj',JSON.stringify(registerObj));
                window.location.href = 'profile.html';
            }
            
    }
    $("#submitForm").click(function(){
        validateNSubmitForm();
    });
})(jQuery); // End of use strict
