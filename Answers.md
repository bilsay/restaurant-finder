# Bilsay Yildirim Answers

  - How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

> On and off it took be 2-3 days and 5-6 hours in total. The first 2-3 hours were spent on doing the setup with ExpressJs + Grunt +  + Sass + Handlebars. 
> 
> I think I have spent a proper time for the task but if I had to add more I would prepare I would add some tests with jasmine, add more information from the data, add filters to filter results, make sure everything is minified, add a form validation with something like;
>  https://www.npmjs.com/package/postcode

  - What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
 
> I think the technologies I have picked, specially using expressjs as a server and grunt as task manager, sass as the css extension language are good examples but I really didn't had to do anything on simple javascript just to impress. My general approach was (and always is) this; If I need to solve something, I first check if it has been solved already. If yes, I use the existing, If not I sit down and try to figure out what is the most minimal and best performing way to do this. Was tempted to use ES6, Reactjs but I guess those will be later to discover.

- How would you track down a performance issue in production? Have you ever had to do this?

> Yes for 7 years now, the first thing I would do would be to open the developer console or an external tool like firebug to check if there are errors. Things to look are heavy amount of requests, heavy dom operations, heavy css selectors, memory leaks, circular references. For memory leaks libraries like this would prove useful also;
> https://www.npmjs.com/package/memwatch

- How would you improve the JUST EAT APIs that you just used?

> First I would remove empty data if not exists, like 'deals' or 'seoName', unless there is a semantic meaning in keeping them. The other thing that came to my mind was to check if this can be improved (the data size can be minimized, possible stale data issue eliminated by using json graph. Never applied it but very interested to check if it would effect;
>  http://netflix.github.io/falcor/documentation/jsongraph.html

  - Please describe yourself using JSON.
```json
    var bilsay = {
    "info": {
        "name": "Bilsay",
        "surname": "Yildirim",
        "dateOfBirth": "Jul 10 84",
        "city": "Izmir",
        "home": "Karsiyaka",
        "sea": "Aegean Sea"
    },
    "music": {
        "listensTo": {
            "spotifyUri": "https://player.spotify.com/user/bilsay",
            "topArtists": [
                "Red House Painters",
                "Pink Floyd",
                "Great Lake Swimmers",
                "Sigur Ros",
                "Steve Vai",
                "Joe Satriani",
                "Arctic Monkeys",
                "Radiohead",
                "Rhye",
                "Massive Attack",
                "Bonobo"
            ]
        },
        "plays": {
            "instruments": [
                "Electro Guitar",
                "Bass Guitar",
                "Acoustic Guitar",
                "Lotusdrum",
                "Cajon",
                "Keyboard"
            ],
            "bands": [
                "kafa",
                "a new psychedelic band without a name"
            ],
            "organizes": [
                {
                    "name": "Improsessions",
                    "facebookUrl": "https://www.facebook.com/improsessionsmusic/?fref=ts"
                }
            ],
            "soundCloudUrl": "soundcloud.com/bilsay"
        }
    },
    
    "books": {
        "lastsRead": {
            "name": "The Fall",
            "author": "Albert Camus"
        },
        "top": [
            {
                "name": "Before Philosophy",
                "author": "Henri Frankfort"
            },
            {
                "name": "Utopia",
                "author": "Thomas More"
            },
            {
                "name": "The Magus",
                "author": "John Fowles"
            },
            {
                "name": "The Selfish Gene",
                "author": "Richard Dawkins"
            },
            {
                "name": "The Fall",
                "author": "Albert Camus"
            }
        ]
    },
    "movies": {
        "top": [
            "Vanilla Sky",
            "A man from the Earth",
            "Quest for fire",
            "The Royal Tenenbaums",
            "Waking life",
            "Gegen die wand",
            "Machinist",
            "Prestige",
            "Clerks I",
            "Everything is Illuminated"
        ],
        "lastWatched": "Quest for fire"
    },
    "paints": true,
    "writes": true,
    "talksLoadsAboutHisPhilosphy": true,
    "talksLoadsAboutHistory": true,
    "favouriteBooze": [
        "Gin",
        "Old Fashioned",
        "Tequila"
    ],
    "favouriteCity": "Barcelona",
    "speaks": [
        {
            "lang": "English",
            "level": 5
        },
        {
            "lang": "Turkish",
            "level": 5
        },
        {
            "lang": "Spanish",
            "level": 3
        }
    ],

    "sports": {
        "plays": [
            {
                "name": "Basketball",
                "level": 5
            },
            {
                "name": "Football",
                "level": 3.5,
                "description": "Does not follow football but would play if you threw him a ball"
            },
            {
                "name": "Voleyball",
                "level": 3.5,
                "description": "Only on the beach"
            },
            {
                "name": "Tenis",
                "level": 3.5,
                "description": "Only if you threw him a ball"
            },
            {
                "name": "Table tenis",
                "level": 4,
                "description": "Very good in summer time, skills were never tested during winter."
            }
        ],
        "follows": [],
        "supports": "Karsiyaka"
    }
}
```
