# Dev Environment
FROM node:16-alpine AS development

ENV APP_PORT 3333

# Container Dir
WORKDIR /var/www/backend

# Copy package.json (to install all packages)
COPY package.json ./

# Install the packages (on the package.json)
RUN yarn

# Copy all files
COPY ./ .

# Expose port
EXPOSE ${APP_PORT}

# Run in dev mode
CMD ["yarn", "start:dev"]