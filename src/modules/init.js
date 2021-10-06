import Ui from './ui';

const Init = (() => {
    function loadHome() {
        addListeners();
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