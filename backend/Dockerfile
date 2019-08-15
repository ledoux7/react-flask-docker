#FROM python:3-onbuild
#COPY . /usr/src/app
#CMD ["python", "app.py"]


FROM ubuntu:latest
#FROM alpine:3.7
RUN apt update && apt install -y python3
#RUN apt-get install python-pip
#RUN pip install --upgrade pip
RUN apt-get update -y
RUN apt-get install -y python3-pip python3-dev build-essential && pip3 install --upgrade pip


RUN mkdir /app
RUN mkdir /app/static

COPY . /app
#COPY ./static /app/static/

WORKDIR /app

RUN pip3 install -r requirements.txt


ENTRYPOINT ["python3"]

#EXPOSE 5000

CMD ["app.py"]