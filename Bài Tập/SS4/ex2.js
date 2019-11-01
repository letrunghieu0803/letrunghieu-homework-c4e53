const task = {
    subject: "Implement login feature",
    createdBy: "Hoang Ngoc Duc",
    assignTo: "Nguyen Phuong Nam",
    dueDate: "2019-10-08T18:00:24+0000",
    expectedHours: 0.5,
    };
// var subject, assignTo, dueDate
// ({subject, assignTo, dueDate} = task)  C1

var {subject, assignTo, dueDate} = task 


console.log(subject)
console.log(assignTo)
console.log(dueDate)
