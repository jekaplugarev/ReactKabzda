type userType = {
    name: string
    age: number
}

let user: userType = {
    name: 'Jeka',
    age: 30
}
function icreaseAge(u: userType) {
    u.age++
}