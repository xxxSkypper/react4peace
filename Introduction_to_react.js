let student = {
    name: 'Precious',
    age: 18,
    matricule: 'RCT001',
    examMarks: [10, 90, 100,200],
    address: {
        street: '23 luc d',
        houseNumber: 22,
        region: 'South West',
        country: {
            name: 'Cameroon',
            code: 237,
            currency: 'XAF',
            location: function(){
                console.log('Hey ' + this.name + ' your current location is ' + this.name)
            }
        }
    },
    average: function (){
        let sum = 0;
        let length = this.examMarks.length

        console.log(this.address.country.name);

        for(var i = 0; i < length; i++){
            sum += this.examMarks[i];
        }
        return sum / length;
    }
}

console.log(student.average());
console.log('Student leave in', student.address.country.name)
console.log(student.address.country.location())

let Participants = [
    {
        name: 'Precious',
        reason: 'To learn react',
    },
    {
        name: 'kay',
        reason: 'Better skills in react',
    },
    {
        name: 'Roger',
        reason: 'Learn more on react',
    },
    {
        name: 'Caleb',
        reason: 'Code',
    },
    {
        name: 'Edna',
        reason: 'Start studying react',
    },
    {
        name: 'Margaret Inda',
        reasons: ['Get friendly with react', 'Build better react apps', 'Make good apps']
    },
]

for(let i = 0; i < Participants.length; i++){
    var nameAndReason = '';
    nameAndReason += Participants[i].name;
    nameAndReason += ':';

    if(Participants[i].reason){
        nameAndReason += Participants[i].reason;
    } else if(Participants[i].reasons){
        nameAndReason += Participants[i].reasons.join(' and ');
    }

    console.log(nameAndReason);
}