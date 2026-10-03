#!/usr/bin/env bash
# ==========================================================================
# Automated VPS Deployment Script for theguptas.shonku.site
# ==========================================================================

set -e

echo "🚀 Starting deployment for The Gupta's..."

# 1. Pull latest code from GitHub
if [ -d ".git" ]; then
    echo "📥 Pulling latest code from GitHub main branch..."
    git pull origin main
fi

# 2. Build and start Docker container
echo "🐳 Building and starting Docker container..."
docker compose down || true
docker compose up -d --build

# 3. Verify Health Check
echo "⏳ Verifying container health..."
sleep 3
PORT_TO_USE="${PORT:-8086}"
if docker ps | grep -q theguptas-web; then
    echo "✅ Container is running on port ${PORT_TO_USE}!"
    echo "🌐 Test locally on VPS: curl http://127.0.0.1:${PORT_TO_USE}/health"
else
    echo "❌ Container failed to start. Check logs: docker logs theguptas-web"
    exit 1
fi

echo "🎉 Deployment successful!"
