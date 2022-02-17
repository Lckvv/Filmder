export const TYPE_FILMS = 'films';

export const actionSetFilms = (id: string, isLike: boolean) => ({
    type: TYPE_FILMS,
    payload: {id, isLike}
});