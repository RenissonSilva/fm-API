import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({ errorFormat: 'pretty' })

async function main() {
    // const cardTypes = [
    //     'Equip',
    //     'Field',
    //     'Magic',
    //     'Monster',
    //     'Ritual',
    //     'Trap',
    // ];

    // for await (const type of cardTypes) {
    //     await prisma.cardType.create({
    //         data: { name: type }
    //     })
    // }

    // const guardianStars = [
    //     {
    //         name: 'Sun',
    //         strongAgainst: 'Moon',
    //         weakAgainst: 'Mercury'
    //     },
    //     {
    //         name: 'Mercury',
    //         strongAgainst: 'Sun',
    //         weakAgainst: 'Venus'
    //     },
    //     {
    //         name: 'Venus',
    //         strongAgainst: 'Mercury',
    //         weakAgainst: 'Moon'
    //     },
    //     {
    //         name: 'Moon',
    //         strongAgainst: 'Venus',
    //         weakAgainst: 'Sun'
    //     },
    //     {
    //         name: 'Mars',
    //         strongAgainst: 'Jupiter',
    //         weakAgainst: 'Neptune'
    //     },
    //     {
    //         name: 'Jupiter',
    //         strongAgainst: 'Saturn',
    //         weakAgainst: 'Mars'
    //     },
    //     {
    //         name: 'Saturn',
    //         strongAgainst: 'Uranus',
    //         weakAgainst: 'Jupiter'
    //     },
    //     {
    //         name: 'Uranus',
    //         strongAgainst: 'Pluto',
    //         weakAgainst: 'Saturn'
    //     },
    //     {
    //         name: 'Neptune',
    //         strongAgainst: 'Mars',
    //         weakAgainst: 'Pluto'
    //     },
    //     {
    //         name: 'Pluto',
    //         strongAgainst: 'Neptune',
    //         weakAgainst: 'Uranus'
    //     }
    // ]

    // for await (const guardian of guardianStars) {
    //     await prisma.guardianStars.create({
    //         data: guardian
    //     })
    // }

    // const types = [
    //     'Aqua',
    //     'Beast',
    //     'Beast-Warrior',
    //     'Dinosaur',
    //     'Divine-Beast',
    //     'Dragon',
    //     'Fairy',
    //     'Fiend',
    //     'Fish',
    //     'Insect',
    //     'Machine',
    //     'Plant',
    //     'Pyro',
    //     'Reptile',
    //     'Rock',
    //     'Sea Serpent',
    //     'Spellcaster',
    //     'Thunder',
    //     'Warrior',
    //     'Winged Beast',
    //     'Wyrm',
    //     'Zombie'
    // ];

    // for await (const type of types) {
    //     await prisma.type.create({
    //         data: { name: type }
    //     })
    // }

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