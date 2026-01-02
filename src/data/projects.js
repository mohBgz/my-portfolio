import authB from "../assets/thumbnails/authB.png";
import echoBot from "../assets/thumbnails/echoBot.png";
import splitEase from "../assets/thumbnails/splitEase.png";

export const projects = [
	{
		name: "EchoBot",
		description:
			"AI-powered web chatbot that answers questions from uploaded documents and CMS content using vector search.",
		techStack: [
			"React",
			"Typescript",
			"Tailwind",
			"Express",
			"Supabase",
			"Qdrant",
			"Cohere",
		],
		link: "https://github.com/mohBgz/EchoBot",
		demo:"https://demo.echobot.mohamedbgz.dev/",
		image: echoBot
	},
	{
		name: "AuthB",
		description:
			"Secure authentication platform with 2FA, JWT, password reset, and reCAPTCHA.",
		techStack: ["React", "Tailwind", "Express", "MongoDB", "JWT"],
		link:"https://github.com/mohBgz/SplitEase",
		demo:"",
		image: authB
	},
	{
		name: "SplitEase",
		description:
			"A web app that simplifies splitting bills among friends from a single receipt.",
		techStack: ["React", "Tailwind", "Axios", "Express", "Docker"],
		link: "https://github.com/mohBgz/docs-chat-bot",
		demo:"",
		image: splitEase
	},
];
