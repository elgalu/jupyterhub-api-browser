# --- Common ---
c.JupyterHub.cookie_secret = bytes.fromhex('c336ff8bc0f477928cfc73454821ee11182e90a49de57f81e0919e66851349c6')
c.ConfigurableHTTPProxy.auth_token = '0bc02bede919e99a26de1e2a7a5aadfaf6228de836ec39a05a6c6942831d8fe5'

# --- Users ---
c.Authenticator.whitelist = set()
c.Authenticator.admin_users = {'datalayer'}

# --- Spawner ---
c.JupyterHub.spawner_class='sudospawner.SudoSpawner'
c.SudoSpawner.default_url = '/lab'

# --- Services ---
import sys
c.JupyterHub.services = [
    {
        'name': 'api-browser',
        'url': 'http://localhost:10000',
        'admin': True,
        'command': [sys.executable, './jupyterhub-api-browser.py'],
    },
]
