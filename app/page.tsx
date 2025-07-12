import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Your Next.js App
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This is your barebone Next.js project - let's build something amazing!
          </p>
          
          <div className="space-x-4">
            <Link 
              href="/Login" 
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Go to Login
            </Link>
            <Link 
              href="/about" 
              className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              About Page
            </Link>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">File-based Routing</h3>
            <p className="text-gray-600">
              Create pages by adding files to the app directory. No need to configure routes!
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">App Router</h3>
            <p className="text-gray-600">
              Using the modern App Router with layouts, loading states, and error boundaries.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">TypeScript Ready</h3>
            <p className="text-gray-600">
              Full TypeScript support out of the box for better development experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
