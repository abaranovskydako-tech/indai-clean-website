/**
 * Footer component
 * 
 * Per Component Library Canon v1.0.0
 * Location: components/layout/Footer.tsx
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-200 border-t border-light-200">
      <div className="container mx-auto px-4 py-4">
        <p className="text-base font-normal leading-6 text-dark-500">
          INDAI Clean {currentYear}
        </p>
      </div>
    </footer>
  );
}

