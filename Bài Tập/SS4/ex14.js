console.log(jobData.hits)
//14.1
console.log(jobData.hits[0])
//14.2
console.log(jobData.hits[0].jobTitle)
//14.3
console.log(jobData.hits[0].benefits)
//14.4
for(let i=0;i<jobData.hits[0].benefits.length;i++){
    console.log(`- ${jobData.hits[0].benefits[i].benefitValue}`)
}

for(let j=0;j<jobData.hits.length;j++){
    console.log(`${jobData.hits[j].jobTitle}`)
    console.log(`Salary: ${jobData.hits[j].jobSalary}`)
    console.log(`location: ${jobData.hits[j].locationVIs}`)
    
    console.log(`Benefits:`)
    for(let i=0;i<jobData.hits[j].benefits.length;i++){
        console.log(`- ${jobData.hits[j].benefits[i].benefitValue}`)
    }
    console.log("Skills:")
    for(let i=0;i<jobData.hits[j].skills.length;i++){
        console.log(`- ${jobData.hits[j].skills[i]}`)
    }
    console.log("...")
}
//14.5-7