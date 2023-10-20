<div class="max-w-md mx-auto">
  <form class="bg-white p-6 rounded-lg shadow-md" on:submit={handleSubmit}>
    <div class="mb-4">
      <label for="awardName" class="block text-gray-700 text-sm font-bold mb-2"
        >Award Name</label
      >
      <select
        id="awardName"
        name="awardName"
        class="w-full border border-gray-300 rounded-lg p-2"
        required
        bind:value={awardName}
      >
        <option value="">Select an Award</option>
        <option value="Scholarship A">Scholarship A</option>
        <option value="Scholarship B">Scholarship B</option>
        <!-- We can Add more options as needed -->
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
        bind:value={organizingCommittee}
      >
        <option value="">Select a Committee</option>
        <option value="Committee A">Committee A</option>
        <option value="Committee B">Committee B</option>
        <!-- We can Add more options as needed -->
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
        bind:value={submissionDeadline}
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
        bind:value={awardDescription}
      />
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
        bind:value={email}
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
        bind:value={memberNumber}
      />
    </div>

    <div class="mb-4">
      <label
        for="phoneNumber"
        class="block text-gray-700 text-sm font-bold mb-2">Phone Number</label
      >
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        class="w-full border border-gray-300 rounded-lg p-2"
        placeholder="123-456-7890"
        required
        bind:value={phoneNumber}
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

<script>
  let awardName = '';
  let organizingCommittee = '';
  let submissionDeadline = '';
  let awardDescription = '';
  let email = '';
  let memberNumber = '';
  let phoneNumber = '';

  function handleSubmit(event) {
    event.preventDefault();

    // We can access the form data using these variables and perform further actions.
    console.log({
      awardName,
      organizingCommittee,
      submissionDeadline,
      awardDescription,
      email,
      memberNumber,
      phoneNumber
    });
  }
</script>
