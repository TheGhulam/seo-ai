import Image from 'next/image';

const BaseTemplate = (props: {
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full bg-gradient-to-b from-blue-100 to-white px-1 antialiased">
      <header className="container mx-auto p-4">
        <nav className="flex items-center justify-between">
          <a href="/">
            <Image
              src="/logo.png"
              alt="Meteorite SEO Logo"
              width={150}
              height={40}
            />
          </a>
          <div className="flex justify-between">
            <nav>
              <ul className="flex flex-wrap gap-x-5 text-xl">
                {props.rightNav}
              </ul>
            </nav>
          </div>
        </nav>
      </header>

      <main>{props.children}</main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2024 Meteorite SEO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export { BaseTemplate };
