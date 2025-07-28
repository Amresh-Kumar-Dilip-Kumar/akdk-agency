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
