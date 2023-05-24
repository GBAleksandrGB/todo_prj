from python:3.9.16
RUN apt-get update && apt-get install -y postgresql postgresql-contrib libpq-dev python3-dev
RUN pip3 install --upgrade pip
COPY ./users/ ./users/
COPY ./projects/ ./projects/
COPY ./todo_prj/ ./todo_prj/
COPY ./manage.py ./
COPY ./requirements.txt ./
COPY ./Dockerfile ./
RUN pip3 install -r requirements.txt
