export const SkillCard = ({ name, logo }) => {
	return (
		<div
			className="flex flex-col items-center space-y-2 
                 min-w-[150px] max-w-[180px] flex-1
                 text-xl text-blue-100 
                 bg-black/20 backdrop-blur-md rounded-lg p-4
                 shadow-md shadow-blue-400 md:shadow-transparent md:hover:shadow-blue-400
                 hover:scale-105 transition-all duration-300
                 cursor-pointer"
		>
			<img
				className="w-12 h-12 object-contain"
				src={logo}
				alt={`${name} Logo`}
			/>
			<div>{name}</div>
		</div>
	);
};
