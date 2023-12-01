FROM python:3.12.0-slim-bookworm

ENV MIDDLEWARE_CONFIG_FILE=./middleware.ini

# Create a user called "flasky"
RUN useradd -ms /bin/bash flasky

# Set the working directory
WORKDIR /app

# Copy the application files to the container
COPY . /app

# Install these for ARM
RUN apt update && apt upgrade -y
RUN apt-get install gcc python3-dev -y

# Install the required dependencies
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install middleware-apm

# Change the ownership of the application files to the "flasky" user
RUN chown -R flasky:flasky /app

# Switch to the "flasky" user
USER flasky

# Run server.py using gunicorn
CMD ["middleware-apm", "run", "gunicorn", "-b", "0.0.0.0:5000", "server:app"]