# MOVR Telebot
<p>A project for Concordia Hackathon 2017</p>

## Inspiration
<p>Have you ever experienced leaving home and miss your family, your pet, and especially your room!? Worry not, we feel you. That's when the MOVR Telebot comes in. In fact, we watched Modern Family (link) and thought the idea was inspiring. When video-calling your loved ones, MOVR lets you wander around the room via an enhanced UX design. Whether it's back home or on a beach in Mexico, it makes long-distance feel just a little bit closer.</p>

## What it does
<p>Our MOVR Telebot project is a combination of an Android application, an Intel Edison-based apparatus. When connected in a video call, callers on both ends can control the robot remotely through the application. The communication between the application and the microcontroller is established on Wi-Fi.</p>

## How we built it
<p>The basis of our application begins with the Intel Edison board which we programmed using node.js.<br><br>

Hardware: <br>

Apart from the Intel Edison board, we used limited materials such as DC motors, a breadboard, popsicle sticks and cardboard to build our vehicle. We used duct tape to solidify the structure, and on top of that, we used EV3 Lego wheels. The circuit simply uses the digital pins on the Edison to receive commands from the Android application, and the IoT capability of the microcontroller let us set up a wiFi connection between the user and the driving system. <br><br>

Software: <br>

Development was first done by setting up the ssh on the Intel Edison.
Then, we set up a web server to control the robot from afar.
Tests involving blinking lights were then run based on online tutorials to familiarize ourselves with syntax.
We then coded the motor control system on the Web App, creating a simple user interface with control buttons (left, forward, right).
Once we verified that the system worked, we started working on the Android app. The app was to be used to control the robot while simultaneously streaming video via Sockets. By using the open source Sinch SDK, we were able to implement a quick application by adding additional code for the buttons to control the telebot to send requests to the Node.js server. The streaming of the video was taken care by the Sinch SDK. </p>
