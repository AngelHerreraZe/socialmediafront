import {create} from 'zustand'

let status = false;
const token = localStorage.getItem("clonstagram-token")
if (token) {
    status = true;
} else {
    status = false
}

const useStore = create((set) => ({
    showNavBar: status,
    changeNavBarStatus: () => set((state) => ({ showNavBar: !state.showNavBar})),
    updateNavBarStatus: (newStatus) => set({showNavBar: newStatus})
}))

export default useStore;