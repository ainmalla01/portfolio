// const Skills = () => {
//   return (
//     <section className="py-16  h-screen" id="skills">
//       {/* Heading */}
//       <h2 className="text-3xl text-[40px] font-bold text-center text-white mb-12">
//         My Skills
//       </h2>

//       <div className="container mx-auto grid md:grid-cols-2 gap-10 px-6 w-[70%]">
//         {/* Left Side - Why Hire Me */}
//         <div className="flex flex-col justify-center">
//           <h3 className="text-2xl font-bold text-gray-700 leading-snug mb-4">
//             Why Hire Me For Your Next <span className="text-green-600">Project?</span>
//           </h3>
//           <p className="text-gray-600 mb-6">
//             I’m specialist in UI/UX Design. My passion is designing & solving 
//             problems through user experience and research.
//           </p>
//           <button className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 w-fit">
//             Hire Me
//           </button>
//         </div>

//         {/* Right Side - Skills Grid */}
//         <div className="grid sm:grid-cols-2 gap-6">
//           {/* Skill Card */}
//           <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition">
//             <h4 className="font-semibold text-lg mb-2 text-gray-800">HTML/CSS</h4>
//             <p className="text-sm text-gray-600">
//               Create user interface designs with unique & modern ideas
//             </p>
//           </div>

//           <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition">
//             <h4 className="font-semibold text-lg mb-2 text-gray-800">Bootstrap</h4>
//             <p className="text-sm text-gray-600">
//               Create advance mobile apps with Flutter apps.
//             </p>
//           </div>

//           <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition">
//             <h4 className="font-semibold text-lg mb-2 text-gray-800">Javascript</h4>
//             <p className="text-sm text-gray-600">
//               Create advance mobile apps with Flutter apps.
//             </p>
//           </div>

//           <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-lg transition">
//             <h4 className="font-semibold text-lg mb-2 text-gray-800">React JS & Node JS</h4>
//             <p className="text-sm text-gray-600">
//               Create digital user products with updated ideas
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


"use client"

import { useEffect, useState } from "react"

export default function GithubProfile() {

  const [githubData, setGithubData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function fetchGithubData() {

      try {

        const response = await fetch(
          "https://api.github.com/users/ainmalla01"
        )

        const data = await response.json()

        setGithubData(data)

      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchGithubData()

  }, [])

  if (loading) {
    return <h1 className="text-white">Loading...</h1>
  }
return (
  <section className="min-h-screen flex items-center justify-center bg-black text-white px-6">

    {/* centered container */}
    <div className="w-full max-w-7xl p-10 rounded-2xl border border-zinc-800 bg-black">

      {/* profile */}
      <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">

        <img
          src={githubData.avatar_url}
          alt="github profile"
          className="h-[120px] w-[120px] rounded-full border-4 border-yellow-400"
        />

        <div>
          <h1 className="text-4xl font-bold">
            {githubData.name}
          </h1>

          <p className="text-zinc-400">
            @{githubData.login}
          </p>

          <p className="mt-2 text-zinc-300">
            {githubData.bio}
          </p>
        </div>

      </div>

      {/* stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">

        <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 text-center">
          <h1 className="text-yellow-400 text-3xl font-bold">
            {githubData.public_repos}
          </h1>
          <p className="text-zinc-400">Repositories</p>
        </div>

        <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 text-center">
          <h1 className="text-yellow-400 text-3xl font-bold">
            {githubData.followers}
          </h1>
          <p className="text-zinc-400">Followers</p>
        </div>

        <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 text-center">
          <h1 className="text-yellow-400 text-3xl font-bold">
            {githubData.following}
          </h1>
          <p className="text-zinc-400">Following</p>
        </div>

        <div className="bg-zinc-900 p-5 rounded-xl border border-zinc-800 text-center">
          <h1 className="text-yellow-400 text-3xl font-bold">
            {githubData.public_gists}
          </h1>
          <p className="text-zinc-400">Gists</p>
        </div>

      </div>

      {/* graph */}
      <div className="mt-10">
        <div className="bg-[#0d1117] p-6 rounded-2xl border border-zinc-800">

          <h1 className="text-white text-2xl font-bold mb-6 text-center">
            Contribution Graph
          </h1>

          <img
            src="https://ghchart.rshah.org/409ba5/ainmalla01"
            alt="GitHub Contribution Graph"
            className="w-full"
          />

        </div>
      </div>

      {/* button */}
      <div className="flex justify-center mt-10">
        <a
          href={githubData.html_url}
          target="_blank"
          className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:scale-105 duration-300"
        >
          Visit GitHub
        </a>
      </div>

    </div>
  </section>
)
}
