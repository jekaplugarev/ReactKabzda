export const ages = [18, 22, 15, 10, 98, 14, 33, 100]
const oldAges = [100]
const predicate = (age: number) => {
    return age > 90
}
const corses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150}
]
const chipPredicate = (course: any) => {
    return course.price < 150
}
const chipCorses = [
    {title: 'CSS', price: 110},
    {title: 'REACT', price: 110}
]