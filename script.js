const fileInput = document.getElementById('files');
const container = document.getElementById('stickerContainer');
const paper = document.getElementById('paper');
let imageSource = [];

fileInput.addEventListener('change', async (e) => {
    const files = Array.from(e.target.files);
    for (let file of files) {
        const url = await new Promise(res => {
            const r = new FileReader();
            r.onload = (ev) => res(ev.target.result);
            r.readAsDataURL(file);
        });
        imageSource.push(url);
    }
    render();
});

function render() {
    container.innerHTML = '';
    paper.className = document.getElementById('paperSize').value;
    const cols = document.getElementById('gridCols').value;
    container.style.gridTemplateColumns = `repeat(${cols}, auto)`;

    const w = document.getElementById('wCm').value;
    const h = document.getElementById('hCm').value;
    const pad = document.getElementById('padding').value;
    const copies = document.getElementById('copies').value;

    imageSource.forEach(src => {
        for(let i=0; i < copies; i++) {
            const wrapper = document.createElement('div');
            wrapper.className = 'sticker-item';
            wrapper.style.width = w + 'cm';
            wrapper.style.height = h + 'cm';
            wrapper.style.padding = pad + 'px';
            wrapper.style.borderRadius = (pad * 1.2) + 'px';

            const img = document.createElement('img');
            img.src = src;
            
            wrapper.appendChild(img);
            container.appendChild(wrapper);
        }
    });
}

['paperSize', 'wCm', 'hCm', 'padding', 'copies', 'gridCols'].forEach(id => {
    document.getElementById(id).addEventListener('input', render);
});
