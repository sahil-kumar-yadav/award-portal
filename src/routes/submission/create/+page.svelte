<script>

    let awardname = 'DemoAward'; 
    let awardid = '1';   
    let formFields = []; // An array to store form field objects
  

    function fetchFormParameters() {
      // Using static example for now
      return [
        {
          type: 'text',
          description: 'Enter your full name',
        },
        {
          type: 'number',
          description: 'Enter your age',
        },
        {
          type: 'textarea',
          description: 'Dummy Question 1',
        },
        {
          type: 'textarea',
          description: 'Dummy Question 2',
        },
        {
          type: 'text',
          description: 'Dummy Question 3',
        },
        {
          type: 'file',
          description: 'Upload a dummy document (PDF) ',
        },
        // We can add more form parameters here
      ];
    }
  
    // Loading form parameters when the component is initialized
    formFields = fetchFormParameters();
  
    // Submit form data 
    function submitForm() {
      // Nothing for now
    }
</script>



<!-- NavBar -->




<!-- Award Form -->

<div class="mb-4"></div>
<div class="mb-6 text-3xl font-semibold text-center text-gray-700">
  Award Nomination Application
</div>

<div class="mt-8 text-center">
  <p class="text-base text-gray-500">Award Name:</p>
  <p class="text-lg font-semibold text-indigo-700">{awardname}</p>
</div>

<div class="min-h-screen bg-gray-100 flex items-center justify-center">
  
  <form on:submit={submitForm} class="w-full max-w-screen-lg p-6 bg-white rounded-lg shadow-xl">

    {#each formFields as field}
      <div class="mb-4">
        <label for={field.fieldname} class="block text-sm font-medium text-gray-700">{field.description}</label>

        {#if field.type === 'file'}
          <input type="file" accept=".pdf" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        {:else if field.type === 'textarea'}
          <textarea class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" maxlength={field.maxsize}></textarea>
        {:else if field.type === 'text' || field.type === 'numerictext'}
          <input type={field.type} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" maxlength={field.maxsize}>
        {:else if field.type === 'number'}
          <input type="number" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" min={field.minsize} max={field.maxsize}>
        {:else}
          <input type={field.type} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" maxlength="2000">
        {/if}
      </div>
    {/each}

    <button type="submit" class="mt-4 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Submit Award Nomination
    </button>

  </form>
</div>