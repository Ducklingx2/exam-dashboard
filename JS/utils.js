function generateId() {

    return Date.now();

}

function getTeacherById(id) {

    return teachers.find(teacher => teacher.id === id);

}

function getTaskById(id) {

    return tasks.find(task => task.id === id);

}

function countTasks(status) {

    return tasks.filter(task => task.status === status).length;

}

function formatDate(date) {

    return new Date(date).toLocaleDateString();

}

function today() {

    return new Date().toISOString().split("T")[0];

}

function isOverdue(task) {

    if (task.status === "Completed")
        return false;

    return task.deadline < today();

}
