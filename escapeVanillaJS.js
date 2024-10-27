document.addEventListener("DOMContentLoaded", () => {

    // Room 1: Fetching the most recent book
    document.getElementById("solveRoom1").addEventListener("click", () => {
        fetch('books.json') 
            .then(response => response.json())
            .then(books => {
                const mostRecentBook = findMostRecentBook(books);
                document.getElementById("room1Result").textContent = `The key to the next room is: ${mostRecentBook.title}`;
            });
    });

    // Room 2: Finding the intersection of JavaScript and React concepts
    document.getElementById("solveRoom2").addEventListener("click", () => {
        const jsConcepts = new Set(['closure', 'scope', 'hoisting', 'async']);
        const reactConcepts = new Set(['components', 'jsx', 'hooks', 'async']);
        const commonConcepts = findIntersection(jsConcepts, reactConcepts);
        document.getElementById("room2Result").textContent = `The code to unlock the door is: ${Array.from(commonConcepts).join(', ')}`;
    });

    // Room 3: Navigating the asynchronous labyrinth
    document.getElementById("solveRoom3").addEventListener("click", () => {
        fetch('directions.json') 
            .then(response => response.json())
            .then(directions => {
                navigateLabyrinth(directions)
                    .then(message => {
                        document.getElementById("room3Result").innerHTML = message;
                    });
            });
    });
});

// Room 1 logic: Find the most recent book
function findMostRecentBook(books) {
    return books.reduce((mostRecent, book) => 
        new Date(book.published) > new Date(mostRecent.published) ? book : mostRecent
    );
}

// Room 2 logic: Find the intersection of two sets
function findIntersection(setA, setB) {
    return new Set([...setA].filter(item => setB.has(item)));
}

// Room 3 logic: Navigate the labyrinth asynchronously
async function navigateLabyrinth(directions) {
    for (let direction of directions) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`Navigating: ${direction.step}`);
    }
    return "Congratulations! You've mastered the essentials of Vanilla JavaScript. Welcome to the world of React, where you'll build powerful and dynamic web applications. Let's dive in!";
}
