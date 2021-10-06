import Init from './modules/init';
import projectStorage from './modules/projectStorage';

document.addEventListener('DOMContentLoaded', () => {
    Init.loadHome();
    projectStorage.addStorage();
});

/*
- Press X to delete project
- Projects get saved to storage.js, learn to save to local browswer storage.
- Add active class to selected project
*/