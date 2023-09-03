const showIcon = function(evt) {
    var powerBg = document.getElementById('power-bg');
    powerBg.classList.add('grayish');
}

const hideIcon = function(evt) {
    var powerBg = document.getElementById('power-bg');
    powerBg.classList.remove('grayish');
}

document.getElementById('power')
        .addEventListener('mouseover', showIcon);
document.getElementById('power')
        .addEventListener('mouseout', hideIcon);

