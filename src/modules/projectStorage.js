import Project from "./project";
import Ui from "./ui";

const projectStorage = (() => {
    let _projects = ['Default Project'];

    function addStorage() {
        if(!localStorage.getItem('projects')) {
            localStorage.setItem('projects', JSON.stringify(getProjects()));
        }
    }

    function getStorage() {
        return JSON.parse(localStorage.getItem('projects'));
    }

    function updateStorageArray() {
        
    }

    function getProjects() {
        return _projects;
    }

    function saveProjects(projectName) {
        const newProject = Project(projectName);
        _projects.push(newProject.getName());

        localStorage.setItem('projects', JSON.stringify(getProjects()));


        /*
        console.log(_projects[(_projects.length - 1)].getPosition();
        */
    }

    function deleteProject() {
        console.log('cwosant');
    }

    return {
        addStorage,
        getStorage,
        getProjects,
        saveProjects,
        deleteProject
    }

})();

export default projectStorage;