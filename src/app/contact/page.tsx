import Link from 'next/link';
import EmailIcon from "@/logos/email-icon.svg"
import InstagramLogo from "@/logos/instagram-logo.svg"
import DiscordLogo from "@/logos/discord-logo.svg"

const Contact = () => (
    <div className="flex flex-col-reverse gap-6 md:flex items-center justify-center h-screen p-4 bg-blue text-white">
        <div className='max-w-prose flex flex-col m-4 gap-4 md:gap-8 md:justify-center'>
            <h2 className="">Get in Touch!</h2>
            <p className="text-lg md:ml-6 lg:w-2/3">
                Have a question? Curious about the club, a potential project, or just want to connect with a Blueprint executive?
                Don't hesitate to reach out to us!
            </p>
            <Link href="mailto:connect@otublueprint.org?subject=Website%20Redirect:"
                  className='flex flex-row gap-2 items-center group md:ml-6'>
                <EmailIcon className="fill-white md:h-12 md:w-12 group-hover:fill-indigo-200"/>
                <p className="text-2xl md:text-3xl group-hover:text-indigo-200">otublueprint@hotmail.com</p>
            </Link>
            <div className="flex flex-row gap-8 md:ml-6">
                <Link href="https://www.instagram.com/otublueprint/">
                    <InstagramLogo className="fill-white w-16 h-16 hover:fill-indigo-200" />
                </Link>
                <Link href="https://discord.gg/yXATsYcFC8">
                    <DiscordLogo className="fill-white w-16 h-16 hover:fill-indigo-200" />
                </Link>
            </div>
        </div>
        <div className="flex flex-row justify-center items-center max-w-md">
          <img className="w-auto h-auto object-cover" src="assets/chat.svg" alt="Contact us" />
        </div>
    </div>
);

export default Contact;