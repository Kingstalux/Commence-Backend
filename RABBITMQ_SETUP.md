# RabbitMQ Setup with Docker Compose

## Quick Start

1. **Start RabbitMQ:**

   ```bash
   docker compose up -d
   ```

2. **Stop RabbitMQ:**

   ```bash
   docker compose down
   ```

3. **View logs:**
   ```bash
   docker compose logs -f rabbitmq
   ```

## Configuration

### Connection Details

- **Host:** `localhost` (or `rabbitmq` if running microservices in Docker)
- **Port:** `5672` (AMQP)
- **Management UI:** `http://localhost:15672`
- **Username:** `guest` (default)
- **Password:** `guest` (default)
- **Virtual Host:** `/`

### Environment Variables for Microservices

Your microservices can connect directly without authentication:

```env
RABBITMQ_HOST=localhost
RABBITMQ_PORT=5672
```

## Usage

### Management UI

- Access the RabbitMQ management interface at: `http://localhost:15672`
- Login with: `guest` / `guest` (default credentials)
- Monitor queues, exchanges, and connections

### Health Check

The container includes a health check that will restart if RabbitMQ becomes unresponsive.

### Data Persistence

- RabbitMQ data is persisted in Docker volumes
- Data survives container restarts
- Volumes: `rabbitmq_data` and `rabbitmq_logs`

## Troubleshooting

### Port Already in Use

If port 5672 is already in use:

```bash
# Check what's using the port
netstat -ano | findstr :5672

# Kill the process
taskkill /PID <PID> /F
```

### Container Won't Start

```bash
# Check container logs
docker compose logs rabbitmq

# Check container status
docker compose ps
```

### Connection Issues

- Ensure the container is running: `docker compose ps`
- Check if ports are exposed: `docker port commence-rabbitmq`
- Verify firewall settings
