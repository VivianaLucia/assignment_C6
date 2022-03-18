class Student {
     
    constructor(stud_name, phone_number) {
      this.stud_name = stud_name;
      this.phone_number = phone_number;
       
    }
    greetings(){
     return console.log(`Hello, my name is ${this.stud_name} and I’m ${this.age} of age.`)
}   
    
    setHobbies(myHobbies = []){    
        return this.hobbies = myHobbies;
    }
    getHobbies(){
        return this.hobbies;
    }
  

    setAge(myAge){    
      return this.age = myAge;
    }
     getAge(){
       return this.age;
     } 

}
var students = ["Sharleen Rollo", "Della Wally", "Ryana Ami", "Lydia Mercy",
"Mikey Valorie", "Chester Lexie", "Danette Luanna", "AdalyGoddard", "Johnnie Peta", "Natille Nigellus"];
var phonnes = ["0766567890", "0788789098", "0722345678", "0765123456", "07456123", "0721345321", "0734654321", "0756432123", "0745321234", "0712345678"];
var age = [21, 22, 23, 24, 25, 21, 25, 20, 27, 23];
var hobbies = [["sport", "books"], ["music", "art"], ["books", "cars", "painting"],["photo", "music", "movies"], ["music", "books"], 
["walking", "cooking"], ["shopping"], ["drinking"],["playing", "talking"], ["tennis", "footbal", "chess"]];
allStudents = [];

for(var i=0; i<students.length; i++){
     students[i] = new Student(students[i], phonnes[i]);
     students[i].setAge(age[i]);
     students[i].setHobbies(hobbies[i]);
     console.log(students[i]);
     allStudents[allStudents.length] = students[i];
}

for(y in allStudents){    
     if((allStudents[y].hobbies.includes("books"))||(allStudents[y].hobbies.includes("music"))){
       console.log(allStudents[y].greetings());   
     }
}

