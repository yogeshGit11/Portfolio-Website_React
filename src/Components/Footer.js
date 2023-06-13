import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="row footer">
        <footer>
          <div className="footer_text">
            <strong>Author: Yogesh Chaudhari</strong>
            <div>
            <a href="mailto:ymali2434@gmail.com">
                {" "}
                <i className="fa-solid fa-square-envelope h2 me-4 text-warning"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/yogesh-chaudhari-29ab70219"
                
              >
                {" "}
                <i class="fa-brands fa-linkedin h2 me-4"></i>
              </a>

              <a
                href="https://www.instagram.com/yogesh_ypc/"
  
              >
                {" "}
                <i class="fa-brands fa-square-instagram h2 me-4 text-danger"></i>
              </a>

              <a href="https://github.com/yogeshGit11 me-4 text-dark"  > <i class="fa-brands fa-square-github h2" ></i></a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
