import { useState } from 'react'
import MailingListForm from './components/MailingListForm'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            Jane Author
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Bestselling author of contemporary fiction. Crafting stories that explore 
            the depths of human connection and the beauty of everyday moments.
          </p>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">About</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-slate-700 text-lg leading-relaxed mb-6">
                    With over a decade of writing experience, I've published five novels 
                    that have touched readers around the world. My latest work explores 
                    themes of resilience, love, and the transformative power of storytelling.
                  </p>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    When I'm not writing, you'll find me reading in cozy coffee shops, 
                    traveling to new places for inspiration, or spending time with my 
                    rescue dog, Milo.
                  </p>
                </div>
                <div className="flex justify-center">
                  <div className="w-64 h-64 bg-slate-200 rounded-full flex items-center justify-center">
                    <span className="text-slate-500 text-lg">Author Photo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Books Section */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Recent Books</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "The Last Summer", year: "2024", description: "A heartwarming tale of family, loss, and finding hope in unexpected places." },
                { title: "Midnight Conversations", year: "2023", description: "Late-night talks between strangers become the foundation of an unlikely friendship." },
                { title: "Where Rivers Meet", year: "2022", description: "Two women from different worlds discover their intertwined destinies." }
              ].map((book, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="w-full h-48 bg-slate-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-slate-500">Book Cover</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{book.title}</h3>
                  <p className="text-slate-500 text-sm mb-3">{book.year}</p>
                  <p className="text-slate-700">{book.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Stay Connected</h2>
            <p className="text-xl text-slate-600 mb-8">
              Join my mailing list for updates on new releases, exclusive content, 
              and behind-the-scenes insights into my writing process.
            </p>
            <MailingListForm />
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
