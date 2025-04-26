const navbar = document.getElementById("navbar")

navbar.innerHTML = `
    <div style="width: 0;" id="resNav"
        class="fixed transition-all duration-500 overflow-hidden h-screen top-0 left-0 bg-white z-50">
        <div class="">
            <div class="flex p-5 items-center justify-between">
                <a href="./index.html">
                    <h2 class="uppercase font-medium text-2xl text-nowrap">Logo</h2>
                </a>
                <i id="closeNav" class="fa-solid fa-x text-xl"></i>
            </div>

            <div class="mt-8 text-nowrap px-5 w-full flex flex-col gap-10 justify-between h-[80vh] overflow-auto">
                <ul class="  flex-col gap-8 flex ">
                    <li> <a href="./index.html" class=" hover:text-[#0a3a22] transition-all duration-500">Home</a></li>
                    <li> <a href="./treatments.html"
                            class=" hover:text-[#0a3a22] transition-all duration-500">Treatments</a>
                    </li>
                    <li> <a href="./testimonials.html"
                            class=" hover:text-[#0a3a22] transition-all duration-500">Testimonials</a></li>
                    <li> <a href="./publications.html"
                            class=" hover:text-[#0a3a22] transition-all duration-500">Publications</a></li>
                    <li> <a href="./case-reports.html" class=" hover:text-[#0a3a22] transition-all duration-500">Case
                            Reports</a></li>
                    <li> <a href="./about.html" class=" hover:text-[#0a3a22] transition-all duration-500">About</a></li>
                    <li> <a href="./fees.html" class=" hover:text-[#0a3a22] transition-all duration-500">Fees</a></li>
                    <li> <a href="./contact.html" class=" hover:text-[#0a3a22] transition-all duration-500">Contact</a>
                    </li>
                </ul>
            </div>

        </div>
    </div>

    <div class="w-full">
        <div class="bg-white w-full h-20 flex items-center justify-center ">
            <div class="flex items-center justify-between max-w-7xl w-full mx-auto p-5">
                <a href="./index.html">
                    <h2 class="uppercase font-medium text-2xl">Logo</h2>
                </a>
                <div class="flex items-center gap-3">
                    <ul class="hidden items-center justify-center gap-6 text-gray-800 lg:flex ">
                        <li> <a href="./index.html"
                                class=" hover:opacity-70 cursor-pointer transition-all duration-500">Home</a></li>
                        <li> <a href="./treatments.html"
                                class=" hover:opacity-70 cursor-pointer transition-all duration-500">Treatments</a></li>
                        <li> <a href="./testimonials.html"
                                class=" hover:opacity-70 cursor-pointer transition-all duration-500">Testimonials</a>
                        </li>
                        <li> <a href="./publications.html"
                                class=" hover:opacity-70 cursor-pointer transition-all duration-500">Publications</a>
                        </li>
                        <li> <a href="./case-reports.html"
                                class=" hover:opacity-70 cursor-pointer transition-all duration-500">Case Reports</a>
                        </li>
                        <li> <a href="./about.html"
                                class=" hover:opacity-70 cursor-pointer transition-all duration-500">About</a></li>
                        <li> <a href="./fees.html"
                                class=" hover:opacity-70 cursor-pointer transition-all duration-500">Fees</a></li>
                        <li> <a href="./contact.html"
                                class=" hover:opacity-70 cursor-pointer transition-all duration-500">Contact</a></li>
                    </ul>
                    <i class="fa-solid text-lg fa-bars cursor-pointer lg:!hidden block" id="openNav"></i>
                </div>
            </div>
        </div>
    </div>
`

const closeNav = document.getElementById("closeNav")
const openNav = document.getElementById("openNav")
const resNav = document.getElementById("resNav")

openNav.addEventListener('click', () => {
    resNav.style.width = "100%"
})
closeNav.addEventListener('click', () => {
    resNav.style.width = "0%"
})