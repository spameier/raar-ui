# Raar-Ui

[![Build Status](https://github.com/radiorabe/raar-ui/actions/workflows/build.yml/badge.svg)](https://github.com/radiorabe/raar-ui/actions/workflows/build.yml)

An Angular web client for the Radio Archive [RAAR](https://github.com/radiorabe/raar).

## Development

Run `npm install -g @angular/cli` and `npm install` to install all the dependencies.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. The backend API must be running on `http://localhost:3000/`. See https://github.com/radiorabe/raar for corresponding instructions. Otherwise, switch to `proxy-prod.conf.json` in `angular.json` to use the production backend (`archiv.rabe.ch`). Avoid modifying actions in this case!

Run `ng serve` and `npm run cy:open` to open the Cypress test runner (browser tests) or `npm run cy:run` for a single run. The browser tests cover a good amount of the frontend's functionality.

Run `ng test` to run the unit tests of the project (Currently, some dummy specs only).

Run `npm run build:prod` to build the project. The build artifacts will be stored in the `dist/raar-ui` directory.

To keep dependencies up-to-date, run `ng update` to get a list of available updates and follow the instructions.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Smoke Tests

So far, there is only a small cypress test suite for raar-ui. Use the following list
of smoke tests to verify a basically correct behavior:

- Load broadcasts for a show. Infinite scrolling should load more broadcasts
  when the end of the page is reached. Reloading the page displays the
  show's broadcasts again.
- Load broadcasts for a day. Navigating back and forward should update the
  broadcasts as well as the datepicker. Reloading the page displays the
  last date's broadcasts and the correct datepicker selection again.
- Listen to an audio file. Reloading the page plays the audio file again.
  Manually change the audio position and the volume.
- Login with username/password or an access token reloads the broadcast list.
  Locked broadcasts should become available. Logout locks them again.
- When the window size is decreased, the player still looks fine. The left
  menu disappears and must be manually toggled for small sizes.
- Searching for shows and broadcasts works.
- Picking a date via months works.

## Deployment

Run the following command to build and deploy the frontend. You need a correct
SSH host alias called `archiv` pointing to your server.

```bash
$ ./deploy.sh
```

## License

raar-ui is released under the terms of the GNU Affero General Public License.
Copyright 2016-2022 Radio RaBe.
See `LICENSE` for further information.
