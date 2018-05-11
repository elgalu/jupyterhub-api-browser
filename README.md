[![Datalayer](http://datalayer.io/enterprise/img/logo-datalayer-horizontal.png)](http://datalayer.io)

The `JupyterHub API Browser` is a service you deploy in your JupyterHub which allows you to browse the HUB API methods.

![API Browser](https://raw.githubusercontent.com/datalayer/jupyterhub-api-browser/master/doc/img/api-browser.png "API Browser")

To run the Browser from source:

```bash
git clone https://github.com/datalayer/juptyerhub-api-browser
cd juptyerhub-api-browser
yarn install
yarn build
jupyterhub &
open http://localhost:8000/services/api-browser/ # Don't forget the trailing slash...
```

For front-end iterative development:

```bash
yarn watch
```
