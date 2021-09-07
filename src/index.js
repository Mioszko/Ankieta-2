import './styles.css';


const correctAnswers = ['A', 'A', 'A', 'B', 'A'];
const form = document.querySelector('form');
const result = document.querySelector('.score');

form.addEventListener('submit', e => {
    e.preventDefault();
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    let score = 0;
    correctAnswers.forEach((answer, index) => {
        if(answer === userAnswers[index]) {
            score += 100/correctAnswers.length;
        }
    })

    result.setAttribute('style', 'display: block')

    setTimeout(() => {
        scrollTo({top: 0, behavior: 'smooth'})
    }, 200);


    let output = 0;
    let timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if(output === score) {
            clearInterval(timer);
        } else {
            output ++;
        }
    }, 50);
});



