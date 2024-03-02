
document.addEventListener('DOMContentLoaded', () => {
    const gradeBtn = document.body.querySelector('.grade-btn');
    gradeBtn.addEventListener('click', () => {
        if(gradeBtn.textContent !== '17'){
            gradeBtn.textContent++;
        }else{
            gradeBtn.textContent = '17';
        }
    })
    const resetBtn = document.body.querySelector('.reset-btn');
    resetBtn.addEventListener('click', () => {
        gradeBtn.textContent = 0;
    })
})

