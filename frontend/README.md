# Frontend

## Development
Please ensure that you have watched a 10 minute tutorial for React before looking at this project.

Run development server:
```
yarn run dev
```

## Structure
* tailwind.config.js: custom color values
* Dockerfile: Containerize the frontend project using nginx
* index.html: Entry point for react project
* public: Static files that get copied upon building
* src:
  * main.tsx: main react element, contains the routing
  * index.css: top level css
  * assets: contains media that can be included into components
  * components: reusable react components
  * sites: Actual sites for this project. They get instantiated in main.tsx.