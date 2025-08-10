import React from "react";

const skills = [
  { name: "HTML", img: "https://res.cloudinary.com/dimvt7o8a/image/upload/v1719388321/html_fejvsv.svg" },
  { name: "CSS", img: "https://res.cloudinary.com/dimvt7o8a/image/upload/v1719388267/css_bdxk3t.svg" },
  { name: "JavaScript", img: "https://res.cloudinary.com/dimvt7o8a/image/upload/v1719389015/file_3_ylzus1.png" },
  { name: "React", img: "https://res.cloudinary.com/dimvt7o8a/image/upload/v1719392183/file_7_fkikio.png" },
  { name: "SQLite", img: "https://res.cloudinary.com/dimvt7o8a/image/upload/v1719391159/file_4_lzsyfn.png" },
  { name: "Java", img: "https://res.cloudinary.com/dimvt7o8a/image/upload/v1719391558/file_5_l9mlu6.png" },
  { name: "Python", img: "https://res.cloudinary.com/dimvt7o8a/image/upload/v1719391665/Remove_background_project_h3jhri.png" },
  { name: "Tailwind", img: "https://cdn.iconscout.com/icon/free/png-512/free-tailwind-css-5285308-4406745.png?f=webp&w=512" },
  { name: "TypeScript", img: "https://cdn.iconscout.com/icon/free/png-512/free-typescript-3521774-2945272.png?f=webp&w=512" },
  { name: "Next JS", img: "https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png" },
];

const SkillCarousel = () => (
  <div className="relative overflow-hidden w-full bg-slate-900 py-8">
    <div className="flex whitespace-nowrap animate-scrollLeft" style={{ animationDuration: "20s" }}>
      {[...skills, ...skills].map((skill, idx) => (
        <div
          key={idx}
          className="inline-block mx-6 p-4 rounded-xl cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_20px_8px_rgba(255,255,255,0.8)] bg-slate-800"
          style={{ minWidth: "100px", textAlign: "center" }}
        >
          <img src={skill.img} alt={skill.name} className="mx-auto h-16 mb-2" />
          <p className="text-amber-50 font-semibold">{skill.name}</p>
        </div>
      ))}
    </div>
  </div>
);


export default SkillCarousel;
