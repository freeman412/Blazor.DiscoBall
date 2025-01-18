# Blazor.DiscoBall

This project is a Blazor component that renders a 3D disco ball with animated reflective squares. The disco ball can be customized in terms of size, colorfulness, and motion.  
Based on code from [this CodePen example](https://codepen.io/msaetre/pen/eYwqrb).

## Features

- **Customizable Size**: Adjust the radius of the disco ball.
- **Colorful Mode**: Enable or disable colorful squares.
- **Motion Control**: Pause and restart the disco ball's rotation.

## Getting Started

### Prerequisites

- .NET 8 SDK
- A Blazor project

### Installation

1. Clone the repository or download the project files.
2. Include the required CSS and JS files in your Blazor application:
   ```html
   <link href="_content/Blazor.DiscoBall/css/discoBall.css" rel="stylesheet" />
   <script src="_content/Blazor.DiscoBall/js/discoBall.js"></script>

### Usage
1. ```html 
   <DiscoBall Radius="100" IsColorful="true" Motion="true" />

### Parameters
1. Radius (int): The radius of the disco ball in pixels. Default is 50.
2. IsColorful (bool): Whether the disco ball should have colorful squares. Default is false.
3. Motion (bool): Whether the disco ball should have motion. Default is true.

### Methods
1. PauseDiscoBall(): Pauses the disco ball's rotation.
2. RestartDiscoBall(): Restarts the disco ball's rotation.

### License
This project is licensed under the MIT License. See the LICENSE file for details.