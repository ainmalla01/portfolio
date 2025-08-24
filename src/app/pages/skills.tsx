const Skills = () => {
  return (
    <section className="py-16  h-screen" id="skills">
      {/* Heading */}
      <h2 className="text-3xl text-[40px] font-bold text-center text-white mb-12">
        My Skills
      </h2>

      <div className="container mx-auto grid md:grid-cols-2 gap-10 px-6 w-[70%]">
        {/* Left Side - Why Hire Me */}
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-700 leading-snug mb-4">
            Why Hire Me For Your Next <span className="text-green-600">Project?</span>
          </h3>
          <p className="text-gray-600 mb-6">
            I’m specialist in UI/UX Design. My passion is designing & solving 
            problems through user experience and research.
          </p>
          <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 w-fit">
            Hire Me
          </button>
        </div>

        {/* Right Side - Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Skill Card */}
          <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2 text-gray-800">HTML/CSS</h4>
            <p className="text-sm text-gray-600">
              Create user interface designs with unique & modern ideas
            </p>
          </div>

          <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2 text-gray-800">Bootstrap</h4>
            <p className="text-sm text-gray-600">
              Create advance mobile apps with Flutter apps.
            </p>
          </div>

          <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2 text-gray-800">Javascript</h4>
            <p className="text-sm text-gray-600">
              Create advance mobile apps with Flutter apps.
            </p>
          </div>

          <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-semibold text-lg mb-2 text-gray-800">React JS & Node JS</h4>
            <p className="text-sm text-gray-600">
              Create digital user products with updated ideas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
