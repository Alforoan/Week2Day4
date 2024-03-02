document.addEventListener('DOMContentLoaded', () => {
    const guitarImg = document.getElementById('guitar-img');
    console.log("guitar img", guitarImg);
    const rotateBtn = document.body.querySelector('.rotate-btn');
    let rotationAngle = 0;
    rotateBtn.addEventListener('click', () => {
        rotationAngle += 90;
        guitarImg.style.transform = `rotate(${rotationAngle}deg)`;
    })
})