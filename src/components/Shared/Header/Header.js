import React from "react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
// import img1 from "../../assets/depressed1.jpeg"

const Header = () => {
  const projectData = [ 
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/cute-young-woman-is-sitting-sofa-by-window_169016-18060.jpg?w=996&t=st=1676215157~exp=1676215757~hmac=c349a72309f7ca3924281337c4fda3908e04ae54cb1676dbbbb7ea9e80650ca",
      projectName: "Mental Obesity",
      projectDetails:
        "A dress (also known as a frock or a gown) is a garment traditionally worn by women or girls consisting of a skirt with an attached bodice (or a matching bodice giving the effect of a one-piece garment). It consists of a top piece that covers the torso and hangs down over the legs.",
      link: "",
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/woman-feeling-sad-being-judged-criticized-by-people_23-2149882239.jpg?size=626&ext=jpg&ga=GA1.1.540792548.1676214932&semt=ais",
      projectName: "Depression",
      projectDetails:
        "Also known as bridal or wedding consultants, wedding planners are responsible for assisting clients in planning entire weddings or specific wedding activities. They discuss wedding logistics with clients, negotiate vendor contracts, and ensure that wedding-day activities run smoothly.",
      link: "",
    },
    {
      id: 3,
      img: "https://img.freepik.com/free-photo/sad-man-holding-head-with-hand_1150-6345.jpg?size=626&ext=jpg&ga=GA1.1.540792548.1676214932&semt=ais",
      projectName: "Mental Vague",
      projectDetails:
        "As an intellectual object, a book is prototypically a composition of such great length that it takes a considerable investment of time to compose and still considered as an investment of time to read. In a restricted sense, a book is a self-sufficient section or part of a longer composition, a usage reflecting that, in antiquity, long works had to be written on several scrolls and each scroll had to be identified by the book it contained.",
      link: "",
    },
  ];

  return (
    <div>
      <div className="mb-10">
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {projectData.map((project) => (
            <SwiperSlide>
              <a
                target="_blank"
                href={project.link}
                className="group rounded-sm pb-10 relative block bg-black h-[630px]"
              >
                <img
                  alt="Developer"
                  src={project.img}
                  className="absolute h inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />
               

                <div className="relative p-8">
                  {/* <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                                DFGH
                            </p>
                        */}
                  <p className="text-6xl font-bold text-white">
                    {project.projectName}
                  </p>

                  <div className="mt-64">
                    <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-sm text-white">
                        {}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
