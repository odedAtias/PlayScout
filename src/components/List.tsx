interface Props<T> {
    data: T[],
    renderItem: (item: T) => JSX.Element | false,
    renderError?: () => JSX.Element | null,
    renderLoading?: () => JSX.Element[] | JSX.Element | false,
}

const List = <T,>({ data, renderItem, renderError, renderLoading }: Props<T>) => {


return <>
        {renderLoading && renderLoading()}
        {renderError && renderError()}
        {data?.length > 0 && data?.map((item: T) => renderItem(item))}
    </>
}

export default List;