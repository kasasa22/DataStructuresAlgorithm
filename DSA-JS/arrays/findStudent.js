const database = ['kasasa','trevor', 'eliod', 'cahy','kalema'];

const findStudent=(students, student)=>{
   for (let i =0; i < students.length;i++){
        if (students[i]==student){
            console.log("student found")
        }


   }
}

findStudent(database, 'trevor');
