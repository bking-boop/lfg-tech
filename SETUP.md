# LFG Technology Consultants — Setup Guide

## Prerequisites
- Node.js 18+ (https://nodejs.org)
- A QuickBooks Online developer account (https://developer.intuit.com) — for live billing

## 1. Install & Run Locally

```bash
cd lfg-tech

# Copy environment file and fill in your values
cp .env.example .env.local

# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:3000
```

## 2. Environment Variables (.env.local)

| Variable | Description |
|---|---|
| `NEXTAUTH_URL` | Your domain (e.g. https://lfgtech.com) |
| `NEXTAUTH_SECRET` | Random string — run `openssl rand -base64 32` |
| `QBO_CLIENT_ID` | From Intuit developer portal |
| `QBO_CLIENT_SECRET` | From Intuit developer portal |
| `QBO_ENVIRONMENT` | `sandbox` for testing, `production` for live |

## 3. Client Portal — Demo Login
- Email: `demo@lfgtech.com`
- Password: `demo1234`

To add real clients, edit `lib/auth.ts` and replace `DEMO_USERS` with a database query.
Generate hashed passwords with:
```js
const bcrypt = require('bcryptjs');
console.log(bcrypt.hashSync('yourpassword', 10));
```

## 4. QuickBooks Online Setup

1. Go to https://developer.intuit.com → Create App → QuickBooks Online + Payments
2. Set redirect URI to: `https://yourdomain.com/api/qbo/callback`
3. Copy Client ID and Secret into `.env.local`
4. In the Client Portal dashboard, click **Connect QBO**
5. Authorize the app in QBO
6. Live invoices and balances will now pull from your QBO account

## 5. Deploy to Vercel

```bash
npm install -g vercel
vercel

# Set environment variables in Vercel dashboard:
# → Settings → Environment Variables
```

Or connect your GitHub repo to Vercel for automatic deploys.

## 6. Add Real Clients to the Portal

For production, replace the in-memory user store in `lib/auth.ts` with a database.
Recommended: Prisma + PostgreSQL (Vercel Postgres or Supabase).

```bash
npm install prisma @prisma/client
npx prisma init
```

## 7. Customization Checklist

- [ ] Replace placeholder phone/email/address in `components/Footer.tsx`
- [ ] Update Google Maps embed or address
- [ ] Add real testimonials in `components/Testimonials.tsx`
- [ ] Add team photos/bios in `app/about/page.tsx`
- [ ] Wire contact form to email (Resend, SendGrid, or Formspree)
- [ ] Set up a real database for client users
- [ ] Add your QBO credentials
- [ ] Set `NEXTAUTH_SECRET` to a real random value
