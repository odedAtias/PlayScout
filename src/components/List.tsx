interface Props<T> {
    data: T[],
    renderItem: (item: T) => JSX.Element,
    renderError: () => JSX.Element | '',
    renderLoading: () => JSX.Element | false,
}

const List = <T,>({ data, renderItem, renderError, renderLoading }: Props<T>) => {

    if (renderLoading && data.length === 0) {
        return renderLoading()
    }

    else if (renderError && data.length === 0) {
        return renderError();
    }

    return (
        data?.map((item: T) => {
            return renderItem(item);
        })
    )
}

export default List