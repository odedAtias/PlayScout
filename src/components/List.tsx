interface Props<T> {
    data: T[],
    renderItem: (item: T) => JSX.Element | false,
}

const List = <T,>({ data, renderItem }: Props<T>) => {
    return data?.length > 0 && data?.map((item: T) => renderItem(item))
}

export default List;