## Sign Up Form

A simple sign-up form built as part of The Odin Project curriculum. This project focuses on semantic HTML, modern CSS practices, and form validation styling.

---


## Live Site     

The live site can be viewed [here](https://sign-up-from-nbwedev.vercel.app/).           

 
## ✨ Features

CSS Reset – Implemented Josh Comeau’s CSS reset to remove inconsistent default browser styles.

Semantic HTML – Used main and section elements for meaningful document structure.

Two-Panel Layout –  
 Left Panel: Branding and credits.  
 Right Panel: Sign-up form with header, form fields, and call-to-action.      

Form Styling – Labels, inputs, and error states styled for clarity and accessibility.

## 🛠️ Challenges & Breakthroughs

1. Form Structure Issue  
   Initially, the form layout was broken even though CSS selectors were correct.  
   Cause: Not all subsections were enclosed within the main .signup_right-panel.  
   Effect: Only the header was styled correctly, while other sections appeared misaligned.  
   Fix: Ensured that all sub-sections (header, form-area, form-cta) are properly nested inside .signup_right-panel.

2. Input Validation Styling  
   Added :invalid selectors for password validation borders.  
   Adjusted :focus states to avoid overlapping blue outlines and red error borders.  
   Implemented pattern attributes and custom validation messages for stronger form control.

## 📂 Project Structure

.  
 ├── index.html # Main HTML file  
 ├── style.css # Stylesheet with reset + custom styles  
 ├── fonts/ # Norse-Bold font  
 └── images/ # Background & Odin logo

## 📖 Learnings

Importance of semantic markup for maintainable layouts.         
Debugging layout issues often comes down to HTML structure, not just CSS.
