<style>
    body{
        background-color: #E5E7EB;
        
       
    }
    td,th{
        border: 1px solid lightgray;
        
    }
</style>
<body>
    

<div  class="block m-4  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
   

<div class="container-fluid text-center mt-5 p-6">
    <h1 class="text-4xl text-gray-900 dark:text-white">
        <b>Award Management Portal </b>
    </h1>
</div>

<div>
    <nav
        class="border-blue-200 bg-blue-800 dark:bg-blue-800 dark:border-blue-700"
    >
        <div
            class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        >
            <a href="#" class="flex items-center">
                <img
                    src="./src/homepage.png"
                    class="h-8 mr-3 border-gray-50"
                    style="filter: invert(1) grayscale(100%) brightness(200%);"
                    alt="Reviewer Logo"
                />
                <span
                    class="self-center text-medium   font-semibold whitespace-nowrap text-white"
                    >View All Submissions   Add New Reviewer   Reviewer List   Assign Reviewer   SQL</span
                >
            </a>
            <button
                data-collapse-toggle="navbar-solid-bg"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-solid-bg"
                aria-expanded="false"
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15"
                    />
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                <ul
                    class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700"
                >
                    <li>
                        <a
                            href="#"
                            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500 dark:bg-blue-600 md:dark:bg-transparent"
                            aria-current="page">Welcome</a
                        >
                    </li>
                    <li>
                        <a
                            href="#"
                            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white-700 md:p-0 md:dark:text-white-500 dark:bg-blue-600 md:dark:bg-transparent"
                            aria-current="page">Logout</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>

<div class="col-md-10 mx-auto p-4" style="width: 90vw;">
    <h1 class="text-3xl font-medium text-gray-900 dark:text-white">
        List of Reviewers
    </h1>
    
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-4 mt-4">
        <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                    <th
                        scope="col"
                        class="px-6 py-4 bg-gray-200 dark:bg-gray-200 text-bold"
                    >
                        Sr. No.
                    </th>
                    <th scope="col"  class="px-6 py-4 bg-gray-200 dark:bg-gray-200"> Name  </th>
                    <th
                        scope="col"
                        class="px-6 py-4 bg-gray-200 dark:bg-gray-200"
                    >
                        Affiliation
                    </th>
                    <th scope="col"  class="px-6 py-4 bg-gray-200 dark:bg-gray-200"> EmailId/Username</th>
                    <th scope="col"  class="px-6 py-4 bg-gray-200 dark:bg-gray-200"> Delete Reviewer </th>
                    
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th
                        scope="row"
                        class="px-6 py-4 text-black"
                    >
                        1
                    </th>
                    <td class="px-6 py-4 text-black">
                        R Murlidharan
                    </td>
                    <td class="px-6 py-4 text-black">
                       TATA POWER SED
                    </td>
                    <td class="px-6 py-4 text-black"> r.muralidharan@iee.org(649cf3ab0669d@786hkYK) </td>
                    <td class="px-6 py-4"> <button
                        type="button"
                        class="text-white bg-red-600 hover:bg-red-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none dark:focus:ring-blue-800"
                        >Delete Reviewer</button
                    ></td>
                   
                </tr>
                <tr class="border-b bg-gray-200 dark:bg-gray-200 border-gray-200 dark:border-gray-700">
                    <th
                        scope="row"
                        class="px-6 py-4 text-black"
                    >
                        2
                    </th>
                    <td class="px-6 py-4 text-black">
                        Abhay Phansikar
                    </td>
                    <td class="px-6 py-4 text-black">
                      IEEE BS
                    </td>
                    <td class="px-6 py-4 text-black"> aphansikar@gmail.com(645752af1a887@786hkYK) </td>
                    <td class="px-6 py-4"> <button
                        type="button"
                        class="text-white bg-red-600 hover:bg-red-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none dark:focus:ring-blue-800"
                        >Delete Reviewer</button
                    ></td>
                   
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th
                        scope="row"
                        class="px-6 py-4 text-black"
                    >
                        3
                    </th>
                    <td class="px-6 py-4 text-black">
                        Anand Suhas Gharpure
                    </td>
                    <td class="px-6 py-4 text-black">
                       Chair,IEEE BS
                    </td>
                    <td class="px-6 py-4 text-black"> a.gharpure@gmail.com(647eabaa636ef@786hkYK) </td>
                    <td class="px-6 py-4"> <button
                        type="button"
                        class="text-white bg-red-600 hover:bg-red-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none dark:focus:ring-blue-800"
                        >Delete Reviewer</button
                    ></td>
                   
                </tr>
                <tr class="border-b bg-gray-200 dark:bg-gray-200 border-gray-200 dark:border-gray-700">
                    <th
                        scope="row"
                        class="px-6 py-4 text-black"
                    >
                        4
                    </th>
                    <td class="px-6 py-4 text-black">
                        Bhanwar Bishnoi
                    </td>
                    <td class="px-6 py-4 text-black">
                      Schneider Electric
                    </td>
                    <td class="px-6 py-4 text-black"> bhanwar.bishnoi@ieee.org(645099f093d0e@786hkYK) </td>
                    <td class="px-6 py-4"> <button
                        type="button"
                        class="text-white bg-red-600 hover:bg-red-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none dark:focus:ring-blue-800"
                        >Delete Reviewer</button
                    ></td>
                   
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th
                        scope="row"
                        class="px-6 py-4 text-black"
                    >
                        5
                    </th>
                    <td class="px-6 py-4 text-black">
                        Dr Prasiddh Trivedi
                    </td>
                    <td class="px-6 py-4 text-black">
                       
                    </td>
                    <td class="px-6 py-4 text-black"> prasiddh.trivedi@rait.ac.in(4eK9uH6iL1) </td>
                    <td class="px-6 py-4"> <button
                        type="button"
                        class="text-white bg-red-600 hover:bg-red-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none dark:focus:ring-blue-800"
                        >Delete Reviewer</button
                    ></td>
                   
                </tr>
            </tbody>
        </table>
    </div>
    <p class="text-blue-800 p-4"><b>Reviewer should have no conflict of interest in reviewing applications assigned.</b></p>
</div>


<footer class="bg-blue-800  shadow m- dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-4  md:items-center md:justify-between">
      <span class="text-lg text-white sm:text-center dark:text-gray-400"> Developed by Prof. Sumit P. Makwana, Digital Content Chair, IEEE Gujarat Section
    </span>
 
    </div>
</footer>

</div>
</body>