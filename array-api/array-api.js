// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join('|');
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = 'apple,kiwi,banana,cherry';
    const result = fruits.split(',');
    const result2 = fruits.split(',', 2);
    console.log(result);
    console.log(result2);
}

// Q3. make this array look like this: [5,4,3,2,1]
{
    const array = [1,2,3,4,5];
    const result = array.reverse();
    console.log(result);
    console.log(array);  //함수를 호출한 array 배열 자체도 순서가 바뀜(배열자체를 수정)
}

// Q4. make new array without the first two elements
{
    const array = [1,2,3,4,5];
    const result = array.splice(0,2);
    console.log(result);
    console.log(array); // splice하고 남은거만 출력됨

    const array2 = [1,2,3,4,5];
    const result2 = array2.slice(0,2);
    const result3 = array2.slice(2,5);
    console.log(result2);
    console.log(result3);
    console.log(array2); // slice는 원래배열 훼손x
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5.find a student with the score 90
{
    const result = students.find(function(student, index) {
        console.log(student, index);
    });

    const result2 = students.find((student)=>student.score===90);
    console.log(result2);
}

// Q6. make an array of enrolled students

{
    const result = students.filter((student) => student.enrolled);
    // true만 return
    console.log(result);
}

// Q7. make an array of containing only the student's scores
// result should be : [45, 80, 90, 66, 88]

{
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50

{
    const result = students.some((student) => student.score < 50);
    console.log(result); // 한명이라도 있으면 true

    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);
}

// Q9. compute students' average score

{
    const result = students.reduce((prev, curr) => {
        console.log('---------');
        console.log(prev); // prev는 이전의 콜백함수에서 리턴된 값이 전달.
        console.log(curr); // curr는 배열의 아이템을 순차적으로 전달받음.
        return prev + curr.score;
    }, 0);
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be : '45, 80, 90, 66, 88'

{
    const result = students
    .map((student) => student.score)
    .filter(score => score >= 50)
    .join();
    console.log(result); // 이런식으로 묶어서 사용가능. 함수형프로그래밍
}

// Q10_1. do Q10 sorted in ascending order
// result should be : '45, 66, 80, 88, 90'

{
    const result = students.map(student => student.score)
    .sort((a,b)=>a-b) //내림차순하고싶으면 b-a
    .join();
    console.log(result);
}