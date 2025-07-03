import React, { useRef, useEffect, useState } from "react";
import { fetchDataGalarie } from "../../api/useSevice";

type Testimonial = {
  id: string;
  imageUrl: string;
  description: string;
};

const GAP_LENGTH = 38;

const Testimonials = () => {
  const slidesRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [testimonialsData, setTestimonialsData] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchDataGalarie();
        if (res?.data) {
          setTestimonialsData(res.data);
        }
      } catch (err) {
        console.error("Lỗi khi fetch galleries:", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (slidesRef.current) {
      const firstItem = slidesRef.current.querySelector(
        ".slides-item"
      ) as HTMLElement;
      if (firstItem) {
        setItemWidth(firstItem.offsetWidth + GAP_LENGTH);
      }
    }
  }, [testimonialsData]);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        testimonialsData.length > 0 ? (prev + 1) % testimonialsData.length : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonialsData]);

  const handleDotClick = (idx: number) => {
    setIndex(idx);
  };

  const translateX = -index * itemWidth;

  return (
    <section className="testimonials">
      <div className="testimonials-wrapper">
        <h2 className="testimonials__header">Testimonials</h2>
        <div className="testimonials__slides">
          <ul
            className="slides"
            ref={slidesRef}
            style={{
              transform: `translateX(${translateX}px)`,
              transition: "transform 0.5s",
              display: "flex",
              gap: `${GAP_LENGTH}px`,
            }}
          >
            {testimonialsData.map((item, idx) => (
              <li className="slides-item" key={item.id || idx}>
                <img
                  src={item.imageUrl}
                  alt={`gallery-${idx}`}
                  className="avatar"
                />
                <div className="profile">
                  <p className="profile__introduce">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="slides-control">
          <div className="slides-dot">
            {testimonialsData.map((_, idx) => (
              <div className="dot-wrapper" key={idx}>
                <div
                  className={`dot${idx === index ? " dot--active" : ""}`}
                  onClick={() => handleDotClick(idx)}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
