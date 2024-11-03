
export const setToLocalStorage = (key, Data) => {
    if (typeof window !== 'undefined') {
      let localStorageValue = btoa(Data);
      localStorage.setItem(key, localStorageValue);
    }
  };
  
  export const getFromLocalStorage = (key) => {
    if (typeof window !== 'undefined') {
      let getLocalStorageValue = "";
      let v = localStorage.getItem(key);
      if (!v) {
        v = "";
      }
      getLocalStorageValue = atob(v);
      return getLocalStorageValue;
    }
  };
  
  export const removeFromLocalStorage = (key) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  };
  
  