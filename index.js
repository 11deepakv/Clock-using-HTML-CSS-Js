hrotation = 0;
mrotation = 0;
srotation = 0;

setInterval(() => {
    date = new Date();
    htime = date.getHours();
    mtime = date.getMinutes();
    stime = date.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hour = document.getElementById('hour');
    minute = document.getElementById('minute');
    second = document.getElementById('second');

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`
}, 1000);

hrotation += hrotation;
mrotation += mrotation;
srotation += srotation;