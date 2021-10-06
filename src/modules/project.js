//class for projects and their tasks
const Project = (name) => {
    let _name = name;
    let _tasks = [];
    let _position;

    function getName() {
        return _name;
    }

    function setName(newName) {
        _name = newName;
    }

    function getTasks() {
        return _tasks
    }

    function setPosition(index) {
        _position = index;
    }

    function getPosition() {
        return _position;
    }

    return {
        getName,
        setName,
        getPosition,
        setPosition,
        getTasks
    };
}

export default Project;