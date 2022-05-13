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
    a.append(div);
    return a;
}



export function renderStadiumDetail(stadium) {
    const div = document.createElement('div');
    div.classList.add('stadium-detail');
    
    
    const capacityEl = document.createElement('p');
    capacityEl.textContent = stadium.capacity;
    capacityEl.classList.add('capacity');
    
    const placeEl = document.createElement('p');
    placeEl.textContent = stadium.place;
    placeEl.classList.add('place');
    
    const nameSpan = document.createElement('span');
    nameSpan.textContent = stadium.name;
    nameSpan.classList.add('name');

    const teamName = document.createElement('p');
    teamName.textContent = stadium.teamName;
    teamName.classList.add('team-name');
    
    const img = document.createElement('img');
    img.src = `../assets/${stadium.name}.jpg`;
    
    div.append(capacityEl, img, placeEl, nameSpan, teamName);

    return div;
    
}