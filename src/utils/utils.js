export const getPath = (items, name) => {
   const params = new URLSearchParams();
   items.forEach(item => params.append(Object.keys(item)[0], item[Object.keys(item)[0]]));
   window.location.hash = `?${params.toString()}`;
}

export const findIndexInArray = (originalArray, key) => {
    return originalArray.findIndex((item) => {
         return  Object.keys(item)[0] === key;
    });
};

export const api_key = "1b2ca78e9028d3ac192f075fc84de4c5"