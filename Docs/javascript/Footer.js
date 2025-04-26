const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer class="bg-gray-50 md:p-10 p-5 py-10 md:py-20">
        <div class="max-w-7xl w-full mx-auto flex justify-between items-start md:flex-row flex-col gap-10 ">
            <div class="w-full">
                <a href="/index.html">
                    <img src="/Docs/Assets/main-logo.png" class="h-14" alt="">
                </a>
            </div>
            <div class="flex justify-between items-start md:flex-row flex-col md:gap-24 gap-8 md:flex-row flex-col ">
                <div class="w-full text-gray-700">
                    <h2 class="font-medium text-xl mb-3 text-gray-800 text-nowrap">Quick Links</h2>
                    <ul class="space-y-2">
                        <li><a href="/index.html" class="hover:underline"> Home</a></li>
                        <li><a href="/about.html" class="hover:underline"> About</a></li>
                        <li><a href="/treatments.html" class="hover:underline"> Treatments</a></li>
                        <li><a href="/publications.html" class="hover:underline"> Publications</a></li>
                    </ul>
                </div>

                <div class="w-full text-gray-700">
                    <h2 class="font-medium text-xl mb-3 text-gray-800">Contact Us</h2>
                    <a href="tel:+6048323568" class="flex items-center gap-2 hover:underline"><i
                            class="fa-solid fa-phone text-lg"></i> 604-832-3568</a>
                    <a href="mailto:tcmclinic12@gmail.com" class="flex items-center gap-2 hover:underline mt-2"> <i
                            class="fa-regular text-xl fa-envelope"></i> tcmclinic12@gmail.com</a>
                    <div>
                    <a href="/contact.html" class="bg-[#59312c] w-full p-3 px-8 block text-center cursor-pointer transition-all duration-500 hover:opacity-80 rounded-lg mt-3 text-white">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div
        class="w-full mx-auto max-w-7xl p-5 flex items-center justify-center gap-4 text-center flex-col text-gray-700 ">
        <p class="text-sm">Copyright © Dr.Chun-Kai Jason Wang Surrey Acupuncture and Chinese Medicine, 2017-2024. All
            Rights Reserved. </p>
        <p class="text-sm">15532 92A Ave, Surrey, BC, Canada, V3R 9B1
            Website Development by: 6folds Marketing
        </p>
    </div>
`