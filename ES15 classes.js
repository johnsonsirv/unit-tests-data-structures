class Student{
    constructor (firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    //Adding Instance Methods;
    showFullName(){
        return `Student's fullname is ${this.lastname} ${this.firstname}`;
    }
    
    //adding static methods
    static totalRegisteredStudents(){

    }
}

let vic = new Student("Vic", "Don");
let mary = new Student("mary", "rose");


