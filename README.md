ImagePipeline Wizard

Project Overview

ImagePipeline Wizard is a web application designed to enable users to upload images, draw masks over them, and export the generated masks as separate images. This tool is ideal for tasks requiring image annotation or mask generation.

Features

Image Upload:

Users can upload images in JPEG or PNG formats.

Uploaded images are displayed on a canvas for editing.

Mask Drawing:

Users can draw on the uploaded image using a brush to create a mask.

The drawn area is shown in white, while the background is displayed in black.

Brush Controls:

Users can adjust the brush size to suit their needs.

Mask Export:

Generate and save the mask as a separate image file.

Optionally clear the canvas for new drawings.

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

git clone https://github.com/your-username/imagepipeline-wizard.git

Navigate to the project directory:

cd imagepipeline-wizard

Install dependencies:

npm install
# or
yarn install

Start the development server:

npm start
# or
yarn start

Open the application in your browser at http://localhost:3000.

Challenges and Solutions

Canvas Integration:
Integrating drawing libraries like Fabric.js required understanding their APIs to implement mask drawing effectively. Extensive documentation and community examples helped resolve this.

Mask Export:
Ensuring the mask output matched specifications (white for drawn areas, black for background) required experimenting with canvas operations and image processing methods.

Responsive UI:
Adjusting the layout to display the original image and mask side-by-side presented some layout challenges, which were solved using CSS Flexbox and Grid.

Deployment

If you wish to deploy this application:

Build the project:

npm run build

Deploy using platforms like Vercel or Netlify by uploading the build/ directory.

Contribution

Feel free to fork the repository and submit pull requests for new features or improvements. For significant changes, please open an issue first to discuss what you would like to contribute.