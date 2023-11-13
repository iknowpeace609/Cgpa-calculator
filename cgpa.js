/* start java script */

function CalculateGrade(grade, unit) {
    if (grade === "A") {
        return 5 * unit;
    }
    else if (grade === "B") {
        return 4 * unit;
    }
    else if (grade === "C") {
        return 3 * unit;
    }
    else if (grade === "D") {
        return 2 * unit;
    }
    else if (grade === "E") {
        return 1 * unit;
    }
    else if (grade === "F") {
        return 0 * unit;
    }
}

let count = 0;

function addNewCourse() {
    let newform = document.createElement('form');
    newform.classList.add('addNew', 'get-${count}')
    const courseName = ''


}