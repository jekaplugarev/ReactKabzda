function icreaseAge(u: UserType) {
    u.age++
}
type UserType = {
    name: string
    age: number
}
test('big test', () => {
    let user: UserType = {
        name: 'Jeka',
        age: 30
    }
    icreaseAge(user)

    expect(user.age).toBe(31)
})