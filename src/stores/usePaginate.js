import { create } from "zustand";

const usePaginate = create((set) => {
    return {
        page: 1,
        setPaginate: (newPage) => {
            set({page: newPage})
        }
    }
});

export default usePaginate;