import { getStadium } from '../fetch-utils.js';
import { renderStadiumDetail } from '../render-utils.js';

const stadiumDetailContainer = document.getElementById('stadium-detail-container');

async function loadData(){
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const stadium = await getStadium(id);
    stadiumDetailContainer.append(renderStadiumDetail(stadium));
}
loadData();

