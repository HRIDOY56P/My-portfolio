// React + Tailwind Starter Portfolio
import React from "react";

export default function Portfolio() {
  return (
    <div className="bg-gray-950 text-white font-sans min-h-screen">
      {/* Header */}
      <header className="p-6 bg-gray-900 shadow sticky top-0 z-10">
        <h1 className="text-3xl font-bold text-blue-400">MD RAKIBUL ISLAM</h1>
        <p className="text-sm text-gray-400">Data Science Enthusiast | COO at Golden Stitch</p>
      </header>

      {/* Hero */}
      <section className="p-10 text-center">
        <h2 className="text-4xl font-bold mb-2">AI-Powered Solutions for a Smarter Tomorrow</h2>
        <p className="text-gray-400 mb-4">Machine Learning | Deep Learning | Data Science</p>
        <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded">Explore My Work</button>
      </section>

      {/* About */}
      <section className="p-8 bg-gray-800">
        <h3 className="text-2xl text-blue-400 font-semibold mb-3">About Me</h3>
        <p className="text-gray-300">
          I am passionate about Data Science and love working on AI-based machine learning and deep learning solutions.
          My goal is to build intelligent systems that improve human lives.
        </p>
        <ul className="mt-4 space-y-1 text-gray-400">
          <li><strong>Education:</strong> B.Sc. in Computer Science and Information Technology, 2024</li>
          <li><strong>Current Role:</strong> COO at Golden Stitch (2019–Present)</li>
        </ul>
      </section>

      {/* Skills */}
      <section className="p-8">
        <h3 className="text-2xl text-blue-400 font-semibold mb-4">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["Data Science", "Python", "Machine Learning", "Deep Learning", "C Programming", "JavaScript", "HTML", "CSS", "PHP"].map(skill => (
            <div key={skill} className="bg-gray-700 p-3 rounded text-center">{skill}</div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="p-8 bg-gray-800">
        <h3 className="text-2xl text-blue-400 font-semibold mb-4">Services</h3>
        <ul className="space-y-3 text-gray-300">
          <li>🔍 Data Analysis: Insightful exploration and visualization of datasets.</li>
          <li>🌐 Web Development: Building responsive and modern web applications.</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="p-8">
        <h3 className="text-2xl text-blue-400 font-semibold mb-4">Projects</h3>
        <div className="bg-gray-700 p-5 rounded shadow">
          <h4 className="text-xl font-bold text-white">Predicting Diseases and Guiding Treatment with NLP</h4>
          <p className="text-gray-300 mt-2">
            This project predicts diseases from clinical notes using NLP, ML, and DL models (RF, SVM, Logistic Regression, CNN, LSTM).
            It supports doctors by improving diagnosis speed and accuracy.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="p-8 bg-gray-800">
        <h3 className="text-2xl text-blue-400 font-semibold mb-4">Contact Me</h3>
        <ul className="text-gray-300 space-y-2">
          <li>Email: <a href="mailto:ridoym440@gmail.com" className="text-blue-400">ridoym440@gmail.com</a></li>
          <li>Phone: 01724094077, 01516530519</li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/md-rakibul-islam-86b74b2bb" className="text-blue-400" target="_blank" rel="noreferrer">Profile Link</a></li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-4 bg-gray-900">
        &copy; 2025 MD RAKIBUL ISLAM. All rights reserved.
      </footer>
    </div>
  );
}
