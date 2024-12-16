NOTE: if the code does not run and have some error after npm install use this command npm install --legacy-peer-deps

ImagePipeline Wizard

Project Overview

ImagePipeline Wizard is a web application designed to enable users to upload images, draw masks over them, and export the generated masks as separate images. This tool is ideal for tasks requiring image annotation or mask generation.

Features

Image Upload:

Users can upload images in JPEG or PNG formats.
Uploaded images are displayed on a canvas for editing.
Mask Drawing:

Users can draw on the uploaded image using a brush to create a mask.
The drawn area is shown in white, and the background is displayed in black.
Brush Controls:

Users can adjust the brush size to suit their needs.

Mask Export:

Generate and save the mask as a separate image file.
Optionally, clear the canvas for new drawings.
Side-by-Side Display:

Display the original image and the generated mask image below the canvas for comparison.
Libraries Used
React: For building the user interface.
react-canvas-draw / Fabric.js: For providing drawing functionality on the canvas.
Setup Instructions
Prerequisites
Ensure you have the following installed:

Node.js
npm or Yarn
Steps to Run Locally
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/imagepipeline-wizard.git
Navigate to the project directory:

bash
Copy code
cd imagepipeline-wizard
Install dependencies:

bash
Copy code
npm install
# or
yarn install
Start the development server:

bash
Copy code
npm start
# or
yarn start
Open the application in your browser at http://localhost:3000.

Challenges and Solutions
Canvas Integration:
Integrating drawing libraries like Fabric.js required a deep dive into their APIs to implement mask drawing effectively. We referred to extensive documentation and community examples to resolve this.

Mask Export:
Ensuring the mask output matched the specifications (white for drawn areas, black for the background) required experimenting with canvas operations and image processing methods.

Responsive UI:
Displaying the original image and mask side-by-side presented layout challenges, which were solved using CSS Flexbox and Grid.