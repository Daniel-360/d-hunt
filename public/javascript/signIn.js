document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    
    // Set the HTTP method and URL
    xhr.open('POST', '/login/login', true);

    // Set the request header
    xhr.setRequestHeader('Content-Type', 'application/json');

    // Set the callback function for when the request completes
    xhr.onload = function() {
      if (xhr.status === 200) {
        let data = xhr.response;
        console.log(data);
        window.location = data;
        console.log('Data sent successfully');
      } else {
        console.error('Error sending data');
      }
    };

    // Prepare the data to send
    const data = JSON.stringify({ password: password, email: email });

    // Send the request with the data
    xhr.send(data);

    let response = xhr.responseType;
    console.log(response);
  });



