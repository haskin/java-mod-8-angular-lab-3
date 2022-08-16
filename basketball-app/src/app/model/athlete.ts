
interface Athlete {
    name: string;
    sport: string;
    active: boolean;
}

const ATHLETE_DATA: Athlete[] = [
    {
        name: "Bill Russel",
        sport: "Basketball",
        active: false
    },
    {
        name: "Simone Biles",
        sport: "Gymnastics",
        active: true
    },
    {
        name: "Rafael Nadel",
        sport: "Tennis",
        active: true
    }
]
export { Athlete, ATHLETE_DATA };