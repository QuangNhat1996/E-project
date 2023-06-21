let kichthuoc = document.getElementsByClassName("slide")[0].clientWidth;
    let chuyenslide = document.getElementsByClassName("slider")[0];
    let img = chuyenslide.getElementsByTagName("img");
    let max = kichthuoc * img.length;
    max -= kichthuoc
    let chuyen = 0;
    function Next() {
        if (chuyen < max) chuyen += kichthuoc;
        else chuyen = 0;
        chuyenslide.style.marginLeft = '-' + chuyen + 'px';
    }
    function Back() {
        if (chuyen == 0) chuyen = max;
        else chuyen -= kichthuoc;
        chuyenslide.style.marginLeft = '-' + chuyen + 'px';
    }