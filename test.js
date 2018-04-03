const print = async function() {
    await setTimeout(() => {
        console.log("A");
    }, 2000)
}

console.log("B");
print();
