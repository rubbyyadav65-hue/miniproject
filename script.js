function calculateScore() {

    let tasks = document.querySelectorAll(".eco-task");

    let completed = 0;

    tasks.forEach(function(task) {

        if (task.checked) {
            completed++;
        }

    });

    let total = tasks.length;

    let percentage = (completed / total) * 100;

    let result = document.getElementById("result");

    if (completed === 0) {

        result.innerHTML =
            "🌱 Start your green journey today!";

    } 
    else if (percentage < 50) {

        result.innerHTML =
            "🌿 Good start! You completed " +
            percentage + "% of the challenge.";

    } 
    else if (percentage < 100) {

        result.innerHTML =
            "🌳 Great job! You are " +
            percentage + "% eco-friendly!";

    } 
    else {

        result.innerHTML =
            "🏆 Amazing! You completed the entire Green Challenge!";

    }
}
function showMessage(message) {
    alert(message);
}