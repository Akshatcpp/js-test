function one() {
    const username = "akshat"
    function two() {
        console.log(username)  // changed from console.log(one)
        let user = "great"
    }
    two()
}

one()  // call the function