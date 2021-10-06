import Ui from './ui';
import projectStorage from './projectStorage';
import Project from './project';

const Init = (() => {
    function loadHome() {
        displayProjects();
        addListeners();
    }

    function displayProjects() {
        projectStorage.addStorage();
        projectStorage.updateProjectArray();
        let projectsToShow = projectStorage.getProjects();

        projectsToShow.forEach( project => {
            Ui.addProject(project);
        });
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