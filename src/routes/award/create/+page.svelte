
      <div class="max-w-md mx-auto">
        <form class="bg-white p-6 rounded-lg shadow-md">
          <div class="mb-4">
            <label
              for="awardName"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Award Name</label
            >
            <select
              id="awardName"
              name="awardName"
              class="w-full border border-gray-300 rounded-lg p-2"
              required
            >
              <option value="">Select an Award</option>
              <option value="Scholarship A">Scholarship A</option>
              <option value="Scholarship B">Scholarship B</option>
              <!-- Add more options as needed -->
            </select>
          </div>
  
          <div class="mb-4">
            <label
              for="organizingCommittee"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Organizing Committee</label
            >
            <select
              id="organizingCommittee"
              name="organizingCommittee"
              class="w-full border border-gray-300 rounded-lg p-2"
              required
            >
              <option value="">Select a Committee</option>
              <option value="Committee A">Committee A</option>
              <option value="Committee B">Committee B</option>
              <!-- Add more options as needed -->
            </select>
          </div>
  
          <div class="mb-4">
            <label
              for="submissionDeadline"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Submission Deadline</label
            >
            <input
              type="date"
              id="submissionDeadline"
              name="submissionDeadline"
              class="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
  
          <div class="mb-4">
            <label
              for="awardDescription"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Award Description</label
            >
            <textarea
              id="awardDescription"
              name="awardDescription"
              class="w-full border border-gray-300 rounded-lg p-2"
              rows="4"
              required
            ></textarea>
          </div>
  
          <div class="mb-4">
            <label for="email" class="block text-gray-700 text-sm font-bold mb-2"
              >Email Address</label
            >
            <input
              type="email"
              id="email"
              name="email"
              class="w-full border border-gray-300 rounded-lg p-2"
              placeholder="example@example.com"
              required
            />
          </div>
  
          <div class="mb-4">
            <label
              for="IEEEmemberNumber"
              class="block text-gray-700 text-sm font-bold mb-2"
              >IEEE Mem Number</label
            >
            <input
              type="text"
              id="memberNumber"
              name="memberNumber"
              class="w-full border border-gray-300 rounded-lg p-2"
              required
            />
          </div>
  
          <div class="mb-4">
            <label
              for="phoneNumber"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Phone Number</label
            >
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              class="w-full border border-gray-300 rounded-lg p-2"
              placeholder="123-456-7890"
              required
            />
          </div>
  
          <div class="mb-4">
            <button
              type="submit"
              class="bg-blue-500 text-white py-2 px-4 rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div> 