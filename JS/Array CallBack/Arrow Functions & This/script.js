const person = {
    firstName: 'Yash',
    lastName: 'Verma',
    // fullName: () => {
    //     return `${this.firstName} ${this.lastName}` 
    // } Arrow function not working

    fullName: function() {
             return `${this.firstName} ${this.lastName}` 
         },
         shoutName: function () {
            setTimeout(() => {
                console.log(this);
                console.log(this.fullName())
            }, 3000)
         }

}