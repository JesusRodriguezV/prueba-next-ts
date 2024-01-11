export type Handler = (req: Request) => Promise<Request>

export type Pipe = (req: Request, ...funcs: Handler[]) => Promise<Request>

export type ApiHandler<T> = (req: Request) => Promise<T>
