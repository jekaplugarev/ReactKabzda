type userType = {
    name: string
    age: number
}

let user: userType = {
    name: 'Jeka',
    age: 30
}
function incAge(u: userType) {
    u.age++
}