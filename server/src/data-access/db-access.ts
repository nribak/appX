export default interface DBAccess<E> {
    insert: (id: string, item: E) => Promise<boolean>,
    getAll: () => Promise<E[]>
}
