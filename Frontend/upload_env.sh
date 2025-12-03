
#!/bin/bash

TARGET="production"   # or preview / development
BRANCH=""             # leave empty

while IFS='=' read -r key value || [ -n "$key" ]; do
  if [[ "$key" =~ ^[A-Za-z_][A-Za-z0-9_]*$ ]]; then
    printf "%s" "$value" | vercel env add "$key" "$TARGET" "$BRANCH"
  fi
done < .env
