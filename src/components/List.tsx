interface Props<T> {
    data: T[],
    renderItem: (item: T) => JSX.Element,
    renderError: () => JSX.Element | '',
    renderLoading: () => JSX.Element[] | JSX.Element | false,
}

const List = <T,>({ data, renderItem, renderError, renderLoading }: Props<T>) => {
    console.info('========renderLoading',renderLoading);
    return <>
        {renderLoading && renderLoading()}
        {renderError && renderError()}
        {data?.length > 0 && data?.map((item: T) => renderItem(item))}
    </>
}

export default List