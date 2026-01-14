import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ishrat Jahan - Full-Stack Software Developer | PHP, Laravel, Vue.js, JavaScript, MySQL",
  description: "Ishrat Jahan is a skilled full-stack software developer specializing in PHP, Laravel, Vue.js, JavaScript, and MySQL. Offering custom web applications, APIs, and dynamic user interfaces.",
  keywords: ["ishrat_dev", "software developer", "PHP", "Laravel", "Vue.js", "JavaScript", "MySQL", "web applications", "full-stack development"],
  authors: [{ name: "ishrat_dev" }],
  openGraph: {
    title: "Ishrat Jahan - Full-Stack Software Developer",
    description: "Ishrat Jahan is a skilled full-stack software developer specializing in PHP, Laravel, Vue.js, JavaScript, and MySQL.",
    images: ["https://i.ibb.co.com/jTHsp9q/1711431970518.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/images/favicon.ico" />
        <link href="http://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
      </head>
      <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
        {children}
      </body>
    </html>
  );
}
