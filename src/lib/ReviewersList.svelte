<style>
    body{
        background-color: #E5E7EB;
        
       
    }
    td,th{
        border: 1px solid lightgray;
        
    }
</style>
<script>
   let reviewers = [
    {
      name: "R Murlidharan",
      affiliation: "TATA POWER SED",
      email: "r.muralidharan@iee.org(649cf3ab0669d@786hkYK)",
    },
    {
      name: "Abhay Phansikar",
      affiliation: "IEEE BS",
      email: "aphansikar@gmail.com(645752af1a887@786hkYK)",
    },
    {
      name: "Anand Suhas Gharpure",
      affiliation: "Chair, IEEE BS",
      email: "a.gharpure@gmail.com(647eabaa636ef@786hkYK)",
    },
    {
      name: "Bhanwar Bishnoi",
      affiliation: "Schneider Electric",
      email: "bhanwar.bishnoi@ieee.org(645099f093d0e@786hkYK)",
    },
    {
      name: "Dr. Prasiddh Trivedi",
      affiliation: "",
      email: "prasiddh.trivedi@rait.ac.in(4eK9uH6iL1)",
    },
  ];
    
   
  </script>
<body>
    

<div  class="block m-4  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
   

<div class="container-fluid text-center mt-5 p-6">
    <h1 class="text-4xl text-gray-900 dark:text-white">
        <b>Award Management Portal </b>
    </h1>
</div>


<div class="col-md-10 mx-auto p-4" style="width: 90vw;">
    <h1 class="text-3xl font-medium text-gray-900 dark:text-white">
        List of Reviewers
    </h1>
   
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-4 mt-4">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-4 bg-gray-200 dark:bg-gray-200 text-bold">Sr. No.</th>
              <th scope="col" class="px-6 py-4 bg-gray-200 dark:bg-gray-200">Name</th>
              <th scope="col" class="px-6 py-4 bg-gray-200 dark:bg-gray-200">Affiliation</th>
              <th scope="col" class="px-6 py-4 bg-gray-200 dark:bg-gray-200">EmailId/Username</th>
              <th scope="col" class="px-6 py-4 bg-gray-200 dark:bg-gray-200">Delete Reviewer</th>
            </tr>
          </thead>
          <tbody>
            {#each reviewers as reviewer, index (reviewer.email)}
              <tr class={index % 2 === 0 ? 'bg-gray-200 dark:bg-gray-200' : ''}>
                <th scope="row" class="px-6 py-4 text-black">{index + 1}</th>
                <td class="px-6 py-4 text-black">{reviewer.name}</td>
                <td class="px-6 py-4 text-black">{reviewer.affiliation}</td>
                <td class="px-6 py-4 text-black">{reviewer.email}</td>
                <td class="px-6 py-4">
                  <button
                    type="button"
                    class="text-white bg-red-600 hover:bg-red-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Delete Reviewer
                  </button>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
      

<footer class="bg-blue-800  shadow m- dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4  md:items-center md:justify-between">
      <span class="text-lg text-white sm:text-center dark:text-gray-400"> Developed by Prof. Sumit P. Makwana, Digital Content Chair, IEEE Gujarat Section
    </span>
 
</div>
</footer>

</div>
</body>

