    // JSON 
    //JSON Stringify
    var dog = {
      "name": "Sophie",
      "age": 3,
      "weight": 20,
      "x": ["asdf"]
    }
    var dogJSON = JSON.stringify(dog);
    console.log(dogJSON);

    // JSON parse
    dog = JSON.parse(dogJSON);
    console.log(dog);

