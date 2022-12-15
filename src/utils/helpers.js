export const createSlug = (str) => {
    return `/${str.trim().replaceAll(" ", "-").toLowerCase()}`;
}