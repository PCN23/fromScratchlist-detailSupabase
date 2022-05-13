export function renderStadiumLi(stadium) {
    const div = document.createElement('div');
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.createElement('img');

    div.classList.add('stadium-detail-container');

    img.src = `./assets/${stadium.image}.jpg`;
    a.href = `./stadiums-detail/?id=${stadium.id}`;
    a.textContent = stadium.name;


    a.append(img, li);
    div.append(a);
    return div;
}



export function renderStadiumDetail(stadium) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const placeEl = document.createElement('p');
    const capacityEl = document.createElement('p');

    capacityEl.textContent = stadium.capacity;
    capacityEl.classList.add('capacity');

    placeEl.textContent = stadium.place;
    placeEl.classList.add('place');


    div.classList.add('stadium-detail');

    img.src = `../assets/${stadium.name}.jpg`;
    
    div.append(capacityEl, img, placeEl);

    return div;
    
}