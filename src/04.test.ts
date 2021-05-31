test('completed tasks', () => {
    const tasks = [
        {title: 'milk', isDone: false},
        {title: 'bread', isDone: true},
        {title: 'beer', isDone: false},
        {title: 'apple', isDone: true},
    ]

    const  completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].title).toBe('bread')
})
