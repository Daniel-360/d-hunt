        // call the id
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        let submit = document.getElementById('submit')

        // write a funcction for checking null

        function checkNull() {
            
            if (email = '' && password.lenght >= 6) {
                submit.style.backgroundColor = 'red'
                return
            }
            submit.style.backgroundColor = 'orange'
            console.log(email, password);
        }
        // run the function
        checkNull()
