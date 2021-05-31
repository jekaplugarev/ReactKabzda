import {student, StudentType} from './02';

export const sum = (a: number, b: number) => {
    return a + b
}

const res = sum( sum(1, 2), sum (1, 3) )

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
    title: skill
    })
}