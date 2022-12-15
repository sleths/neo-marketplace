export const createSlug = (prefix, str) => {
    return `/${prefix}/${str.trim().replaceAll(" ", "-").toLowerCase()}`;
}