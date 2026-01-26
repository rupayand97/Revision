export const loadFormStorage = (key, fallback) =>{
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
};

export const saveToStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};
