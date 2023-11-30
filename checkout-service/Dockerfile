FROM python:3.12.0-slim-bookworm

# Create a user called "flasky"
RUN useradd -ms /bin/bash flasky

# Set the working directory
WORKDIR /app

# Copy the application files to the container
COPY . /app

# Change the ownership of the application files to the "flasky" user
RUN chown -R flasky:flasky /app

# Switch to the "flasky" user
USER flasky

# Install the required dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Run server.py using gunicorn
CMD ["gunicorn", "server:app"]