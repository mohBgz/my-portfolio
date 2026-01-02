import React from "react";
import projectPic from "../assets/project-pic.png";
import { Github, Play } from "lucide-react";

export const ProjectCard = ({
	name,
	description,
	techStack = [],
	link,
	demo,
	image = projectPic,
}) => {
	return (
		<div className="h-full shadow-black/60 shadow-md  hover:scale-[101%]  group relative flex flex-col justify-between overflow-hidden rounded-xl  md:hover:shadow-lg  hover:shadow-black transition-all duration-[400ms] bg-gradient-to-tr from-gray-900/50 to-gray-800/50 ">
			{/* Project Image */}
			<div className="overflow-hidden">
				<img
					className="w-full h-80 object-cover transition-transform duration-200 group-hover:scale-110"
					src={image}
					alt={`${name} screenshot`}
				/>
			</div>

			{/* Project Info */}
			<div className="p-5  flex flex-col gap-4 hover:cursor-pointer ">
				<h3 className="text-xl font-bold text-white group-hover:text-blue-400">
					{name}
				</h3>
				<p className="text-gray-300 text-sm md:text-base">{description}</p>

				{/* Tech Stack */}
				<div className="flex flex-wrap gap-2">
					{techStack.map((tech, idx) => (
						<span
							key={idx}
							className="bg-black/60 text-blue-400 text-xs md:text-sm px-2 py-1 rounded-full"
						>
							{tech}
						</span>
					))}
				</div>
			</div>

			{/* Link Button */}
			<div className="flex flex-col gap-2 ">
				{demo && (
					<div className="flex  flex-1 items-center gap-2 mt-4 justify-center py-2 font-semibold text-white bg-gradient-to-r from-cyan-600 to-blue-600/10 hover:from-cyan-500 hover:to-cyan-700 transition-colors duration-300 rounded-lg cursor-pointer">
						<a
							href={demo}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2"
						>
							Live Demo
						
							<Play className="w-5 h-5" />
						</a>
					</div>
				)}
				<div className={`flex flex-1 items-center gap-2  justify-center py-2 ${demo? "text-gray-200 font-normal hover:bg-blue-900" :"hover:from-blue-900 hover:to-blue-600 font-semibold text-white"} bg-gradient-to-r from-blue-900 to-blue-600/10  transition-colors duration-300 rounded-lg cursor-pointer`}>
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2"
					>
						View on Github
						<Github className="w-5 h-5" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
