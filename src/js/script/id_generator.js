export const id_random = () => {
    const ids = [];
    const characters = 'abcdefghi0123456789';
    for (let i = 0; i < characters.length; i++) {
        const random = Math.floor(Math.random() * characters.length);
        ids.push(characters[random]);
    };
    return ids.join('');
};