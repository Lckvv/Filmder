export const TYPE_FILMS = 'films';

export const actionSetFilms = (id: string, imageUrl: string, title: string, summary: string, rating: string, isLike: boolean) => ({
    type: TYPE_FILMS,
    payload: {id, imageUrl, title, summary, rating, isLike}
});