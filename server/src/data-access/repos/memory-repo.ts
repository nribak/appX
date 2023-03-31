import DBAccess from "../db-access";

export default function makeMemoryRepo<E>(): () => DBAccess<E> {
    const repo: {[id: string]: E} = {};
    // type Keys = keyof E;
    return () => ({
        insert: async (id: string, item) => {
            repo[id] = item;
            return true;
        },
        getAll: async () => Object.values(repo)
    })
}
