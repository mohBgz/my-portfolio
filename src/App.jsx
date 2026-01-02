import { useState, useEffect } from "react";
import { motion, AnimatePresence, easeInOut, spring } from "motion/react";

import "./App.css";
import shape from "./assets/shape.png";
import hamburger from "./assets/hamburger.png";
import closeIcon from "./assets/x.png";
import logo from "./assets/logo.png";
import headshot from "./assets/headshot.png";

import { InfiniteScroll } from "./components/InfiniteScroll";
import { SkillCard } from "./components/SkillCard";
import { ProjectCard } from "./components/ProjectCard";
import TypeWriter from "./components/TypeWriter";

import { projects } from "./data/projects.js";
import { skills } from "./data/skills.js";

function App() {
	// Motion Variants
	const heroContainer = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.3 },
		},
	};

	const heroItem = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

	const grid = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.1, amount: 0.3 },
		},
	};

	const projectsGrid = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.3, amount: 0.5 },
		},
	};

	const gridItem = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

	const [count, setCount] = useState(0);
	const [validationEmailError, setValidationEmailError] = useState(false);

	const [scrolled, setScrolled] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [messageSent, setMessageSent] = useState(false);
	const [overlayOpen, setOverlayOpen] = useState(false);

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (!element) return;
		const elementPosition = element.getBoundingClientRect().top;
		// 	Gets the distance (in pixels) from: the top of the viewport to the target element
		// This value changes as you scroll

		const offsetPosition = elementPosition + window.pageYOffset - 130;
		// 	Add the current scroll position to the element position to get the absolute position
		// 	Subtract any offset (like fixed headers)
		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth",
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		console.log(formData);
		setIsLoading(true);
		try {
			const res = await fetch("https://formspree.io/f/xvzpyeqg", {
				method: "POST",
				headers: {
					Accept: "application/json", // ask for JSON response
				},
				body: formData,
			});
			const data = await res.json();
			console.log(data);
			if (!res.ok) {
				throw data;
			}

			setIsLoading(false);
			setMessageSent(true);
			setValidationEmailError(false);
			e.target.reset();
		} catch (error) {
			setIsLoading(false);
			setMessageSent(false);
			setValidationEmailError(true);
			console.error("Error sending message:", error);
		}
	};
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50); // change threshold as needed
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		// screen wrapper

		<div className=" relative">
			<h1 className=" sr-only">Mohamed Bouguezine</h1>
			{/* Header */}
			{/* bg-gradient-to-t from-[#010215] to-[#2B4874]  implement when scroll passed homepage */}

			<AnimatePresence>
				{overlayOpen && (
					<>
						{/* Backdrop with click-to-close */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
							onClick={() => setOverlayOpen(false)}
						/>

						{/* Menu Panel - slides from top */}
						<motion.div
							initial={{ y: "-100%" }}
							animate={{ y: 0 }}
							exit={{ y: "-100%" }}
							transition={{ type: "easeInOut", duration: 0.4 }}
							className="fixed top-0 left-0 right-0 bg-gradient-to-b from-blue-950/95 to-black/95 backdrop-blur-md shadow-2xl shadow-blue-500/30 z-50 "
						>
							<nav className="pt-24 ">
								<ul className="flex flex-col gap-0.5">
									<li>
										<button
											onClick={() => {
												scrollToSection("about");
												setOverlayOpen(false);
											}}
											className="w-full py-4 text-white text-xl text-center bg-blue-950/50 hover:bg-blue-900 active:bg-blue-800 transition-all duration-200"
										>
											About Me
										</button>
									</li>
									<li>
										<button
											onClick={() => {
												scrollToSection("skills");
												setOverlayOpen(false);
											}}
											className="w-full py-4 text-white text-xl text-center bg-blue-900/50 hover:bg-blue-800 active:bg-blue-700 transition-all duration-200"
										>
											Skills
										</button>
									</li>
									<li>
										<button
											onClick={() => {
												scrollToSection("projects");
												setOverlayOpen(false);
											}}
											className="w-full py-4 text-white text-xl text-center bg-blue-950/50 hover:bg-blue-800 active:bg-blue-700 transition-all duration-200"
										>
											Projects
										</button>
									</li>

									<li>
										<button
											onClick={() => {
												scrollToSection("contact");
												setOverlayOpen(false);
											}}
											className="w-full py-4 text-white text-xl text-center bg-blue-900/50 hover:bg-blue-900 active:bg-blue-800 transition-all duration-200"
										>
											Contacts
										</button>
									</li>
								</ul>
							</nav>
						</motion.div>
					</>
				)}
			</AnimatePresence>
			<header
				className={` fixed top-0 left-0 right-0 z-50 px-10 pt-8 pb-5 flex justify-between items-center transition-all duration-500
					${
						scrolled
							? " bg-gradient-to-r backdrop-blur-md from-[#000324] to-[#00000038] shadow-xs shadow-blue-600"
							: "bg-transparent"
					}
				${overlayOpen ? "border-b-1 border-blue-500" : ""}`}
			>
				<a href="#">
					<img
						className="brightness-60 w-20 hover:brightness-80 transition-all duration-200 "
						src={logo}
						alt="Logo "
					/>
				</a>

				{overlayOpen ? (
					<img
						className=" w-8 md:hidden z-45"
						onClick={() => setOverlayOpen(false)}
						src={closeIcon}
						alt="close-icon"
					/>
				) : (
					<img
						className="brightness-60 w-8 md:hidden"
						onClick={() => setOverlayOpen(true)}
						src={hamburger}
						alt="Hamburger-menu"
					/>
				)}

				<nav className="hidden md:block ">
					<ul className="flex gap-6">
						<li>
							<button
								onClick={() => scrollToSection("about")}
								className="text-white brightness-70 text-xl underline-animation hover:brightness-80 hover:cursor-pointer"
							>
								About
							</button>
						</li>
						<li>
							<button
								onClick={() => scrollToSection("projects")}
								className="text-white brightness-70 text-xl underline-animation hover:brightness-80 hover:cursor-pointer"
							>
								Projects
							</button>
						</li>
						<li>
							<button
								onClick={() => scrollToSection("skills")}
								className="text-white brightness-70 text-xl underline-animation hover:brightness-80 hover:cursor-pointer"
							>
								Skills
							</button>
						</li>
						<li>
							<button
								onClick={() => scrollToSection("contact")}
								className="text-white brightness-70 text-xl underline-animation hover:brightness-80 hover:cursor-pointer"
							>
								Contacts
							</button>
						</li>
					</ul>
				</nav>
			</header>
			{/* Hero Section */}
			<section
				id="hero"
				className=" relative min-h-screen px-14 py-[40px] pt-[120px]  flex flex-col justify-center items-center md:flex-row md:items-center md:justify-between  md:gap-[4vw]  gap-[9vh] "
				style={{
					background:
						"linear-gradient(135deg, rgba(1,2,21,1) 40%, rgba(43,72,116,1) 100%)",
				}}
			>
				{/* titles + button */}
				<motion.div
					variants={heroContainer}
					initial="hidden"
					animate="show"
					className="md:gap-5 md:w-[60%] flex flex-col justify-center"
				>
					<div>
						<motion.div
							variants={heroItem}
							className="text-start text-[clamp(2.3rem,4.3vw,3rem)] font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-200 from-0% to-50% to-[#408CFF]"
						>
							I'm Mohamed
						</motion.div>
						<motion.div variants={heroItem}>
							<TypeWriter classname=" text-[clamp(1.5rem,2.3vw,2.5rem)] font-normal text-gray-100/85 " />
						</motion.div>
					</div>

					<motion.div
						variants={heroContainer}
						className="flex flex-col gap-2 mt-[4vh]"
					>
						<motion.div
							variants={heroItem}
							className=" text-[clamp(1.4rem,1.6vw,2.6rem)] font-medium mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#408CFF]  to-gray-400 "
						>
							I love bringing designs to life with code that looks good and
							feels even better.
						</motion.div>

						<motion.div
							variants={heroItem}
							whileHover={{ scale: 1.04 }}
							whileTap={{ scale: 0.96 }}
							transition={{ type: "easeInOut", duration: 0.7 }}
							className="
							md:w-fit
							px-7 py-2
							rounded-xl
							text-[clamp(1.15rem,1.2vw,1.35rem)]
							font-medium
							text-white
							text-center
							bg-gradient-to-r from-[#0564FD] to-[#000897]
							shadow-lg shadow-blue-500/30
							transition-all duration-200 ease-out
							hover:cursor-pointer hover:brightness-110 hover:shadow-blue-500/40
							 active:brightness-95 active:shadow-none
							focus:outline-none focus:ring-2 focus:ring-blue-400/50
						"
						>
							<a
								href="/CV-Mohamed-Bouguezine.pdf"
								download={"CV-Mohamed-Bouguezine.pdf"}
							>
								Download CV
							</a>
						</motion.div>
					</motion.div>
				</motion.div>

				{/* shape + marquee */}
				<div className="   md:max-w-[40%] flex flex-col justify-between items-center  gap-[4vh] ">
					<div className="relative  flex justify-center ">
						<img
							src={shape}
							alt="Decorative shape"
							className="h-[25vh]  md:w-[70%] md:h-auto translate-x-[2vw]  object-contain"
						/>
					</div>
					<InfiniteScroll className="border-0 border-amber-500 marquee-wrapper brightness-80  hover:brightness-100 transition-all duration-300" />
				</div>
			</section>
			{/* About Me + Skills  */}
			<section className="flex flex-col items-center gap-10  md:gap-25  bg-gradient-to-br from-[#04061f] to-[#144f80] px-2 md:px-14 py-[50px]  ">
				{/* About Me */}
				<motion.section
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					id="about"
					className="text-white flex flex-col gap-8 md:gap-25  items-center md:items-start"
				>
					{/* Abou  Me title */}
					<div className="relative text-4xl  font-extrabold  w-fit">
						About Me
						<span className="text-[#28B4FF] [text-shadow:0_0_20px_rgba(0,255,212,0.85)]">
							{" "}
							.
						</span>
						<motion.span
							initial={{ width: 0 }}
							whileInView={{ width: "60%" }}
							transition={{ type: spring }}
							className="absolute top-[101%] left-0 h-[4px] rounded-md shadow-[0_0_20px_0_rgba(0,77,255,0.95)] bg-gradient-to-r from-[#00E1FF] to-[#0055FF] w-[60%] "
						></motion.span>
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
						<div className=" relative w-50 h-45 md:w-70 md:h-65 border-3 border-[#408CFF] shadow-blue-800 shadow-2xl rounded-lg">
							<img
								src={headshot}
								alt="Mohamed Bouguezine Headshot"
								className="absolute bottom-0 left-0"
							/>
						</div>
					</div>
				</motion.section>

				{/* Skills */}
				<motion.section
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, amount: 0.2 }}
					id="skills"
					className="flex flex-col items-center md:items-center gap-10"
				>
					<div className="mt-10 relative inline-block text-4xl font-extrabold text-white">
						My Skills
						<span className="text-[#28B4FF] [text-shadow:0_0_20px_rgba(0,255,212,0.85)]">
							{" ."}
						</span>
						<motion.span
							initial={{ width: 0 }}
							whileInView={{ width: "60%" }}
							transition={{ type: spring }}
							className="absolute -bottom-2 left-0  h-[4px] w-[60%] rounded-md bg-gradient-to-r from-[#00E1FF] to-[#0055FF] shadow-[0_0_20px_rgba(0,77,255,0.95)]"
						></motion.span>
					</div>

					<motion.div
						variants={grid}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="grid grid-cols-2 g md:flex md:flex-wrap md:justify-center gap-6  md:w-[90%] w-full"
					>
						{skills.map((skill, idx) => (
							<motion.div key={idx} variants={gridItem}>
								<SkillCard name={skill.name} logo={skill.logo} />
							</motion.div>
						))}
					</motion.div>
				</motion.section>
			</section>
			{/* Projects */}
			<section
				id="projects"
				className="text-white flex flex-col items-center  gap-15 md:gap-25  bg-gradient-to-tr from-[#04061f] to-[#144f80] px-6 md:px-2 py-[50px]  "
			>
				<div className="relative text-4xl  font-extrabold  w-fit ">
					My Projects
					<motion.span className="text-[#28B4FF] [text-shadow:0_0_20px_rgba(0,255,212,0.85)]">
						{" "}
						.
					</motion.span>
					<motion.span
						className="absolute top-[110%] left-0 h-[4px] rounded-md shadow-[0_0_20px_0_rgba(0,77,255,0.95)] bg-gradient-to-r from-[#00E1FF] to-[#0055FF]"
						initial={{ width: 0 }}
						whileInView={{ width: "60%" }}
						transition={{ type: spring }}
					></motion.span>
				</div>
				<motion.div
					variants={projectsGrid}
					viewport={{ once: true }}
					initial="hidden"
					whileInView="show"
					className="flex flex-wrap gap-6 lg:gap-12 justify-center items center"
				>
					{projects.map((project, idx) => (
						<motion.div
							variants={gridItem}
							className="md:w-md lg:w-lg"
							key={idx}
						>
							<ProjectCard {...project} />
						</motion.div>
					))}
				</motion.div>
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				className="text-white flex flex-col items-center gap-10 md:gap-15 bg-gradient-to-bl from-[#04061f] to-[#144f80] px-6 md:px-14 py-[70px]"
			>
				{/* Title */}
				<div className="relative text-4xl font-extrabold w-fit">
					Get In Touch
					<span className="text-[#28B4FF] [text-shadow:0_0_20px_rgba(0,255,212,0.85)]">
						{" ."}
					</span>
					<motion.span
						initial={{ width: 0 }}
						whileInView={{ width: "70%" }}
						transition={{ type: spring }}
						className="absolute top-[110%] left-0 h-[4px] rounded-md shadow-[0_0_20px_0_rgba(0,77,255,0.95)] bg-gradient-to-r from-[#00E1FF] to-[#0055FF] w-[60%]"
					></motion.span>
				</div>

				{/* Content */}
				<div className="flex flex-col items-center gap-8 max-w-2xl w-full">
					<p className="text-center text-lg md:text-xl text-gray-200/90">
						I'm always open to new opportunities and collaborations. Feel free
						to reach out!
					</p>

					{/* Formspree Contact Form */}
					<form
						onSubmit={handleSubmit}
						className="w-full max-w-lg flex flex-col gap-5"
					>
						{/* Name */}
						<div className="flex flex-col gap-2">
							<label htmlFor="name" className="text-gray-300 font-medium">
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								className="px-4 py-3 rounded-lg bg-[#0a1128]/50 border border-blue-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
								placeholder="Your name"
							/>
						</div>

						{/* Email */}
						<div className="flex flex-col gap-2">
							<label htmlFor="email" className="text-gray-300 font-medium">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								className="px-4 py-3 rounded-lg bg-[#0a1128]/50 border border-blue-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300"
								placeholder="your.email@example.com"
							/>

							<div className="text-red-700 font-light">
								{validationEmailError && (
									<div>Please provide a valid email</div>
								)}
							</div>
						</div>

						{/* Message */}
						<div className="flex flex-col gap-2">
							<label htmlFor="message" className="text-gray-300 font-medium">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								required
								rows="5"
								className="px-4 py-3 rounded-lg bg-[#0a1128]/50 border border-blue-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-300 resize-none"
								placeholder="Your message..."
							></textarea>
						</div>

						{/* Submit Button */}
						<button
							type="submit"
							className="w-full md:w-fit self-center px-8 py-3 rounded-lg bg-gradient-to-l from-[#0564FD] to-[#000897] font-medium text-lg text-gray-200 hover:shadow-lg hover:shadow-blue-500/50 hover:cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none transition-all duration-300"
							disabled={isLoading || messageSent}
						>
							{isLoading ? (
								<div className="flex gap-2 items-center justify-center  ">
									<div>Sending</div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide lucide-loader-pinwheel-icon lucide-loader-pinwheel animate-spin"
									>
										<path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" />
										<path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
										<path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
										<circle cx="12" cy="12" r="10" />
									</svg>
								</div>
							) : messageSent ? (
								"Message Sent!"
							) : (
								"Send Message"
							)}
						</button>
					</form>

					{/* Social Links */}
					<div className="flex gap-6 mt-6">
						<a
							href="https://www.linkedin.com/in/mohamed-bouguezine/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
							aria-label="LinkedIn"
						>
							<svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
								<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
							</svg>
						</a>

						<a
							href="https://github.com/mohBgz/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
							aria-label="GitHub"
						>
							<svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</a>
					</div>
				</div>

				{/* Footer */}
				<div className="mt-10 pt-8 border-t border-gray-700/50 text-center text-gray-400 w-full">
					<p>© 2026 Mohamed. All rights reserved.</p>
				</div>
			</section>
		</div>
	);
}

export default App;
