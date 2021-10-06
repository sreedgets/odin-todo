import Project from "./project";
import projectStorage from "./projectStorage";

const Ui = (() => {
    function startNewProject() {
        const getAddProject = document.querySelector('.add-project');
        getAddProject.style.display = 'none';
    
        const projectBox = document.querySelector('.projects');

        let createProject = document.createElement('div');
        createProject.className = 'project-create';

        let inputProjectName = document.createElement('input');

        const createOk = document.createElement('button');
        createOk.className = "ok";
        createOk.innerText = 'Ok';
        createOk.addEventListener('click', () => {
            const projectName = inputProjectName.value;

            if (!projectName) {
                console.log('need a title');
            } else {
                createProject.remove();
                getAddProject.style.display = 'block';
                //add new project
                projectStorage.saveProjects(projectName);
                addProject(projectName);
            }
        });

        const createCancel = document.createElement('button');
        createCancel.className = 'cancel';
        createCancel.innerText = 'Cancel';
        createCancel.addEventListener('click', () => {
            createProject.remove();
            getAddProject.style.display = 'block';
        });

        createProject.appendChild(inputProjectName);
        createProject.appendChild(createOk);
        createProject.appendChild(createCancel);

        projectBox.appendChild(createProject);

    }

    function addProject(name) {
        const projectBox = document.querySelector('.projects');
        const newProject = Project(name);
        const projectContainer = document.createElement('div');
        projectContainer.className = 'project-container';

        const h2 = document.createElement('h2');
        h2.innerText = newProject.getName();

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-project';
        deleteBtn.innerText = 'X';

        h2.appendChild(deleteBtn);
        projectContainer.appendChild(h2);
        projectBox.appendChild(projectContainer);

    }

    function cwosantLog() {
        return 'cwosant';
    }

    return {
        cwosantLog,
        startNewProject,
        addProject
    }
})();

export default Ui;