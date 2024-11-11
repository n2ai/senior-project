# --- Frontend ---
# Step 1: Use a Node image to build the frontend
FROM node:18 AS frontend-build

# Step 1.5: Install TypeScript and Git (necessary for build process)
RUN npm install -g typescript git

# Step 2: Set the working directory for the frontend and copy frontend package files
WORKDIR /app/project-FE
COPY project-FE/package*.json ./
RUN npm install

# Step 3: Copy the frontend source files and build the app
COPY project-FE/ ./
RUN npm run build

# --- Backend ---
# Step 4: Use a fresh Node image to set up the backend
FROM node:18 AS backend

# Step 5: Set the working directory for the backend and copy backend package files
WORKDIR /app/project-BE
COPY project-BE/package*.json ./
RUN npm install

# Step 6: Copy the built frontend files into the backend’s public directory
COPY --from=frontend-build /app/project-FE/dist /app/project-BE/public

# Step 7: Copy backend source files
COPY project-BE/ ./

# Step 8: Copy frontend files from frontend-build into the backend container for serving
COPY --from=frontend-build /app/project-FE /app/project-FE

# Step 9: Expose the backend server port (3000) and frontend port (5173)
EXPOSE 3000
EXPOSE 5173

# Step 10: Use concurrently to run both the backend and frontend servers
CMD ["npx", "concurrently", "\"npm start --prefix /app/project-BE\"", "\"npm run dev --prefix /app/project-FE -- --host 0.0.0.0\""]
