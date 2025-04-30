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

        <div
            class="max-w-7xl w-full md:mt-16 mt-7 mx-auto flex justify-center items-start md:flex-row flex-col gap-10 ">
            <div class="flex gap-10 lg:flex-row flex-col md:items-start md:justify-start items-center justify-center">

                <div class="md:flex hidden flex-col items-center justify-center gap-5 ">
                    <a href="/index.html" class="">
                        <img src="/Docs/Assets/main-logo.png" class="h-10" alt="">
                    </a>
                    <a href="/index.html" class="">
                        <img src="/Docs/Assets/home/award-2017-orange.png" class="h-32" alt="">
                    </a>
                </div>

                <div class="">
                    <div class="border-gray-400 rounded-lg overflow-hidden border">
                        <table class="text-center text-xs">
                            <thead>
                                <tr class="border-b border-gray-400">
                                    <th class="w-20 p-2 border-r border-gray-400">
                                    </th>
                                    <th class="w-16 p-2 border-r border-gray-400">月
                                    </th>
                                    <th class="w-16 p-2 border-r border-gray-400">火
                                    </th>
                                    <th class="w-16 p-2 border-r border-gray-400">水
                                    </th>
                                    <th class="w-16 p-2 border-r border-gray-400">木
                                    </th>
                                    <th class="w-16 p-2 border-r border-gray-400">金
                                    </th>
                                    <th class="w-16 p-2">土</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Morning Row -->
                                <tr class="border-b border-gray-400">
                                    <td class="p-2 border-r border-gray-400">
                                        9:00-12:30</td>
                                    <td class="p-2 border-r border-gray-400">🔵</td>
                                    <td class="p-2 border-r border-gray-400">／</td>
                                    <td class="p-2 border-r border-gray-400">
                                        (🔵)<br><span class="text-xs text-gray-500">※第2週のみ</span>
                                    </td>
                                    <td class="p-2 border-r border-gray-400">🔵</td>
                                    <td class="p-2 border-r border-gray-400">
                                        (🔵)<br><span class="text-xs text-gray-500">※第1週のみ</span>
                                    </td>
                                    <td class="p-2">🔵</td>
                                </tr>

                                <!-- Afternoon Row -->
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
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p class="text-xs text-gray-600 mt-3 md:text-start text-center">休診日 火・水
                        (第1.3.5週)・日・祝日</p>
                </div>
            </div>
            <div class="">
                <p>
                    ※当院は予約制となっております <br>
                    113-0022 <br>
                    東京都文京区千駄木3-40-17 <br>
                    CASA VERDE 2F <br>
                    <a href="tel:+0363145944"
                        class="text-[#59312c] block my-2 bg-white rounded-full py-1 px-3 border w-48 text-center">TEL.
                        03-6314-5944</a>
                    漢方内科 / 内科 / 心療内科
                </p>
                <div class="flex items-center justify-center mt-3">
                    <a href="https://www.google.com/search?q=your+business+name+reviews" target="_blank"
                        class="flex items-center space-x-3 hover:opacity-70 transition-all duration-500">
                        <!-- Google Logo -->
                        <img src="./Docs/Assets/home/Google__G__logo.svg.png" alt="Google logo" class="w-6 h-6">

                        <!-- Review Info -->
                        <div class="text-sm text-gray-800">
                            <div class="flex items-center space-x-1">
                                <!-- Star Icons -->
                                <div class="flex text-yellow-400">
                                    ★★★★★
                                </div>
                                <span class="font-semibold text-gray-900">4.8</span>
                                <span class="text-gray-500">(320 reviews)</span>
                            </div>
                            <span class="underline text-blue-600">Read our Google Reviews</span>
                        </div>
                    </a>
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