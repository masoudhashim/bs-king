import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const alice = await prisma.owner.create({
    //  where: { email: 'alice@prisma.io' },
    // update: {},
    data: {
      firstName: 'Ali',
      midtName: 'khalid',
      lastName: 'alharbi',
      idNumber : 1010101010,
      email: "alikh@gmail.com",
      Buidlng: {
        create:[{
          buildingName: 'alibuildng',
          buildingnumber:'12345'
      }] ,
      },
    },
  })
  
  console.log({ alice})
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