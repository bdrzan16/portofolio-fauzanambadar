// ================ RESUME PAGE ==================

const myResume = [
    // ================ EXPERIENCE ==================
    {
        category: "EXPERIENCE",
        headline: "More than 1 years experience as a <span class='text-aksen'>Developer</span>",
        list: [
            { title: "Web Developer (Internship)", desc: "PT. Hydragi Teknoplus Indonesia (Feb 2024 - Agu 2024)" },
            { title: "Web Developer (Internship)", desc: "PT. Sindigilive Teknologi Kreatif (Okt 2024 - Jan 2025)" },
            { title: "Web Developer (Internship)", desc: "Yayasan Maqdis (Feb 2026 - Apr 2026)" }
        ]
    },
    // ================ EDUCATION ==================
    {
        category: "EDUCATION",
        headline: "Academic <span class='text-aksen'>Background</span>",
        list: [
            { title: "STMIK AMIKBANDUNG | IPK/GPA: 3.64/4.00", desc: "S1 Teknik Informatika (2021 - 2025)" },
            { title: "SMK Unggulan Terpadu PGII", desc: "Multimedia (2018 - 2021)" }
        ]
    },
    // ================ SKILLS ==================
    {
        category: "SKILLS",
        headline: "Technical <span class='text-aksen'>Proficiency</span>",
        list: [
            { title: "Programming Language", desc: "PHP, Javascript & Dart" },
            { title: "Framework & Library", desc: "Laravel, React.js, Bootstrap, Tailwind CSS & Flutter" },
            { title: "Database", desc: "MySQL & SQLite" },
            { title: "Version Control", desc: "Git (Github & Gitlab)" },
            { title: "Tools", desc: "Visual Studio Code, Android Studio, Postman, Laragon, Figma" }
        ]
    }
];

// ================ RESUME VIEW ==================
const wrapper = document.getElementById('slider-wrapper');

myResume.forEach(data => {
    const slideHTML = `
        <div class="slide">
            <div class="row">
                <div class="col-md-5 pb-3 pb-md-0">
                    <h6 class="text-aksen">${data.category}</h6>
                    <h2 class="text-white">${data.headline}</h2>
                </div>
                <div class="col-md-7">
                    <ul class="timeline">
                        ${data.list.map(item => `
                            <li>
                                <strong class="text-aksen">${item.title}</strong>
                                <p class="text-white">${item.desc}</p>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        </div>`;
    wrapper.innerHTML += slideHTML;
});

// ================ DOTS ==================
const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
    // ================ FUNCTION DOTS ACTIVE ==================
    dot.addEventListener('click', () => {
        wrapper.style.transform = `translateX(-${index * 100}%)`;
        
        document.querySelector('.slider-dots .active').classList.remove('active');
        dot.classList.add('active');

        updateSliderHeight(index);
    });

    // ================ FUNCTION CHANGE HEIGHT RESUME ==================
    function updateSliderHeight(index) {
        const slides = document.querySelectorAll('.slide');
        const container = document.querySelector('.slider-container');
        
        const activeSlideHeight = slides[index].offsetHeight;
        
        container.style.height = activeSlideHeight + 'px';
    }

    window.addEventListener('load', () => updateSliderHeight(0));
});

// ================ PORTFOLIO PAGE ==================
const projects = [
    { name: "APTANDI", img: "aptandi.png", desc: "APTANDI (Aplikasi Pemetaan Pesantren dan Da'i MDI) adalah platform berbasis website yang bertujuan untuk memberikan informasi bagi pengguna, tempat promosi bagi pesantren dan mempermudah pengguna yang ingin mencari sebuah pesantren atau da’i di Indonesia. Pada proyek ini, saya sebagai Web Developer bertanggung jawab pada bagian back-end dan desain user interface. Berikut rincian tugas yang saya kerjakan yaitu mengintegrasikan database, mengimplementasikan validasi input, mengembangkan tampilan pada beberapa halaman dan membuat tampilan desain UI/UX di Figma.", link: "https://drive.google.com/drive/folders/1ti-e6Iu6PB5sJL8r8tacEG0keKMADBrX?usp=drive_link" },
    { name: "DELISHLINK", img: "delishlink.png", desc: "Delishlink adalah platform berbasis website yang bertujuan untuk membantu pegawai restoran ataupun cafe dalam mencatat pesanan customer, reservasi tempat dan disini juga admin restoran bisa menambahkan kategori makanan atau minuman serta menu hidangan baru yang akan dijual ke customer. Pada proyek ini, saya sebagai Web Developer bertanggung jawab pada bagian back-end dan desain user interface. Berikut rincian tugas yang saya kerjakan yaitu membuat tampilan pada beberapa halaman, mengintegrasikan data, mengimplementasikan validasi CRUD, membuat tampilan desain UI/UX di Figma.", link: "https://drive.google.com/drive/folders/1dAqnE0XPgwZY5smGZoduCGxVH0qKHwhD?usp=sharing" },
    { name: "O-SEEK", img: "o-seek.png", desc: "O-Seek (Orphanage Seek) adalah platform berbasis website yang bertujuan untuk memberikan informasi panti asuhan yang ada di kota Bandung Raya, mempermudah pengguna yang ingin mencari panti asuhan dan membantu pihak panti asuhan mendapatkan donasi melalui sebuah program donasi yang ada di website O-Seek. Pada proyek ini, saya sebagai Web Developer bertanggung jawab pada bagian front-end dan desain user interface. Berikut rincian tugas yang saya kerjakan yaitu membuat tampilan landing page, mengintegrasikan data, mengimplementasikan validasi input, membantu beberapa pembuatan fitur pada bagian back-end dan membuat tampilan desain UI/UX di Figma.", link: "https://drive.google.com/drive/folders/1qdtsyrjC7s3Y3X0tV47zVVPKpL8yJz0g?usp=sharing" },
    { name: "WARGAKU APP", img: "wargaku_app.png", desc: "Wargaku App adalah platform berbasis android yang bertujuan untuk membantu pengurus RT dalam mengumpulkan, memperbarui, dan mengelola data penduduk secara digital, serta memudahkan pengurus RW dalam mengecek dan mengakses data dari seluruh RT secara langsung. Pada proyek ini, saya ditugaskan untuk membantu mempermudah RT dan RW setempat dalam melakukan tugasnya. Pengerjaan aplikasi ini dilakukan secara mandiri. Dimulai dengan menganalisis kebutuhan RT dan RW, membuat alur kerja aplikasi, membuat tampilan desain UI/UX, implementasikan tampilan aplikasi, mengintegrasikan database dan mengimplementasikan validasi input dengan menggunakan API.", link: "https://drive.google.com/drive/folders/1WQrbjTOGEum_WV3pnzw6qjezuNuE2l65?usp=sharing" }
];

const portfolioContainer = document.getElementById('portfolio-container');

projects.forEach((project, index) => {
    portfolioContainer.innerHTML += `
        <div class="col-md-3 mb-4">
            <div class="card shadow-sm border-0">
                <div class="img-container overflow-hidden img-port">
                    <img src="assets/image/${project.img}" class="card-img-top" alt="${project.name}">
                </div>
                <div class="card-body d-flex flex-column">
                    <div class="d-flex justify-content-between align-items-center mb-2" 
                        style="cursor: pointer;" 
                        data-bs-toggle="collapse" 
                        data-bs-target=".multi-collapse${index}">
                        <h5 class="card-title mb-0">${project.name}</h5>
                        <i class="bi bi-chevron-down toggle-icon"></i>
                    </div>

                    <div id="parentDesc${index}">
                        <p class="card-text mb-1 multi-collapse${index} collapse show" id="preview${index}">
                            ${project.desc.substring(0, 50)}...
                        </p>
                        <div class="collapse multi-collapse${index}" id="collapseDesc${index}">
                            <p class="card-text">${project.desc}</p>
                        </div>
                    </div>

                    <div class="mt-auto pt-3">
                        <a href="${project.link}" class="btn btn-aksen fw-medium text-white w-100" target="_blank" rel="noopener noreferrer">
                            See more...
                        </a>
                    </div>
                </div>
            </div>
        </div>`;
});