const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer class="bg-gray-50 md:p-10 p-5 py-10 md:py-16">

        <div class="flex items-center justify-center flex-col gap-5">
            <div class="md:hidden flex flex-col items-center justify-center gap-5 ">
                <a href="/index.html" class="">
                    <img src="/Docs/Assets/main-logo.png" class="h-10" alt="">
                </a>
                <a href="/index.html" class="">
                    <img src="/Docs/Assets/home/award-2017-orange.png" class="h-32" alt="">
                </a>
            </div>

            <ul class="space-y-2 flex gap-x-10 gap-y-4 justify-center items-center flex-wrap">
                <li><a href="/index.html" class="hover:opacity-60 transition-all duration-500 ">
                        Home</a></li>
                <li><a href="/about.html" class="hover:opacity-60 transition-all duration-500 ">
                        About</a></li>
                <li><a href="/case-reports.html" class="hover:opacity-60 transition-all duration-500 ">
                        Case Reports</a></li>
                <li><a href="/treatments.html" class="hover:opacity-60 transition-all duration-500 ">
                        Treatments</a></li>
                <li><a href="/testimonials.html" class="hover:opacity-60 transition-all duration-500 ">
                        Testimonials</a></li>
                <li><a href="/publications.html" class="hover:opacity-60 transition-all duration-500 ">
                        Publications</a></li>
                <li><a href="/fees.html" class="hover:opacity-60 transition-all duration-500 ">
                        Fees</a></li>
                <li><a href="/contact.html" class="hover:opacity-60 transition-all duration-500 ">
                        Contact</a></li>
            </ul>
        </div>

        <div class="max-w-7xl w-full md:mt-16 mt-7 mx-auto flex justify-center items-start md:flex-row flex-col gap-10 ">
        <div class="flex gap-10 lg:flex-row flex-col md:items-start md:justify-start items-center justify-center">
            <div class="">
                <img src="./Docs/Assets/home/map.jpg" class="md:w-80 w-full" alt="">
            </div>
            <div class="md:flex hidden flex-col items-center justify-center gap-2 ">
                <a href="/index.html" class="">
                    <img src="/Docs/Assets/main-logo.png" class="h-10" alt="">
                </a>
                <p class="text-gray-700 my-2">15532 92A Ave, Surrey B.C</p>
                <a href="tel:+6408323568"
                    class="text-[#59312c] block bg-white rounded-full py-1 px-3 border w-48 text-center">TEL.
                    640 832 3568</a>
                <p class="text-gray-700 my-2">tcmclinic12@gmail.com</p>
                <div class="flex items-center gap-3">
                    <p class="text-gray-700 my-2">Clinic hours: <br>
                        7 days/week <br>
                        10:30am-6pm </p>
                    <a href="/index.html" class="">
                        <img src="/Docs/Assets/home/award-2017-orange.png" class="h-32" alt="">
                    </a>
                </div>

                <div class="flex items-center justify-center">
                    <a href="https://www.google.com/search?q=acupuncture+surrey&oq=acup&gs_lcrp=EgZjaHJvbWUqDAgBECMYJxiABBiKBTIGCAAQRRg5MgwIARAjGCcYgAQYigUyDAgCECMYJxiABBiKBTIGCAMQRRg9MgYIBBBFGD0yBggFEEUYPDISCAYQABhDGLEDGMkDGIAEGIoFMgoIBxAAGJIDGIAEMgoICBAAGLEDGIAEMhAICRAuGK8BGMcBGLoCGIAEMgcIChAAGIAEMgcICxAAGIAEMgoIDBAAGLEDGIAEMgoIDRAAGLEDGIAEMgcIDhAAGIAE0gEHODU4ajBqOagCDrACAfEFz-cs9E1geSzxBc_nLPRNYHks&client=ms-android-samsung-ss&sourceid=chrome-mobile&ie=UTF-8#vhid=/g/11b62t81cz&vssid=lcl"
                        target="_blank"
                        class="flex items-center space-x-3 hover:opacity-70 transition-all duration-500">
                        <!-- Google Logo -->
                        <img src="./Docs/Assets/home/Google__G__logo.svg.png" alt="Google logo" class="w-6 h-6">

                        <!-- Review Info -->
                        <div class="text-sm text-gray-800 mt-2">
                            <div class="flex items-center space-x-1">
                                <!-- Star Icons -->
                                <div class="flex text-yellow-400">
                                    ★★★★★
                                </div>
                                <span class="font-semibold text-gray-900">4.8</span>
                                <span class="text-gray-500 text-xs">(320 reviews)</span>
                            </div>
                            <span class="underline text-blue-600">Read our Google Reviews</span>
                        </div>
                    </a>
                </div>
                <p>
                </p>

            </div>

            <div class="">
                <div class="border-gray-400 rounded-lg overflow-hidden border">
                    <table class="text-center text-xs">
                        <thead>
                            <tr class="border-b border-gray-400">
                                <th class="w-20 p-2 border-r border-gray-400">Time</th>
                                <th class="w-16 p-2 border-r border-gray-400">Mon
                                </th>
                                <th class="w-16 p-2 border-r border-gray-400">Tue
                                </th>
                                <th class="w-16 p-2 border-r border-gray-400">Wed
                                </th>
                                <th class="w-16 p-2 border-r border-gray-400">Thu
                                </th>
                                <th class="w-16 p-2 border-r border-gray-400">Fri
                                </th>
                                <th class="w-16 p-2 border-r border-gray-400">Sat</th>
                                <th class="w-16 p-2">Sun</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Morning Row -->
                            <tr class="border-b border-gray-400">
                                <td class="p-2 border-r border-gray-400">
                                    9:00-6:00</td>
                                <td class="p-2 border-r border-gray-400">🔵</td>
                                <td class="p-2 border-r border-gray-400">🔵</td>
                                <td class="p-2 border-r border-gray-400">🔵</td>
                                <td class="p-2 border-r border-gray-400">🔵</td>
                                <td class="p-2 border-r border-gray-400">🔵</td>
                                <td class="p-2 border-r border-gray-400">🔵</td>
                                <td class="p-2">🔵</td>
                            </tr>

                            <!-- Afternoon Row 
                                <tr>
                                    <td class="p-2 border-r border-gray-400">
                                        14:30-17:30
                                    </td>
                                    <td class="p-2 border-r border-gray-400">／</td>
                                    <td class="p-2 border-r border-gray-400">／</td>
                                    <td class="p-2 border-r border-gray-400">
                                        (🔵)<br><span class="text-xs text-gray-500">※第2週のみ</span>
                                    </td>
                                    <td class="p-2 border-r border-gray-400">🔵</td>
                                    <td class="p-2 border-r border-gray-400">🔵</td>
                                    <td class="p-2">／</td>
                                </tr> -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </div>
    </footer>
    <div
        class="w-full mx-auto text-white bg-[#59312c] p-5 flex items-center justify-center gap-4 text-center flex-col text-gray-700 ">
        <p class="text-sm">Copyright © Dr.Chun-Kai Jason Wang Surrey Acupuncture and Chinese Medicine, 2017-2024. All
            Rights Reserved. </p>
    </div>
`