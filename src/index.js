import Init from './modules/init';
import projectStorage from './modules/projectStorage';

document.addEventListener('DOMContentLoaded', () => {
    Init.loadHome();
    projectStorage.addStorage();
});

/*
- Press X to delete project
- Add active class to selected project
*/