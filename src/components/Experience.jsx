import HTML from '../assets/a.png';
import CSS from '../assets/b.png';
import JavaScript from '../assets/c.png';
import TypeScript from '../assets/d.png';
import ReactJS from '../assets/e.png';
import PHP from '../assets/f.png';
import laravel from '../assets/g.png';
import mySQL from '../assets/h.png';
import tailWind from '../assets/i.png';
import bootsTrap from '../assets/j.png';
import gitHub from '../assets/k.png';

export const Experience = () => {
  const techs = [
    {
      id: 1,
      src: HTML,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: CSS,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: JavaScript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: TypeScript,
      title: 'TypeScript',
      style: 'shadow-blue-700',
    },
    {
      id: 5,
      src: ReactJS,
      title: 'ReactJS',
      style: 'shadow-sky-700',
    },
    {
      id: 6,
      src: PHP,
      title: 'PHP',
      style: 'shadow-indigo-500',
    },
    {
      id: 7,
      src: laravel,
      title: 'Laravel',
      style: 'shadow-red-600',
    },
    {
      id: 8,
      src: mySQL,
      title: 'MySQL',
      style: 'shadow-amber-500',
    },
    {
      id: 9,
      src: tailWind,
      title: 'Tailwind',
      style: 'shadow-blue-500',
    },
    {
      id: 10,
      src: bootsTrap,
      title: 'Bootstrap',
      style: 'shadow-purple-700',
    },
    {
      id: 11,
      src: gitHub,
      title: 'GitHub',
      style: 'shadow-white',
    },
  ];
  return (
    <div name="experience" className="bg-gradient-to-b from-black to-gray-800 ">
      <div className="max-w-7xl m-auto h-auto py-20 xl:m-auto mx-10">
        <div className="text-white">
          <p className="text-4xl font-semibold">Experience</p>
          <p>There are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2  sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0 text-white">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                ' shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer ' +
                '' +
                style
              }
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
