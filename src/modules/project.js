import uniqid from 'uniqid';

//class for projects and their tasks
const Project = (name) => {
    let _name = name;
    let _tasks = [];
    let _Id = uniqid();

    function getName() {
        return _name;
    }

    function setName(newName) {
        _name = newName;
    }

    function getTasks() {
        return _tasks
    }

    function getId() {
        return _Id;
    }

    return {
        getName,
        setName,
        getId,
        getTasks
    };
}

export default Project;