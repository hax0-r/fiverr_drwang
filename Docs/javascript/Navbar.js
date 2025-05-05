const navbar = document.getElementById("navbar")

navbar.innerHTML = `
       <div class="w-full">
        <div class="bg-white flex-col w-full md:h-24 h-40 flex items-center justify-center ">
            <div class="flex items-center justify-between max-w-7xl w-full mx-auto md:p-5 p-3">
                <a href="./index.html">
                    <img src="/Docs/Assets/main-logo.png" class="md:h-12 h-8" alt="">
                </a>
                <div class="flex items-center md:gap-5 gap-1 lg:w-full justify-end">
                    <div class="lg:block hidden text-gray-700">
                        <a href="tel:+6048323568" class="flex text-[15px] items-center gap-2 hover:underline"><i
                                class="fa-solid fa-phone"></i> 604-832-3568</a>
                        <a href="mailto:tcmclinic12@gmail.com"
                            class="flex text-[15px] items-center gap-2 hover:underline mt-1.5"> <i
                                class="fa-regular text-lg fa-envelope"></i> tcmclinic12@gmail.com</a>
                    </div>
                    <a href="/contact.html">
                        <button
                            class="md:block hidden md:p-3 p-2 w-full bg-[#59312c] text-white rounded-sm transition-all duration-500 hover:opacity-80 cursor-pointer text-nowrap">Book
                            Now</button>
                    </a>
                    <div class="flex flex-col mt-2 ml-3 justify-center items-center text-[#59312c] cursor-pointer"
                        id="openNav">
                        <div class="md:w-12 w-10 rounded-full h-0.5 bg-[#59312c]"></div>
                        <div class="md:w-12 w-10 rounded-full h-0.5 mt-1.5 mb-1 bg-[#59312c]"></div>
                        <p class="md:text-[16px] text-sm">Menu</p>
                    </div>
                </div>
            </div>
            <div class="md:hidden flex items-center justify-between max-w-7xl w-full mx-auto md:p-5 p-3">
                    <div class=" text-gray-700 text-sm">
                        <a href="tel:+6048323568" class="flex items-center gap-2 hover:underline"><i
                                class="fa-solid fa-phone"></i> 604-832-3568</a>
                        <a href="mailto:tcmclinic12@gmail.com"
                            class="flex items-center gap-2 hover:underline mt-1.5"> <i
                                class="fa-regular text-lg fa-envelope"></i> tcmclinic12@gmail.com</a>
                    </div>
                    <a href="/contact.html">
                        <button
                            class=" md:p-3 p-2 w-full bg-[#59312c] text-white rounded-sm transition-all duration-500 hover:opacity-80 cursor-pointer text-nowrap">Book
                            Now</button>
                    </a>
            </div>
        </div>
    </div>

    <div class="hidden" id="resNav">
        <div class="fixed fastFadeIn top-0 left-0 w-full h-screen bg-white z-50 flex">
            <div class="lg:max-w-[30%] p-5 w-full lg:flex hidden items-center justify-center flex-col h-screen">
                <a href="./index.html">
                    <img src="./Docs/Assets/main-logo.png" class="h-10" alt="">
                </a>
                <div class="mt-10 max-w-[20rem] w-full mx-auto flex justify-center">
                    <p class="font-semibold [writing-mode:vertical-rl] text-center">やさしい漢方を</p>
                    <p class="font-semibold [writing-mode:vertical-rl] text-center ml-4">こころとからだに</p>
                    <p class="font-semibold [writing-mode:vertical-rl] text-center ml-4">くらしのそばに、</p>
                </div>
            </div>
            <div class="lg:max-w-[70%] bg-gray-50 w-full">
                <div id="closeNav"
                    class="cursor-pointer text-[#59312c] absolute top-5 right-5 flex flex-col items-center ">
                    <i class="fa-solid fa-x md:text-2xl text-xl"></i>
                    <p class="text-sm">Close</p>
                </div>

                <div class="flex items-center justify-center h-screen p-5 flex-col overflow-auto">

                    <ul class="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-6 max-w-sm w-full">
                        <li> <a href="./index.html"
                                class=" hover:opacity-60 md:text-lg transition-all duration-500">Home</a>
                        </li>
                        <li> <a href="./treatments.html"
                                class=" hover:opacity-60 md:text-lg transition-all duration-500">Treatments</a>
                        </li>
                        <li> <a href="./testimonials.html"
                                class=" hover:opacity-60 md:text-lg transition-all duration-500">Testimonials</a></li>
                        <li> <a href="./publications.html"
                                class=" hover:opacity-60 md:text-lg transition-all duration-500">Publications</a></li>
                        <li> <a href="./case-reports.html"
                                class=" hover:opacity-60 md:text-lg transition-all duration-500">Case
                                Reports</a></li>
                        <li> <a href="./about.html"
                                class=" hover:opacity-60 md:text-lg transition-all duration-500">About</a>
                        </li>
                        <li> <a href="./fees.html"
                                class=" hover:opacity-60 md:text-lg transition-all duration-500">Fees</a>
                        </li>
                        <li> <a href="./contact.html"
                                class=" hover:opacity-60 md:text-lg transition-all duration-500">Contact</a>
                        </li>
                    </ul>
 
                    <div class="max-w-[20rem] lg:hidden block w-full md:mt-10 mt-8">
                        <a href="/contact.html">
                            <button
                                class="md:p-3.5 p-3 w-full bg-[#59312c] text-white rounded-sm font-medium text-lg transition-all duration-500 hover:opacity-80 cursor-pointer">Book
                                Now</button>
                        </a> 
                        <div class="text-gray-700 mt-5">
                            <a href="tel:+6048323568" class="flex text-[15px] justify-center items-center gap-2 hover:underline"><i
                                    class="fa-solid fa-phone"></i> 604-832-3568</a>
                            <a href="mailto:tcmclinic12@gmail.com"
                                class="flex text-[15px] items-center gap-2 hover:underline justify-center mt-1.5"> <i
                                    class="fa-regular text-lg fa-envelope"></i> tcmclinic12@gmail.com</a>
                        </div> 
                    </div>
                    <p class="text-center hidden md:mt-8 mt-4 text-gray-500">CASA VERDE 2F , 3-40-17 Sendagi, Bunkyo-ku, Tokyo
                    </p> 
                </div>
            </div>
        </div>
    </div>
`

const closeNav = document.getElementById("closeNav")
const openNav = document.getElementById("openNav")
const resNav = document.getElementById("resNav")

openNav.addEventListener('click', () => {
    resNav.classList.add("block")
    resNav.classList.remove("hidden")
})
closeNav.addEventListener('click', () => {
    resNav.classList.remove("block")
    resNav.classList.add("hidden")
})