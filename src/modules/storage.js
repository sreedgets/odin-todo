import Project from "./project";
import Ui from "./ui";

const Storage = (() => {
    let _projects = [];

    function getProjects() {
        return _projects;
    }

    function saveProjects(projectName) {
        const newProject = Project(projectName)
        _projects.push(newProject);

        /*
        console.log(_projects[(_projects.length - 1)].getPosition();
        */
    }

    function deleteProject() {
        console.log('cwosant');
    }

    return {
        getProjects,
        saveProjects,
        deleteProject
    }

})();

export default Storage;