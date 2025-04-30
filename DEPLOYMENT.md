# MediDrop Deployment Guide

## 1. Backend Deployment (Node.js)

### Option A: Heroku
1. Create Heroku account
2. Install Heroku CLI
3. Run:
   ```bash
   heroku create
   git push heroku main
   heroku addons:create mongolab
   ```

### Option B: Railway
1. Create Railway account
2. Connect GitHub repository
3. Configure environment variables from .env

## 2. Database Setup (MongoDB Atlas)
1. Create free cluster at mongodb.com/atlas
2. Whitelist IP addresses
3. Create database user
4. Update MONGODB_URI in production .env

## 3. Frontend Deployment

### Option A: Netlify
1. Drag and drop MediDropHTML folder
2. Set build command: `npm run build` (if applicable)
3. Set publish directory: `MediDropHTML`

### Option B: Vercel
1. Import Git repository
2. Set framework to Static Site
3. Deploy

## 4. Post-Deployment
1. Update admin credentials
2. Configure custom domain
3. Set up SSL certificates
4. Monitor with logging service
