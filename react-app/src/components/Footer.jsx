import React from "react";
import "../style/footer.css"
export default function Footer() { 
    return (
      <footer>
        <div className="grid">
          <h3 className="grid--end item1">Brussels Schools Database</h3>

          <p className="grid--end item2">Questions about the database?</p>
          <p className="grid--top item3">
            Find, research and choose the best school for your child
          </p>
          <p className="grid--top item4">
            Email us your questions, experiences or feedback at
            mmikhailova@gmail.com
          </p>
          <p id="rights">® 2023 BrusselSchools</p>
        </div>
      </footer>
    );
} 