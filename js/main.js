

/* fire the below even which is a ajax request to obtain information from user
 submission and send off to formspree and not reload the page, but populate
 a field notifying the user submission was sent and if the user decides to submit
 another form request clicking on any of the listed input fields it will clear
 the fields and success message. */
 $('.contact_form').on('submit', function(e) {
     e.preventDefault();

     //get the name field value
     var name = $('#client_Name').val();
     //get the email field value
     var email = $('#client_Email').val();
     //get the message
     var message = $('#client_Message').val();
     //pretend we don't need validation

     //send to formspree
     $.ajax({
         url: 'https://formspree.io/j.santana2418@gmail.com',
         method: 'POST',
         data: {
             name: name,
             email: email,
             message: message
         },
         dataType: "json",
         success: function() {
//after submission the form will clear data and clicking into either text or
//email field will remove the thank you message.
             console.log('success');
             $('#thankyouBlock').show();
             $('.contact_form').trigger('reset');
             $('input[type=text], input[type=email]').on("click", function() {
                 $('#thankyouBlock').hide();
             });
         }
     });
 });
