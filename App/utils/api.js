import db from './db';
var api = {

    getQuestions(data) {

        // When debugging on android use 10.0.3.2 instead of localhost

        var url = `http://localhost:3000/api/${data}`;
        return Promise.resolve(db);
        //return fetch(url).then((res) => res.json());
    },

    getImagesUri(data) {
        return `http://dev.tecnocrazia.com/dohu/`;
        //return `http://localhost:3000/images/${data}/`;
    }

};

module.exports = api;
