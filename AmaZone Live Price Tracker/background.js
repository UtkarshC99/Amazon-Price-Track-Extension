console.log("AmaZone running in background...")

// if (window.XMLHttpRequest) {
//     // code for modern browsers
//     back_req = new XMLHttpRequest();
//  } else {
//     // code for old IE browsers
//     back_req = new ActiveXObject("Microsoft.XMLHTTP");
// };

// $.ajax({
//     url: "http://localhost:3000/products",
//     data: {name: "Utkarsh"},
//     type: "POST",
//     async: true,
//     success: function(response){
//         console.log("Request successful: ", response);
//     },
//     error: function(response){
//         console.log("Error in making req from server: ", response);
//     }

// });

function messageReceived(msg, sender, sendResponse) {
    // Do your work here
     const URL = "http://localhost:3000/products";
     $.ajax({
         url: URL,
         type:"POST",
         data: msg,
         success: function (data, status) {
             console.log('Server says: '+data +'\nStatus is: '+ status);
             setTimeout(function(){
                 sendResponse(data);
             },1000);
             
             return true;
         },
         error: function (error) {
             console.log('Error: ${error}')
         }
     })
    console.log(msg);
 }
 
 chrome.runtime.onMessage.addListener(messageReceived);