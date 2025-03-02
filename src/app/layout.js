import {Open_Sans} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";

// const bgColor = "bg-white dark:bg-zinc-950";

const openSans = Open_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "600", "700"],
	variable: "--font-open-sans", // Optional: define a CSS variable
});

export const metadata = {
	title: "Auvik Mir | Designer & Developer",
	description: "Designer & Developer from North Carolina",
};

export default function RootLayout({children}) {
	return (
		<html suppressHydrationWarning lang="en">
			<head />
			<body className={`${openSans.variable} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="system">
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
