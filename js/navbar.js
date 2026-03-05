var Nav = document.getElementById("navbar");
Nav.innerHTML=`
 <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <img class="img1" src="../assets/pics/appli.png" alt="">
                    <h2 class="main-logo">TASHA</h2>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../../../tasha/category.html">Categories</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contact.html">Contact Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="about.html">About Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
`;

var Footer = document.getElementById("footer");
Footer.innerHTML=`
<footer class="tasha-footer">
                <div class="container">
                    <div class="row gy-3">

                        <div class="col-lg-4 col-md-6">
                            <h3 class="footer-logo">TASHA</h3>
                            <p class="footer-text">
                                Premium kitchen appliances designed for performance, durability,
                                and modern living.
                            </p>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <h5 class="footer-title">Quick Links</h5>
                            <ul class="footer-links">
                                <li><a href="../index.html">Home</a></li>
                                <li><a href="../category.html">Categories</a></li>
                                <li><a href="../about.html">About Us</a></li>
                                <li><a href="../contact.html">Contact Us</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-4 col-md-6">
                            <h5 class="footer-title">Contact</h5>
                            <p class="footer-text mb-1"> 🖂 support@tasha.com</p>
                            <p class="footer-text">☏ +92 310 2044321</p>
                        </div>

                    </div>

                    <hr class="footer-divider">

                    <div class="footer-bottom text-center">
                        <p>© 2026 <span>TASHA</span>. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
`

;


