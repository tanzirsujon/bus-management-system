n = new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

document.querySelector('.img-2').style.display = 'none';
document.querySelector('.cr').addEventListener("click", () => {
    document.querySelector('header').classList.toggle('down');
    if (
        document.querySelector('header').classList.contains('down')) {
        document.querySelector('.img-1').style.display = 'inline'
        document.querySelector('.img-2').style.display = 'none'
    }
    else {
        document.querySelector('.img-1').style.display = 'none'
        document.querySelector('.img-2').style.display = 'inline'
    }
})