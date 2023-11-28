const password = prompt('Please Enter a New Password');

//password must be 6 + character.
if(password.length >=6)
{
    if(password.indexOf(' ') === -1){
        console.log('vALID PASSWORD')
    }
    else{
        console.log('Dont provide spaces')
    }
    
}
else{
    console.log('password too short! Make it 6+ characters')
}

//password cannot have space

