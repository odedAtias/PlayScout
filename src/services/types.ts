export interface HttpService<T> {
    getAll(): { request: Promise<{ data: T[] }>; controller: AbortController };
}