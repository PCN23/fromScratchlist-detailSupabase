export function renderStadiumLi(stadium) {
    const div = document.getElementById('div');
    const li = document.createElement('li');
    const a = document.createElement('a');
    const img = document.getElementById('img');

    img.src = `./assets/${stadium.name}`;
    a.href = `/stadiums-detail/?id=${stadium.id}`;
    a.textContent = stadium.name;
    div.append(img);

    li.append(a);

    return li;
}



export function renderStadiumDetail(stadium) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const placeEl = document.createElement('p');

    placeEl.textContent = stadium.place;
    placeEl.classList.add('place');


    div.classList.add('stadium-detail');

    img.src = `../assets/${stadium.name}.jpg`;



    
}