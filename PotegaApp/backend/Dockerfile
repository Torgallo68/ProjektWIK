FROM rockylinux:9

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app/backend

RUN dnf install -y gcc libpq-devel python3 python3-pip
RUN pip install --upgrade pip

COPY backend/ /app/backend/
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

