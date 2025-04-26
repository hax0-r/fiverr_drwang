const footer = document.getElementById('footer')
footer.innerHTML = `
    <footer class="bg-gray-50 md:p-10 p-5 py-10 md:py-20">
        <div class="max-w-7xl w-full mx-auto grid md:grid-cols-3 items-start sm:grid-cols-2 grid-cols-1 gap-10 ">

            <div class="w-full">
                <a href="/index.html">
                    <!-- <img src="/Docs/Assets/logo.svg" class="md:h-20 h-14" alt=""> -->
                    <h2 class="uppercase font-medium text-2xl text-nowrap">Logo</h2>
                </a>
            </div>

            <div class="w-full text-gray-700">
                <h2 class="font-medium text-xl mb-3 text-gray-800">Quick Links</h2>
                <ul class="space-y-2">
                    <li><a href="/index.html" class="hover:underline"> Home</a></li>
                    <li><a href="/about.html" class="hover:underline"> About</a></li>
                    <li><a href="/treatments.html" class="hover:underline"> Treatments</a></li>
                    <li><a href="/publications.html" class="hover:underline"> Publications</a></li>
                </ul>
            </div>

            <div class="w-full text-gray-700">
                <h2 class="font-medium text-xl mb-3 text-gray-800">Clinic Hours & Address</h2>
                <p>Mon-Sun: 9:00 am - 6:00 pm
                    <br><br>
                    15532 92A Ave, Surrey <br>
                    B.C., Canada, V3R 9B1
                </p>
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