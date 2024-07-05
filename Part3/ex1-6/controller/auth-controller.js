
let personsInfo = [
    {
        id: "1",
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        "id": "2",
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": "3",
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": "4",
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

const home = (req, res) => {
    res
        .status(200)
        .send("welcome from router page using cs")
}

const persons = (req, res) => {
    try {
        res
            .status(200)
            .send(personsInfo)
    } catch (error) {
        console.log(error);
    }
}

const currentDate = new Date()

const info = (req, res) => {
    try {
        res
            .status(200)
            .send
            (
                `Phonebook has info of ${personsInfo.length} persons <p> ${currentDate}</p>`)
    } catch (error) {
        console.log(error);
    }
}

const addPerson = async (req, res) => {

    const body = req.body;

    const name = personsInfo.find(n => n.name === body.name)
    if (name) {
        res.send("person already exists")
    }
    if (req.body.name == "" || req.body.number == "") {
        res.send("Plz enter all details")
    }
    else {
        try {

            personsInfo.push(body)
            res.json(personsInfo)

        } catch (error) {
            console.log("error", error);
        }
    }


}

const onePerson = (req, res) => {
    try {
        const id = req.params.id
        const person = personsInfo.find(person => person.id === id)
        console.log(id)
        if (person) {
            res.json(person)
        } else {
            res.status(400).end('no person found')
        }
    } catch (error) {
        console.log(error);
    }
}


module.exports = { home, persons, info, addPerson, onePerson }


