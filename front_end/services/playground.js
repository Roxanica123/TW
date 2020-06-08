function play() {
    return new Promise((resolve, reject) => {
        let cv = new XMLHttpRequest();

        cv.onload = () => {

            resolve({
                data: cv.response,
                code: cv.status,
                error: false
            });

        }

        cv.open("GET", "http://localhost:5000/accidents/details");
        cv.send();
    });
}



async function result() {
    const cv = await play();

    console.log(cv);
}

result()