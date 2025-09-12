@@ .. @@
 # Siena Home - Waterproof PVC Bathroom Furniture

-A modern, multilingual React application for a family-owned bathroom furniture factory specializing in waterproof PVC products.
+A modern, multilingual React application with Supabase backend for a family-owned bathroom furniture factory specializing in waterproof PVC products.

 ## Features

-- **Multilingual Support**: Macedonian and English with dynamic language switching
-- **Product Catalog**: Complete product management with filtering and search
-- **Admin Panel**: Content management system for real-time editing
-- **E-commerce Features**: Shopping cart, favorites, and user accounts
-- **Responsive Design**: Mobile-first approach with Tailwind CSS
-- **Modern UI**: Smooth animations and micro-interactions
+- **🌐 Multilingual Support**: Macedonian and English with dynamic language switching
+- **📦 Product Catalog**: Complete product management with filtering and search  
+- **👨‍💼 Admin Panel**: Database-backed content management system
+- **🛒 E-commerce Features**: Shopping cart, favorites, and user accounts
+- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS
+- **✨ Modern UI**: Smooth animations and micro-interactions
+- **🔐 Authentication**: Supabase Auth with role-based access control
+- **💾 Persistent Data**: All content changes saved to PostgreSQL database
+- **🔄 Real-time Updates**: Live content synchronization across users

 ## Tech Stack

-- **Frontend**: React 18, TypeScript, Tailwind CSS
-- **Routing**: React Router DOM
-- **Animations**: Framer Motion
-- **Icons**: Lucide React
-- **Internationalization**: i18next
-- **Build Tool**: Vite
-- **Deployment**: Netlify
+### Frontend
+- **React 18** with TypeScript for type safety
+- **Tailwind CSS** for styling and responsive design
+- **Framer Motion** for animations and transitions
+- **React Router DOM** for client-side routing
+- **i18next** for internationalization
+- **Vite** for fast development and building
+
+### Backend & Database
+- **Supabase** for backend-as-a-service
+- **PostgreSQL** database with Row Level Security (RLS)
+- **Supabase Auth** for user authentication
+- **Supabase Storage** for file uploads
+- **Real-time subscriptions** for live updates
+
+### Deployment
+- **Netlify** for frontend hosting
+- **Supabase** for backend infrastructure

+## Database Schema
+
+### Tables
+- **profiles** - User profiles with admin/user roles
+- **content_blocks** - Editable text content with i18n support
+- **products** - Product catalog with full specifications
+- **product_images** - Product image management
+- **content_versions** - Version history for content changes
+
+### Security
+- Row Level Security (RLS) policies on all tables
+- Admin-only write access for content management
+- Public read access for published content
+- Automatic profile creation on user signup

 ## Getting Started

+### Prerequisites
+- Node.js 18+ and npm
+- Supabase account and project
+
 ### Installation

 1. Clone the repository:
@@ .. @@
 npm install
 ```

-3. Start the development server:
+3. Set up environment variables:
+```bash
+cp .env.example .env
+```
+
+4. Configure your Supabase credentials in `.env`:
+```env
+VITE_SUPABASE_URL=your_supabase_project_url
+VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
+```
+
+5. Run the database migrations in your Supabase project:
+- Copy the SQL from `supabase/migrations/create_content_management_schema.sql`
+- Run it in your Supabase SQL editor
+- Copy and run `supabase/migrations/seed_initial_data.sql` for sample data
+
+6. Start the development server:
 ```bash
 npm run dev
 ```

-4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.
+7. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

-## Admin Access
+## Admin Setup

-To access the admin panel:
-- Email: `admin@sienahome.com`
-- Password: `siena2024`
+1. **Create Admin User in Supabase**:
+   - Go to your Supabase project dashboard
+   - Navigate to Authentication > Users
+   - Create a new user with email `admin@sienahome.com`
+   - Set a secure password
+
+2. **Set Admin Role**:
+   - Go to Table Editor > profiles
+   - Find the admin user's profile
+   - Set `role` field to `'admin'`
+
+3. **Login as Admin**:
+   - Use the credentials you created in Supabase Auth
+   - Access admin features through the account menu

-The admin can edit any text content on the site in real-time and manage the product catalog.
+## Admin Features

+- **✏️ Inline Text Editing**: Click any text to edit it directly
+- **📝 Content Management**: All changes saved to database permanently  
+- **🛍️ Product Management**: Add, edit, delete products with full details
+- **🌍 Multi-language**: Edit content in both Macedonian and English
+- **📊 Version History**: Track all content changes over time
+- **🔄 Real-time Updates**: Changes appear instantly for all users

 ## Project Structure

@@ .. @@
 src/
 ├── components/
 │   ├── admin/           # Admin-specific components
+│   │   ├── EditableText.tsx
+│   │   └── ...
 │   ├── layout/          # Header, Footer
 │   ├── sections/        # Page sections (Hero, Features, etc.)
 │   ├── ui/              # Reusable UI components
 │   └── ...
 ├── contexts/            # React Context providers
+│   ├── SupabaseAuthContext.tsx
+│   ├── ContentContext.tsx
+│   ├── ProductContext.tsx
+│   └── ...
 ├── data/                # Static data and configurations
 ├── i18n/                # Internationalization files
+├── lib/
+│   └── supabase.ts      # Supabase client configuration
 ├── pages/               # Page components
 ├── types/               # TypeScript type definitions
 └── ...
+supabase/
+├── migrations/          # Database schema and migrations
+│   ├── create_content_management_schema.sql
+│   └── seed_initial_data.sql
 ```

 ## Available Scripts

@@ .. @@
 - `npm run build` - Build for production
 - `npm run preview` - Preview production build locally
 - `npm run lint` - Run ESLint

+## Environment Variables
+
+Required environment variables for deployment:
+
+```env
+VITE_SUPABASE_URL=https://your-project.supabase.co
+VITE_SUPABASE_ANON_KEY=your_anon_key_here
+```
+
+## Deployment
+
+### Netlify Deployment
+1. Connect your repository to Netlify
+2. Set environment variables in Netlify dashboard
+3. Deploy automatically on git push
+
+### Supabase Setup
+1. Create a new Supabase project
+2. Run the database migrations
+3. Configure authentication settings
+4. Set up storage buckets if needed
+
 ## Contributing

 1. Fork the repository
@@ .. @@