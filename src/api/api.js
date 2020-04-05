export const API = {
    getData: () => {
        return JSON.parse(localStorage.getItem('plans'));
    },
    setPlan: plans => {
        return localStorage.setItem('plans', JSON.stringify(plans));
    }
}