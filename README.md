# BIRBS

This project is a website for bird lovers to name, share, like, and comment on the birds that they find on the internet and IRL.

## How to Run the Page

### Make sure json-server is installed

```bash
$ npm install -g json-server
```

### Run server & start the page

```bash
$ npm run server
```

```bash
$ npm start
```

## Usage

### Home

On page load, a list of birbs that have been posted are rendered to the Home page.

To like a birb, click the heart emoji.

To comment on a birb, click the plus button under the bird.

### New Birb

To submit a new birb, click 'New Birb.' The application will take you to a form that includes a text input box for the name of the birb, another one for a short story or description of the birb, and an input line for the imgURL of the birb.

Upon submission of the form, the new birb will be posted to Home, ready to be liked and commented on.

### Random Birb

To view a random birb, click 'Random Birb.' The application will take you to a random birb, which you can then like and comment on.