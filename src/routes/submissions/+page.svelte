<style>
    td,th{
        border: 1px solid lightgray;
        
    }
</style>
<div  class="block m-4  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
   

<div class="container-fluid text-center mt-80 p-6">
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
                    alt="Flowbite Logo"
                />
                <span
                    class="self-center text-2xl font-semibold whitespace-nowrap text-white"
                    >Review Application</span
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
    <h1 class="text-5xl text-gray-900 dark:text-white">
        Award Application
    </h1>
    
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg p-4">
        <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
            <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                    <th
                        scope="col"
                        class="px-6 py-3 bg-gray-200 dark:bg-gray-800"
                    >
                        Application Number
                    </th>
                    <th scope="col"  class="px-6 py-3 bg-gray-200 dark:bg-gray-800"> Name & Affiliation </th>
                    <th
                        scope="col"
                        class="px-6 py-3 bg-gray-200 dark:bg-gray-800"
                    >
                        Application Date
                    </th>
                    <th scope="col"  class="px-6 py-3 bg-gray-200 dark:bg-gray-800"> Award Name </th>
                    <th scope="col"  class="px-6 py-3 bg-gray-200 dark:bg-gray-800"> Score Given </th>
                    <th scope="col"  class="px-6 py-3 bg-gray-200 dark:bg-gray-800" />
                </tr>
            </thead>
            <tbody>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th
                        scope="row"
                        class="px-6 py-4"
                    >
                        50
                    </th>
                    <td class="px-6 py-4">
                        Applicant1 (G H Raisoni Institute of Engineering and
                        Technology, Nagpur)
                    </td>
                    <td class="px-6 py-4">
                        2023-04-30 18:29
                    </td>
                    <td class="px-6 py-4"> Best Student Branch Counselor </td>
                    <td class="px-6 py-4"> 30 </td>
                    <td class="px-6 py-4">
                        <button
                            type="button"
                            class="text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none dark:focus:ring-blue-800"
                            >View Details</button
                        >
                        <button
                            type="button"
                            class="text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none dark:focus:ring-blue-800"
                            >Assign Score</button
                        >
                    </td>
                </tr>
                <tr class="border-b border-gray-200 dark:border-gray-700">
                    <th
                        scope="row"
                        class="px-6 py-3 bg-gray-200 dark:bg-gray-800"
                    >
                        51
                    </th>
                    <td class="px-6 py-3 bg-gray-200 dark:bg-gray-800">
                        Applicant1 (G H Raisoni Institute of Engineering and
                        Technology, Nagpur)
                    </td>
                    <td class="px-6 py-3 bg-gray-200 dark:bg-gray-800">
                        2023-04-30 18:35
                    </td>
                    <td class="px-6 py-3 bg-gray-200 dark:bg-gray-800">
                        Best Student Chapter/Society of the Section
                    </td>
                    <td class="px-6 py-3 bg-gray-200 dark:bg-gray-800"> 31 </td>
                    <td class="px-6 py-3 bg-gray-200 dark:bg-gray-800">
                        <button
                            type="button"
                            class="text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none dark:focus:ring-blue-800"
                            >View Details</button
                        >
                        <button
                            type="button"
                            class="text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none dark:focus:ring-blue-800"
                            >Assign Score</button
                        >
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <p class="text-blue-800 p-4"><b>Reviewer should have no conflict of interest in reviewing applications assigned.</b></p>
</div>
</div>
