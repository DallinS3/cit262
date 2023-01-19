import fetch from 'node-fetch';

// async = allows us to read from the DB by moving on and coming back
it ("Should get a login token", async () => {

    // await fetch allows it to move 
    const loginResponse = await fetch('https://dev.stedi.me/login', {

    //method = POST says to give information to server
    method: 'POST',
    headers:{
        'Content-Type': 'application/text'
    },

    // stringify = makes the following into JSON text to be read by the server
    body:JSON.stringify({
        "userName": "sco17014@byui.edu",
        "password": "P@$$w0rd"
    })
})

// 400 means unauthorized (invalid input(s))
expect(loginResponse.status).toBe(401);

});