import { useState, useEffect } from "react";
import "./App.css";
import shape from "./assets/shape.png";
import hamburger from "./assets/hamburger.png";
import logo from "./assets/logo.png";
import headshot from "./assets/headshot.png";

import { InfiniteScroll } from "./components/InfiniteScroll";
import { SkillCard } from "./components/SkillCard";
import { ProjectCard } from "./components/ProjectCard";
import TypeWriter from "./components/TypeWriter";

import { projects } from "./data/projects.js";

import cssLogo from "./assets/stack-icons/css.png";
import dockerLogo from "./assets/stack-icons/docker.png";
import gitLogo from "./assets/stack-icons/git.png";
import htmlLogo from "./assets/stack-icons/html.png";
import mongodbLogo from "./assets/stack-icons/mongodb.png";
import nodeLogo from "./assets/stack-icons/node.png";
import reactLogo from "./assets/stack-icons/react.png";
import tailwindLogo from "./assets/stack-icons/tailwind.png";
import tsLogo from "./assets/stack-icons/ts.png";
import awsLogo from "./assets/stack-icons/aws.png";

function App() {
	const [count, setCount] = useState(0);

	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50); // change threshold as needed
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		// screen wrapper
		<div className=" border-0 border-amber-500">
			{/* Header */}
			{/* bg-gradient-to-t from-[#010215] to-[#2B4874]  implement when scroll passed homepage */}

			<header
				className={` fixed top-0 left-0 right-0 z-50 px-10 pt-8 pb-5 flex justify-between items-center transition-all duration-500 ${
					scrolled
						? " bg-gradient-to-r backdrop-blur-md from-[#000324] to-[#00000038] shadow-xs shadow-blue-600"
						: "bg-transparent"
				}`}
			>
				<a href="#">
					<img
						className="brightness-60 w-20 hover:brightness-80 transition-all duration-200 "
						src={logo}
						alt="Logo "
					/>
				</a>

				<img
					className="brightness-60 w-8 md:hidden"
					src={hamburger}
					alt="Hamburger-menu"
				/>
				<nav className="hidden md:block ">
					<ul className="flex gap-6">
						<li>
							<a
								href="#"
								className="text-white brightness-70 text-xl underline-animation hover:brightness-80"
							>
								About
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-white brightness-70 text-xl underline-animation hover:brightness-80"
							>
								Projects
							</a>
						</li>
						<li>
							<a
								href="#"
								className="text-white brightness-70 text-xl underline-animation hover:brightness-80"
							>
								Contacts
							</a>
						</li>
					</ul>
				</nav>
			</header>

			{/* Hero Section */}
			<section
				className=" relative min-h-screen px-14 py-[40px] pt-[120px]  flex flex-col justify-center items-center md:flex-row md:items-center md:justify-between  md:gap-[4vw]  gap-[9vh] "
				style={{
					background:
						"linear-gradient(135deg, rgba(1,2,21,1) 40%, rgba(43,72,116,1) 100%)",
				}}
			>
				{/* titles + button */}
				<div className=" border-amber-400 border-0 md:gap-5 md:w-[60%] flex flex-col justify-center">
					<div>
						<div className="text-start text-[clamp(2.3rem,4.3vw,3rem)] font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 from-0% to-50% to-[#408CFF]">
							I'm Mohamed
						</div>
						<TypeWriter classname=" text-[clamp(1.5rem,2.3vw,2.5rem)] font-normal text-gray-100/85 " />
					</div>

					<div className="flex flex-col gap-2 mt-[4vh]">
						<p className=" text-[clamp(1.4rem,1.6vw,2.6rem)] font-medium mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#408CFF]  to-gray-400 ">
							I love bringing designs to life with code that looks good and
							feels even better.
						</p>

						<button className="md:w-fit font-normal px-6 py-1 rounded-lg bg-gradient-to-l from-[#0564FD] to-[#000897]">
							<span className="text-[clamp(1.3rem,1.3vw,4rem)] text-gray-200">
								Download CV
							</span>
						</button>
					</div>
				</div>

				{/* shape + marquee */}
				<div className="   md:max-w-[40%] flex flex-col justify-between items-center  gap-[4vh] ">
					<div className="relative  flex justify-center ">
						<img
							src={shape}
							alt=""
							srcset=""
							className="h-[25vh]  md:w-[70%] md:h-auto translate-x-[2vw]  object-contain"
						/>
					</div>
					<InfiniteScroll className="border-0 border-amber-500 marquee-wrapper brightness-80  hover:brightness-100 transition-all duration-300" />
				</div>
			</section>

			{/* About Me + Skills  */}
			<section className="flex flex-col items-center gap-10  md:gap-25  bg-gradient-to-br from-[#04061f] to-[#144f80] px-2 md:px-14 py-[50px]  ">
				{/* About Me */}
				<section className="text-white flex flex-col gap-8 md:gap-25  items-center md:items-start">
					{/* Abou  Me title */}
					<div className="relative text-4xl  font-extrabold  w-fit">
						About Me
						<span className="text-[#28B4FF] [text-shadow:0_0_20px_rgba(0,255,212,0.85)]">
							{" "}
							.
						</span>
						<span className="absolute top-[101%] left-0 h-[4px] rounded-md shadow-[0_0_20px_0_rgba(0,77,255,0.95)] bg-gradient-to-r from-[#00E1FF] to-[#0055FF] w-[60%] "></span>
					</div>

					{/* Text + Headshot */}
					<div className="px-14 flex flex-col items-center md:flex-row-reverse md:gap-10 md:items-center  md:justify-end space-y-14">
						{/* Text */}
						<div className="text-left md:text-left text-lg md:text-xl lg:text-2xl space-y-4  md:space-y-5 md:w-[60%]   ">
							<div>
								Hey! I’m Mohamed, a junior front-end developer who loves
								building smooth, purposeful apps with{" "}
								<span className="relative">
									React
									<span className="absolute top-[101%] left-0 h-[1px] rounded-md shadow-[0_0_20px_0_rgba(0,77,255,0.95)] bg-gradient-to-r from-[#4d9cbb] to-[#2320f5] w-full"></span>
								</span>
								{". "}
							</div>
							<div>
								I’m also learning Node.js and Express to complete my MERN stack
								journey. Always <span className="text-[#0C90F5]">learning</span>
								, always<span className="text-[#0C90F5]"> building </span>!
							</div>
						</div>

						{/* Headshot */}
						<div class=" relative w-50 h-45 md:w-70 md:h-65 border-3 border-[#408CFF] shadow-blue-800 shadow-2xl rounded-lg">
							<img
								src={headshot}
								alt=""
								srcset=""
								className="absolute bottom-0 left-0"
							/>
						</div>
					</div>
				</section>

				{/* Skills */}
				<section className="flex flex-col items-center md:items-center gap-10">
					<div className="mt-10 relative inline-block text-4xl font-extrabold text-white">
						My Skills
						<span className="text-[#28B4FF] [text-shadow:0_0_20px_rgba(0,255,212,0.85)]">
							{" ."}
						</span>
						<span className="absolute -bottom-2 left-16  h-[4px] w-[60%] rounded-md bg-gradient-to-r from-[#00E1FF] to-[#0055FF] shadow-[0_0_20px_rgba(0,77,255,0.95)]"></span>
					</div>

					<div className="grid grid-cols-2 g md:flex md:flex-wrap md:justify-center gap-6  md:w-[90%] w-full">
						<SkillCard name="HTML" logo={htmlLogo} />
						<SkillCard name="CSS" logo={cssLogo} />
						<SkillCard name="Typescript" logo={tsLogo} />
						<SkillCard name="Docker" logo={dockerLogo} />
						<SkillCard name="Tailwind" logo={tailwindLogo} />
						<SkillCard name="Node" logo={nodeLogo} />
						<SkillCard name="React" logo={reactLogo} />
						<SkillCard name="Mongodb" logo={mongodbLogo} />
						<SkillCard name="AWS" logo={awsLogo} />
						<SkillCard name="Git" logo={gitLogo} />
					</div>
				</section>
			</section>

			{/* Projects */}
			<section className="text-white flex flex-col items-center  gap-15 md:gap-25  bg-gradient-to-tr from-[#04061f] to-[#144f80] px-14 py-[50px]  ">
				<div className="relative text-4xl  font-extrabold  w-fit ">
					My Projects
					<span className="absolute top-[110%] left-0 h-[4px] rounded-md shadow-[0_0_20px_0_rgba(0,77,255,0.95)] bg-gradient-to-r from-[#00E1FF] to-[#0055FF] w-[50%] "></span>
					<span className="text-[#28B4FF] [text-shadow:0_0_20px_rgba(0,255,212,0.85)]">
						{" "}
						.
					</span>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project, idx) => (
						<ProjectCard key={idx} {...project} />
					))}
				</div>
			</section>
		</div>
	);
}

export default App;
