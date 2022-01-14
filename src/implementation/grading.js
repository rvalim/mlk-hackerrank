//https://www.hackerrank.com/challenges/grading/problem

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    return grades.map((p) => {
        if (p >= 38 && 5 - (p % 5) < 3) return 5 * ((1 + p / 5) | 0);
        return p;
    });
}

let grades = [73, 67, 38, 33];
console.log(gradingStudents(grades));
