export function renderStadiumLi(stadium) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `/stadiums-detail/?id=${stadium.id}`;
    a.textContent = stadium.name;
    li.append(a);
    return li;
}

export function findById(id, arr) {

    console.log(id);
    console.log(arr);
    
    for (let item of arr) {
        if (id === item.id) {
            return item;
        }
    }
}