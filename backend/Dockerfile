FROM python:3.12-alpine

RUN pip install pipenv

RUN mkdir /app
COPY ./ /app/
WORKDIR /app

RUN pipenv install

ENTRYPOINT [ "pipenv", "run", "./server.py" ]