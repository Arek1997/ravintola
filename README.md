<!--# ravintolaAPI

Basic API for ravintola application ->  https://github.com/Vekaltor/ravintola

Present features:

- Adding meals and getting all meals

- Managing seats in table

- Making reservations-->

# ravintola

A web application intended mainly for table reservations. Reservation is done through API operations (frontend logic).
The user, thanks to the React-router-dom library, dynamically changes the content of the page. 
The application also gets all the data from the API about the menu card and displays it.

In the near future:<br>
Possibility to edit the menu as an administrator, and access (possibility to edit) to all reservations.

## Technologies:
<p>Project is created with:</p>
<ul>
  <li>HTML5</li>
  <li>CSS3</li>
  <li>JavaScript (ES6)</li>
  <li>React version: 18.2.0</li>
  <li>react-router-dom version: 6.3.0</li>
  <li>react-redux version: 8.0.4</li>
  <li>redux version: 4.2.0</li>
  <li>redux-thunk version: 2.4.2</li>
  <li>react-icons version: 4.4.0</li>
</ul>

## Setup
To run this project, install it locally using npm:
````
$ cd ../frontend

$ npm install

$ npm start
````
<u>+ for the full works of the application</u>

`run the backend application API from some IDE (for example: IntelliJ IDEA)`

## Features:

### - Reservation
The user selects the date, time and number of places. The booking logic has been programmed 
according to the date and number of seats. Checks if tables are available (verification based 
on current reservations downloaded from the API). At the moment of checking the free tables for a
given hour, all existing free hours are returned ---> the user selects the hour.
<br><Br>
All data from the form are also validated.
<br><Br>
After sending the correct form, the data is sent to the API database and a message is displayed.

![image](https://user-images.githubusercontent.com/56607344/198077196-fc1f90d3-eb85-4743-8b9a-c266484a11c9.png)

### - Admin Panel
Administration panel in progress ... 

#### Filter Dishes

The admin can filter the dishes by category, recommendation status, text phrase.
The loading of dishes is done via API, the redux states (3 stages of data downloading -> change of the "loading" state) allow for lazy loading.
Filters and fetched dishes from the API go to the global state of the application, which is stored by redux.
Each item on the list has access to delete, quick edit the recommendation status and view detailed information.
On the left side, check boxes are used to perform multitasking operations (delete, change status).

![image](https://user-images.githubusercontent.com/56607344/201429928-40ab81c1-8b25-4b06-a02f-475862db64a2.png)

#### Details of the dish

View all information about a specific dish. Possibility to edit any information.
Possibility to remove the dish. Button to go back to the previous list of dishes (if it was filtered, the filters will still be applied)

![image](https://user-images.githubusercontent.com/56607344/201433060-f31b21fd-b2b4-4b1c-90c2-3de6e732f4be.png)


#### Adding dishes

The form is validated, all (*) fields are required and must match the patterns given.
Uploading a photo causes the photo to be replaced in the second part of the form.
After correct completion of the form, a message appears.

![image](https://user-images.githubusercontent.com/56607344/201432316-7185ab31-9cc6-4c65-a230-276a66553ee5.png)



#### Login
```
login: admin

password: admin
```
<br>

![image](https://user-images.githubusercontent.com/56607344/199515558-05080a8f-1acf-49e4-8ed5-e18fafbd02f7.png)

### - Slider
Slider video created with createContext / Providers to handle state. 
Buttons allow you to select a specific slide, arrows scroll to the 
previous and next slide as the queue wraps.

![image](https://user-images.githubusercontent.com/56607344/198077805-fdde4bbe-e339-4655-b658-f21f4bbe4de2.png)

<!--
### - Panel with logging
Functionality written in simple javascript
-->


## Check on your own
https://ravintola.herokuapp.com

## Screenshots:

#### Dishes menu card
![image](https://user-images.githubusercontent.com/56607344/198076947-aec4621d-b379-4626-96a9-bc19c08767c8.png)

#### Navigation
![image](https://user-images.githubusercontent.com/56607344/198080179-6b49f380-77a4-4212-914b-612ecf981ba6.png)

#### Main page
![image](https://user-images.githubusercontent.com/56607344/198079891-9b02fe6e-3a19-4147-9ea7-39d4928ae11a.png)


