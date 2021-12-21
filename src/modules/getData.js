const getData = (str) => {
    return fetch(`https://test191221-c7122-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}`: ''}`)
    .then((response) => {
        return response.json();
    });
};

export default getData;
