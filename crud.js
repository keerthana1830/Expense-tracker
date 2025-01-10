const fs = require('fs');

// Function to create a student
const create = (student) => {
    fs.readFile('./Student.json', 'utf8', (error, data) => {
        let students = data ? JSON.parse(data) : [];
        students.push(student);
        fs.writeFile('./Student.json', JSON.stringify(students, null, 2), 'utf8', (writeError) => {
            if (writeError) {
                console.log("Error writing data");
            } else {
                console.log("Data written successfully");
            }
        });
    });
};

// Function to read students
const read = () => {
    fs.readFile('./Student.json', 'utf8', (error, data) => {
        if (error) {
            console.log("Error reading the file");
            return;
        }
        console.log(data);
    });
};

// Function to update a student
const updateStudent = (id, updateData) => {
    fs.readFile('./Student.json', 'utf8', (error, data) => {
        if (error) {
            console.log("Error reading file:", error);
            return;
        }

        let students = data ? JSON.parse(data) : [];

        const studentIndex = students.findIndex(student => student.id === id);
        
        if (studentIndex !== -1) {
            students[studentIndex] = { ...students[studentIndex], ...updateData };

            fs.writeFile('./Student.json', JSON.stringify(students, null, 2), 'utf8', (writeError) => {
                if (writeError) {
                    console.log('Error writing data:', writeError);
                } else {
                    console.log('Student data updated successfully');
                }
            });
        } else {
            console.log('Student not found!');
        }
    });
};

// Function to delete a student
const deleteStudent = (id) => {
    fs.readFile('./Student.json', 'utf8', (error, data) => {
        if (error) {
            console.log('Error reading file:', error);
            return;
        }

        let students = data ? JSON.parse(data) : [];

        const studentIndex = students.findIndex(student => student.id === id);
        
        if (studentIndex !== -1) {
            students.splice(studentIndex, 1);  // Remove the student at the found index

            fs.writeFile('./Student.json', JSON.stringify(students, null, 2), 'utf8', (writeError) => {
                if (writeError) {
                    console.log('Error writing data:', writeError);
                } else {
                    console.log('Student data deleted successfully');
                }
            });
        } else {
            console.log('Student not found!');
        }
    });
};

// Example usage
create({ id: 1, name: "Keerthana", rollno: 29, age: 19 });
read();
//updateStudent(1, { name: 'Keerthana', age: 20 });
//read();
//deleteStudent(1);
//read();