import Project from "./project";
import uniqid from 'uniqid';
import Ui from "./ui";

const projectStorage = (() => {
    let _projects = [];

    function addStorage() {
        if(!localStorage.getItem('projects')) {
            _projects.push(
                    {
                        taskName: 'default project',
                        taskId: uniqid()
                    }
                );
            localStorage.setItem('projects', JSON.stringify(getProjects()));
        }
    }

    function getStorage() {
        return JSON.parse(localStorage.getItem('projects'));
    }

    function updateProjectArray() {
        _projects = getStorage();
    }

    function getProjects() {
        return _projects;
    }

    function saveProjects(projectName) {
        const newProject = Project(projectName);
        updateProjectArray();
        _projects.push(
                {
                    taskName: newProject.getName(),
                    taskId: newProject.getId()
                }
            );

        localStorage.setItem('projects', JSON.stringify(getProjects()));


        /*
        console.log(_projects[(_projects.length - 1)].getPosition();
        */
    }

    function deleteProject(projectId) {
        const index = _projects.findIndex( object => object.taskId === projectId);

        updateProjectArray();
        _projects.splice(index, 1);
        localStorage.setItem('projects', JSON.stringify(getProjects()));
    }

    return {
        addStorage,
        getStorage,
        getProjects,
        saveProjects,
        deleteProject,
        updateProjectArray
    }

})();

export default projectStorage;