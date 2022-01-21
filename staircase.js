// This function will create a right-leaning staircase 'n' tall and wide.

function staircase(n) {

    // row 1 = n - 1 spaces, 1 pound
    // row 2 = n - 2 spaces, 2 pound

    for (let rows = 1; rows <= n; rows++) {
        console.log(' '.repeat((n - rows)) + '#'.repeat(rows));
    }
}

staircase(4);
