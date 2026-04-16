// converting promise-based code to Async/Await

//promise- based version
function fetchData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}

fetchData()
.catch((error) => {
    console.log(error);
});

//async/Await version
function fetchData() {
    return new promise((resolve,reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000);
    });
}
async function getData() {
    const result = await
    fetchData();
    console.log(result);
}
getData();

//Error Handling with try/catch
//promise version
fetchData()
.then((result)
console.log(result))
.catch((error) =>
    console.log("Error:", error));
//async/await version with try/catch
async function getData() {
    try {
        const result = aeait fetchData();
        console.log(result);
    } catch (error ) {
        console.log("Error:", error);
    }
}
getData();

//Sequential and Parallel  Execution
//seqeuncial (one after another)
async function seqeuntial() {
    const a = await fetchData();
    console.log("A:", a);

    const b = await fetchData();
}

seqeuntial();

//Parallel (run at the same time)
async function parallel() {
    const promise1 = fetchData();
    const promise2 = fetchData();

    const a = await promise1;
    const b = await promise2;

    console.log("A:", a);
    console.log("B:",);
}
parallel
