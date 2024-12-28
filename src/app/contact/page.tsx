import Link from 'next/link';

const Contact = () => (
  <div className='max-w-prose flex flex-col m-4 gap-4 md:gap-8 md:justify-center'>
    <p className="text-2xl md:text-6xl">Contact us!</p>
    <p className="text-lg md:text-2xl">Have a question? Interested in a potential project but unsure what our team can help you with? Send us an email or connect with us on our social media!</p>
    <div className="flex flex-row gap-2">
      <Link href="https://www.google.com">
          <p>svg here</p>
      </Link>
      <Link href="https://www.google.com">
          <p>svg here</p>
      </Link>
      <Link href="https://www.google.com">
          <p>svg here</p>
      </Link>
      <Link href="https://www.google.com">
          <p>svg here</p>
      </Link>
    </div>
    <Link href="mailto:connect@otublueprint.org?subject=Website%20Redirect:">
      <p className="text-2xl">connect@otublueprint.org</p>
    </Link>
  </div>
);

export default Contact;