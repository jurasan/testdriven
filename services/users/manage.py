# services/users/manage.py
import os

from flask.cli import FlaskGroup

from project import app


cli = FlaskGroup(app)


if __name__ == '__main__':
    # os.environ['FLASK_APP'] = 'project/__init__.py'
    # os.environ['FLASK_ENV'] = 'development'
    cli()
