const getQueryString = (queryObj) => {
    let query = '';
    for (const key in queryObj) {
        const concatenationSymbol = query.length > 0 ? '&' : '';
        query += `${concatenationSymbol}${key}=${queryObj[key]}`
    }

    return query
}

const testObj = {
    search: 'apple',
    take: 10
}

console.log(getQueryString(testObj));