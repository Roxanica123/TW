export class Request {
    httpMethod;
    url;
    body;
    xmlRequest;
    constructor(httpMethod, url, body) {
        this.httpMethod = httpMethod;
        this.body = body;
        this.url = url;
        this.xmlRequest = new XMLHttpRequest();
    }
    setHeaders(name, value) {
        this.xmlRequest.setRequestHeader(name, value);
    }
    exec() {
        return new Promise((resolve, reject) => {
            this.xmlRequest.onload = () => {
                resolve({
                    data: this.xmlRequest.response,
                    code: this.xmlRequest.status,
                    error: false
                });

            }
            this.xmlRequest.open(this.httpMethod, this.url);
            this.xmlRequest.send(this.body);
        });
    }
    async getData() {
        const result = await this.exec();
        return JSON.parse(result.data);
    }
}
