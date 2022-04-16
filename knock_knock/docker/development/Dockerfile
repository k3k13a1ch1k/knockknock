FROM python:3.10.2-slim

ENV PYTHONBUFFERED=1

ARG CUID=1000

RUN apt-get update && apt-get install -y gcc libpq-dev && rm -rf /var/lib/apt/lists/* \
    && apt-get clean && pip install poetry==1.1.13

RUN groupadd --gid $CUID django && useradd --uid $CUID --gid django --shell /bin/bash --create-home django

WORKDIR /home/django/app

COPY ./pyproject.toml poetry.lock ./

RUN poetry config virtualenvs.create false && poetry install -n

COPY . .

USER django