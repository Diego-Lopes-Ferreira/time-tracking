# Time Tracking
> The idea for the time tracking app is to show to me what I'm doing, and where I'm losing time (or gaining time because I'm awesome :fire:). In order to make it, every time you enter the app it will ask you "what have you been doing for the last XX minutes?" - then it will let me pick one or more itens from a list (small cards). When inside the app it will show a configure button, a circular graphic showing my time and the historic information.


## :heavy_check_mark: Features:
* Shows where time is being spent
* Don't steal battery to count the time
* Assign an activity to a specific time
* If you forget, it allow you to mark one or more activities

## :iphone: Installation
Android:
* Download the android apk in this [link](WAIT.FOR.IT) _(todo)_

## :books: Usage example
Give the user an example

![]()
PICTURE

_For more examples and usage, please refer to the [Wiki](https://github.com/Diego-Lopes-Ferreira/)._ _(todo)_

### :computer: Developing

```sh
$ yarn // install dependencies
$ expo start // start the development server
```

### :open_file_folder: Folder Structure
```sh
~/src                      #
├─ database                # 
| ├─ migration.js          # configure database(create tables and queries)
| 
├─ utils                   #
| ├─ api.js                # connections with database
| ├─ styles.js             # all styles/color constants
| ├─ icons-list.json       # list of icons
| 
├─ components              # 
| ├─ header.js             # 
| ├─ card.js               # 
| ├─ pie-chart.js          # 
| ├─ select-list.js        # 
| ├─ card-time.js          # {data, navigation}
| 
├─ pages                   # 
| ├─ config-time.js        # config a time/asks "what have you been doing ... ?"
| ├─ question-time.js      # asks how long in what activities
| ├─ home.js               # list of activities
|   ├─ config-time.js        # list of activities
| ├─ info.js               # shows the info - pie charts and goals
| ├─ settings.js           # get access to configuration pages
| ├─ config-task.js          # config a task/create new task
| ├─ config-cat.js           # config a category/create new category
| ├─ config-goal.js          # config a goal/create new goal
```

## :rocket: Release History
* 0.1.0
    * ~07/2020

## About Me

Diego Lopes Ferreira – [@Twitter](https://twitter.com/Diego_simSouEu) – [@Instagram](https://www.instagram.com/diego.lopes.f/) - [LinkedIn](https://www.linkedin.com/in/diego-lopes-ferreira-a23a8919b/) - [Coders Rank](https://profile.codersrank.io/user/diego-lopes-ferreira)

Distributed under the MIT license. See [license](LICENSE) for more information.
