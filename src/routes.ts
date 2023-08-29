import { FastifyInstance } from "fastify"
import { prisma } from "./lib/prisma"
import * as fs from "fs";
import * as path from "path";
import { parse } from 'csv-parse';

export async function appRoutes(app: FastifyInstance) {
    app.get('/csv-to-bd', async (request) => {
        const cardTypes = await prisma.cardType.findMany();
        const types = await prisma.type.findMany();
        const guardianStars = await prisma.guardianStars.findMany();

        (() => {
            const csvFilePath = path.resolve(__dirname, '../cards_version1.csv');
          
            const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
          
            parse(fileContent, {
              delimiter: ',',
              relax_column_count: true
            }, async (error, result) => {
              if (error) {
                console.error(error);
              }

            result.forEach(async (element) => {
              if(element.length == 5) {
                const card_type = cardTypes.filter(card => card.name == element[1]);

                await prisma.card.create({
                    data: {
                      name: element[2],
                      fmr_number: parseInt(element[3]),
                      card_type_id: card_type[0].id,
                      password: element[4],
                      image: `https://images.ygoprodeck.com/images/cards/${element[4]}.jpg`
                    }
                })
              }

              if(element.length == 6) {
                const card_type = cardTypes.filter(card => card.name == element[1]);

                await prisma.card.create({
                    data: {
                      name: element[2],
                      fmr_number: parseInt(element[3], 10),
                      card_type_id: card_type[0].id,
                      password: element[4],
                      star_chip_cost: parseInt(element[5], 10),
                      image: `https://images.ygoprodeck.com/images/cards/${element[4]}.jpg`
                    }
                })
              }

              if(element.length == 11) {
                const card_type = cardTypes.filter(card => card.name == element[2]);
                const type = types.filter(type => type.name == element[10]);
                const mainGuardianStar = guardianStars.filter(guardianStar => guardianStar.name == (element[6]).charAt(0).toUpperCase() + (element[6]).slice(1));
                const secondaryGuardianStar = guardianStars.filter(guardianStar => guardianStar.name == (element[7]).charAt(0).toUpperCase() + (element[7]).slice(1));

                await prisma.card.create({
                    data: {
                      atk: parseInt((element[0]).replace('.', '')),
                      def: parseInt((element[3]).replace('.', '')),
                      name: element[4],
                      main_guardian_type_id: mainGuardianStar[0].id,
                      secondary_guardian_type_id: secondaryGuardianStar[0].id,
                      level: parseInt(element[8]),
                      fmr_number: parseInt(element[5], 10),
                      card_type_id: card_type[0].id,
                      type_id: type[0].id,
                      password: element[9],
                      image: `https://images.ygoprodeck.com/images/cards/${element[9]}.jpg`
                    }
                })
              }

              if(element.length == 12) {
                const card_type = cardTypes.filter(card => card.name == element[2]);
                const type = types.filter(type => type.name == element[11]);
                const mainGuardianStar = guardianStars.filter(guardianStar => guardianStar.name == (element[6]).charAt(0).toUpperCase() + (element[6]).slice(1));
                const secondaryGuardianStar = guardianStars.filter(guardianStar => guardianStar.name == (element[7]).charAt(0).toUpperCase() + (element[7]).slice(1));

                await prisma.card.create({
                    data: {
                      atk: parseInt((element[0]).replace('.', '')),
                      def: parseInt((element[3]).replace('.', '')),
                      name: element[4],
                      main_guardian_type_id: mainGuardianStar[0].id,
                      secondary_guardian_type_id: secondaryGuardianStar[0].id,
                      level: parseInt(element[8]),
                      fmr_number: parseInt(element[5], 10),
                      card_type_id: card_type[0].id,
                      type_id: type[0].id,
                      password: element[9],
                      star_chip_cost: parseInt(element[10], 10),
                      image: `https://images.ygoprodeck.com/images/cards/${element[9]}.jpg`
                    }
                })
              }
          
            })
          });
        })();

        return 1;
    })

    app.get('/cards', async (request) => {
      const cards = await prisma.card.findMany({
        orderBy: {
          'fmr_number': 'asc'
        },
      })

      return cards
    })
}
