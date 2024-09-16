import { Title } from "solid-start";
import Counter from "~/components/Counter";
import { Show } from "solid-js";

// Dummy data for chatbot integration (to be replaced with real data from AIDEN backend)
const chatbotData = [
  { message: "Welcome to AIDEN. How can I assist you with your government contract today?" }
];

export default function Home() {
  return (
    <main class="bg-gray-900 text-white">
      <Title>Defense Contracting Firm</Title>

      {/* Navbar */}
      <nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
          <a href="#" class="text-2xl font-bold">Defense Consulting</a>
          <ul class="flex space-x-4">
            <li><a href="#home" class="hover:text-yellow-400">Home</a></li>
            <li><a href="#services" class="hover:text-yellow-400">Services</a></li>
            <li><a href="#portfolio" class="hover:text-yellow-400">Portfolio</a></li>
            <li><a href="#contact" class="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Homepage Section */}
      <section id="home" class="bg-cover bg-center h-screen" style="background-image: url('/assets/defense-bg.jpg');">
        <div class="container mx-auto flex justify-center items-center h-full">
          <div class="text-center">
            <h1 class="text-5xl font-bold">Specializing in USACE & NAVFAC Engineering</h1>
            <p class="text-xl mt-4">Expert consulting and subcontracting services for defense projects.</p>
            <a href="#services" class="mt-6 inline-block bg-yellow-400 text-gray-900 py-2 px-4 rounded-full hover:bg-yellow-500">
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" class="py-20 bg-gray-800">
        <div class="container mx-auto">
          <h2 class="text-4xl font-bold text-center">Our Services</h2>
          <p class="text-center text-gray-400 mt-4">Expertise in Pre-Construction Services, CPM Scheduling, and more.</p>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div class="bg-gray-700 p-6 rounded-lg">
              <h3 class="text-2xl font-bold mb-2">Key Competencies</h3>
              <p>Quality, Safety, Cost Control, Schedule Development & Implementation</p>
            </div>
            <div class="bg-gray-700 p-6 rounded-lg">
              <h3 class="text-2xl font-bold mb-2">Project CPM Scheduling</h3>
              <p>Microsoft Project & Primavera 6</p>
            </div>
            <div class="bg-gray-700 p-6 rounded-lg">
              <h3 class="text-2xl font-bold mb-2">Environmental Submittals</h3>
              <p>Comprehensive environmental compliance services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Section */}
      <section id="chatbot" class="fixed bottom-0 right-0 m-6">
        <div id="chatbot-container" class="bg-gray-800 text-white p-4 rounded-lg shadow-lg">
          <h3 class="font-bold text-lg mb-2">Chat with AIDEN</h3>
          <div id="chatbot-messages" class="h-48 overflow-y-scroll mb-2">
            <Show when={chatbotData.length > 0}>
              {chatbotData.map((data) => (
                <p>{data.message}</p>
              ))}
            </Show>
          </div>
          <input type="text" id="chatbot-input" placeholder="Type your message..." class="w-full p-2 bg-gray-700 rounded-lg" />
        </div>
      </section>

      {/* Counter Component */}
      <Counter />
    </main>
  );
}
