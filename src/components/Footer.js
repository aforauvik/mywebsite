import React from "react";
import {PiDribbbleLogoFill} from "react-icons/pi";
import {RxGithubLogo} from "react-icons/rx";
import {PiInstagramLogoFill} from "react-icons/pi";
import {FaSquareXTwitter} from "react-icons/fa6";
import {IoMail} from "react-icons/io5";
import ThemeToggle from "./ThemeToggle";

function Footer() {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();

	return (
		<div className="flex flex-col items-center justify-center mt-10">
			{/* footer starts here */}

			<div className="flex flex-col items-center justify-center">
				<div className="mb-4">
					<ThemeToggle />
				</div>
				<div className="flex gap-6">
					<a target="_blank" href="https://dribbble.com/auvik">
						<PiDribbbleLogoFill className="text-lg dark:text-white text-zinc-950" />
					</a>
					<a className="" target="_blank" href="https://github.com/aforauvik">
						<RxGithubLogo className="text-lg dark:text-white text-zinc-950" />
					</a>
					{/* <a className="" target="blank" href="https://www.instagram.com/auvik">
						<PiInstagramLogoFill className="text-lg dark:text-white text-zinc-950" />
					</a> */}
					<a className="" target="_blank" href="https://twitter.com/auvik">
						<FaSquareXTwitter className="text-lg dark:text-white text-zinc-950" />
					</a>
					<a className="" target="_blank" href="mailto:email@auvik.me">
						<IoMail className="text-lg dark:text-white text-zinc-950" />
					</a>
				</div>
				<p className="text-xs text-center mt-4 text-gray-500 mb-4">
					Copyright © {currentYear} | Developed By Auvik Mir, North Carolina
				</p>
			</div>

			{/* footer ends here */}
		</div>
	);
}

export default Footer;
