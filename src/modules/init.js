import Ui from './ui';
import projectStorage from './projectStorage';

const Init = (() => {
    function loadHome() {
        displayProjects();
        addListeners();
    }

    function displayProjects() {
        projectStorage.getProjects();
    }

    function addListeners() {
        const addProject = document.querySelector('.add-project');

        addProject.addEventListener('click', () => {
            Ui.startNewProject();
        });
    }

    return { 
        loadHome
     };
})();

export default Init;