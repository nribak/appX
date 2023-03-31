export interface RequestWrapper {
    query?: any,
    params?: any,
    headers?: any,
    body?: any,
    payload?: any
}

export interface ResponseWrapper {
    statusCode: number,
    json: any,
    headers?: any
}

export type Controller = (req: RequestWrapper) => Promise<ResponseWrapper>
