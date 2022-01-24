console.log('This is my Site');
async function getUsers() {
    let url = 'https://data.covid19india.org/data.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
