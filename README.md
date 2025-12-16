# AKDK Startup Guide

This guide gets a new developer from clone to a running AKDK app.

## Prerequisites
- Node.js 18+ and pnpm installed (`npm install -g pnpm` if needed)
- Git
- SMTP credentials for mail (Hostinger by default) and a secret key for JWT sessions

## One-time setup
1) Install dependencies
```bash
pnpm install
```

2) Create `.env` in the repo root. Example values for local dev:
```env
# Database (SQLite)
DATABASE_URL="file:./prisma/dev.db"

# Auth/session
SECRET="replace-with-random-32+ chars"

# Email (Hostinger SMTP defaults)
NODEMAILER_USER="your@domain"
NODEMAILER_PASS="your-smtp-pass"
NODEMAILER_SECURE=false  # true uses port 465, false uses 587
```

3) Provision the database (creates the SQLite file and tables)
```bash
pnpm prisma db push
```

4) Generate the Prisma client (also run automatically in build/start scripts)
```bash
pnpm prisma generate
```

## Run the app
- Development server
```bash
pnpm dev
```
Visit http://localhost:3000.

- Lint
```bash
pnpm lint
```

- Production build and start
```bash
pnpm build
pnpm start
```

## Notes
- Authentication uses a static user list in src/app/(su)/actions.ts; update before going live.
- SMTP settings live in src/lib/mail.ts. Host defaults to Hostinger; adjust if you use another provider.
- Analytics docs live in src/app/(analytics)/ANALYTICS_GUIDE.md.



---


# AKDK Landing page

todo
- [ ] move analytics form root layout to landing  
- [ ] submit form for praposol without otp
- [x] todos


### nextjs

![screenshot](./screenshot.png)

### Swiper example

```tsx
<Swiper
  slidesPerView={3}
  spaceBetween={20}
  centeredSlides={true}
  pagination={{ clickable: true }}
  autoplay={{
    delay: 1500, // 1.5 seconds delay between slides
    disableOnInteraction: false, // Allows user interaction without stopping autoplay
  }}
  modules={[Pagination, Autoplay]}
  className="w-full max-w-5xl py-8"
>
  {images.map((image, index) => (
    <SwiperSlide
      key={index}
      className="flex justify-center items-center bg-white w-64 h-40 shadow-md rounded-lg overflow-hidden"
    >
      <img
        src={image}
        alt={`Slide ${index + 1}`}
        className="w-full h-full object-cover"
      />
    </SwiperSlide>
  ))}
</Swiper>
```

install experss cors dotenv prisma @prisma/client

init prism
npx prisma init --datasource-provider sqlite

change database_url

add model

npx prisma db push

npx prisma studio
