FROM python:3-slim

WORKDIR /usr/src/backend

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
RUN flask db init && \
    flask db migrate && \
    flask db upgrade

EXPOSE 80

CMD flask run --host=0.0.0.0 --port=80