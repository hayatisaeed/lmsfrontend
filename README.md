# 🎓 LMS Frontend

A Learning Management System (LMS) built with **Next.js 15** and **TypeScript**, featuring a modular architecture and optimized folder structure for different roles (student, Teacher, admin).

---

## 🛠 Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **UI Library:** Tailwind CSS
- **HTTP Client:** Axios
- **Data Fetching / Caching:** React Query
- **Forms:** React Hook Form
- **Authentication:** NextAuth.js
- **Notifications:** React Hot Toast

---

## 🚀 Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/hayatisaeed/lmsfrontend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd lmsfrontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure environment variables in `.env.local` (see `.env.example` for reference).

5. Run the development server:

   ```bash
   npm run dev
   ```

6. The project will be available at [http://localhost:3000](http://localhost:3000).

---

## ⚙️ Environment Variables

### Authentication

- `NEXTAUTH_URL`
  - `http://localhost:3000/` → for development
  - `https://your-production-domain.com/` → for production
- `NEXTAUTH_SECRET` → your NextAuth secret

### Google OAuth

- `GOOGLE_ID` → your Google client ID
- `GOOGLE_SECRET` → your Google client secret

### API Base URL

- `NEXT_PUBLIC_BASE_URL` → your API URL (e.g., `http://87.107.111.109:8000`)

---

## 📜 Scripts

- `dev` : Run the project in development mode
- `build` : Build the project for production
- `start` : Run the production build
- `lint` : Check code with ESLint

---

## 🖋 Coding Guidelines

- Use **TypeScript** for all files
- Follow naming conventions:
  - **camelCase** for variables and functions
  - **PascalCase** for components
- Styling must be done using **Tailwind CSS**

---

## 📂 Folder Structure

```plaintext
app/                        # Root pages of the project
├── not-found.tsx           # 404 error page
├── layout.tsx              # Main application layout (Header, Footer, Navbar)
├── icon.png                # Main project icon
└── routes/                 # Application routes
    ├── page.tsx            # Redirect to main routes
    ├── admin/              # Admin panel routes
    │   ├── page.tsx        # Admin main page
    │   └── layout.tsx      # Admin-specific layout
    │   ├── dashboard/
    │   │   └── page.tsx    # Admin dashboard
    │   ├── classes/
    │   │   └── page.tsx    # Class management
    │   ├── users/
    │   │   └── page.tsx    # User management
    │   ├── reports/
    │   │   └── page.tsx    # Reports
    │   └── create-class/
    │       └── page.tsx    # Create new class
    ├── login/
    │   └── page.tsx        # Login page
    ├── student/
    │   └── ...             # Student routes (Dashboard, Profile, etc.)
    ├── teacher/
    │   └── ...             # Teacher routes (Dashboard, Profile, etc.)
    └── api/
        └── auth/
            └── [...nextauth]/route.ts  # OAuth authentication route

assets/                     # Static assets (icons and images)
└── icons/
    ├── index.ts             # Export all icons for easy import
    ├── arrows/
    │   ├── AltArrow.tsx     # Alternative arrow icon
    │   └── ArrowLeft.tsx    # Left arrow icon
    ├── list/
    │   └── Sort.tsx         # Sort icon
    └── ...                  # Other icons

core/                       # Core: components, configs, styles
├── components/             # Base components (Header, Footer, Navbar)
│   ├── footer/
│   │   └── ...              # Footer-related files
│   ├── header/
│   │   └── ...              # Header-related files
│   ├── navbar/
│   │   └── ...              # Navbar-related files
│   ├── index.ts             # Export all components
│   └── Label.tsx            # Label component for forms/text
├── config/
│   └── api.ts               # Axios configuration & API base URL
├── constant/                # Project constants
│   ├── label.ts             # Labels and names
│   ├── sideBarAdmin.ts      # Admin sidebar menu
│   ├── sideBarStudent.ts    # Student sidebar menu
│   └── sideBarTeacher.ts   # Teacher sidebar menu
├── context/
│   └── Goftino.tsx          # Context for global state management
├── stores/
│   └── TanstackQuery.ts     # React Query store and config
├── styles/                  # Main style files
│   ├── font.css             # Fonts
│   ├── theme.css            # Theme (colors, variables)
│   ├── globals.css          # Global styles
│   └── components.css       # Component styles
└── types/                   # Base types

public/                      # Public resources
├── images/                  # Images
└── fonts/                   # Fonts

shared/                      # Shared components & utilities
├── components/              # Components shared across pages
├── constant/                # Shared constants/data
├── hooks/                   # Shared hooks
├── ui/                      # Shared UI elements
└── utils/                   # Utility functions

services/                    # API and React Query management
└── tanstack/
    ├── student/
    │   ├── profile/
    │   │   ├── api.ts       # Profile-specific API functions
    │   │   ├── key.ts       # React Query keys
    │   │   ├── types.ts     # API types
    │   │   ├── mutation.ts  # useMutation hooks
    │   │   └── queries.ts   # useQuery hooks
    │   ├── dashboard/
    │   │   └── ...          # Other student routes
    │   └── ...
    ├── admin/
    │   └── ...
    ├── login/
    │   └── ...
    └── teacher/
        └── ...

features/                    # Feature modules for each role
├── student/
│   ├── profile/
│   │   ├── components/      # Profile-specific components
│   │   ├── modal/           # Profile modals
│   │   ├── hooks/           # Profile-specific hooks
│   │   ├── type/            # Profile-specific types
│   │   ├── constant/        # Profile constants & labels
│   │   └── ...              # Other files
│   ├── dashboard/
│   └── ...
├── admin/
├── login/
└── teacher/

types/                       # Shared types across the project
└── ...
```

---

## 🤝 Contribution

1. Create a new branch from `develop`
2. Make your changes
3. Run `npm run lint` to check code quality
4. Submit a Pull Request

---

## 👤 Author

- **Name:** Amirhosien Shokri
- **Role:** Frontend Developer
- **Email:** amirhosien.shokrii
- **Phone:** 09184397973

---

## 📄 License

MIT License © 2025
