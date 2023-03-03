

const KEY = '32769599-757710318235c73590b6be352'
const BASE_URL = 'https://pixabay.com/api/'

export const getImages = (name, page) => {
    return fetch(`${BASE_URL}?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`).then(resp => {
        if (resp.ok) {
            return resp.json();
        }
        return Promise.reject(new Error(`Немає зображень ${name}`));

    })

}