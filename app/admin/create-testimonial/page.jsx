export default function CreateTestimonials() {
    return (
      <div className="container mx-auto p-4 flex items-center justify-center min-h-screen border-3 border-solid border-slate-200">
        <div className="p-8 rounded-3xl w-3/5 shadow-sm border border-solid border-gray-300">
          <form
            action="/api/create-testimonials"
            method="POST"
            encType="multipart/form-data"
            className="grid grid-cols-1 gap-6"
          >
            <div className="flex items-center justify-center">
              <div className="flex-grow border-t border-gray-400"></div>
              <span className="mx-4 text-first text-center font-semibold tracking-wide text-4xl pb-2">
                CREATE TESTIMONIAL
              </span>
              <div className="flex-grow border-t border-gray-400"></div>
            </div>
            <textarea
              name="testiContent"
              placeholder="Content"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-first-400"
            />
            <input
              type="text"
              name="testiName"
              placeholder="Name"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-first-400"
            />
            <input
              type="text"
              name="testiDesignation"
              placeholder="Designation"
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-first-400"
            />
            <div className="flex justify-center item-center mt-3">
              <button
                type="submit"
                className="w-2/3 bg-gradient-to-r from-first to-second text-white py-2 rounded-3xl font-semibold hover:bg-second-600 focus:outline-none focus:ring-2 focus:ring-first-400 focus:ring-opacity-50"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }