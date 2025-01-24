# Użycie obrazu bazowego z Pythonem
FROM rockylinux:9

# Ustawienia środowiska
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Instalacja zależności systemowych
WORKDIR /app/backend

RUN dnf install -y gcc libpq-devel python3 python3-pip
RUN pip install --upgrade pip

COPY backend/ /app/backend/
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000
# Uruchomienie serwera Django
#CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
