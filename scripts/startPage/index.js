import html from './index.html';
import json from './fileForLoaderWithText';

function showNewsPage(){
    document.getElementById('button-source-container').innerHTML = '';
    
    import('../index.js');
}

function defaultAppSettings(){
    const sourceContainer = document.getElementById('button-source-container');
    sourceContainer.innerHTML = html;

    const redirectToNewButton = document.getElementById('show-all-news');
    redirectToNewButton.textContent = json.value;
    redirectToNewButton.addEventListener('click', showNewsPage)
}

document.addEventListener('DOMContentLoaded', defaultAppSettings);