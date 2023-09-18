import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({ errorFormat: 'pretty' })

async function main() {
    const cardTypes = [
        'Equip',
        'Field',
        'Magic',
        'Monster',
        'Ritual',
        'Trap',
    ];

    for await (const type of cardTypes) {
        await prisma.cardType.create({
            data: { name: type }
        })
    }

    const guardianStars = [
        {
            name: 'Sun',
            strongAgainst: 'Moon',
            weakAgainst: 'Mercury'
        },
        {
            name: 'Mercury',
            strongAgainst: 'Sun',
            weakAgainst: 'Venus'
        },
        {
            name: 'Venus',
            strongAgainst: 'Mercury',
            weakAgainst: 'Moon'
        },
        {
            name: 'Moon',
            strongAgainst: 'Venus',
            weakAgainst: 'Sun'
        },
        {
            name: 'Mars',
            strongAgainst: 'Jupiter',
            weakAgainst: 'Neptune'
        },
        {
            name: 'Jupiter',
            strongAgainst: 'Saturn',
            weakAgainst: 'Mars'
        },
        {
            name: 'Saturn',
            strongAgainst: 'Uranus',
            weakAgainst: 'Jupiter'
        },
        {
            name: 'Uranus',
            strongAgainst: 'Pluto',
            weakAgainst: 'Saturn'
        },
        {
            name: 'Neptune',
            strongAgainst: 'Mars',
            weakAgainst: 'Pluto'
        },
        {
            name: 'Pluto',
            strongAgainst: 'Neptune',
            weakAgainst: 'Uranus'
        }
    ]

    for await (const guardian of guardianStars) {
        await prisma.guardianStars.create({
            data: guardian
        })
    }

    const types = [
        'Aqua',
        'Beast',
        'Beast-Warrior',
        'Dinosaur',
        'Divine-Beast',
        'Dragon',
        'Fairy',
        'Fiend',
        'Fish',
        'Insect',
        'Machine',
        'Plant',
        'Pyro',
        'Reptile',
        'Rock',
        'Sea Serpent',
        'Spellcaster',
        'Thunder',
        'Warrior',
        'Winged Beast',
        'Wyrm',
        'Zombie'
    ];

    for await (const type of types) {
        await prisma.type.create({
            data: { name: type }
        })
    }

    const duelists = [
        'Simon Muran',
        'Teana',
        'Jono',
        'Villaguer 1',
        'Villaguer 2',
        'Villaguer 3',
        'Seto',
        'Heishin',
        'Rex Raptor',
        'Weevil Underwood',
        'Mai Valentine',
        'Bandit Keith',
        'Shadi',
        'Yami Bakura',
        'Pegasus',
        'Isis',
        'Kaiba',
        'Mage Soldier',
        'Teana 2nd',
        'Jono 2nd',
        'Ocean Mage',
        'High Mage Secmeton',
        'Forest Mage',
        'High Mage Anubisius',
        'Mountain Mage',
        'High Mage Atenza',
        'Desert Mage',
        'High Mage Martis',
        'Meadow Mage',
        'High Mage Kepura',
        'Labyrinth Mage',
        'Seto 2nd',
        'Guardian Sebek',
        'Guardian Neku',
        'Heishin 2nd',
        'Seto 3rd',
        'Darknite',
        'Nitemare',
        'Duel Master K',
    ];

    for await (const duelist of duelists) {
        await prisma.duelists.create({
            data: { name: duelist }
        })
    }

    const ranks = [
        'S-POW',
        'A-POW',
        'B-POW',
        'C-POW',
        'D-POW',
        'S-TEC',
        'A-TEC',
        'B-TEC',
        'C-TEC',
        'D-TEC',
    ];

    for await (const rank of ranks) {
        await prisma.ranks.create({
            data: { name: rank }
        })
    }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})