const calculateAverage = (...numbers) => {
    let sum = 0;
    numbers.forEach((num) => sum += num);
    return `The average grade is ${sum / numbers.length}`;
};

console.log(calculateAverage(0, 100, 88, 64));

const printTeam = (teamName, coach, ...players) => {
    console.log(`Team: ${teamName}`);
    console.log(`Coach: ${coach}`);
    console.log(`Players: ${players.join(', ')}`);
};

const team = {
    name: 'Libery',
    coach: 'Casey Penn',
    players: ['Marge', 'Aiden', 'Herbert', 'Sherry']
};
printTeam(team.name, team.coach, ...team.players);

let cities = ['Barcelona', 'Cape Town', 'Bordeaux'];
cities = [...cities, 'Santiago'];
console.log(cities);

const person = {
    name: 'Andrew',
    age: 27
};

const location = {
    city: 'Philadelphia',
    country: 'USA'
};

const overview = {
    ...person,
    ...location
};
console.log(overview);

const todo = {
    id: 'sdlkndlkfjdklfj',
    text: 'Pay the bills',
    completed: false
};

const printTodo = ({text, completed}) => {
    console.log(`${text}: ${completed}`);
};

printTodo(todo);

const { text:todoText, completed, details = 'No details provided', ...others } = todo;
console.log({todoText});
console.log({completed});
console.log({details});
console.log({others});

const age = [65, 0, 13, 21];
const [firstAge, secondaAge] = age;
console.log({firstAge});
console.log({secondaAge});