# Codechallenge
## By Alejandro Camacho 2023

Demo https://alextormt.github.io/codechallenge/module1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6. and [Angular Material](https://material.angular.io/)
![Preview](https://firebasestorage.googleapis.com/v0/b/mygallery-1a09b.appspot.com/o/Images%2Fpreview.jpg?alt=media&token=06d1e4d8-a4e6-4f87-bb14-611985782d88)

### Install Dependencies
1. Clone `https://github.com/Alextormt/codechallenge.git` and switch to branch `main`
2. Run `npm i` to install dependencies. 
3. If a problem appears in console , then run `npm i --f`

### Run Project

check your node version with `node -v`

For Node versions less than 17
1. Run `npm run start` to run the dev server. Navigate to `http://localhost:4200/`. 

For Node versions over 17
1. Run `npm run start-legacy-n17` to run the dev server. Navigate to `http://localhost:4200/`. 
2. If a problem appears in console, then run `npm run start-legacy` to run the dev server. Navigate to `http://localhost:4200/`. 

## Project Overview

1. You will be able to interact with two modules that can be accesed by clicking the tabs in the header.
2. Each module has a color theme, however you can switch between themes at any moment by clickng the themes buttons in the header
3. All the Data in both modules is dynamic and loaded with RXJS :). It can be edited using the JSON mocks located in the `/src/app/assets/json` folder. The system will fetch the mocks as if it was a real backend with dynamic data (feel free to change some data)

### Module 1
1. Contains 4 cards with dynamic data, SVG icons,gradient animations and hover effects (You can add more cards via `Module1Mock.json`)

### Module 2
1. Contains 5 images with awesome blur and overlapping effects. Clicking each image will open a Dialog with the image itself and the alt text.
2. Also contains dynamic text on the right side that can be edited 

* the text contents as well as the images src and position can be edited via `Module2Mock.json`

