// CODE here for your Lambda Classes

class Person {
    constructor(attributes) {
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location,
        this.gender = attributes.gender
    }
    speak() {
        return `${this.name} says "Hello, my name is ${this.name} and I am from ${this.location}!`;
    }
}

class Instructor extends Person {
    constructor(instructorAttributes){
        super(instructorAttributes);
        this.specialty = instructorAttributes.specialty,
        this.favLanguage = instructorAttributes.favLanguage,
        this.catchPhrase = instructorAttributes.catchPhrase
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`
    }
    grade (student, subject) {
        return `${student.name} receieves a perfect score on ${subject}!`
    }
}


class Student extends Person {
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground,
        this.className = studentAttributes.className,
        this.favSubjects = studentAttributes.favSubjects
    }
    listsSubjects() {
      this.favSubjects.forEach(function(element) {
          console.log(element);
      })
    }
    PRassignment (subject) {
        return `${this.name} has submitted a PR for ${subject}!`
    }
    sprintChallenge (subject) {
        return `${this.name} has begun a sprint challenge on ${subject}!`
    }
}

class PM extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName,
        this.favInstructor = pmAttributes.favInstructor
    }
    standUP (channel) {
        return `${this.name} announces to ${channel}, @channel Stand Up time!`
    }
    debugsCode (student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
}

const shane = new Person({
    name: "Shane",
    age: 28,
    location: "Farmington",
    gender: "Male"
  });


const jay = new Student({
    name: "Jay",
    age: 27,
    location: "Farmington",
    gender: "Male",
    previousBackground: "Construction",
    className: "WEB19",
    favSubjects: ["JavaScript","HTML","CSS"]
});

const bigKnell = new Instructor({
    name: "Josh Knell",
    age: "Wise",
    location: "Utah",
    gender: "Male",
    specialty: "ALL OF IT",
    favLanguage: "Technical Wizadry",
    catchPhrase: "What's going on under the hood?!"
})

const stellaLuminant = new PM({
    name: "Roxanne Printice",
    age: "Wise",
    location: "LA",
    gender: "Female",
    specialty: "Gaming Languages",
    favLanguage: "JavaScript",
    catchPhrase: "You're doing a great job!",
    gradClassName: "Full Stack Web Dev",
    favInstructor: "Big Knell FTW!"
})
console.log(jay.speak());
jay.listsSubjects();
console.log(jay.PRassignment("JavaScript"));
console.log(jay.sprintChallenge("CSS"));
console.log(bigKnell.demo("JavaScript"));
console.log(bigKnell.grade(jay, "JavaScript"));
console.log(stellaLuminant.standUP(jay.className));
console.log(stellaLuminant.debugsCode(jay, "JavaScript"));

