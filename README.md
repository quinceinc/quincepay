QuincePay — Supreme FinTech Starter

Institutional-Grade FinTech Infrastructure built with Next.js, Supabase, and Stripe Connect.

QuincePay is a modern financial platform starter designed to help developers launch wallet-style fintech applications quickly and securely. The system integrates authentication, database infrastructure, bank linking, and payouts into a single production-ready stack.

The platform follows a non-custodial architecture, meaning funds move directly between payment rails and user bank accounts through Stripe. This approach reduces regulatory complexity while maintaining strong security and transparency.

---

One-Click Deployment

Deploy QuincePay instantly using Vercel.

""Deploy on Vercel" (https://vercel.com/button)" (https://vercel.com/new?repo=https://github.com/Quinceinc/quincepay)

Once deployed, simply add your environment variables and the application will be live.

---

Key Features

• Supabase Authentication (secure user login and session handling)
• Stripe Financial Connections for bank account linking
• Stripe Connect payouts directly to user bank accounts
• Real-time balance and transaction tracking
• Clean developer dashboard interface
• Fully serverless deployment with Vercel
• Production-ready architecture designed for fintech platforms

---

Technology Stack

Frontend
Next.js + React

Backend
Next.js API Routes

Database & Auth
Supabase

Payments
Stripe Connect + Financial Connections

Deployment
Vercel Serverless Platform

---

Project Architecture

QuincePay is designed around a modern full-stack architecture:

User Interface → Next.js Dashboard
Authentication → Supabase Auth
Database → Supabase PostgreSQL
Payment Routing → Stripe Connect
Bank Linking → Stripe Financial Connections
Hosting → Vercel

This architecture enables rapid development while maintaining strong scalability and security.

---

Getting Started

1. Clone the repository

git clone https://github.com/Quinceinc/quincepay.git

2. Install dependencies

npm install

3. Add environment variables

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=

4. Run the development server

npm run dev

---

Deployment

The recommended deployment method is Vercel.

1. Click the Deploy button above
2. Connect your GitHub account
3. Add environment variables
4. Deploy instantly

Your QuincePay platform will be live in minutes.

---

License

MIT License

---

About

QuincePay provides a clean foundation for building financial dashboards, creator payout platforms, payment routing systems, and modern fintech applications.

Designed for scalability, clarity, and rapid deployment.
