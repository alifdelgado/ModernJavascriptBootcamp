const myAge = 27;
let message;

// if(myAge>=18){
//     message = 'You can vote!';
// }else {
//     message = 'You cannot vote';
// }

message = myAge >= 18 ? 'You can vote!' : 'You cannot vote';

console.log(message);

const showPage = () => {
    return 'Showing the page';
};

const showErrorPage = () => {
    return "Showing the error page";
};

message = myAge >= 21 ? showPage() : showErrorPage();
console.log(message);

const team = ['Tyler', 'Porter'];
console.log(team.length <= 4 ? `Team size: ${team.length}` : `Too many people on your team`);