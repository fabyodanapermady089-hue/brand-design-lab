const productBase = document.getElementById('product-base');
const designWrapper = document.getElementById('design-wrapper');
const userLogo = document.getElementById('user-logo');

// 1. Ganti Produk (Fesyen, Minuman, Kardus)
document.getElementById('product-switcher').onchange = (e) => {
    const val = e.target.value;
    if(val === 'kaos') productBase.src = "https://www.pngarts.com/files/1/T-Shirt-PNG-Free-Download.png";
    if(val === 'kaleng') productBase.src = "https://www.pngarts.com/files/12/Soda-Can-PNG-High-Quality-Image.png";
    if(val === 'kardus') productBase.src = "https://www.pngarts.com/files/7/Cardboard-Box-PNG-Transparent-Image.png";
};

// 2. Upload Logo
document.getElementById('upload-input').onchange = (e) => {
    userLogo.src = URL.createObjectURL(e.target.files[0]);
};

// 3. Atur Ukuran
document.getElementById('size-slider').oninput = (e) => {
    designWrapper.style.width = e.target.value + 'px';
};

// 4. Fitur Seret Logo (Drag & Drop)
let dragging = false, offset = [0,0];

designWrapper.onmousedown = (e) => {
    dragging = true;
    offset = [designWrapper.offsetLeft - e.clientX, designWrapper.offsetTop - e.clientY];
};

document.onmouseup = () => dragging = false;

document.onmousemove = (e) => {
    if (dragging) {
        designWrapper.style.left = (e.clientX + offset[0]) + 'px';
        designWrapper.style.top = (e.clientY + offset[1]) + 'px';
    }
};

function simpan() {
    alert("Hasil simulasi berhasil diproses di Brand Lab!");
}
