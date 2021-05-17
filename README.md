# The Daily Buzz

## Description

Geardb is a inventory management app for rental companies. It is designed for companies that focus on live events but could cover many needs. It allows tracking of your equipment as well as which employees prepared it. Equipment can be organized in to cases and cases can be placed on tours. Users can only see inventory for the shop they work for.

Created by: Tim Swierzewski

---

## Live Site

Test User:

- Email: thisismail@gmail.com
- PW: testing

Visit: <https://geardb.herokuapp.com>

---

## Setup Locally

Clone the repository from GitHub:

```zsh
  git clone https://github.com/tjswierzewski/geardb
```

Change to directory and install dependencies:

```zsh
  cd geardb
  bundle install
  yarn install
```

Create and set up database:

```zsh
  bundle exec rake db:create
  bundle exec rake db:migrate
  bundle exec rake db:seed
```

In your terminal start your server:

```zsh
  bundle exec rails s
  bundle exec yarn start
```

Finally, navigate to <http://localhost:3000> in your browser.

---

## TODO

- [ ] Picture uploading for users and gear

- [ ] Web socket for indexes

- [ ] Search bars

- [ ] Barcode scanning

- [ ] Different views (eg. Inventory only, Tour with crew index)

### Contribution Guidelines

If you find issues or bugs with this application, please add an issue on GitHub. If you would like to add a feature, please create a pull request and it will be reviewed accordingly.

### License

The project is available as open source under the terms of the MIT License.

[![Codeship Status for tjswierzewski/geardb](https://app.codeship.com/projects/f49c3404-924c-4a9a-af20-33c1185e87fe/status?branch=main)](https://app.codeship.com/projects/443436)
