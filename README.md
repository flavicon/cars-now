## Cars now web site

<img src="public/apresentation.gif" alt="apresentation" />

### How can i use this project? 

1. git clone https://github.com/flavicon/cars-now.git
2. cd cars-now/ && yarn 
3. yarn start

the project will open in http://localhost:3000

<hr />

#### To test this project 

1. cd cars-now/ 
2. npm run cypress:open

```js
var teste = "teste"
```

# User story:

It will be necessary to add the deployment configurations to the project with the environment files, the Nginx configuration and the Dockerfile. 
We already have some example files that we can use to help with the configuration;


# Business rules:

Add the settings as shown in the examples.

- [ ] Add `.env.client-template.json` file to project root.
```json
{
    "MODEL_API_URL"    : "http://localhost:8070",
    "ACCOUNTS_API_URL" : "http://localhost:8071",
    "UPLOADS_API_URL"  : "http://localhost:8072"
}
```
- [ ] Add `env-config.js` file to project root.
```js
window._env_ = {"MODEL_API_URL":"URL_MODEL","ACCOUNTS_API_URL":"URL_ACCOUNTS","UPLOADS_API_URL":"URL_UPLOADS"};
```
- [ ] Add `create-env.js` file to `/deploy/script` directory.
- [ ] Add `nginx.conf` file to `/deploy/nginx` directory.
```
server {
    listen       80;
    server_name  localhost;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files $uri /index.html;                 
    }

    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```
- [ ] Add `Dockerfile` file to project root.
```
# Stage 1
FROM node:14 as mytiboo-build
WORKDIR /shared
COPY . ./
RUN npm install
RUN npm run build


# Stage 2
FROM nginx:latest
WORKDIR /app
COPY ./deploy/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=mytiboo-build /shared/build /usr/share/nginx/html
COPY ./.env.client-template.json ./
COPY ./deploy/script/create-env.js ./
RUN chmod +x create-env.js
RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get update
RUN apt-get install -y nodejs
RUN node -v
CMD node create-env.js -d=./.env.client-template.json -j -e -o=/usr/share/nginx/html/env-config.js && nginx -g 'daemon off;'
```
- [ ] Add the script to `index.html`:
```
<script src="%PUBLIC_URL%/env-config.js"></script>
```
- [ ] Add `/public/env-config.js` to the `.gitignore` file.
- [ ] Add config provider to return env URL.
