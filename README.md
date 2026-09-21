# Expense-Tracker# Ledger — Expense Tracker

A full-stack personal expense tracker built with React and Supabase. Live budgets, recurring expenses, CSV export, and complete account authentication — all with per-user data privacy.

**[Live demo →](https://expense-tracker-project-three-chi.vercel.app)**

## Features

- 📊 Add, edit, delete, search, filter, and sort expenses
- 💰 Monthly budget limits per category with over-budget warnings
- 🔁 Recurring expenses that auto-renew each month
- 📈 "By category" spending breakdown with click-to-filter
- ⬇️ Export any filtered view to CSV
- 🌙 Dark mode
- 🔐 Full authentication: signup, login, forgot password, change password
- 🗑️ Account deletion with a 15-day recovery window, and automatic permanent deletion after that (via a scheduled Supabase Edge Function)
- 🔒 Per-user data isolation enforced with Row Level Security — nobody can ever see another user's data
- 📱 Responsive layout for desktop, tablet, and mobile

## Tech stack

- **Frontend:** React + Vite
- **Backend/Database:** Supabase (Postgres, Auth, Edge Functions, scheduled jobs)
- **Hosting:** Vercel
