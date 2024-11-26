export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p className="mb-2">© 2024 Evergreen Renos. All Rights Reserved.</p>
          <p className="mb-2">
            Website:{' '}
            <a href="https://evergreenrenos.ca" className="underline">
              evergreenrenos.ca
            </a>
          </p>
          <p>
            Phone:{' '}
            <a href="tel:+14162303900" className="underline">
              (416) 230-3900
            </a>
          </p>
        </div>
      </footer>
    );
  }
  