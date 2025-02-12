import { Controller, HttpRequest, HttpResponse } from "./posts-protocols"

export class PostController implements Controller{
    constructor () {}

    async handler (httpRequest: HttpRequest): Promise<HttpResponse> {
        return new Promise((resolve, reject) => {
            
        })
    }
}