from python:3.9.16
RUN apt-get update && apt-get install -y postgresql postgresql-contrib libpq-dev python3-dev
RUN pip3 install --upgrade pip
COPY ./todo_prj/ ./
RUN pip3 install -r requirements.txt
