const customerId = 122343
let customerEmail = "divyansh@gmail.com"
var customerPassword = "12345"
customerCity = "GKP"

// customerId = 5
customerEmail = "gg@gmail.com"
customerPassword = "33232344"
customerCity = "Benglore"

console.log(customerId)

// prefer not to use var
// because of issue in block scope and function scope

console.table([customerEmail, customerPassword, customerCity])
